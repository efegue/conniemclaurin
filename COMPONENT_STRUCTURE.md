# Portfolio Component Structure

This portfolio website has been modularized for easier editing and maintenance. Each section is now in its own file, making it simple to update specific parts without affecting others.

## 📁 File Structure

```
conniemclaurin.com/
├── index.html                    # Original single-file version
├── index-modular.html            # Modular version (development)
├── index-built.html              # Built version (production)
├── build.js                      # Build script to combine components
├── components/                   # Individual component files
│   ├── header.html              # Navigation bar
│   ├── hero.html                # Hero section with profile image
│   ├── about.html               # About section with education
│   ├── experience.html          # Work experience timeline
│   ├── skills.html              # Skills and technologies
│   ├── contact.html             # Contact information
│   └── footer.html              # Footer section
├── js/
│   └── main.js                  # JavaScript functionality
├── me.jpg                       # Profile image
└── README.md                    # Main documentation
```

## 🛠️ How to Edit

### For Development (Modular Approach)
1. **Edit individual components** in the `components/` folder
2. **Test changes** by opening `index-modular.html` in a browser
3. **Build for production** by running `node build.js`

### For Production (Single File)
1. **Edit the main file** `index.html` directly
2. **Deploy immediately** - no build step required

## 📝 Component Details

### `components/header.html`
- **Purpose**: Navigation bar with mobile menu
- **What to edit**: Navigation links, logo, mobile menu items
- **Key features**: Fixed positioning, responsive design, smooth scrolling

### `components/hero.html`
- **Purpose**: Main introduction section with profile image
- **What to edit**: Name, title, description, call-to-action buttons
- **Key features**: Profile image, gradient background, responsive text

### `components/about.html`
- **Purpose**: Personal information and background
- **What to edit**: Bio text, experience stats, education details
- **Key features**: Two-column layout, profile image, education card

### `components/experience.html`
- **Purpose**: Work history and military service
- **What to edit**: Job titles, companies, dates, descriptions, skills tags
- **Key features**: Timeline layout, skill tags, responsive cards

### `components/skills.html`
- **Purpose**: Technical skills with progress bars
- **What to edit**: Skill names, proficiency percentages, icons
- **Key features**: Progress bars, skill categories, animated loading

### `components/contact.html`
- **Purpose**: Contact information and social links
- **What to edit**: Location, current role, social media links
- **Key features**: Contact cards, social buttons, professional summary

### `components/footer.html`
- **Purpose**: Copyright and branding
- **What to edit**: Copyright text, branding information
- **Key features**: Simple footer with copyright notice

## 🔧 Build Process

### Development Workflow
1. Edit components in `components/` folder
2. Test with `index-modular.html`
3. Run `node build.js` to create production version
4. Deploy `index-built.html` or `index.html`

### Quick Edits
For quick changes, edit `index.html` directly and deploy immediately.

## 🎨 Customization Tips

### Colors
Update the Tailwind config in the head section:
```javascript
colors: {
    primary: '#3B82F6',    // Main blue
    secondary: '#1F2937',  // Dark gray
    accent: '#10B981'      // Green accent
}
```

### Images
- Replace `me.jpg` with your new profile image
- Update image paths in components if needed
- Maintain aspect ratio for best results

### Content
- Update text content in each component file
- Modify skill percentages in `skills.html`
- Update experience details in `experience.html`
- Change contact information in `contact.html`

## 🚀 Deployment

### GitHub Pages
1. Push all files to your repository
2. Enable GitHub Pages in repository settings
3. Choose source branch (usually `main` or `gh-pages`)

### Manual Deployment
1. Use `index.html` for single-file deployment
2. Use `index-built.html` for modular builds
3. Upload all files to your web server

## 📱 Responsive Design

All components are fully responsive and will work on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔍 SEO Features

- Meta tags for search engines
- Open Graph tags for social media
- Twitter Card support
- Sitemap and robots.txt included
- Semantic HTML structure

## 🎯 Performance

- Tailwind CSS via CDN for fast loading
- Optimized images and assets
- Minimal JavaScript for smooth interactions
- Lazy loading for better performance

---

**Note**: The modular approach is great for development and maintenance, while the single-file approach is perfect for quick edits and deployment. 