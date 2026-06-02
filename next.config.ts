import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chamith.online",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
