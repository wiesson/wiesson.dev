/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
};
