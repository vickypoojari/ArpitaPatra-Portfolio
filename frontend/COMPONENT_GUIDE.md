# Component Usage Guide

Quick reference for using and customizing portfolio components.

## Navigation Component

**Location**: `/app/frontend/src/components/portfolio/Navigation.jsx`

**Purpose**: Fixed header with smooth scroll navigation

**Props**:
```javascript
<Navigation name="Your Name" />
```

**Customization**:
```javascript
// Add more navigation items
<button onClick={() => scrollToSection('blog')}>Blog</button>

// Change styling
className="text-sm text-gray-400 hover:text-[#2d5016]"
```

---

## Hero Component

**Location**: `/app/frontend/src/components/portfolio/Hero.jsx`

**Purpose**: Main landing section with name, tagline, CTA, and stats

**Props**:
```javascript
<Hero 
  hero={{
    name: "Your Name",
    tagline: "Your value proposition",
    cta: "View Case Studies"
  }}
  stats={{
    yearsExperience: "5+",
    productsShipped: "12+",
    usersImpacted: "2M+"
  }}
/>
```

**Customization**:
- Change stats icons (Briefcase, CheckCircle2, Users from lucide-react)
- Adjust CTA button destination
- Modify stat card layout (grid-cols-3 → grid-cols-4)

---

## About Component

**Location**: `/app/frontend/src/components/portfolio/About.jsx`

**Purpose**: Product philosophy and approach description

**Props**:
```javascript
<About 
  about={{
    headline: "Your headline",
    description: "Your description"
  }}
/>
```

**Customization**:
```javascript
// Add bullet points
<ul className="space-y-2 mt-4">
  <li>Key principle 1</li>
  <li>Key principle 2</li>
</ul>

// Add images or testimonials
```

---

## CaseStudyCard Component

**Location**: `/app/frontend/src/components/portfolio/CaseStudyCard.jsx`

**Purpose**: Reusable card for displaying case studies

**Props**:
```javascript
<CaseStudyCard 
  study={{
    id: 1,
    company: "Company",
    title: "Project Title",
    role: "Your Role",
    timeline: "6 months · 2023",
    problem: "Problem statement",
    approach: ["Step 1", "Step 2"],
    impact: ["Result 1", "Result 2"],
    tags: ["Tag1", "Tag2"]
  }}
/>
```

**Customization**:
```javascript
// Add expandable sections
const [isExpanded, setIsExpanded] = useState(false);

// Add images
<img src={study.imageUrl} alt={study.title} />

// Change impact layout (2 columns → 1 column)
className="grid grid-cols-1"
```

---

## FeaturedWork Component

**Location**: `/app/frontend/src/components/portfolio/FeaturedWork.jsx`

**Purpose**: Container for all case studies

**Props**:
```javascript
<FeaturedWork 
  caseStudies={[
    {...study1},
    {...study2}
  ]}
/>
```

**Customization**:
```javascript
// Add filtering
const [filter, setFilter] = useState('all');
const filtered = caseStudies.filter(s => 
  filter === 'all' || s.tags.includes(filter)
);

// Add search
const [search, setSearch] = useState('');
```

---

## Skills Component

**Location**: `/app/frontend/src/components/portfolio/Skills.jsx`

**Purpose**: Display skills grouped by category

**Props**:
```javascript
<Skills 
  skills={{
    productAreas: ["Area 1", "Area 2"],
    methodologies: ["Method 1", "Method 2"],
    tools: ["Tool 1", "Tool 2"]
  }}
/>
```

**Customization**:
```javascript
// Add more categories
<div>
  <h3>Certifications</h3>
  <ul>
    {skills.certifications.map(...)}
  </ul>
</div>

// Change grid layout (3 columns → 4 columns)
className="grid grid-cols-1 md:grid-cols-4"

// Add skill proficiency bars
<div className="flex items-center gap-2">
  <span>{skill}</span>
  <div className="flex-1 bg-gray-700 h-2">
    <div className="bg-[#2d5016] h-2" style={{width: '80%'}} />
  </div>
</div>
```

---

## Contact Component

**Location**: `/app/frontend/src/components/portfolio/Contact.jsx`

**Purpose**: Contact form and social links

**Props**:
```javascript
<Contact 
  contact={{
    email: "your@email.com",
    linkedin: "linkedin.com/in/you",
    twitter: "@you",
    resumeUrl: "/resume.pdf"
  }}
/>
```

**Customization**:
```javascript
// Add more form fields
<div>
  <Label htmlFor="company">Company</Label>
  <Input id="company" name="company" />
</div>

// Add more social links
<a href={`https://github.com/${contact.github}`}>
  <Github className="h-6 w-6" />
</a>

// Change form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await axios.post('/api/contact', formData);
  // Handle response
};
```

---

## Footer Component

**Location**: `/app/frontend/src/components/portfolio/Footer.jsx`

**Purpose**: Footer with copyright and resume link

**Props**:
```javascript
<Footer 
  name="Your Name"
  resumeUrl="/resume.pdf"
/>
```

**Customization**:
```javascript
// Add footer links
<div className="flex gap-6">
  <a href="/privacy">Privacy</a>
  <a href="/terms">Terms</a>
</div>

// Add newsletter signup
<form>
  <Input placeholder="Subscribe to newsletter" />
</form>
```

---

## Common Customizations

### Change Color Scheme

Replace `#2d5016` (forest green) throughout:
```javascript
// Current: Forest Green
className="text-[#2d5016]"

// New: Deep Blue
className="text-[#1e40af]"

// New: Charcoal Gray
className="text-[#4b5563]"
```

### Add Animations

```javascript
// Fade in on scroll
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {children}
</motion.div>
```

### Add Dark/Light Mode Toggle

```javascript
import { useState, useEffect } from 'react';

const [theme, setTheme] = useState('dark');

useEffect(() => {
  document.documentElement.classList.toggle('light', theme === 'light');
}, [theme]);
```

### Make Components Editable

```javascript
// For rapid prototyping
<div contentEditable onBlur={handleSave}>
  {content}
</div>
```

---

## Best Practices

1. **Keep components pure**: Pass data via props, avoid global state
2. **Use semantic HTML**: `<section>`, `<article>`, `<nav>`
3. **Add ARIA labels**: For screen readers and accessibility
4. **Mobile-first**: Start with mobile styles, add `md:` and `lg:` breakpoints
5. **Reuse styles**: Extract common patterns into Tailwind classes

## Example: Creating a New Section

```javascript
// 1. Create component
// /app/frontend/src/components/portfolio/Testimonials.jsx
import React from 'react';
import { Card, CardContent } from '../ui/card';

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-[#1a1a1c]">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <p className="text-sm text-gray-400">
                — {testimonial.author}, {testimonial.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

// 2. Add data to mock.js
testimonials: [
  {
    id: 1,
    quote: "Great PM who ships!",
    author: "Jane Doe",
    role: "CEO at TechCorp"
  }
]

// 3. Import and use in Home.jsx
import Testimonials from '../components/portfolio/Testimonials';

<Testimonials testimonials={portfolioData.testimonials} />
```

---

**Need more examples?** Check `/app/frontend/STRUCTURE.md` for architecture details.
