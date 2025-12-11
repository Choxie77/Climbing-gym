# Main Wall Climbing Gym - Unified Theme Guide

## Overview
This document provides comprehensive guidelines for maintaining visual consistency across the Main Wall Climbing Gym website.

## Color Palette

### Primary Colors
- **Electric Blue** (`#0f42ec`) - Primary brand color
  - Use for: Primary CTAs, links, active states, icons
  - CSS Variable: `--electric-blue`
  - Tailwind Class: `text-electric`, `bg-electric`

- **Sunset Yellow** (`#fae404`) - Accent color
  - Use for: Secondary CTAs, highlights, energy elements
  - CSS Variable: `--sunset-yellow`
  - Tailwind Class: `text-sunset`, `bg-sunset`

- **Deep Navy** (`#07090f`) - Primary text color
  - Use for: Headings, body text, strong contrast
  - CSS Variable: `--deep-navy`
  - Tailwind Class: `text-navy`

### Secondary Colors
- **Light Blue** (`#bfceff`) - Subtle backgrounds
  - Use for: Hover states, subtle accents, borders
  - CSS Variable: `--light-blue`
  - Tailwind Class: `bg-light-blue`

- **Light Yellow** (`#fffbca`) - Accent backgrounds
  - Use for: Subtle highlights, callout backgrounds
  - CSS Variable: `--light-yellow`
  - Tailwind Class: `bg-light-yellow`

- **Medium Gray** (`#6b7280`) - Secondary text
  - Use for: Descriptions, secondary information
  - CSS Variable: `--medium-gray`
  - Tailwind Class: `text-gray`

- **Light Gray** (`#f9fafb`) - Section backgrounds
  - Use for: Alternating section backgrounds
  - CSS Variable: `--light-gray`
  - Tailwind Class: `bg-light-gray`

### Hover States
- **Hover Blue**: `#0d3bd4` (`--hover-blue`)
- **Hover Yellow**: `#e6d003` (`--hover-yellow`)

## Typography

### Font Family
- **Primary**: Inter (weights: 400, 500, 600, 700)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Font Sizes
- **h1**: 3rem (48px) / 2.5rem mobile
- **h2**: 2.5rem (40px) / 2rem mobile
- **h3**: 2rem (32px) / 1.75rem mobile
- **h4**: 1.5rem (24px)
- **h5**: 1.25rem (20px)
- **h6**: 1rem (16px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)
- **XS**: 0.75rem (12px)

### Line Heights
- **Headings**: 1.2
- **Body**: 1.75
- **UI Elements**: 1.5

## Component Styling

### Buttons

#### Primary Button
```css
.btn-primary {
    background-color: var(--electric-blue);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
}
```
- Use for: Main actions, primary CTAs
- Hover: Darker blue with lift effect

#### Secondary Button
```css
.btn-secondary {
    background-color: var(--sunset-yellow);
    color: var(--deep-navy);
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
}
```
- Use for: Secondary actions, alternative CTAs

#### Outline Button
- Border: Electric blue
- Background: Transparent
- Hover: Filled with electric blue

### Cards

#### Standard Card
```css
.card {
    background: white;
    border: 1px solid var(--border-light);
    border-radius: 1rem;
    padding: 2rem;
}
```

#### Facility Card
- Border: Light blue
- Hover: Electric blue border with shadow
- Transform: translateY(-4px) on hover

#### Class Card
- Background: rgba(255, 255, 255, 0.95)
- Backdrop filter: blur(10px)
- Hover: Lift with shadow

### Icons

#### Icon Container Sizes
- Standard: 4rem x 4rem (64px)
- Small: 3rem x 3rem (48px)
- Border radius: 0.75rem (12px)

#### Icon Color Variants
- `.icon-blue`: Light blue background, electric blue icon
- `.icon-yellow`: Light yellow background, navy icon
- `.icon-electric`: Electric blue background, white icon
- `.icon-sunset`: Sunset yellow background, navy icon

### Navigation

