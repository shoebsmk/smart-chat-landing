# Smart Chat Landing Page

A beautiful, minimal landing page for a Smart Chat application built with vanilla HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Clean, minimal interface with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Performance Optimized**: Lightweight vanilla JavaScript with no dependencies
- **Accessible**: Semantic HTML with proper ARIA labels
- **Smooth Animations**: Subtle fade-in and scroll animations for enhanced user experience

## Sections

1. **Hero Section**: Eye-catching header with main value proposition and primary call-to-action
2. **Features Section**: Grid layout showcasing key capabilities of the smart chat application
3. **Pricing Section**: Clean pricing table with different subscription tiers
4. **Call-to-Action Section**: Final conversion section with email signup form

## Getting Started

### Prerequisites

No prerequisites needed! This is a static website that runs entirely in the browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it!

### Local Development

For a better development experience, you can use a local server:

#### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server
```

Then open `http://localhost:8000` in your browser.

#### Using VS Code
Install the "Live Server" extension and right-click on `index.html` to select "Open with Live Server".

## File Structure

```
smart-chat-landing/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and animations
└── README.md       # Project documentation
```

## Customization

### Colors

The color scheme is defined using CSS custom properties in `styles.css`. You can easily customize the colors by modifying the `:root` variables:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #8b5cf6;
    /* ... more variables */
}
```

### Content

Edit the content directly in `index.html`:
- Update hero section text
- Modify feature descriptions
- Adjust pricing tiers
- Change call-to-action messaging

### Styling

All styles are in `styles.css`. The design uses:
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming
- Smooth transitions and animations
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This is a static website that can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder or connect your Git repository
- **Vercel**: Import your Git repository or use the CLI
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket configured for static website hosting
- **Any web server**: Simply upload the files to your web server

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or suggestions, please open an issue in the repository.

