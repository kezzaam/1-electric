/** @type {import('next').NextConfig} */
// production variable

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },

}

module.exports = nextConfig

