# Installation & Setup Guide

## Prerequisites

- **Node.js** v16 or higher
- **npm** v7 or higher (comes with Node.js)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/aec-portfolio.git
cd aec-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/AEC-portfolio/`

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server with hot module replacement (HMR).

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

### Lint Code

```bash
npm run lint
```

Checks for code style and potential errors.

## Project Structure

```
aec-portfolio/
├── src/
│   ├── components/          # React components
│   ├── contexts/            # Context API (Theme, Language)
│   ├── hooks/               # Custom React hooks
│   ├── constants/           # Constant values and configuration
│   ├── config/              # Application configuration
│   ├── translations/        # i18n translation files
│   ├── App.tsx              # Root component
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── public/                  # Static files
├── dist/                    # Production build (generated)
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Technology Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **react-i18next** - Internationalization
- **React Icons** - Icon Library
- **ESLint** - Code Quality

## Key Features

- ⚡ **Lightning Fast** - Vite for rapid development
- 🎨 **Beautiful UI** - Tailwind CSS with custom animations
- 🌙 **Dark Mode** - Full dark/light theme support
- 🌍 **Multi-Language** - English & Arabic support
- 📱 **Responsive** - Mobile-optimized design
- ✨ **Smooth Animations** - Framer Motion animations
- 🔒 **Type Safe** - Full TypeScript support
- 🚀 **Optimized** - Code splitting and lazy loading

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found

Make sure all dependencies are installed:

```bash
npm install
```

Clear node_modules and reinstall if needed:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails

Ensure:

1. TypeScript compiles: `npx tsc --noEmit`
2. All dependencies are installed: `npm install`
3. Environment variables are set in `.env.local`

## Performance

The application has been optimized with:

- Lazy loading for components below the fold
- Code splitting for vendor libraries
- Tree shaking for unused code
- CSS code splitting
- Scroll throttling
- Form input debouncing
- Responsive animations

Expected metrics:

- Lighthouse: 88-92+
- LCP: < 1s
- FID: < 50ms

## Deployment

The project can be deployed to various platforms:

- **Vercel** - Zero-config deployment for Vite apps
- **Netlify** - Connect your GitHub and deploy automatically
- **GitHub Pages** - Static hosting
- **Traditional Hosting** - Deploy the `dist/` directory

## Support

For issues and questions:

- Open an issue on GitHub
- Check existing documentation
- Review the contribution guidelines

## License

This project is licensed under the MIT License - see the LICENSE file for details.
