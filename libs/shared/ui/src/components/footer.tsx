'use client';
import Link from 'next/link';
import { siteConfig } from '@config';
import { Icons } from './icons/icons';
import { cn } from '../lib/utils';
import { buttonVariants } from './button/button';

export const Footer = () => {
  return (
    <footer className="py-6 md:py-0 z-50">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            cgranados16
          </Link>
          . The source code is available on{' '}
          <a
            href={siteConfig.links.github_source_code}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left mr-2">
            Follow me on:
          </p>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0 text-muted-foreground mr-2'
            )}
          >
            <Icons.Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0 text-muted-foreground'
            )}
          >
            <Icons.GitHub className="h-6 w-6" />
            <span className="sr-only">Github</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
