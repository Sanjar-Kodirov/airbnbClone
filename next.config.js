/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["utfs.io"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
