/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/js/script.js",
        destination: "https://plausible.io/js/plausible.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
};
