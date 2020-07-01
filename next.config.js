const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/ameira.me/' : '',
  env: {
    BACKEND_URL: isProd ? '/ameira.me' : '',
  },
}
