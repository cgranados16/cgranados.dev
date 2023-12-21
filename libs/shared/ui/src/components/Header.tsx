'use client';
import * as React from 'react';
import { buttonVariants } from './ui/button';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { TentTree, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Icons } from './Icons';
import Link from 'next/link';
import { cn } from '../utils';
import { siteConfig } from '@cgranados.dev/shared/config';

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
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
              'flex items-center space-x-2 text-current',
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
              'w-9 px-0',
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
