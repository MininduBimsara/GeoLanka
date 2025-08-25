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

  // Enable experimental optimizations
  experimental: {
    // Optimize CSS loading
    optimizeCss: true,
    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@headlessui/react",
    ],
    // Enable server components optimization
    serverComponentsExternalPackages: [],
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

      // Remove console logs in production
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("production"),
        })
      );
    }

    // Optimize imports
    config.resolve.alias = {
      ...config.resolve.alias,
      // Use ES modules for better tree shaking
      "framer-motion": "framer-motion/dist/es",
    };

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
        // Cache fonts for 1 year
        source: "/fonts/(.*)",
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

  // Redirect optimization
  async redirects() {
    return [
      // Add any redirects here
    ];
  },

  // Enable static optimization for pages that don't need server-side rendering
  experimental: {
    ...nextConfig.experimental,
    // Enable static export for applicable pages
    output: undefined, // Set to 'export' for full static export if needed
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
