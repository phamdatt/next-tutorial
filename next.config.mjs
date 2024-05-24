/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog/1",
        destination: "https://fado.vn/blog/nen-thom-la-gi.n67750/",
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    webVitalsAttribution: ["CLS", "LCP"],
  },
};

export default nextConfig;
