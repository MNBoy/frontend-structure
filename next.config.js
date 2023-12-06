/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_NAME: 'WebSite Name',
    NEXT_PUBLIC_API_END_POINT: 'https://domain.api.com/api/v1',
  },
};

module.exports = nextConfig;
