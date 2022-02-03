module.exports = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/about",
        destination: "/index.html",
      }
    ]
  }
}
