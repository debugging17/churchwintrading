import { NextRequest, NextResponse } from "next/server";

/**
 * Edge-compatible sliding-window rate limiter with Dev-Safe CSP.
 */

const WINDOW_MS = 60_000; 
const MAX_REQUESTS = 60; 

interface WindowEntry {
  count: number;
  windowStart: number;
}

declare global {
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
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  // DEV-SAFE CSP: Added 'unsafe-eval' for Next.js HMR/Fast Refresh
  // Added localhost:* to script-src and connect-src for multi-port dev environments
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' localhost:*",
    "object-src 'none'",
    "worker-src 'self' blob:",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob:",
    "media-src 'self'",
    "connect-src 'self' ws://localhost:* http://localhost:*",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Embedder-Policy", "credentialless");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");
  response.headers.set("X-DNS-Prefetch-Control", "off");
  response.headers.set("X-Download-Options", "noopen");
  response.headers.delete("X-Powered-By");
  
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
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};
