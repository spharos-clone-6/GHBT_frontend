/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["storage.googleapis.com"],
  },
  KAKAO_API_KEY: process.env.KAKAO_API_KEY,
};

module.exports = nextConfig;
