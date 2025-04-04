/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          sourceType: 'unambiguous'
        }
      }]
    });
    return config;
  }
};

module.exports = nextConfig;