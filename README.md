# GeoLanka - Precision Mapping for Sri Lanka

A modern, sophisticated geo-mapping platform built with Next.js, designed specifically for Sri Lankan geography and mapping needs. Features advanced satellite integration, AI-powered analysis, and real-time data visualization.

## 🌟 Features

- **Real-Time Tracking** - Advanced GPS technology with sub-meter accuracy
- **Smart Route Planning** - AI-powered route optimization with traffic analysis
- **Satellite Integration** - High-resolution imagery with real-time data
- **Precision Navigation** - Turn-by-turn guidance optimized for Sri Lankan roads
- **Community Mapping** - Collaborative platform for local data verification
- **Analytics Dashboard** - Comprehensive reporting tools for businesses

## 🚀 Getting Started

### Prerequisites

- Node.js (>=18.0.0)
- npm (>=8.0.0) or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/geolanka.git
   cd geolanka
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=your_api_endpoint
```

## 📁 Project Structure

```
geolanka/
├── app/                        # Next.js App Router
│   ├── about/                  # About page
│   ├── contact/                # Contact page with form
│   ├── features/               # Features showcase
│   ├── use-cases/              # Use cases examples
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/                 # Reusable components
│   ├── About/                  # About page components
│   ├── Contact/                # Contact form components
│   ├── Features/               # Feature showcase components
│   ├── HomePage/               # Homepage components
│   ├── ui/                     # UI components (buttons, etc.)
│   ├── Footer.tsx              # Site footer
│   ├── Navbar.tsx              # Navigation component
│   └── ThemeProvider.tsx       # Theme context provider
├── hooks/                      # Custom React hooks
├── lib/                        # Utility libraries
├── public/                     # Static assets
└── types/                      # TypeScript type definitions
```

## 🎨 Design System

GeoLanka follows a sophisticated design system with:

### Color Palette
- **Primary**: Emerald green family (#10B981, #059669, #047857)
- **Secondary**: Stone/beige family (#F5F5F4, #E7E5E4, #D6D3D1)
- **Accent**: Blue (#3B82F6) for interactive elements

### Typography
- **Font**: Inter for all text elements
- **Hierarchy**: 7 levels from hero titles to micro text

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run dev:debug        # Development with debug mode

# Building
npm run build            # Production build
npm run build:analyze    # Build with bundle analyzer
npm run start            # Start production server

# Analysis & Testing
npm run lighthouse       # Run Lighthouse performance audit
npm run clean           # Clean build artifacts

# Linting (if configured)
npm run lint            # Run ESLint
```

## 📦 Tech Stack

- **Next.js 15.5.0** - React framework
- **React 18.3.1** - UI library
- **TypeScript 5.x** - Type safety
- **Tailwind CSS 4.x** - Styling
- **Framer Motion 12.x** - Animations
- **Lucide React** - Icons

## 🎨 Theme Support

Supports both light and dark themes with:
- System preference detection
- Manual theme switching
- Persistent theme storage
- Smooth theme transitions

## 🔧 Configuration Files

- **`next.config.ts`** - Next.js configuration with optimizations
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration
- **`postcss.config.mjs`** - PostCSS configuration

## 📊 Bundle Analysis

Analyze your bundle size:

```bash
npm run build:analyze
```

This generates detailed reports in the `analyze/` directory showing:
- Bundle composition
- Chunk sizes
- Module dependencies
- Optimization opportunities

## 🚢 Deployment

Deploy to Vercel:
```bash
npm run build
# Upload to your hosting service
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: info@geolanka.com
- **Phone**: +94 11 234 5678
- **Location**: Colombo, Sri Lanka
