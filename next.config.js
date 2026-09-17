/** @type {import('next').NextConfig} */
const nextConfig = {
  // Memastikan Next.js tidak gagal build jika ada error kompilasi statis
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;