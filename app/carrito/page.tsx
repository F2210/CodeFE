"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

const SHIPPING_THRESHOLD = 50000;
const SHIPPING_COST = 4990;

function formatPrice(n: number) {
  return "$" + n.toLocaleString("es-CL");
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  const shipping = totalPrice >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = totalPrice + shipping;

  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <Navbar />
      <div className="pt-[96px] max-w-6xl mx-auto px-5 py-12">
        <h1 className="text-3xl font-bold text-[#1a1a18] mb-8">Tu carrito</h1>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-6xl mb-6">🛍️</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Tu carrito está vacío</h2>
            <p className="text-gray-500 mb-8">Agrega productos para comenzar tu pedido.</p>
            <Link
              href="/"
              className="inline-block bg-[#E8531A] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d14518] transition-colors"
            >
              Ver productos
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Items */}
            <div className="flex-1 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-5 flex items-center gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold tracking-widest text-[#E8531A] mb-0.5">{item.category}</p>
                    <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                    <p className="text-sm text-gray-500">{formatPrice(item.price)} c/u</p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors font-bold"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Line price */}
                  <p className="font-bold text-gray-900 w-24 text-right">{formatPrice(item.price * item.quantity)}</p>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Eliminar"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}

              <Link href="/" className="inline-block text-sm text-gray-500 hover:text-[#E8531A] transition-colors mt-2">
                ← Seguir comprando
              </Link>
            </div>

            {/* Summary */}
            <div className="lg:w-80">
              <div className="bg-white rounded-xl p-6 sticky top-[100px]">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Resumen del pedido</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Envío</span>
                    <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                      {shipping === 0 ? "Gratis" : formatPrice(SHIPPING_COST)}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-400">
                      Agrega {formatPrice(SHIPPING_THRESHOLD - totalPrice)} más para envío gratis
                    </p>
                  )}
                  <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="mt-6 block w-full bg-[#E8531A] text-white text-center font-semibold py-3 rounded-full hover:bg-[#d14518] transition-colors"
                >
                  Ir al checkout →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
