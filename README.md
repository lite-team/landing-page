# Lite Team Landing Page

A modern, responsive landing page for showcasing Lite Team's iOS applications and team members, built with Next.js and TypeScript.

## Features

- Responsive design with Tailwind CSS
- Interactive app showcase
- Team member profiles
- Google Analytics integration
- Ready for Vercel deployment

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Analytics](https://analytics.google.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/lite-landing-page.git
   cd lite-landing-page
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure Google Analytics
   - Update `GA_MEASUREMENT_ID` in `src/app/layout.tsx` with your Google Analytics ID

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Content

- Update app information in `src/components/AppShowcase.tsx`
- Update team member information in `src/components/TeamSection.tsx`
- Modify hero section content in `src/components/HeroSection.tsx`

### Styling

- Global styles are in `src/app/globals.css`
- Tailwind theme configuration is in `tailwind.config.js`

### Assets

- Place app icons in `/public/icons/`
- Place team member photos in `/public/team/`

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to Vercel.

## License

MIT