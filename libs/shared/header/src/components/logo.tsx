import Link from 'next/link';
import { TentTree } from 'lucide-react';
import { metadata } from '../lib/metadata';
import { buttonVariants } from '@cgranados.dev/shared/ui';
import { cn } from '@cgranados.dev/shared/ui';

export const Logo = () => {
  const portfolioUrl = process.env.NEXT_PUBLIC_APP_PORTFOLIO_URL || '';
  return (
    <Link
      href={portfolioUrl}
      className={cn(
        buttonVariants({
          variant: 'link',
        }),
        'flex items-center space-x-2 text-current'
      )}
    >
      <TentTree />
      <span className="font-bold sm:inline-block text-lg">
        {metadata.title}
      </span>
    </Link>
  );
};
