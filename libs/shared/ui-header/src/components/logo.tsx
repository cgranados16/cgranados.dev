import { buttonVariants, cn } from '@cgranados.dev/shared/ui';
import { TentTree } from 'lucide-react';
import { createHeaderConfig } from '../lib/config';

interface LogoProps {
  currentApp?: 'portfolio' | 'blog';
  className?: string;
  href?: string;
  // For Astro components, we can pass a custom link component
  LinkComponent?: React.ComponentType<{
    href: string;
    className?: string;
    children: React.ReactNode;
  }>;
}

export const Logo: React.FC<LogoProps> = ({
  currentApp = 'portfolio',
  className,
  href,
  LinkComponent,
}) => {
  const config = createHeaderConfig(currentApp);
  const logoHref =
    href || config.links.find((link) => link.label === 'Home')?.href || '/';

  const logoContent = (
    <>
      <TentTree />
      <span className="text-lg font-bold sm:inline-block">{config.title}</span>
    </>
  );

  const logoClassName = cn(
    buttonVariants({
      variant: 'link',
    }),
    'flex items-center space-x-2 text-current',
    className,
  );

  // If a custom LinkComponent is provided (for Astro), use it
  if (LinkComponent) {
    return (
      <LinkComponent href={logoHref} className={logoClassName}>
        {logoContent}
      </LinkComponent>
    );
  }

  // Default to Next.js Link for backward compatibility
  // This will be dynamically imported only when needed
  if (typeof window === 'undefined') {
    // Server-side: use a regular anchor tag to avoid import issues
    return (
      <a href={logoHref} className={logoClassName}>
        {logoContent}
      </a>
    );
  }

  // Client-side: try to use Next.js Link if available
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Link = require('next/link').default;
    return (
      <Link href={logoHref} className={logoClassName}>
        {logoContent}
      </Link>
    );
  } catch {
    // Fallback to regular anchor tag
    return (
      <a href={logoHref} className={logoClassName}>
        {logoContent}
      </a>
    );
  }
};
