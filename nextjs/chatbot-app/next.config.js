/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/signin/signin",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
