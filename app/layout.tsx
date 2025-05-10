import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import BackgroundMask from './components/home/BackgroundMask';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  icons: {
    icon: '/portfolio-new/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased font-poppins text-text-primary bg-bg-primary scrollbar-light`}
      >
        <BackgroundMask />

        {children}
        <NextTopLoader showSpinner={false} />
      </body>
    </html>
  );
}
