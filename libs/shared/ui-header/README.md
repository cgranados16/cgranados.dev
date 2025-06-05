# Shared UI Header

A unified header component system that works with both Next.js and Astro applications, supporting environment-based configuration for better development experience.

## Features

- 🌍 Environment-aware URLs (development vs production)
- 🔄 Framework agnostic (Next.js and Astro support)
- 🎯 Smart link handling (internal vs external)
- 📱 Responsive design with mobile navigation
- 🎨 Consistent styling across applications
- 🔧 TypeScript support with proper type safety
- 📦 Clean import paths and optimized bundle size

## Recent Improvements

- ✅ Fixed TypeScript binding errors with proper prop typing
- ✅ Added `esModuleInterop` for better React import compatibility
- ✅ Updated mobile navigation to use the unified configuration system
- ✅ Removed hardcoded environment variables in favor of the dynamic config
- ✅ Simplified import paths across all ui-header libraries
- ✅ Unified link handling logic for both internal and external navigation

## Configuration

### Environment Variables

Create environment files in your apps to configure URLs:

**For development:**

```env
# Development URLs (automatically detected)
NEXT_PUBLIC_APP_PORTFOLIO_URL=http://localhost:3000
ASTRO_DEV_URL=http://localhost:4321
```

**For production:**

```env
# Production URLs
NEXT_PUBLIC_APP_PORTFOLIO_URL=https://www.cgranados.dev
ASTRO_PROD_URL=https://cgranados-blog.vercel.app
```

### Usage in Next.js (Portfolio)

```tsx
import { Header } from '@cgranados.dev/shared/ui-header';
import { ModeToggle } from './mode-toggle';
import { NavMobile } from './nav-mobile';

export const MyHeader = () => {
  return <Header currentApp="portfolio" ModeToggleComponent={ModeToggle} NavMobileComponent={NavMobile} />;
};
```

### Usage in Astro (Blog)

```astro
---
import { Header } from '@cgranados.dev/shared/ui-header';
import { ModeToggle } from './ModeToggle';
import { NavMobile } from './NavMobile';
---

<Header currentApp="blog" ModeToggleComponent={ModeToggle} NavMobileComponent={NavMobile} client:load />
```

## API Reference

### Header Component

| Prop                  | Type                    | Default       | Description                       |
| --------------------- | ----------------------- | ------------- | --------------------------------- |
| `currentApp`          | `'portfolio' \| 'blog'` | `'portfolio'` | Current application context       |
| `className`           | `string`                | `''`          | Additional CSS classes            |
| `LinkComponent`       | `React.ComponentType`   | -             | Custom link component (for Astro) |
| `ModeToggleComponent` | `React.ComponentType`   | -             | Dark/light mode toggle            |
| `NavMobileComponent`  | `React.ComponentType`   | -             | Mobile navigation component       |

### Configuration Functions

```tsx
import { createHeaderConfig, appConfigs } from '@cgranados.dev/shared/ui-header';

// Get configuration for specific app
const config = createHeaderConfig('blog');

// Access app-specific settings
const blogUrl = appConfigs.blog.baseUrl;
const isLocal = appConfigs.blog.isDevelopment;
```

## Benefits

1. **Better DX**: Automatic localhost URLs in development
2. **Reduced Duplication**: Single header component for both apps
3. **Environment Awareness**: Seamless development to production workflow
4. **Framework Flexibility**: Works with different frameworks without modification
5. **Type Safety**: Full TypeScript support with proper interfaces
6. **Clean Architecture**: Centralized configuration with consistent APIs
7. **Performance**: Optimized imports and minimal bundle impact

## Migration

The old `metadata` export is still available for backward compatibility, but it's recommended to use the new `createHeaderConfig()` function for better flexibility.

### Breaking Changes Fixed

- ✅ `import.meta.env` usage replaced with unified configuration
- ✅ Direct component import paths simplified
- ✅ TypeScript binding errors resolved
- ✅ React import compatibility improved
