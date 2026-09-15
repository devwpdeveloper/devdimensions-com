import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '../components/smooth-scroll';
import { SiteMotion } from '../components/site-motion';

export const metadata: Metadata = {
  title: 'DevDimensions – Builds Enterprise Software Solutions',
  description:
    'Build your dream team with DevDimensions. We connect ambitious businesses with exceptional technology talent and product teams.',
  icons: {
    icon: [{ url: '/favicon.svg?v=2', type: 'image/svg+xml', sizes: '200x200' }],
    shortcut: '/favicon.svg?v=2',
    apple: '/favicon.svg?v=2',
  },
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
      <head>
        <link rel="preload" href="/assets/Gilroy-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/Gilroy-Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/Gilroy-SemiBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        <SmoothScrollProvider>
          <SiteMotion />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
