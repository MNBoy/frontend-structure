/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Candid Mock',
    NEXT_PUBLIC_API_END_POINT: 'https://candidmock.cyclic.app/v1',
  },
};

module.exports = nextConfig;
