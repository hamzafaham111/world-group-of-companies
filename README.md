# World Group of Companies Website

A modern, responsive website built with Next.js and Tailwind CSS for World Group of Companies, showcasing their diverse portfolio across healthcare, pharmaceuticals, and mining sectors.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Company Showcase**: Detailed information about all 5 subsidiary companies
- **Leadership Section**: Managing Director's message and Board of Directors profiles
- **Modern UI**: Beautiful gradients, animations, and professional styling
- **SEO Optimized**: Built with Next.js for optimal performance

## Companies Featured

1. **World Pharma** - Leading pharmaceutical solutions and innovative drug development
2. **Unique Pharmaceuticals** - Specialized pharmaceutical manufacturing for rare diseases
3. **Community Header** - Comprehensive healthcare services for community wellness
4. **World Stone Mining Company** - Sustainable mining operations with environmental responsibility
5. **Worldwide Business Network** - Global business consulting and strategic partnerships

## Leadership

- **Managing Director**: Mian Abdul Wajid
- **Board of Directors**: 12 distinguished members from various sectors including military leadership, healthcare, business, and engineering

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd world-group-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Hero.tsx             # Hero section with navigation
│   ├── Companies.tsx        # Company showcase section
│   ├── ManagingDirector.tsx # MD message section
│   ├── BoardOfDirectors.tsx # Board members section
│   └── Footer.tsx           # Footer component
```

## Customization

### Adding Company Logos

Replace the placeholder logo divs in `Companies.tsx` with actual company logos:

```tsx
// Replace this:
<div className={`h-48 bg-gradient-to-br ${company.color} rounded-t-xl flex items-center justify-center`}>
  <div className="text-white text-6xl font-bold">
    {company.name.split(' ').map(word => word[0]).join('')}
  </div>
</div>

// With this:
<Image
  src="/logos/company-logo.png"
  alt={`${company.name} Logo`}
  width={192}
  height={192}
  className="w-full h-48 object-cover rounded-t-xl"
/>
```

### Adding Director Photos

Replace placeholder images in `BoardOfDirectors.tsx` with actual photos:

```tsx
// Replace the placeholder div with:
<Image
  src="/directors/director-name.jpg"
  alt={director.name}
  width={192}
  height={192}
  className="w-full h-48 object-cover rounded-t-xl"
/>
```

### Updating Content

- Company descriptions: Edit the `companies` array in `Companies.tsx`
- Managing Director message: Modify the content in `ManagingDirector.tsx`
- Board members: Update the `directors` array in `BoardOfDirectors.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to World Group of Companies.

## Contact

For questions or support, please contact:
- Email: info@worldgroup.com
- Phone: +92 XXX XXX XXXX

---

Built with ❤️ using Next.js and Tailwind CSS
