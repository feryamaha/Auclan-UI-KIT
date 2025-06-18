// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {},
  },
  images: {
    domains: ['www.dentaluni.com.br'],
  },
  // Configuração de rewrites para mapear as rotas da pasta page/
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
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // Define o alias @ para src/
    };
    return config;
  },
};

module.exports = nextConfig;
