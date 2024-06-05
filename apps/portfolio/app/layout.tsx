import '@cgranados.dev/shared/ui/tailwind.css';
import { Header, Footer } from '@cgranados.dev/shared/ui';
import { ThemeProvider, ModeToggle } from '@cgranados.dev/portfolio/ui';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@cgranados.dev/shared/ui';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Carlos Granados',
  description: 'Generated by create-nx-workspace',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header modeToggle={<ModeToggle />} />
            <div className="flex-1">{children}</div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
