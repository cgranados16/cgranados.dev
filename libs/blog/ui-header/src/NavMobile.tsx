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
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

const MenuFooter = () => (
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
);

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const config = createHeaderConfig('blog');

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Hamburger
            toggled={isOpen}
            size={25}
            toggle={setOpen}
            label="Main Navigation Menu"
          />
        </SheetTrigger>
        <SheetContent ref={ref}>
          <div className="mb-12 flex flex-col">
            {config.links.map((link) => (
              <div key={link.label}>
                <a href={link.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                  >
                    {link.label}
                  </Button>
                </a>
                <hr />
              </div>
            ))}
          </div>
          <MenuFooter />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
