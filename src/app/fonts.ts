import { Yeseva_One, Comfortaa } from 'next/font/google';

export const yeseva = Yeseva_One({
  weight: ['400'],
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-yeseva',
});

export const comfortaa = Comfortaa({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
});
