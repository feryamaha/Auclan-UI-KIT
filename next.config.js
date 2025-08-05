const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.dentaluni.com.br'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/page',
      },
      {
        source: '/comparative',
        destination: '/page/comparative',
      },
      {
        source: '/help',
        destination: '/page/help',
      },
      {
        source: '/plans',
        destination: '/page/plans',
      },
      {
        source: '/contractPlans',
        destination: '/page/contractPlans',
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

module.exports = nextConfig;
