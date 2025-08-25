/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression for better performance
  compress: true,

  // Image optimization configuration
  images: {
    // Allow images from Unsplash and other domains
    domains: ["images.unsplash.com", "unsplash.com"],
    // Use modern image formats
    formats: ["image/webp", "image/avif"],
    // Cache images for 1 year
    minimumCacheTTL: 60 * 60 * 24 * 365,
    // Enable placeholder blur for better UX
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Remove problematic experimental features that cause critters error
  experimental: {
    // Remove optimizeCss as it requires critters
    // optimizeCss: true, // Commented out - causes critters error

    // Keep only safe optimizations
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Webpack optimization
  webpack: (config, { dev, isServer, webpack }) => {
    // Production optimizations
    if (!dev) {
      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      // Better chunk splitting for caching
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -10,
            chunks: "all",
          },
          // Separate chunk for Framer Motion (large library)
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "all",
            priority: 5,
          },
          // Separate chunk for Lucide React icons
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: "lucide-icons",
            chunks: "all",
            priority: 5,
          },
        },
      };

      // Minimize bundle size
      config.optimization.minimize = true;
    }

    return config;
  },

  // Enable SWC minification for better performance
  swcMinify: true,

  // Generate static files for better caching
  generateEtags: false,
  poweredByHeader: false,

  // HTTP headers for better caching and security
  async headers() {
    return [
      {
        // Cache static assets for 1 year
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache images for 1 year
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Security headers
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Bundle analyzer (only in development with ANALYZE=true)
  ...(process.env.ANALYZE === "true" && {
    webpack: (config, options) => {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: options.isServer
            ? "../analyze/server.html"
            : "./analyze/client.html",
          openAnalyzer: false,
        })
      );
      return config;
    },
  }),
};

module.exports = nextConfig;
