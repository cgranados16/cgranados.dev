import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@cgranados.dev/ui';
import { cn } from '@cgranados.dev/ui/utils';

export type FeaturesCardProps = {
  title: string;
  description?: string;
  color?: string;
  children: React.ReactNode;
};

export function FeaturesCard({
  title,
  description,
  color,
  children,
}: FeaturesCardProps) {
  const textColor = color ? `text-${color}-600` : null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className={cn(`font-bold text-9xl text-center`, textColor)}>
          {children}
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
