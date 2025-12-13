# Zend Landing Page

Landing page for Zend - The gamified recovery app that helps you quit gaming addiction.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files (for GitHub Pages)
npm run build
```

The site will be available at `http://localhost:3000`

## Deployment

This site is configured to deploy automatically to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory

3. Push to your GitHub repository

4. GitHub Actions will automatically deploy to GitHub Pages

## Project Structure

```
website/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── privacy/      # Privacy policy page
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer
│   │   └── sections/     # Landing page sections
│   └── styles/           # Global styles
├── public/               # Static assets
└── out/                  # Build output (generated)
```

## Configuration

### GitHub Pages Setup

1. Go to your repository Settings > Pages
2. Source: GitHub Actions
3. The workflow will automatically deploy on push to main

### Custom Domain

To use a custom domain (zend.now):

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the domain in repository Settings > Pages

## Features

- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Smooth animations
- ✅ App Store integration
- ✅ Privacy & Terms pages
- ✅ FAQ section
- ✅ Testimonials
- ✅ Community showcase

## License

Copyright © 2024 Zend. All rights reserved.

