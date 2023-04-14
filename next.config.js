/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "graphql-pokemon2.vercel.app",
  //       port: "",
  //       pathname: "/account123/**",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
