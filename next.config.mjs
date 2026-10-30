/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/projects", destination: "/gallery", permanent: true }];
  },
};

export default nextConfig;
