/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Disable the X-Powered-By header to prevent framework fingerprinting
  poweredByHeader: false,


  // 3. Enforce Strict Security Headers globally
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
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
