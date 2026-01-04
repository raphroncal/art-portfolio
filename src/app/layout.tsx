import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petarht",
  description: "Art portfolio website for artist petahrt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
