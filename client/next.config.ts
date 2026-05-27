import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, ".."),
  trailingSlash: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/portfolio",
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http", // Change to 'https' for production
        hostname: "localhost", // Your Strapi domain (e.g., 'your-strapi-app.com')
        port: "1337", // Typically 1337 for local Strapi
        pathname: "/uploads/**", // Path where Strapi stores media
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|pdf)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
