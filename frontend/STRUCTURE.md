# Product Manager Portfolio - Folder Structure

## Frontend Structure

```
/app/frontend/src/
├── components/
│   ├── ui/                    # shadcn/ui components (already present)
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── textarea.jsx
│   │   ├── label.jsx
│   │   ├── badge.jsx
│   │   ├── toast.jsx
│   │   └── toaster.jsx
│   │
│   └── portfolio/             # Custom portfolio components
│       ├── Navigation.jsx     # Fixed navigation header
│       ├── Hero.jsx          # Hero section with CTA
│       ├── About.jsx         # About/philosophy section
│       ├── CaseStudyCard.jsx # Reusable case study card
│       ├── FeaturedWork.jsx  # Container for all case studies
│       ├── Skills.jsx        # Skills and expertise section
│       ├── Contact.jsx       # Contact form and links
│       └── Footer.jsx        # Footer with copyright
│
├── pages/
│   └── Home.jsx              # Main page - orchestrates all components
│
├── hooks/
│   └── use-toast.js          # Toast notification hook
│
├── mock.js                    # Mock data (to be replaced with backend)
├── App.js                     # Main app with routing
├── App.css                    # Global styles
└── index.css                  # Tailwind imports + custom CSS
```

## Component Responsibilities

### Navigation.jsx
- Fixed header with logo/name
- Smooth scroll navigation links
- Responsive menu (mobile/desktop)

### Hero.jsx
- Name and title display
- Value proposition/tagline
- Primary CTA button
- Quick stats cards (years, products, users)

### About.jsx
- Product philosophy headline
- Approach description
- Can include additional credibility elements

### CaseStudyCard.jsx (Reusable)
- Props: study data object
- Renders: tags, title, role, timeline
- Problem/Approach/Impact sections
- Expandable or fixed layout

### FeaturedWork.jsx
- Section header
- Maps through case studies
- Uses CaseStudyCard for each study

### Skills.jsx
- Product areas
- Methodologies
- Tools and technologies
- Grouped into logical columns

### Contact.jsx
- Contact form (name, email, message)
- Form validation
- Social media links (email, LinkedIn, Twitter)
- Resume download link

### Footer.jsx
- Copyright notice
- Quick links
- Resume download

## Data Flow

1. **Mock Data Phase (Current)**
   - `mock.js` exports all portfolio data
   - Components import and consume mock data
   - Form submission shows toast notification

2. **Backend Integration Phase (Future)**
   - Replace mock.js imports with API calls
   - Contact form POSTs to `/api/contact`
   - Optional: CMS for case study management

## Styling Approach

- **Tailwind CSS**: Utility-first styling
- **Design Tokens**: Forest green (#2d5016) accent, black base
- **Responsive**: Mobile-first with md: and lg: breakpoints
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Placeholder Content

All content in `mock.js` serves as placeholder structure:
- Replace "Alex Morgan" with actual name
- Update case studies with real projects
- Modify skills and tools to match actual expertise
- Update contact information