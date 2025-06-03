import { forwardRef, Ref } from 'react';
import { cn } from '@cgranados.dev/shared/ui';

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
  // Define color mapping to ensure proper Tailwind classes
  const colorMap: Record<string, string> = {
    blue: 'text-blue-600',
    emerald: 'text-emerald-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    pink: 'text-pink-600',
    indigo: 'text-indigo-600',
    cyan: 'text-cyan-600',
    orange: 'text-orange-600',
  };
  
  const textColor = color && colorMap[color] ? colorMap[color] : 'text-primary';
  return <span className={cn(textColor, 'font-bold')}>{text}</span>;
};

export { Title, TitleHighlight };
