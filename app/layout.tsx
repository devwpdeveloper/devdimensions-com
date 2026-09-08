import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '../components/smooth-scroll';

export const metadata: Metadata = {
  title: 'DevDimensions – Builds Enterprise Software Solutions',
  description:
    'Build your dream team with DevDimensions. We connect ambitious businesses with exceptional technology talent and product teams.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
