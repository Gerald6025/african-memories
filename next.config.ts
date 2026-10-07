import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "output": "standalone",
  "images": {
    "dangerouslyAllowLocalIP": process.env.NODE_ENV === 'development',
    "remotePatterns": [
      {
        "protocol": "http",
        "hostname": "localhost",
        "port": "3001",
        "pathname": "/media/experiences/**"
      },
      {
        "protocol": "https",
        "hostname": "african-memories-api-latest.onrender.com",
        "pathname": "/media/experiences/**"
      },
      {
        "protocol": "https",
        "hostname": "ik.imagekit.io",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "dynamic-media-cdn.tripadvisor.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.ilalalodge.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.palmriverhotel.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "source.unsplash.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "images.pexels.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "fzs.org",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "cdn.britannica.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "smarthistory.org",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.robinpopesafaris.net",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "encrypted-tbn0.gstatic.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "zimbabwetourism.net",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "images.myguide-cdn.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.tripsavvy.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "fothergill.travel",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "victoria-falls-safari-collection.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "cdn-ileieij.nitrocdn.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "matetsivictoriafalls.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.wonderfulzimbabwe.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.africaendeavours.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "cf.bstatic.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "cdn.audleytravel.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.visitkariba.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "wildhorizons.co.za",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.roxannereid.co.za",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.shearwatervictoriafalls.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.expertafrica.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.andbeyond.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "machabasafaris.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "static.wixstatic.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.go2africa.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.chundu.co.za",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "batonkaguestlodge.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.mbanomanorhotel.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "africansun.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "www.dzimbahweguestlodge.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "lh3.googleusercontent.com",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "victoria-falls-hotels.net",
        "pathname": "/**"
      },
      {
        "protocol": "https",
        "hostname": "media-cdn.tripadvisor.com",
        "pathname": "/**"
      }
    ]
  }
};

export default nextConfig;
