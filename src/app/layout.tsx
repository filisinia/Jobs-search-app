import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jobs search app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={
          (inter.className,
          'bg-gradient-to-tr from-rose-950 to-blue-950 min-h-svh text-lg text-slate-300')
        }
      >
        <Header />
        <main className="w-10/12 mx-auto pt-12 backdrop-opacity-50">
          {children}
        </main>
      </body>
    </html>
  );
}
