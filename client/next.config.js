

const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
    console.log("Rewrites called");
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3005/:path*'
      }
    ]
  }
}

module.exports = nextConfig;