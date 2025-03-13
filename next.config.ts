import type { NextConfig } from "next";
const path = require("path");

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Se estiver usando Next.js 13+ com app router
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve(__dirname, "src"));
    return config;
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
