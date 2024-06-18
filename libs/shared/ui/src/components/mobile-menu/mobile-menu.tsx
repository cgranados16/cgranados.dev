'use client';
import { useRef, useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from '../sheet/sheet';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { Button } from '../button';

export const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <Sheet>
      <SheetTrigger>
        <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
      </SheetTrigger>
      <SheetContent ref={ref}>
        <div className="flex flex-col mb-12">
          <Link></Link>
          <Button variant="ghost">Blog</Button>
          <hr />
        </div>
      </SheetContent>
    </Sheet>
  );
};
