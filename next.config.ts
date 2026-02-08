import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'samehadaku.li',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'i1.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'i2.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'i3.wp.com',
      },
    ],
    unoptimized: true, // Since we are doing a lot of dynamic scraping and bypass, we might start with this or configure carefully. 
    // Actually, to make it "cepat banget", we should use optimized images if possible.
    // But Samehadaku images often have hotlink protection. 
    // Let's try optimized first, if it fails we can switch.
  },
};

export default nextConfig;
