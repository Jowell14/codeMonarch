module.exports = {
    images: {
        deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    // Added webpack config block to solve vercel deployment issues. not working yet
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

        // Important: return the modified config
        return config
    }
};