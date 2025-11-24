# Owali Ullah Shawon - Modern Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952b3?logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive portfolio website built with React, featuring glass morphism design, smooth animations, and optimized performance.

## ✨ Features

- 🎨 **Modern Design System** - Glass morphism effects, gradients, and contemporary UI
- 🚀 **Performance Optimized** - React.memo, lazy loading, and code splitting
- ♿ **Fully Accessible** - WCAG compliant with ARIA labels and keyboard navigation
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🎭 **Smooth Animations** - AOS library integration with custom micro-interactions
- 🌐 **SEO Ready** - Semantic HTML and meta tag optimization
- 📧 **Contact Form** - Integrated EmailJS for direct communication

## 🎨 Design Highlights

- **Glass Morphism** - Frosted glass effects on navigation, cards, and forms
- **Gradient Text** - Eye-catching titles with color gradients
- **Animated Backgrounds** - Floating gradient orbs in hero section
- **Hover Effects** - Smooth transitions and lift animations
- **Modern Color Palette** - Indigo-based theme with semantic color system

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Styling**: Bootstrap 5.3.8 + Custom CSS
- **Routing**: React Router v6
- **Icons**: FontAwesome 7.x
- **Animations**: AOS (Animate On Scroll)
- **Forms**: EmailJS
- **Build Tool**: React Scripts (Create React App)

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/OwaliShawon/owali-ullah-shawon.git

# Navigate to project directory
cd owali-ullah-shawon

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain the production-ready files
```

## 📧 EmailJS Configuration

To enable the contact form:

1. Create a `.env.local` file in the project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Sign up at [EmailJS](https://www.emailjs.com/) and get your credentials

3. Ensure your EmailJS template includes these fields:
   - `user_name`
   - `user_email`
   - `subject`
   - `phone`
   - `message`

4. Restart the dev server after adding environment variables

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation with glass morphism
│   ├── Hero/            # Hero section with animations
│   ├── About/           # About section
│   ├── Skills/          # Skills showcase
│   ├── Experience/      # Work experience timeline
│   ├── Project/         # Projects gallery
│   ├── ContactForm/     # Contact form with validation
│   ├── Footer/          # Footer component
│   └── common/          # Reusable components (Button, Sidebars, etc.)
├── pages/               # Route pages (lazy loaded)
├── assets/
│   ├── data/            # JSON data files
│   └── images/          # Images and media
├── App.js               # Main application component
├── App.css              # Global styles & design system
└── index.js             # Application entry point
```

## 🎨 Customization

### Update Personal Information

Edit JSON files in `src/assets/data/`:

- `about.json` - Personal info, bio, resume link
- `projects.json` - Project portfolio items
- `skills.json` - Technical skills
- `experience.json` - Work experience
- `navigation.json` - Navigation menu items

### Modify Color Scheme

Edit CSS variables in `src/App.css`:

```css
:root {
  --color-accent: #6366f1;     /* Primary accent color */
  --color-secondary: #10b981;  /* Secondary color */
  --color-bg: #0a0e27;         /* Background color */
  /* ... more variables */
}
```

### Add New Sections

1. Create component in `src/components/`
2. Import and add to relevant page in `src/pages/`
3. Update navigation in `src/assets/data/navigation.json`

## 📜 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Format code with Prettier
npm run format

# Eject from Create React App (one-way operation)
npm run eject
```

## 🌐 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag the `build/` folder to Netlify
3. Or connect your GitHub repo for auto-deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 🔧 Performance Optimizations

- ✅ React.memo for component memoization
- ✅ Lazy loading for route-based code splitting
- ✅ Image lazy loading with native loading attribute
- ✅ Optimized animations with GPU acceleration
- ✅ Minimized bundle size with tree shaking

## ♿ Accessibility Features

- ✅ ARIA labels on all interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators for keyboard users
- ✅ Semantic HTML structure
- ✅ Screen reader compatible
- ✅ Color contrast WCAG AA compliant

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Documentation

- [Getting Started Guide](GETTING_STARTED.md) - Quick start and setup
- [Design Guide](DESIGN_GUIDE.md) - Design system and component patterns
- [Modernization Summary](MODERNIZATION_SUMMARY.md) - Complete list of updates

## 🐛 Known Issues

None currently. Report issues on the [GitHub repository](https://github.com/OwaliShawon/owali-ullah-shawon/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Owali Ullah Shawon**

- GitHub: [@OwaliShawon](https://github.com/OwaliShawon)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Design inspiration from modern web design trends
- Icons by [FontAwesome](https://fontawesome.com/)
- Animations by [AOS Library](https://michalsnik.github.io/aos/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

⭐ If you found this project helpful, please give it a star!
