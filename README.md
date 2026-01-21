# FORMA S Website

A modern, upscale website for FORMA S Ltd., featuring block text reveal animations inspired by the Lando Norris website.

## Features

- **Block Text Reveal Animations**: Smooth, cinematic text animations using GSAP, ScrollTrigger, and SplitText
- **Smooth Scrolling**: Enhanced scrolling experience with Lenis
- **Fully Responsive Design**: Optimized for phones, tablets, and all screen sizes
- **Modern UI**: Clean, minimalist design with bold typography
- **Production Ready**: Configured for easy deployment on Vercel

## Tech Stack

- Next.js 16
- React 19
- GSAP 3.13
- Lenis (smooth scrolling)
- CSS with responsive breakpoints

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Responsive Design

The website is fully responsive and optimized for:
- 📱 **Mobile phones** (320px - 480px)
- 📱 **Large phones** (481px - 768px)
- 📱 **Tablets** (769px - 1024px)
- 💻 **Desktop** (1025px+)

All text sizes, spacing, and layouts scale smoothly using CSS `clamp()` functions and responsive breakpoints.

## Project Structure

```
forma-s-website/
├── src/
│   ├── app/
│   │   ├── page.js          # Main page
│   │   ├── layout.js         # Root layout with metadata
│   │   └── globals.css       # Global styles with responsive design
│   └── components/
│       └── Copy.jsx          # Block reveal animation component
├── package.json
├── vercel.json               # Vercel deployment config
└── README.md
```

## Animation Details

The block reveal animation splits text into lines and reveals them with a sliding block effect. Each line is wrapped in a container with a colored block that scales from left to right, revealing the text underneath.

Animations are optimized for mobile devices and work smoothly on touch screens.

## Customization

You can customize the animations by modifying the `Copy` component props:
- `blockColor`: Color of the reveal block (default: "#000")
- `stagger`: Delay between each line animation (default: 0.15)
- `duration`: Duration of each animation (default: 0.75)
- `delay`: Initial delay before animation starts (default: 0)

## Deployment

### Deploy to Vercel

1. **Via Vercel CLI**:
```bash
npm i -g vercel
vercel
```

2. **Via GitHub**:
   - Push your code to GitHub
   - Import the repository in Vercel
   - Vercel will auto-detect Next.js and deploy

3. **Via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository or upload the project

See `DEPLOYMENT.md` for detailed deployment instructions.

## Performance

- ✅ Optimized for mobile devices
- ✅ Fast loading times
- ✅ Smooth 60fps animations
- ✅ SEO-friendly metadata
- ✅ Accessible design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

ISC
