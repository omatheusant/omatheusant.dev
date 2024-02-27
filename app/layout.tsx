import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const font = localFont({
  src: "../public/assets/fonts/MonumentExtended.otf",
});

export const metadata: Metadata = {
  title: "Matheus Sant",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
