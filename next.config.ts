/** @type {import('next').NextConfig} */
const repo = 'tobias-portfolio'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'julemanddk.github.io',
      },
    ],
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
}

module.exports = nextConfig