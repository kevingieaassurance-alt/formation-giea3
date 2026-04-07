import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GIEA Formation",
  description: "Formation commerciale GIEA Paris 16",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
