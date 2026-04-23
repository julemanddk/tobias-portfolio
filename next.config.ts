/** @type {import('next').NextConfig} */
const repo = 'tobias-portfolio'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
}

module.exports = nextConfig