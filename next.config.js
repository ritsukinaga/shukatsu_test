// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/shukatsu_test', // GitHub Pagesのパスに合わせる
};

module.exports = nextConfig;
