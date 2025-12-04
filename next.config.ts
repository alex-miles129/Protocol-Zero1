import type {NextConfig} from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.fivemerr.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  devIndicators: false,
  
  // Ensure proper routing for Vercel
  trailingSlash: false,
  
  // Ensure server-side rendering is enabled
  output: undefined, // Let Vercel handle the output automatically
};

export default nextConfig;
