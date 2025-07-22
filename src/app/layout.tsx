// [本頁目的]：全域Root Layout

import type { Metadata } from 'next';
import '../styles/global.scss';
import Footer from '@/components/footer/Footer';
import React from 'react';

export const metadata: Metadata = {
  title: 'WOMO首頁(demo)',
  description: '練習WOMO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
