import './globals.scss';
import type { Metadata } from 'next';
import { Asap } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import Header from '@/components/header/Header';
import Provider from '../components/Provider';

const asap = Asap({
  variable: '--asap-font',
  subsets: [ 'latin' ],
});

export const metadata: Metadata = {
  title: 'KBOOM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={ asap.variable }>
        <Provider>
          <div className='flex flex-col font-asap'>
            <Header />
            <div className='flex'>
              <Navigation />
              <main className='w-full min-h-full'>
                {children}
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
