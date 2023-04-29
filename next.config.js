/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "archives.bulbagarden.net",
        port: "",
        pathname: "/media/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
