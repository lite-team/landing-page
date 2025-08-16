# Lite Team Landing Page - Deployment Guide

This document provides instructions for deploying the Lite Team landing page to Vercel.

## Prerequisites

- A [GitHub](https://github.com/) account
- A [Vercel](https://vercel.com/) account (you can sign up with your GitHub account)
- Your project code pushed to a GitHub repository

## Steps to Deploy to Vercel

### 1. Push Your Code to GitHub

If you haven't already, initialize a Git repository and push your code to GitHub:

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/lite-landing-page.git

# Push code
git push -u origin main
```

### 2. Deploy to Vercel

#### Option 1: Deploy via Vercel UI

1. Log in to [Vercel](https://vercel.com/)
2. Click "Add New..." and select "Project"
3. Import your repository from GitHub
4. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: next build (default)
   - Output Directory: .next (default)
5. Click "Deploy"

#### Option 2: Deploy using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

### 3. Configure Google Analytics

1. Create a Google Analytics 4 property in [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (starts with "G-")
3. Update the `GA_MEASUREMENT_ID` in `/src/app/layout.tsx` with your actual ID:

   ```typescript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual ID
   ```

4. Redeploy your application

### 4. Configure Custom Domain (Optional)

1. In your Vercel dashboard, navigate to your project
2. Go to "Settings" > "Domains"
3. Add your custom domain and follow the provided instructions for DNS configuration

## Environment Variables

If you need to add environment variables (like API keys):

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" > "Environment Variables"
3. Add your variables as needed

## Automatic Deployments

Vercel automatically deploys changes when you push to your GitHub repository. By default:

- Pushes to main branch are deployed to production
- Pull requests create preview deployments

## Troubleshooting

If you encounter issues with your deployment:

1. Check the build logs in Vercel for error messages
2. Ensure all dependencies are correctly installed
3. Verify environment variables are correctly set
4. Make sure your Google Analytics ID is correctly configured

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Build for Production

To build the project for production:

```bash
npm run build
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Google Analytics for Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)