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
