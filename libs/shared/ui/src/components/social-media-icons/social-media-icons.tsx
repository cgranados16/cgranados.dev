import { siteConfig } from '@config';
import Link from 'next/link';
import { buttonVariants } from '../button/button';
import { Icons } from '../icons/icons';
import { cn } from '../../lib/utils';

export const SocialMediaIcons = () => {
  return (
    <>
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
        <Icons.GitHub className="h-5 w-5" />
        <span className="sr-only">Github</span>
      </Link>
      <Link
        href={siteConfig.links.instagram}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({
            variant: 'ghost',
          }),
          'w-9 px-0'
        )}
      >
        <Icons.Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
    </>
  );
};

export default SocialMediaIcons;
