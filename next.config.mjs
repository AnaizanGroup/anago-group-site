/** @type {import('next').NextConfig} */
const nextConfig = {
  // Commenté pour autoriser 'next start' avec PM2 / CloudPanel sur le port 3028
  // output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
