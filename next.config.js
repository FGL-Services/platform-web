/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // TODO: drop basePath if a custom domain is configured.
  basePath: "/platform-web",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
