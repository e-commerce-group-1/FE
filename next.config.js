module.exports = {
  reactStrictMode: true,

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
