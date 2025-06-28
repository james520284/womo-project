import type { Metadata } from "next";
import "../styles/global.scss";

import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "WOMO首頁(demo)",
  description: "練習WOMO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
