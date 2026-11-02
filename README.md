# Mohar-e-Zeen | Artisan Block Printing

A beautiful, responsive React-based website for Mohar-e-Zeen, a premium block printing textile business featuring hand-blocked fabrics, eco-friendly practices, and timeless craftsmanship.

## 🎨 Design Features

- **Color Palette**: Deep Forest Green (#1B4D42), Warm Cream, Gold Accents
- **Typography**: Mix of 'Besley' serif for headings and 'Outfit' sans-serif for body text
- **Theme**: Vintage, traditional, elegant with block printing motifs
- **Responsive**: Mobile-first design that works seamlessly across all devices
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx & Navbar.css          # Fixed navigation header
│   ├── Hero.jsx & Hero.css              # Landing section with CTA
│   ├── Collections.jsx & Collections.css # Product showcase grid
│   ├── About.jsx & About.css            # Brand story & values
│   ├── Craft.jsx & Craft.css            # Behind-the-scenes content
│   ├── Contact.jsx & Contact.css        # Contact form
│   └── Footer.jsx & Footer.css          # Footer with links
├── App.jsx & App.css                    # Main app component
├── index.css                            # Global styles & CSS variables
└── main.jsx                             # React entry point
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory**
```bash
cd D:\Data\SSH\mohr_e_zeen
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## 🎯 Key Sections

### Hero Section
- Eye-catching headline with typing animation
- Statistics showcasing business achievements
- Call-to-action buttons
- Decorative block printing patterns

### Collections
- 6 product categories displayed in responsive grid
- Hover effects with overlay details
- Price and material information
- Custom order CTA

### About
- Brand story with compelling imagery
- 4 key value propositions (Natural Dyes, Hand-Carved Blocks, Eco-Friendly, Ethical)
- Rich visual design with frame decoration

### Craft Section
- 3 featured process videos
- Behind-the-scenes content showcase
- Social media integration
- Full-width dark green background

### Contact
- Contact form with validation
- Multi-channel contact information
- Social media links
- Professional layout with split design

## 🎨 CSS Variables

The design uses CSS custom properties for consistency:

```css
--primary: #1B4D42              /* Deep Forest Green */
--primary-light: #2D6F63        /* Lighter Green */
--primary-dark: #0D3C34         /* Darker Green */
--secondary: #F5E6D3            /* Warm Cream */
--accent: #D4AF37               /* Gold */
--accent-light: #E8DCC8         /* Soft Beige */
--text-dark: #2C1810            /* Dark Brown */
--text-light: #F5E6D3           /* Light Cream */
--shadow: rgba(27, 77, 66, 0.15)/* Shadow color */
```

## 📱 Responsive Breakpoints

- Desktop: 1400px (max container width)
- Tablet: 1024px
- Mobile: 768px

## ✨ Animations

- **Float**: Subtle up-down motion on decorative elements
- **Hover Effects**: Smooth transitions on buttons and cards
- **Scroll Indicator**: Animated arrow guiding users to scroll
- **Typing Effect**: Name appearing character by character in hero

## 🔗 Ready for Git Integration

The folder is set up as a standalone project and ready to be:
1. Initialized as a Git repository
2. Linked to a remote GitHub repository
3. Deployed to a hosting service (Vercel, Netlify, etc.)

### To initialize Git:
```bash
cd D:\Data\SSH\mohr_e_zeen
git init
git add .
git commit -m "Initial commit: Mohar-e-Zeen website"
git remote add origin [your-repo-url]
git push -u origin main
```

## 🛠️ Build & Deploy

### Build for Production
```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
Drag and drop the `dist/` folder to Netlify or connect your Git repository.

## 📝 Customization

To customize the colors or theme:
1. Edit CSS variables in `src/index.css`
2. Update component content in respective `.jsx` files
3. Replace images with your own in the `src/assets/` folder

## 🌍 SEO Ready

- Semantic HTML structure
- Meta tags in index.html
- Mobile-friendly viewport
- Fast loading with Vite

## 📄 License

Created for Mohar-e-Zeen block printing business.

---

**Ready to launch!** 🚀 Start the dev server, make any final tweaks, then deploy to your preferred platform.
