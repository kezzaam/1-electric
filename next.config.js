/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/1-electric',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },

}

module.exports = nextConfig

