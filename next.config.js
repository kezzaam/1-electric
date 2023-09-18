/** @type {import('next').NextConfig} */
// production variable
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Add basePath with condition based on production or development
  // this is so that development running npm run dev still works
  basePath: isProd ? '/1-electric' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },

}

module.exports = nextConfig

