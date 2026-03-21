/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Disable the X-Powered-By header to prevent framework fingerprinting
  poweredByHeader: false,

  // 2. Disable font optimization to avoid build-time fetch timeouts in restricted environments
  optimizeFonts: false,

  // 3. Enforce Strict Security Headers globally
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Strict CSP: Includes vercel.live for deployment previews/analytics
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https:;",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          }
        ],
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
