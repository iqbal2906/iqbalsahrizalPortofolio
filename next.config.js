/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  publicRuntimeConfig: {
    reactAppSanityProjectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    reactAppSanityToken: process.env.REACT_APP_SANITY_TOKEN,
  },
};

module.exports = nextConfig;
