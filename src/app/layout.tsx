import '@/styles/global.scss';
import type { Metadata } from 'next';
import { comfortaa, yeseva } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HM Candler',
  description: 'Створіть атмосферу затишку та гармонії!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${comfortaa.variable} ${yeseva.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
