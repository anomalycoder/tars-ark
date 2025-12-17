import type {Metadata} from 'next';
import { Inter, Poppins, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// Configure Inter for body text
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Configure Poppins for headlines
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Configure Space Grotesk for hero sections
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ARK Hardware Platform',
  description: 'India\'s First Hardware Delivery Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png?v=3" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png?v=3" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
