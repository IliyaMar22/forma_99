# Deployment Guide for Vercel

## Quick Deploy

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository or upload the project folder
4. Vercel will auto-configure everything

## Environment Variables

No environment variables are required for this project.

## Build Settings

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

## Post-Deployment

After deployment, your site will be available at:
- Production: `https://your-project.vercel.app`
- Preview: `https://your-project-git-branch.vercel.app`

## Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance

The site is optimized for:
- ✅ Mobile devices (responsive design)
- ✅ Tablet devices
- ✅ Desktop screens
- ✅ Fast loading times
- ✅ Smooth animations

## Troubleshooting

If you encounter build errors:
1. Check Node.js version (should be 18.x or higher)
2. Ensure all dependencies are installed
3. Check build logs in Vercel dashboard
