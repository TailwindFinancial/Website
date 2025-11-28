# Tailwind

A vertical financial platform for multi-party commerce.

## Documentation

- [Contributing Guidelines](CONTRIBUTING.md) - Workflow and standards for team contributions
- [Architecture Documentation](ARCHITECTURE.md) - Technical architecture and system design
- [Pull Request Template](.github/pull_request_template.md) - Standard PR format

## Overview

Tailwind is a pre-launch product website built for institutional marketing during the pre-seed phase. The site architecture follows enterprise design standards with a focus on conversion optimization and regulatory compliance.

## Technology Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```
/app                    # Next.js application routes
  /company             # Company information
  /faq                 # Frequently asked questions
  /product             # Product documentation
  /solutions           # Use case demonstrations
  layout.tsx           # Root application layout
  page.tsx             # Homepage
  globals.css          # Global styles

/components            # React components
  DashboardExperience.tsx
  EnterprisePower.tsx
  FeaturesModern.tsx
  FooterSlash.tsx
  HowItWorks.tsx
  NavigationSlash.tsx
  RewardsIncentives.tsx
  SecureByDesign.tsx
  SecurityTrust.tsx
  WaitlistCTA.tsx

/public                # Static assets
```

## Development Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm start
```

The application runs on `http://localhost:3000`.

## Design System

### Color Palette

- Primary: `#5DD9D2`
- Background: `#000000`
- Surface: `#0D0D0D`
- Text Primary: `#FFFFFF`
- Text Secondary: `#A3A3A3`
- Text Tertiary: `#737373`
- Accent Gold: `#C9A961` to `#D4B876`

### Typography

- Display: Fraunces, 72-96px
- Heading: Fraunces, 48-72px
- Body: System Sans, 18-20px
- Label: System Sans, 12px

### Spacing

- Section padding: 160px vertical
- Container max-width: 1440px
- Horizontal padding: 80px desktop, 24px mobile
- Border radius: 24px

## Contribution Guidelines

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

### Branch Naming

Use the following prefixes:

- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `style/` - Visual/CSS changes
- `perf/` - Performance improvements

Example: `feature/waitlist-integration`

### Commit Messages

Follow conventional commit format:

```
type(scope): subject

body (optional)
```

Types:
- `feat` - New feature
- `fix` - Bug fix
- `refactor` - Code restructuring
- `style` - Visual changes
- `perf` - Performance optimization
- `docs` - Documentation
- `chore` - Maintenance tasks

Example:
```
feat(waitlist): add email validation logic

Implement client-side validation for waitlist form
with error state handling and success feedback.
```

### Code Standards

1. All TypeScript files must pass type checking without errors.
2. Component files require explicit type definitions for props.
3. CSS classes follow Tailwind utility-first conventions.
4. No inline styles except for dynamic values.
5. Animation durations must use standard cubic-bezier easing.
6. All user-facing text must follow brand voice guidelines.

### Pull Request Process

See the [Pull Request Template](.github/pull_request_template.md) for the standard format.

1. Create feature branch from `main`.
2. Complete implementation with tests if applicable.
3. Run build command to verify no errors.
4. Push branch and create pull request using template.
5. Request review from at least one team member.
6. Address all review comments.
7. Squash and merge after approval.

### Testing Requirements

Before submitting a pull request:

1. Verify the application builds without errors.
2. Test responsive behavior at mobile, tablet, and desktop breakpoints.
3. Verify all navigation links function correctly.
4. Test form submissions and state management.
5. Check browser console for warnings or errors.

### Code Review Checklist

Reviewers must verify:

- Type safety is maintained throughout changes.
- Component structure follows established patterns.
- No console logs or debug code remains.
- Responsive design works across breakpoints.
- Animations are performant and appropriate.
- Accessibility standards are maintained.
- Code follows existing style conventions.

For complete code standards and testing requirements, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Deployment

The application deploys automatically on merge to `main` branch. Deployment target is configured in Vercel project settings.

### Pre-Deployment Checklist

- Build completes without errors.
- All environment variables are configured.
- Type checking passes.
- No console warnings in production build.

## Environment Configuration

Required environment variables:

```
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

Contact technical lead for production credentials.

## Architecture Decisions

For detailed architecture documentation, see [ARCHITECTURE.md](ARCHITECTURE.md).

### Routing Strategy

File-based routing through Next.js App Router. Each route corresponds to a directory in `/app`.

### State Management

Client-side state managed through React hooks. No global state library required for current scope.

### Styling Approach

Utility-first CSS through Tailwind. Component-specific styles are colocated in component files.

### Animation Strategy

Framer Motion for complex animations. CSS transitions for simple state changes.

## Performance Targets

- First Contentful Paint: Under 1.5s
- Time to Interactive: Under 3.0s
- Lighthouse Performance Score: Above 90

## Browser Support

- Chrome: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Edge: Last 2 versions

## Security Considerations

- All form inputs must be validated client-side and server-side.
- User data must be transmitted over HTTPS.
- No sensitive credentials in client-side code.
- Environment variables must never be committed.

## Compliance Requirements

All marketing content must include:

- Feature availability disclaimers
- Banking partner disclosures
- FDIC insurance information
- Privacy policy references
- Terms of service references

## Contact

For technical questions, contact the engineering team lead.
For design questions, contact the product design lead.
For compliance questions, contact the legal advisor.

## License

Proprietary. Tailwind Financial, Inc. All rights reserved.