#### Desktop Navigation
- Background: rgba(255, 255, 255, 0.95) with backdrop-filter
- Border: 1px solid rgba(15, 66, 236, 0.1)
- Height: 80px (5rem)
- Links: Navy text, hover to electric blue
- Active: Electric blue

#### Mobile Menu
- Same background as desktop
- Border-top: Light blue
- Slide-down animation

## Spacing System

### Standard Spacing
Based on 8px grid system:
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)
- **2xl**: 4rem (64px)

### Section Padding
- **Desktop**: py-20 (5rem / 80px)
- **Mobile**: py-12 (3rem / 48px)

### Container Max Width
- **Standard**: max-w-7xl (80rem / 1280px)
- **Narrow**: max-w-4xl (56rem / 896px)

## Animations

### Transitions
- **Standard**: 0.3s ease
- **Slow**: 0.6s ease
- **Fast**: 0.15s ease

### Hover Effects
- **Cards**: translateY(-8px) with shadow
- **Buttons**: translateY(-2px) with shadow
- **Links**: Color transition only

### Scroll Animations
- **Fade In**: Opacity 0 to 1, translateY(30px) to 0
- **Threshold**: 0.1
- **Duration**: 0.6s ease

## Accessibility

### Contrast Ratios
- **Primary Text**: 4.5:1 minimum (WCAG AA)
- **Large Text**: 3:1 minimum
- **Interactive Elements**: 3:1 minimum

### Focus States
- **Outline**: 2px solid electric blue
- **Offset**: 2px
- **Border radius**: Match element

### Screen Reader Support
- Use `.sr-only` class for screen reader only content
- Proper semantic HTML structure
- ARIA labels where needed

## Responsive Breakpoints

### Tailwind Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Mobile Considerations
- Touch-friendly tap targets (minimum 44x44px)
- Simplified navigation
- Stacked layouts on mobile
- Larger font sizes for readability

## Usage Guidelines

### DO
- Use electric blue for primary actions and links
- Use sunset yellow sparingly for accents
- Maintain consistent spacing throughout
- Use the unified theme.css file
- Follow the 8px spacing grid
- Ensure proper contrast ratios
- Use semantic HTML

### DON'T
- Mix old green colors with new theme
- Use purple, indigo, or violet (unless specifically requested)
- Create custom gradients (use solid colors)
- Override theme variables without good reason
- Use inline styles when theme classes exist
- Forget mobile responsiveness
- Skip accessibility testing

## Implementation Checklist

### For New Pages
- [ ] Link to theme.css in <head>
- [ ] Use theme color classes
- [ ] Follow spacing system
- [ ] Implement responsive design
- [ ] Add scroll animations
- [ ] Test accessibility
- [ ] Verify browser compatibility

### For Updates
- [ ] Replace old color classes
- [ ] Update navigation to use theme colors
- [ ] Ensure icon consistency
- [ ] Check hover states
- [ ] Test on all devices
- [ ] Verify contrast ratios

## Browser Support

### Minimum Supported Versions
- **Chrome**: Last 2 versions
- **Firefox**: Last 2 versions
- **Safari**: Last 2 versions
- **Edge**: Last 2 versions

### Feature Fallbacks
- **backdrop-filter**: Solid background fallback
- **CSS Grid**: Flexbox fallback where needed
- **Custom properties**: Fallback values provided

## File Structure

```
/
├── theme.css              # Unified theme stylesheet
├── index.html            # Home page
├── facilities.html       # Facilities page
├── classes.html          # Classes & community page
├── contact.html          # Contact page
├── main.js              # Interactive functionality
└── resources/           # Images and assets
```

## Maintenance

### Regular Reviews
- Review color usage quarterly
- Update accessibility compliance
- Test new browser versions
- Optimize performance metrics

### Version Control
- Document all theme changes
- Test before deploying
- Maintain backward compatibility
- Update this guide with changes

## Resources

### Tools
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Accessibility Testing**: https://wave.webaim.org/
- **Performance Testing**: Google Lighthouse

### References
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Inter Font**: https://fonts.google.com/specimen/Inter
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Last Updated**: December 2024
**Version**: 1.0
**Maintained By**: Development Team
