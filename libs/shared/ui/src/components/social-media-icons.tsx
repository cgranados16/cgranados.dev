import { siteConfig } from '@cgranados.dev/shared/ui/lib/site';
import { buttonVariants } from './button';
import { getIcon } from './icons';
import { cn } from '../lib/utils';

interface IconProps {
  label: string;
  link: string;
}
function renderIcon(props: IconProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className={cn(
        buttonVariants({
          variant: 'ghost',
        }),
        'w-9 px-0'
      )}
    >
      {getIcon(props.label, 'h-5 w-5')}
      <span className="sr-only">{props.label}</span>
    </a>
  );
}

export const SocialMediaIcons = () => {
  return (
    <>
      {siteConfig.icons.map((icon) => {
        return <div key={icon.label}>{renderIcon(icon)}</div>;
      })}
    </>
  );
};
