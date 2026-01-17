# Quick Start Guide

Get your Product Manager portfolio up and running in 5 minutes.

## ✅ Checklist

### Step 1: Personalize Your Data (5 minutes)

Edit `/app/frontend/src/mock.js`:

- [ ] Update name: Line 4
- [ ] Update tagline: Line 6
- [ ] Update about section: Lines 9-14
- [ ] Replace case study 1: Lines 18-44
- [ ] Replace case study 2: Lines 45-71
- [ ] Replace case study 3: Lines 72-98
- [ ] Update skills: Lines 101-129
- [ ] Update contact info: Lines 131-136

### Step 2: Add Your Resume

- [ ] Place resume PDF in `/app/frontend/public/`
- [ ] Update resumeUrl in mock.js: Line 136

### Step 3: Review & Adjust

- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Proofread all content

### Step 4: Deploy

- [ ] Run `yarn build`
- [ ] Deploy to hosting platform
- [ ] Test production site

---

## 🎯 Most Common Edits

### Change Your Name
```javascript
// Line 4 in mock.js
name: "Your Actual Name"
```

### Change Accent Color
Find and replace in all component files:
```javascript
// Replace forest green with your color
#2d5016 → #yourcolor
#3d6821 → #yourHoverColor
```

Common alternatives:
- Deep Blue: `#1e40af` / `#2563eb`
- Charcoal: `#4b5563` / `#6b7280`
- Purple: `#7c3aed` / `#8b5cf6`

### Add a New Case Study
```javascript
// Add to caseStudies array in mock.js
{
  id: 4,  // Increment ID
  company: "Your Company",
  title: "Your Project",
  role: "Your Role",
  timeline: "Duration · Year",
  problem: "One clear sentence about the problem",
  approach: [
    "What you did first",
    "What you did second",
    "What you did third",
    "What you did fourth"
  ],
  impact: [
    "Metric with % or $ value",
    "Another measurable outcome",
    "Business impact statement",
    "Final result or achievement"
  ],
  tags: ["Category1", "Category2", "Category3"]
}
```

### Update Skills
```javascript
// Lines 101-129 in mock.js
productAreas: [
  "Your Area 1",
  "Your Area 2",
  "Your Area 3",
  "Your Area 4",
  "Your Area 5"
],
```

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /app/frontend
vercel
```

### Option 2: Netlify
```bash
# Build
yarn build

# Drag & drop the 'build' folder to netlify.com
```

### Option 3: GitHub Pages
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/portfolio"

# Build and deploy
yarn build
```

---

## 🎨 Design Customization Quick Reference

### Typography
```javascript
// Hero name size
className="text-6xl"  // Current
className="text-7xl"  // Bigger
className="text-5xl"  // Smaller
```

### Spacing
```javascript
// Section padding
className="py-20"  // Current (80px)
className="py-32"  // More spacious (128px)
className="py-12"  // Tighter (48px)
```

### Card Style
```javascript
// Current: Subtle border with hover
className="border-[#1f1f21] hover:border-[#2d5016]"

// Bold: Always visible border
className="border-2 border-[#2d5016]"

// Elevated: Add shadow
className="border-[#1f1f21] shadow-lg shadow-[#2d5016]/10"
```

---

## 🐛 Common Issues & Fixes

### Issue: Components not showing
**Fix**: Check console for errors
```bash
# Check logs
tail -n 50 /var/log/supervisor/frontend.*.log
```

### Issue: Form not submitting
**Fix**: Verify toast component is imported in App.js
```javascript
import { Toaster } from './components/ui/toaster';
<Toaster />
```

### Issue: Navigation not scrolling
**Fix**: Ensure section IDs match navigation targets
```javascript
// In component: id="work"
// In Navigation: scrollToSection('work')
```

### Issue: Mobile menu not working
**Fix**: The current design uses visible links. To add hamburger:
```javascript
// Add responsive toggle
const [isOpen, setIsOpen] = useState(false);

// Show/hide based on screen size
<div className="hidden md:flex">...</div>
<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
  Menu
</button>
```

---

## 📊 Content Guidelines

### Hero Tagline (1 sentence)
- ✅ "Building 0→1 products that solve real problems"
- ✅ "Product leader who transforms ideas into $10M+ revenue"
- ❌ "I'm passionate about product management" (too generic)
- ❌ Long paragraph (keep it under 20 words)

### Case Study Problem (1-2 sentences)
- ✅ "Users struggled to X, leading to Y metric at Z%"
- ✅ "Company faced X challenge, costing $Y and affecting Z customers"
- ❌ Vague statements without metrics
- ❌ More than 3 sentences

### Approach (3-5 bullet points)
- ✅ Start with action verbs
- ✅ Include specific methods/frameworks
- ✅ Mention cross-functional collaboration
- ❌ More than 5 bullets (too detailed)

### Impact (3-5 metrics)
- ✅ Use specific numbers: "Increased by 85%"
- ✅ Include business value: "Drove $2.3M ARR"
- ✅ Mix quantitative and qualitative results
- ❌ Generic statements: "Users were happier"

---

## 🔄 What to Replace vs Keep

### MUST REPLACE:
- [ ] Name: "Alex Morgan"
- [ ] All case study content
- [ ] Company names
- [ ] Email/social links
- [ ] Skills and tools lists
- [ ] Stats (years, products, users)

### SAFE TO KEEP:
- [x] Color scheme (unless you want to change it)
- [x] Layout structure
- [x] Component organization
- [x] Typography scale
- [x] Spacing system
- [x] Responsive breakpoints

### OPTIONAL TO CUSTOMIZE:
- [ ] CTA button text
- [ ] Section headings
- [ ] About section structure
- [ ] Skills categories
- [ ] Footer links

---

## 📝 Pre-Launch Checklist

### Content Review
- [ ] All personal info updated
- [ ] No placeholder text ("Lorem ipsum", "TODO")
- [ ] All links work (test each one)
- [ ] Resume downloads correctly
- [ ] Contact form sends to correct email

### Design Review
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] Check dark/light mode (if implemented)
- [ ] Verify color contrast (accessibility)

### Performance Review
- [ ] Images optimized (if added)
- [ ] No console errors
- [ ] Fast load time (< 3 seconds)
- [ ] Smooth scrolling works

### SEO Basics
- [ ] Update page title in `/app/frontend/public/index.html`
- [ ] Add meta description
- [ ] Add Open Graph tags for social sharing

---

## 🎓 Next Steps After Launch

1. **Get Feedback**: Share with 3-5 trusted colleagues
2. **Analytics**: Add Google Analytics or Plausible
3. **A/B Test**: Try different taglines or CTA text
4. **Blog**: Consider adding a blog section for thought leadership
5. **Testimonials**: Add a testimonials section after collecting reviews

---

**Need help?** Check:
- `STRUCTURE.md` - Architecture overview
- `COMPONENT_GUIDE.md` - Component usage details
- `PORTFOLIO_README.md` - Full documentation
- `LAYOUT_SUMMARY.md` - Visual structure

**Ready to build?** Start editing `mock.js` now! 🚀
