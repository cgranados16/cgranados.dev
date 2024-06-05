'use client';
import * as React from 'react';
import { TentTree } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../button/button';
import { Icons } from '../icons/icons';
import { siteConfig } from '../../lib/site';

type HeaderProps = {
  modeToggle: React.ReactNode;
};
export const Header = (props: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex py-2 items-center justify-between">
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
            <span className="font-bold sm:inline-block text-lg">
              cgranados.dev
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12"></div>
        <div className="lg:flex lg:flex-1 lg:justify-end space-x-2">
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
          <div>{props.modeToggle}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
