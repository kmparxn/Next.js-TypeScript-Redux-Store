/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "upload.wikimedia.org", "logos-download.com"]
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: true
}

module.exports = nextConfig
