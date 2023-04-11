/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.letterforyou.link/:path*", // 실제 API 서버 주소
      },
    ];
  },
};

module.exports = nextConfig;
