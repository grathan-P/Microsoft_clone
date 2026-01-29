# Microsoft Clone

A responsive, modern clone of the Microsoft website built with cutting-edge web technologies. This project demonstrates a clean, professional UI with smooth interactions and responsive design patterns.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Image Slider**: Interactive carousel with smooth transitions showcasing featured products
- **Mobile Navigation**: Hamburger menu for mobile devices with smooth animations
- **Search Functionality**: Integrated search interface for easy navigation
- **Product Showcase**: Displays Microsoft products including Surface, Teams, Copilot, Windows, and Xbox
- **Shopping Cart**: Cart icon integration for e-commerce functionality
- **Modern UI**: Clean, professional design matching Microsoft's brand aesthetic
- **Fast Performance**: Optimized with Vite for rapid development and production builds

## 🛠️ Tech Stack

### Frontend Framework & Build Tools
- **Vite** - Next-generation frontend build tool for fast development and optimized production builds
- **HTML5** - Semantic markup for modern web applications
- **JavaScript (ES6+)** - Dynamic functionality and interactivity

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.5.6** - CSS transformation tool integrated with Tailwind CSS
- **@tailwindcss/postcss 4.1.18** - PostCSS plugin for Tailwind CSS

### Icons & Assets
- **Font Awesome 7.0.1** - Icon library via CDN for consistent iconography
- **AVIF Images** - Modern image format for optimized performance

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager

## 📁 Project Structure

```
Microsoft_Clone/
├── index.html                 # Main HTML entry point
├── styles.css                 # Global styles
├── scripts.js                 # JavaScript functionality
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
└── images/                    # Image assets
    ├── slider1.avif
    ├── slider2.avif
    ├── other_logos/           # Brand logos
    │   ├── fbLogo.avif
    │   ├── Xlogo.avif
    │   └── ybLogo.avif
    └── other_products/        # Product images
        ├── img1.avif through img9.avif
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd Microsoft_Clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Scripts

- `npm run dev` - Start Vite development server with hot module replacement
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview the production build locally

## 🎨 Design Features

### Responsive Breakpoints
- **Mobile**: Full responsive mobile layout with hamburger menu
- **Tablet (md)**: Optimized layout for medium screens
- **Desktop (lg)**: Full desktop experience with all navigation elements
- **Extra Large (xl)**: Enhanced layout for large screens

### Key Components

#### Navigation Bar
- Logo and product links (Microsoft 365, Teams, Copilot, Windows, Xbox)
- Search and cart functionality
- Mobile hamburger menu
- "All Microsoft" dropdown

#### Image Slider
- Auto-rotating carousel showcasing featured products
- Product descriptions and call-to-action buttons
- Responsive image handling (different images for mobile/desktop)
- Navigation indicators

#### Mobile Menu
- Expandable navigation menu for mobile devices
- Smooth animations and transitions

## 🖼️ Responsive Images

The project uses optimized AVIF format images for better performance:
- Separate images for different viewport sizes
- Mobile-optimized images (smaller file sizes)
- Desktop-quality images for larger screens

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Fallback support for older browsers

## 🔧 Customization

### Tailwind CSS
Modify `tailwind.config.js` to customize:
- Color schemes
- Spacing
- Typography
- Custom components

### Styles
Edit `styles.css` for additional custom styling beyond Tailwind utilities

### Content
Update `index.html` to modify:
- Navigation links
- Product information
- Featured products
- Brand partnerships

## 📊 Performance Optimizations

- **Vite**: Fast build times and optimized bundling
- **AVIF Images**: Modern image compression for faster loading
- **Tailwind CSS**: Purges unused styles for smaller bundle size
- **PostCSS**: Automated CSS optimization

## 🎯 Future Enhancements

- Add product detail pages
- Implement shopping cart functionality
- Add user authentication
- Integrate backend API
- Add more interactive features
- Implement dark mode
- Add accessibility improvements

## 📄 License

ISC License

## 👤 Author

[Grathan]

## 📞 Support

For questions or issues, please create an issue in the repository or contact the development team.

---

**Note**: This is a frontend clone project for educational/portfolio purposes and is not affiliated with Microsoft Corporation.
