import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-950 text-gray-400 py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Marca */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-[#E8531A]">MUKI</span>
              <span className="text-lg text-[#E8531A]">向き</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Productos con diseño para una vida más simple. Outdoor, hogar y estilo de vida — para personas y empresas en todo Chile.
            </p>
          </div>

          {/* Tienda */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Muki Store</h4>
            <ul className="space-y-2 text-sm">
              {["Inicio", "Categorías", "Productos", "Carrito", "Checkout"].map((l) => (
                <li key={l}><Link href="#" className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* B2B */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Muki B2B</h4>
            <ul className="space-y-2 text-sm">
              {["Catálogo corporativo", "Regalos empresa", "Distribución", "Acceso clientes", "Contacto B2B"].map((l) => (
                <li key={l}><Link href="/muki-b2b" className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2025 Muki Store · mukistore.cl · Chile</p>
          <p className="text-gray-600">Diseño con propósito · 向き</p>
        </div>
      </div>
    </footer>
  );
}
