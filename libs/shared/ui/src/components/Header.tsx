'use client';
import { buttonVariants } from './ui/button';
import { TentTree } from 'lucide-react';
import { Icons } from './Icons';
import Link from 'next/link';
import { cn } from '../utils';
import { siteConfig } from '@cgranados.dev/shared/config';
import { ModeToggle } from './ModeToggle';

export const Header = () => {
  return (
    <header className="border-b">
      <nav
        className="container flex py-2 items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: 'link',
              }),
              'flex items-center space-x-2 text-current'
            )}
          >
            <TentTree />
            <span className="hidden font-bold sm:inline-block text-lg">
              cgranados.dev
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12"></div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0'
            )}
          >
            <Icons.GitHub className="h-6 w-6" />
            <span className="sr-only">Github</span>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
