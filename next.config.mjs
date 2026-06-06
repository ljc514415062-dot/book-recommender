/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        "**/node_modules/**",
        "**/.next/**",
        "**/.npm-cache/**"
      ]
    };

    return config;
  }
};

export default nextConfig;
