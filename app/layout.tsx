import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jivan Parajuli - Portfolio",
  description: "Professional portfolio showcasing projects and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}