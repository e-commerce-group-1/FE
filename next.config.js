module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['picsum.photos'],
  },

  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/user/login'
      },
      {
        source: '/register',
        destination: '/user/register'
      },
    ]
  }
}
