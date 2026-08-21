# Plan - Didicos Barber Landing Page

Build a professional, modern, and premium landing page for **Didicos Barber**. The site will focus on converting visitors into clients through a clear "Schedule appointment" (Agendar horário) flow.

## Design Direction
- **Style**: Premium, masculine, high contrast, elegant.
- **Colors**: Deep dark backgrounds with metallic or wood accents (using Tailwind semantic tokens).
- **Typography**: Sophisticated sans-serif for headers, clean readability for body.
- **Interactions**: Smooth transitions and hover states for all interactive elements.

## Proposed Structure

### 1. Configuration & Utils
- Create `src/config/barber-data.ts` to centralize all editable information (WhatsApp numbers, unit addresses, service list).

### 2. Components
- **Header**: Fixed, transparent to solid on scroll, logo, desktop nav, and CTA button. Hamburger menu for mobile.
- **Hero**: High-impact section with logo placeholder, strong headline, CTA buttons (Schedule + WhatsApp), and professional image placeholder.
- **About**: Clean section explaining the Didicos Barber experience.
- **Units**: Responsive cards for "Portal do Morumbi" and "Embu-Guaçu" units with location, hours, and action buttons.
- **Services**: Modern card grid for services (Haircut, Beard, etc.) with placeholders for prices and durations.
- **CTA Section**: Focused call-to-action to drive final conversions.
- **WhatsApp Button**: Floating fixed button with discrete animation.
- **Footer**: Professional site map, social links, and legal info.

### 3. Page Assembly
- Update `src/routes/index.tsx` to compose all sections.
- Ensure full responsiveness across all devices (Mobile-first approach).

## Technical Details
- Use `lucide-react` for iconography.
- Use `framer-motion` for micro-animations (will be installed).
- Semantic HTML and accessibility (ARIA labels, proper contrast).
- Centralized constants for easy future updates by the user.

## User Feedback Required
- The logo was not yet found in uploads; I will use a stylized text placeholder until provided.
- I will use generic high-quality placeholders for images.
