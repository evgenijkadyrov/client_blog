/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {};

module.exports = {
  ...nextConfig,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/styles": path.resolve(__dirname, "styles"),
    };
    return config;
  },
};
