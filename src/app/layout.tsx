import type { Metadata } from "next";
import "../styles/global.scss";


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
        {children}
      </body>
    </html>
  );
}
