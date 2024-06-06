import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Squash as Hamburger } from 'hamburger-react';
import { Button } from '@cgranados.dev/shared/ui';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@cgranados.dev/shared/ui';
import { SocialMediaIcons } from '@cgranados.dev/shared/ui';

const MenuFooter = () => (
  <SheetFooter>
    <div className="flex items-center justify-center">
      <p className="text-center text-sm leading-loose text-muted-foreground mr-2 [&:not(:first-child)]:mt-6">
        Follow me on:
      </p>
      <div className="flex text-muted-foreground">
        <SocialMediaIcons />
      </div>
    </div>
  </SheetFooter>
);

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
        </SheetTrigger>
        <SheetContent ref={ref}>
          <div className="flex flex-col mb-12">
            <a href={import.meta.env.PUBLIC_APP_BLOG_URL}>
              <Button
                variant="ghost"
                className="w-full text-left justify-start"
              >
                Blog
              </Button>
            </a>
            <hr />
          </div>
          <MenuFooter />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
