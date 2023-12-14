'use client';

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from '@cgranados.dev/ui';
import Image from 'next/image';

export function AboutMe() {
  return (
    <section className="pb-10 flex justify-">
      <PageHeader>
        <PageHeaderHeading>About Me</PageHeaderHeading>
        <PageHeaderDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum
          voluptas sint. Cupiditate maiores iusto nobis doloremque
          necessitatibus facere iste tempora error repudiandae veniam animi,
          aliquid, dignissimos itaque facilis? Quae.
        </PageHeaderDescription>
      </PageHeader>
      <div className="px-4 pt-8 md:pt-12">
        <Image
          src="/ig.jpg"
          alt="me"
          width="300"
          height="200"
          className="rounded-3xl w-auto "
        />
      </div>
    </section>
  );
}
