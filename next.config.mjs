/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;