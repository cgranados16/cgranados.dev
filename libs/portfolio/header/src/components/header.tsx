import { Logo, metadata } from '@shared/header';
import { Button, SocialMediaIcons } from '@shared/ui';
import { ModeToggle } from './mode-toggle';
import { NavMobile } from './nav-mobile';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-2">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:gap-x-2">
          {metadata.links.map((link) => (
            <a href={link.href} key={link.label}>
              <Button variant="ghost">{link.label}</Button>
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <SocialMediaIcons />
          <ModeToggle />
        </div>
        <NavMobile />
      </div>
    </header>
  );
};
