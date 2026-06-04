import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUKI — Diseño & Iluminación B2B",
  description: "Catálogo B2B de iluminación y mobiliario de alto diseño. Piezas curadas para espacios que inspiran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className={`min-h-full flex flex-col font-[family-name:var(--font-inter)]`}>{children}</body>
    </html>
  );
}
