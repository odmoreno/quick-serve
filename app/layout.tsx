import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiosco Next.js con app router y prisma",
  description: "Quiosco Next.js con app router y prisma",
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
