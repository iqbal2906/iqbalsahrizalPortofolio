/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  publicRuntimeConfig: {
    reactAppSanityProjectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    reactAppSanityToken: process.env.REACT_APP_SANITY_TOKEN,
  },
};

module.exports = nextConfig;
