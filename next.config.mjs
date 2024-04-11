/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/post/1",
        permanent: false,
      },
    ];
  },
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
