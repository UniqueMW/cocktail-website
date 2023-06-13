/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'www.thecocktaildb.com',
    //     port: ''
    //   }
    // ]
    domains: ['www.thecocktaildb.com', 'lh3.googleusercontent.com']
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

module.exports = nextConfig
