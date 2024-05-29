'use client';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Squash as Hamburger } from 'hamburger-react';
import { Button } from '@shared/ui';
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '@shared/ui';
import { SocialMediaIcons } from '@shared/ui';

import Link from 'next/link';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </SheetTrigger>
        <SheetContent ref={ref}>
          <div className="flex flex-col mb-12">
            <Link href={process.env.NEXT_PUBLIC_APP_BLOG_URL} framework="astro">
              <Button variant="ghost">Blog</Button>
            </Link>
            <hr />
          </div>

          <SheetFooter>
            <div className="flex items-center justify-center">
              <p className="text-center text-sm leading-loose text-muted-foreground mr-2 [&:not(:first-child)]:mt-6">
                Follow me on:
              </p>
              <div>Caca</div>
            </div>
            <div className="flex flex-1 text-muted-foreground">
              <SocialMediaIcons />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
