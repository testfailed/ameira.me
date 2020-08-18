const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
], {
  assetPrefix: isProd ? '' : '',
  env: {
    BACKEND_URL: isProd ? '' : '',
    GTAG: process.env.GTAG,
  },
});
