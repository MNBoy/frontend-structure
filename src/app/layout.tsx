import { Header } from '@/components/common';
import { ClientProvider } from '@/components/providers';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Candid Mock',
  description: 'Candid Mock website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ClientProvider>
          <Header />

          <section className='flex-1 flex'>{children}</section>
        </ClientProvider>
      </body>
    </html>
  );
}
