import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Zeeshan Yousaf | Senior Software Engineer & WordPress Core',
  description:
    'Senior Software Engineer with 4+ years of expertise in WordPress Core, custom OOP PHP plugin architectures, API integrations (QuickBooks, Xero, Stripe), and modern headless React web applications.',
  keywords: [
    'Muhammad Zeeshan Yousaf',
    'Senior Software Engineer',
    'Senior WordPress Engineer',
    'PHP OOP',
    'React',
    'Next.js',
    'WooCommerce',
    'Shopify',
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
