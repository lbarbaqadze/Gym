import './globals.css';
import React from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "CrossArena - Sport",
  icons: "/icons/favicon.jpg",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
