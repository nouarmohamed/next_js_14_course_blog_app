/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https', // This allows HTTPS URLs
            hostname: '**',    // This allows any hostname
          },
        ],
    },
};

export default nextConfig;
