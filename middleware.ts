import { NextRequest, NextResponse } from "next/server";

/**
 * Edge-compatible sliding-window rate limiter.
 *
 * Storage: In-memory Map stored in the Edge runtime's global scope.
 * Each IP gets a sliding window of WINDOW_MS milliseconds with MAX_REQUESTS allowed.
 *
 * MITM protection: Security headers are injected on every response here as a
 * defence-in-depth complement to vercel.json headers.
 */

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 60; // requests per window per IP

interface WindowEntry {
  count: number;
  windowStart: number;
}

// globalThis persists across requests on the same Edge worker instance.
declare global {
  // eslint-disable-next-line no-var
  var __rateLimitMap: Map<string, WindowEntry> | undefined;
}

const ipMap: Map<string, WindowEntry> =
  globalThis.__rateLimitMap ??
  (() => {
    const m = new Map<string, WindowEntry>();
    globalThis.__rateLimitMap = m;
    return m;
  })();

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): { limited: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now - entry.windowStart >= WINDOW_MS) {
    // New or expired window
    ipMap.set(ip, { count: 1, windowStart: now });
    return { limited: false, remaining: MAX_REQUESTS - 1, reset: now + WINDOW_MS };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { limited: true, remaining: 0, reset: entry.windowStart + WINDOW_MS };
  }

  entry.count += 1;
  return { limited: false, remaining: MAX_REQUESTS - entry.count, reset: entry.windowStart + WINDOW_MS };
}

function addSecurityHeaders(response: NextResponse): NextResponse {
  // MITM Prevention — HSTS forces HTTPS for 1 year, including subdomains
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );

  // Content Security Policy — prevents XSS and injection of untrusted scripts
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-inline needed by Next.js RSC hydration
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "media-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ")
  );

  // Prevent clickjacking
  response.headers.set("X-Frame-Options", "DENY");

  // Block MIME-type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Limit referrer info sent cross-origin
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Restrict browser features / APIs
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
  );

  // Cross-Origin Opener Policy — prevents cross-origin window attacks
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  // Cross-Origin Embedder Policy — required to use SharedArrayBuffer safely
  response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");

  // Cross-Origin Resource Policy — prevents other origins from loading our resources
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");

  // Prevent Flash/PDF cross-domain policy files
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");

  // Remove server fingerprinting
  response.headers.delete("X-Powered-By");
  response.headers.delete("Server");

  return response;
}

export function middleware(req: NextRequest) {
  const ip = getClientIp(req);
  const { limited, remaining, reset } = isRateLimited(ip);

  if (limited) {
    const retryAfterSec = Math.ceil((reset - Date.now()) / 1000);
    const res = new NextResponse(
      JSON.stringify({ error: "Too Many Requests", retryAfter: retryAfterSec }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(retryAfterSec),
          "X-RateLimit-Limit": String(MAX_REQUESTS),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(reset / 1000)),
        },
      }
    );
    return addSecurityHeaders(res);
  }

  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Limit", String(MAX_REQUESTS));
  response.headers.set("X-RateLimit-Remaining", String(remaining));
  response.headers.set("X-RateLimit-Reset", String(Math.ceil(reset / 1000)));
  return addSecurityHeaders(response);
}

export const config = {
  // Apply to all routes except Next.js internals and static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
