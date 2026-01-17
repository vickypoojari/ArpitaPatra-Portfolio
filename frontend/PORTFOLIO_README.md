# Product Manager Portfolio

A clean, modern, professional portfolio website for Product Managers built with React and Tailwind CSS.

## 📋 Overview

This portfolio showcases product thinking, execution, and impact through:
- Clear value proposition and positioning
- Detailed case studies with Problem → Approach → Impact structure
- Skills and expertise organized by categories
- Professional contact form
- Responsive design optimized for recruiters and hiring managers

## 🎨 Design Philosophy

**Minimal, Professional, Calm**
- Black/charcoal base with forest green accent (#2d5016)
- Clean typography with clear hierarchy
- Generous whitespace for easy scanning
- Focus on content over decoration
- Skimmable in under 2 minutes

## 🏗️ Architecture

### Component Structure

```
src/
├── components/
│   ├── ui/                          # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── textarea.jsx
│   │   ├── label.jsx
│   │   ├── badge.jsx
│   │   └── toaster.jsx
│   │
│   └── portfolio/                   # Custom components
│       ├── Navigation.jsx           # Fixed header with smooth scroll
│       ├── Hero.jsx                 # Hero section + quick stats
│       ├── About.jsx                # Product philosophy
│       ├── CaseStudyCard.jsx        # Reusable case study card
│       ├── FeaturedWork.jsx         # Case studies container
│       ├── Skills.jsx               # Skills & expertise
│       ├── Contact.jsx              # Contact form + social links
│       └── Footer.jsx               # Footer with resume link
│
├── pages/
│   └── Home.jsx                     # Main page orchestrator
│
├── hooks/
│   └── use-toast.js                 # Toast notifications
│
├── mock.js                          # Portfolio data (placeholder)
├── App.js                           # Main app with routing
└── index.css                        # Tailwind + custom styles
```

## 🔧 Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Build**: Create React App with CRACO

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- Yarn

### Installation

```bash
# Install dependencies
cd /app/frontend
yarn install

# Start development server
yarn start
```

The app will run at `http://localhost:3000`

## 📝 Customization Guide

### 1. Update Personal Information

Edit `/app/frontend/src/mock.js`:

```javascript
export const portfolioData = {
  hero: {
    name: "Your Name",              // Replace with your name
    title: "Product Manager",       // Your title
    tagline: "Your value prop...",  // Your positioning
    cta: "View Case Studies"
  },
  // ... update other sections
}
```

### 2. Add Your Case Studies

Each case study follows this structure:

```javascript
{
  id: 1,
  company: "Company Name",
  title: "Project Title",
  role: "Your Role",
  timeline: "Duration · Year",
  problem: "What problem did you solve?",
  approach: [
    "Step 1 of your approach",
    "Step 2 of your approach",
    // Add 3-5 key steps
  ],
  impact: [
    "Metric 1 with % improvement",
    "Metric 2 with business value",
    // Add 3-5 key results
  ],
  tags: ["Tag1", "Tag2", "Tag3"]
}
```

### 3. Update Skills & Tools

```javascript
skills: {
  productAreas: [
    "Your specialization 1",
    "Your specialization 2",
    // ...
  ],
  methodologies: [
    "Your methodologies",
    // ...
  ],
  tools: [
    "Category: Tool1, Tool2",
    // ...
  ]
}
```

### 4. Update Contact Information

```javascript
contact: {
  email: "your.email@example.com",
  linkedin: "linkedin.com/in/yourprofile",
  twitter: "@yourhandle",
  resumeUrl: "/path/to/your/resume.pdf"
}
```

## 🎯 Key Features

### Reusable Components

All components are modular and reusable:

```javascript
// Example: Using CaseStudyCard
import CaseStudyCard from './components/portfolio/CaseStudyCard';

<CaseStudyCard study={studyData} />
```

### Smooth Scroll Navigation

```javascript
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  });
};
```

### Toast Notifications

```javascript
import { toast } from './hooks/use-toast';

toast({
  title: "Success!",
  description: "Your message here"
});
```

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text (WCAG AA compliant)
- Focus indicators on form inputs

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1199px
- Desktop: > 1200px

All components are mobile-first and fully responsive.

## 🔄 Next Steps: Backend Integration

When ready to connect to a backend:

### 1. Create API endpoints in `/app/backend/server.py`:

```python
@api_router.post("/contact")
async def submit_contact(form: ContactForm):
    # Handle contact form submission
    # Send email notification
    # Store in database
    return {"success": True}
```

### 2. Update Contact.jsx to use real API:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
      formData
    );
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out."
    });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message."
    });
  }
};
```

### 3. Optional: Add CMS for case studies

- Create CRUD endpoints for case studies
- Add admin panel for content management
- Replace mock.js with API calls

## 🎨 Color Palette

```css
--bg-page: #0f0f10          /* Main background */
--bg-card: #1a1a1c          /* Card backgrounds */
--bg-border: #1f1f21        /* Borders */
--accent-primary: #2d5016   /* Forest green accent */
--accent-hover: #3d6821     /* Hover state */
--text-primary: #ffffff     /* Main text */
--text-secondary: #9ca3af   /* Supporting text */
```

## 📦 Build for Production

```bash
# Create optimized production build
yarn build

# Output will be in /app/frontend/build/
```

## 🐛 Troubleshooting

### Issue: Components not rendering
- Check that all imports are correct
- Verify mock.js structure matches expected format

### Issue: Styles not applying
- Ensure Tailwind is properly configured
- Check that index.css imports are present

### Issue: Navigation not working
- Verify section IDs match navigation targets
- Check smooth scroll polyfill for older browsers

## 📄 License

This portfolio template is open source and available for personal use.

## 🤝 Contributing

To improve this portfolio:
1. Add new reusable components
2. Enhance accessibility features
3. Optimize performance
4. Add animations (keep minimal)

---

**Built with care for Product Managers who value clarity over complexity.**
