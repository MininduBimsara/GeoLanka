/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression for better performance
  compress: true,

  // Image optimization configuration
  images: {
    domains: ["images.unsplash.com", "unsplash.com"],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Remove problematic experimental features
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Disable ESLint during builds (you wanted to remove ESLint)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

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
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "all",
            priority: 5,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: "lucide-icons",
            chunks: "all",
            priority: 5,
          },
        },
      };

      config.optimization.minimize = true;
    }

    // Bundle analyzer (only if ANALYZE=true)
    if (process.env.ANALYZE === "true") {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: isServer
            ? "../analyze/server.html"
            : "./analyze/client.html",
          openAnalyzer: false,
        })
      );
    }

    return config;
  },

  // Disable SWC minify flag (Next.js 15 uses it by default)
  // swcMinify: true, // no longer needed

  // Generate static files for better caching
  generateEtags: false,
  poweredByHeader: false,

  // HTTP headers
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
