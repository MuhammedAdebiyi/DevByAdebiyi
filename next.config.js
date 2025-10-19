/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['127.0.0.1', 'localhost'], // allow Django backend images
  },
};

module.exports = nextConfig;
