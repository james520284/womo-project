import type { Metadata } from 'next';
import 'antd/dist/reset.css';
import '../styles/global.scss';
import React from 'react';

export const metadata: Metadata = {
  title: 'WOMO(demo)',
  description: '皇冠版',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
