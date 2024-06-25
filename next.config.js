module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          module: false,
        };
      }
      return config;
    },
  };