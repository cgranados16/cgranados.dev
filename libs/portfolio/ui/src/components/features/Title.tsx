import { forwardRef, Ref } from 'react';
import { cn } from '../../../../../shared/ui/src/utils';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = forwardRef(
  ({ children, className }: TitleProps, ref: Ref<HTMLDivElement>) => {
    return (
      <h2
        className={cn(
          'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] w-fit',
          className,
        )}
        ref={ref}
      >
        {children}
      </h2>
    );
  },
);

type TitleHighlightProps = {
  text: string;
  color?: string;
};

const TitleHighlight = ({ text, color }: TitleHighlightProps) => {
  let textColor = color ? `text-${color}-600` : null;
  return <span className={cn(textColor)}>{text}</span>;
};

export { Title, TitleHighlight };
