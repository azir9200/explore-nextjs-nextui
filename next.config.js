// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["www.allrecipes.com"],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactProductionBrowserSourceMaps: true,
  reactStrictMode: false,
  env: {
    SHOW_ERRORS: true, // Custom environment variable
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
