/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Gym' : '',  
  assetPrefix: isProd ? '/Gym/' : '',
}

module.exports = nextConfig
