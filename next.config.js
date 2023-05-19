/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  images: { domains: ['www.seiu1000.org'] },
};

module.exports = nextConfig;
