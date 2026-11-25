import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Zeeshan Yousaf | Senior WordPress & Mobile Product Engineer',
  description:
    'Senior Software Engineer with 4+ years of expertise in commercial WordPress software products, OOP PHP plugin architectures, Headless WordPress + React Native mobile apps, Shopify Liquid, API integrations, and AI-assisted rapid product development.',
  keywords: [
    'Muhammad Zeeshan Yousaf',
    'Senior Software Engineer',
    'Senior WordPress & Mobile Product Engineer',
    'Commercial WordPress Products',
    'React Native',
    'Headless WordPress',
    'WordPress REST API',
    'PHP OOP',
    'WooCommerce',
    'Shopify Liquid',
    'AI-Assisted Development',
    'QuickBooks API',
    'Stripe API',
    'Lahore Pakistan',
  ],
  authors: [{ name: 'Muhammad Zeeshan Yousaf' }],
  creator: 'Muhammad Zeeshan Yousaf',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="minimal" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#08090b" />
      </head>
      <body className="bg-bg text-fg antialiased selection:bg-accent selection:text-bg">
        {children}
      </body>
    </html>
  );
}
