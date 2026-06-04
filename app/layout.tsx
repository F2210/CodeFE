import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUKI 向き — Productos con diseño para una vida más simple",
  description: "Tienda online de productos curados para outdoor, hogar y estilo de vida. Distribución B2B y venta directa en todo Chile.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.className} min-h-full`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
