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
          'bg-gradient-to-tr from-[#2e020e] to-blue-950 min-h-svh text-lg text-slate-300 pt-10')
        }
      >
        <Header />
        <main className="w-10/12 mx-auto backdrop-opacity-50 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
