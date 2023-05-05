/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/posts",
      permanent: true,
    },
  ],
}

module.exports = nextConfig
