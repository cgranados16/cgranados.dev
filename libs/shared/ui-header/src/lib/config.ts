import { siteConfig } from '@cgranados.dev/shared/ui/lib/site';

export interface AppConfig {
  name: string;
  baseUrl: string;
  isDevelopment: boolean;
}

export interface HeaderLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface HeaderConfig {
  title: string;
  links: HeaderLink[];
  icons: Array<{
    name: string;
    href: string;
  }>;
}

// Environment detection - works for both Next.js and Astro
const isDevelopment =
  typeof process !== 'undefined' &&
  (process.env['NODE_ENV'] === 'development' ||
   process.env['ASTRO_DEV'] === 'true' ||
   typeof window !== 'undefined' && window.location.hostname === 'localhost');

// Base URLs based on environment
const getBaseUrl = (app: 'portfolio' | 'blog'): string => {
  if (isDevelopment) {
    // Development URLs
    if (app === 'portfolio') {
      return process.env['NEXT_PUBLIC_APP_PORTFOLIO_URL'] || 'http://localhost:3000';
    }
    return process.env['ASTRO_DEV_URL'] || 'http://localhost:4321';
  }

  // Production URLs
  if (app === 'portfolio') {
    return process.env['NEXT_PUBLIC_APP_PORTFOLIO_URL'] || 'https://www.cgranados.dev';
  }
  return process.env['ASTRO_PROD_URL'] || 'https://cgranados-blog.vercel.app';
};

// App configurations
export const appConfigs: Record<'portfolio' | 'blog', AppConfig> = {
  portfolio: {
    name: 'Portfolio',
    baseUrl: getBaseUrl('portfolio'),
    isDevelopment,
  },
  blog: {
    name: 'Blog',
    baseUrl: getBaseUrl('blog'),
    isDevelopment,
  },
};

// Create header configuration
export const createHeaderConfig = (currentApp?: 'portfolio' | 'blog'): HeaderConfig => {
  const portfolioUrl = appConfigs.portfolio.baseUrl;
  const blogUrl = `${appConfigs.blog.baseUrl}/blog`;

  return {
    title: siteConfig.name,
    links: [
      {
        href: portfolioUrl,
        label: 'Home',
        external: currentApp === 'blog',
      },
      {
        href: blogUrl,
        label: 'Blog',
        external: currentApp === 'portfolio',
      },
    ],
    icons: [
      {
        name: 'github',
        href: siteConfig.links.github,
      },
    ],
  };
};

// Legacy export for backward compatibility
export const metadata = createHeaderConfig();
