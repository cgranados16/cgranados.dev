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
  const blogUrl = process.env.NEXT_PUBLIC_APP_BLOG_URL || '';
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
        </SheetTrigger>
        <SheetContent ref={ref}>
          <div className="flex flex-col mb-12">
            <Link href={blogUrl}>
              <Button variant="ghost">Blog</Button>
            </Link>
            <hr />
          </div>

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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
