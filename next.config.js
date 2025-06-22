/** @type {import('next').NextConfig} */
const nextConfig = {
  // boshqa sozlamalar bo‘lsa, ularni qoldiring
  experimental: {
    allowedDevOrigins: ['http://66.42.97.211:3000']
  }
}

module.exports = nextConfig
