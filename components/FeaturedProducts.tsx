"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const products = [
  { id: "mochila-travel-pro",   name: "Mochila Travel Pro",  category: "OUTDOOR",  tag: "Nuevo",   icon: "🎒", bg: "bg-[#F0EDE6]", price: 89990  },
  { id: "auriculares-premium",  name: "Auriculares Premium", category: "TECH",     tag: "Popular", icon: "🎧", bg: "bg-[#EEEEEE]", price: 149990 },
  { id: "termo-minimalista",    name: "Termo Minimalista",   category: "COCINA",   tag: null,      icon: "🏺", bg: "bg-[#F5F5F5]", price: 39990  },
  { id: "kit-ejecutivo-muki",   name: "Kit Ejecutivo Muki",  category: "REGALOS",  tag: "Corp.",   icon: "📓", bg: "bg-[#EEEEEE]", price: 119990 },
];

const tagColors: Record<string, string> = {
  "Nuevo":   "bg-gray-900 text-white",
  "Popular": "bg-gray-900 text-white",
  "Corp.":   "bg-gray-900 text-white",
};

function formatPrice(n: number) {
  return "$" + n.toLocaleString("es-CL");
}

export default function FeaturedProducts() {
  const { addItem } = useCart();
  const [added, setAdded] = useState<Record<string, boolean>>({});

  function handleAdd(p: typeof products[number]) {
    addItem({ id: p.id, name: p.name, category: p.category, icon: p.icon, price: p.price });
    setAdded((prev) => ({ ...prev, [p.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [p.id]: false })), 1500);
  }

  return (
    <section id="productos" className="py-4 pb-20 max-w-6xl mx-auto px-5">
      <div className="border-t border-gray-200 pt-10 mb-2">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">Selección</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Productos destacados</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.name} className={`${p.bg} rounded-xl overflow-hidden group cursor-pointer hover:shadow-md transition-shadow`}>
            {/* Imagen */}
            <div className="relative h-44 flex items-center justify-center">
              {p.tag && (
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${tagColors[p.tag]}`}>
                  {p.tag}
                </span>
              )}
              <span className="text-6xl">{p.icon}</span>
            </div>

            {/* Info */}
            <div className="bg-white px-4 py-4">
              <p className="text-xs font-bold tracking-widest text-[#E8531A] mb-1">{p.category}</p>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{p.name}</h3>
              <p className="text-sm font-bold text-gray-900 mb-3">{formatPrice(p.price)}</p>
              <button
                onClick={() => handleAdd(p)}
                className={`w-full text-xs font-semibold py-2 rounded-lg transition-all ${
                  added[p.id]
                    ? "bg-green-100 text-green-700"
                    : "bg-[#E8531A] text-white hover:bg-[#d14518]"
                }`}
              >
                {added[p.id] ? "✓ Agregado" : "Agregar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
