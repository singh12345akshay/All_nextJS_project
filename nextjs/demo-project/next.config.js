/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
    {
      source: "/",
      destination: "/homePage",
      permanent: true,
    },
  ],
}

module.exports = nextConfig
