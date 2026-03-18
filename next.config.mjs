/** @type {import('next').NextConfig} */

const securityHeaders = [
  // MITM Prevention — enforce HTTPS for 1 year
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  // Clickjacking prevention
  { key: "X-Frame-Options", value: "DENY" },
  // MIME confusion attacks
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer leakage control
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Feature/API access restrictions
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  // Cross-origin window isolation
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // SharedArrayBuffer + isolate browsing context
  { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
  // Prevent cross-origin resource embedding
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  // Block Flash/PDF cross-domain policy files
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  // Content Security Policy — defence against XSS and supply-chain script injection
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
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
    ].join("; "),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/deck",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
