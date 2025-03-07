import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['pavise.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pavise.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
