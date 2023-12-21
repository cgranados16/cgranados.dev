import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@cgranados.dev/ui';
import { cn } from '@cgranados.dev/ui/utils';
export function FeaturesCard({ title, description, color, children }) {
  const textColor = color ? `text-${color}-600` : null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
