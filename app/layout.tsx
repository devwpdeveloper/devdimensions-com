import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevDimensions – Builds Enterprise Software Solutions',
  description:
    'Build your dream team with DevDimensions. We connect ambitious businesses with exceptional technology talent and product teams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
