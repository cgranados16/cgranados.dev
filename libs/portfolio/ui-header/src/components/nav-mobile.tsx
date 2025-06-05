'use client';
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
  SocialMediaIcons,
} from '@cgranados.dev/shared/ui';
import { createHeaderConfig } from '@cgranados.dev/shared/ui-header';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const config = createHeaderConfig('portfolio');

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
        </SheetTrigger>
        <SheetContent ref={ref}>
          <div className="mb-12 flex flex-col">
            {config.links.map((link) => (
              <div key={link.label}>
                {link.external || link.href.startsWith('http') ? (
                  <a href={link.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                    >
                      {link.label}
                    </Button>
                  </a>
                ) : (
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                    >
                      {link.label}
                    </Button>
                  </Link>
                )}
                <hr />
              </div>
            ))}
          </div>

          <SheetFooter>
            <div className="flex items-center justify-center">
              <p className="text-muted-foreground mr-2 text-center text-sm leading-loose not-first:mt-6">
                Follow me on:
              </p>
              <div className="text-muted-foreground flex">
                <SocialMediaIcons />
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
