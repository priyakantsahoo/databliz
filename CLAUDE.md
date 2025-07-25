# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on localhost:8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Technology Stack

This is a React TypeScript application built with:
- **Vite** as build tool and dev server
- **React 18** with TypeScript
- **React Router DOM** for client-side routing
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for styling with custom cerebrum color palette
- **React Query** for state management and data fetching
- **React Hook Form** with Zod validation
- **Lucide React** for icons

## Project Architecture

### Routing Structure
The app uses React Router with these main routes defined in `src/App.tsx`:
- `/` - Home page (Index component)
- `/features` - Features page  
- `/use-cases` - Use cases page
- `/pricing` and `/security` - Currently redirect to NotFound
- `*` - Catch-all NotFound route

**Important**: Add all custom routes ABOVE the catch-all "*" route in App.tsx.

### Component Organization

**Page Components** (`src/pages/`):
- `Index.tsx` - Main landing page with Hero, ProblemSolution, Benefits, FeatureHighlights, Testimonials sections
- `Features.tsx`, `UseCases.tsx` - Feature pages
- `NotFound.tsx` - 404 page

**Layout Components** (`src/components/`):
- `Navbar.tsx` - Main navigation
- `Footer.tsx` - Site footer
- `Hero.tsx` - Landing page hero section
- `ProblemSolution.tsx`, `Benefits.tsx`, `FeatureHighlights.tsx`, `Testimonials.tsx` - Landing page sections

**UI Components** (`src/components/ui/`):
- Complete shadcn/ui component library
- Follows shadcn conventions with Tailwind CSS variants
- Components include proper TypeScript interfaces and forwardRef patterns

### Styling System

**Custom Brand Colors**:
- Primary brand color: `cerebrum` palette (blue/teal spectrum from 50-950) - used for Datablize branding
- Uses CSS custom properties with HSL color space
- Custom animations: fade-in, fade-out, accordion animations
- Typography: Inter (sans) and Outfit (display) fonts

**Tailwind Configuration**:
- Custom container settings with 2xl breakpoint at 1400px
- Border radius uses CSS custom properties for consistency
- Dark mode support via class strategy

### Path Aliases
- `@/` maps to `src/` directory
- `@/components` for components
- `@/lib` for utilities  
- `@/hooks` for custom hooks
- `@/pages` for page components

### Development Notes

**Component Development**:
- Use existing shadcn/ui components from `src/components/ui/`
- Follow the established pattern of importing from `@/components/ui/[component]`
- New components should use Tailwind classes and the cerebrum color palette
- Icons should use Lucide React

**State Management**:
- React Query is configured globally in App.tsx
- Toast notifications available via `@/components/ui/toaster` and `@/components/ui/sonner`
- Tooltip provider wraps the entire app

**Vite Configuration**:
- Development server runs on port 8080 with host "::" (IPv6/IPv4)
- Uses SWC for fast React compilation
- Lovable tagger plugin enabled in development mode only
- Path aliases configured for @ imports

**Adding New Routes**:
1. Create page component in `src/pages/`
2. Import and add route in `src/App.tsx` ABOVE the catch-all route
3. Update navigation in `src/components/Navbar.tsx` if needed