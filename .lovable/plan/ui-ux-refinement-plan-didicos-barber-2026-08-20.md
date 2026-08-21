# UI/UX Refinement Plan - Didicos Barber

Execute a deep UI/UX improvement to elevate the landing page to a premium, modern, and highly intuitive standard.

## Visual Identity & Typography
- Enhance color palette in `src/styles.css` using more sophisticated OKLCH values.
- Refine typography hierarchy for better readability and scanning.
- Add subtle grain texture and glassmorphism effects to containers.

## Components & Sections
### Header
- Improve scroll transition with a more refined blur and border.
- Enhance logo hover effects with a soft glow.

### Hero Section
- Refine the text hierarchy and letter spacing.
- Update background overlay for better text contrast.
- Add a subtle parallax effect or floating motion to the logo.

### About Section
- Improve image composition with refined borders and shadows.
- Optimize spacing and text flow for mobile.

### Units Section
- Redesign unit cards with a more modern "glass-card" look.
- Improve iconography and information density.

### Services Section
- Enhance service cards with better hover states and iconography.
- Refine the pricing and duration display for clarity.

### CTA Section
- Make the primary conversion point more prominent with enhanced visual weight.

## Micro-interactions & Animations
- Implement smooth hover transitions for all interactive elements.
- Add lightweight scroll-reveal animations using Framer Motion.
- Ensure feedback on all clicks (active states).

## Mobile Optimization
- Adjust spacing and font sizes for a mobile-first experience.
- Ensure all touch targets are appropriately sized.

## Technical Details
- Use OKLCH colors exclusively for design tokens.
- Maintain all existing functionalities and centralized data in `src/config/barber-data.ts`.
- Use `framer-motion` for all animations to ensure high performance.
