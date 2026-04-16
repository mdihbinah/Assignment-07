/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  images: {
    unoptimized: true, // important for Netlify in many cases
  },
};
};

export default nextConfig;
