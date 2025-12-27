# SP Digital Growth - Elite Contractor Marketing Platform

## Overview

This is a marketing landing page and lead generation platform for SP Digital Growth (also branded as Pinnacle Roofing Marketing), a company that provides qualified appointment booking services for contractors including roofers, remodelers, and general contractors. The application is a single-page marketing site built with React, featuring video testimonials, an ROI calculator, FAQ sections, and booking modal integration for lead capture.

The core value proposition is a pay-per-qualified-appointment model where contractors receive exclusive, pre-screened leads in their service area.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite
- **Routing**: React Router DOM for client-side navigation with pages for landing, testimonials, privacy policy, terms of service, and 404
- **State Management**: React Query (@tanstack/react-query) for server state, React useState for local component state
- **Styling**: Tailwind CSS with CSS variables for theming, using a dark slate/gold premium color scheme
- **UI Components**: shadcn/ui component library built on Radix UI primitives, providing accessible, customizable components

### Component Structure
- **Page Components**: Located in `src/pages/` - Index, Testimonials, PrivacyPolicy, TermsOfService, NotFound
- **Feature Components**: Located in `src/components/` - Hero, Navbar, FAQ, ROICalculator, SystemProcess, WhoWeServe, GrowthInfrastructure, FinalCTA, Footer, BookingModal
- **UI Primitives**: Located in `src/components/ui/` - Reusable shadcn/ui components (Button, Dialog, Accordion, Card, etc.)

### Design Patterns
- **Lazy Loading**: BookingModal is lazy-loaded using React.lazy() and Suspense to optimize initial bundle size
- **Component Composition**: Parent components pass callback props (onBookClick) down to children for modal triggering
- **CSS Variables**: Theme colors defined in HSL format in index.css, consumed via Tailwind's CSS variable system
- **Path Aliases**: Uses `@/` alias mapped to `src/` directory for clean imports

### Build Configuration
- **Bundler**: Vite with React SWC plugin for fast compilation
- **Code Splitting**: Manual chunks configured for vendor (react, react-dom, react-router-dom), UI components, charts (recharts), and animations
- **Development Tools**: ESLint with TypeScript support, lovable-tagger plugin for development mode

### Theming
The application uses a premium dark theme with:
- Deep slate blue background (#1e293b range)
- Gold/amber primary accent (#eab308 range)
- Glassmorphism effects with backdrop blur
- Custom CSS animations for glow effects and transitions

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Full suite of accessible primitives (Dialog, Accordion, Popover, Dropdown, etc.)
- **Embla Carousel**: Image/content carousels with autoplay plugin
- **Recharts**: Data visualization for ROI calculator charts
- **Lucide React**: Icon library
- **cmdk**: Command palette component
- **react-day-picker**: Date selection component
- **vaul**: Drawer component

### Media Storage
- External video and image assets hosted on Google Cloud Storage (storage.googleapis.com/msgsndr/)
- External video content from pinnacleroofingmarketing.com

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation integration
- **zod**: Schema validation (implied by resolvers dependency)

### Styling Dependencies
- **tailwindcss-animate**: Animation utilities
- **class-variance-authority**: Component variant management
- **clsx/tailwind-merge**: Conditional class composition

### No Backend/Database
This is currently a static frontend application. There is no database, API server, or authentication system implemented. The BookingModal likely integrates with an external booking/CRM service (based on the iframe pattern seen in similar implementations).