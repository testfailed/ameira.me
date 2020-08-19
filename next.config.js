const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
], {
  env: {
    GTAG: process.env.GTAG,
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/james-wallis/ameira.me',
        permanent: false,
      },
    ];
  },
});
