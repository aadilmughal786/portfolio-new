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
  title: {
    default: 'Home | Aadil Mugal Portfolio',
    template: '%s | Aadil Mugal Portfolio',
  },
  icons: {
    icon: '/portfolio-new/favicon.png',
  },
  description: 'Welcome to the portfolio site of Aadil Mugal.',
  openGraph: {
    title: 'Aadil Mugal Portfolio',
    description: 'Showcasing projects and skills of Aadil Mugal.',
    url: 'https://aadilmughal786.github.io/portfolio-new/',
    type: 'website',
    images: [
      {
        url: 'https://aadilmughal786.github.io/portfolio-new/images/card.png',
        width: 1200,
        height: 630,
        alt: 'Aadil Mugal Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aadil Mugal Portfolio',
    description: 'Showcasing projects and skills of Aadil Mugal.',
    images: ['https://aadilmughal786.github.io/portfolio-new/images/card.png'],
  },
  // ...other meta fields
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
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
