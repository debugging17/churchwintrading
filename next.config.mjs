/** @type {import('next').NextConfig} */
const nextConfig = {
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
