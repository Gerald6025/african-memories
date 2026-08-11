import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ilalalodge.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.palmriverhotel.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fzs.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'smarthistory.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.robinpopesafaris.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zimbabwetourism.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.myguidezimbabwe.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.myguide-cdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tripsavvy.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
