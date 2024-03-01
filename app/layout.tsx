import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { monumentExtended } from "@/utils/fonts";

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
      <body
        className={`${monumentExtended.className} bg-primary`}
      >
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
