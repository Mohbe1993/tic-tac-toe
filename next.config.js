/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export
  basePath: "/tic-tac-toe", // Match your repo name
  images: {
    unoptimized: true, // Disable Image Optimization API
  },
};

module.exports = nextConfig;
