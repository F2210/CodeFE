"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import type { CartItem } from "@/context/CartContext";

function formatPrice(n: number) {
  return "$" + n.toLocaleString("es-CL");
}

export default function ConfirmacionPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000).toString());
  const [snapshot, setSnapshot] = useState<CartItem[]>([]);

  useEffect(() => {
    setSnapshot(items);
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <Navbar />
      <div className="pt-[96px] max-w-2xl mx-auto px-5 py-16 text-center">
        {/* Checkmark */}
        <div className="w-20 h-20 rounded-full bg-[#E8531A] flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-black text-[#1a1a18] mb-3">¡Pedido recibido!</h1>
        <p className="text-gray-500 text-lg mb-2">Número de pedido: <span className="font-bold text-gray-900">#{orderNumber}</span></p>
        <p className="text-gray-500 mb-10">Te enviaremos un email con los detalles del pedido.</p>

        {/* Order summary */}
        {snapshot.length > 0 && (
          <div className="bg-white rounded-xl p-6 text-left mb-8">
            <h2 className="font-bold text-gray-900 mb-4">Resumen de tu pedido</h2>
            <div className="space-y-3">
              {snapshot.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.category} · x{item.quantity}</p>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-gray-900">
              <span>Total pagado</span>
              <span>{formatPrice(snapshot.reduce((s, i) => s + i.price * i.quantity, 0))}</span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#E8531A] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d14518] transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/muki-b2b"
            className="bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Ver Muki B2B
          </Link>
        </div>
      </div>
    </main>
  );
}
