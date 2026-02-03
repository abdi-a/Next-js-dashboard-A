/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent webpack from bundling the native sqlite driver
  serverExternalPackages: ['better-sqlite3'],
};

export default nextConfig;
