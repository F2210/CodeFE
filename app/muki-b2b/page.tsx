import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const b2bProducts = [
  { name: "Pack Ejecutivo Premium",  category: "REGALOS CORP.",  icon: "💼", tag: "Popular", price: "Cotizar" },
  { name: "Kit Outdoor Empresa",     category: "OUTDOOR",        icon: "⛺", tag: "Nuevo",   price: "Cotizar" },
  { name: "Set Cocina Corporativo",  category: "COCINA",         icon: "🍳", tag: null,      price: "Cotizar" },
  { name: "Colección Viaje Staff",   category: "VIAJES",         icon: "✈️", tag: "Corp.",   price: "Cotizar" },
  { name: "Kit BBQ Empresa",         category: "BBQ",            icon: "🔥", tag: null,      price: "Cotizar" },
  { name: "Reloj Corporativo",       category: "RELOJES",        icon: "⌚", tag: "Exclusivo", price: "Cotizar" },
];

export default function MukiB2B() {
  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <Navbar />

      {/* Hero B2B */}
      <section className="pt-[96px] bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8531A]/20 text-[#E8531A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8531A]" />
              Muki B2B — Empresas
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-5">
              Catálogo<br /><span className="text-[#E8531A]">Corporativo</span><br />2025
            </h1>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
              Precios diferenciados, productos exclusivos y atención personalizada para empresas. Regalos, uniformes y equipamiento para tu equipo.
            </p>
            <div className="flex gap-3">
              <a href="#catalogo-b2b" className="bg-[#E8531A] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#cf4715] transition-colors">
                Ver catálogo
              </a>
              <a href="#acceso" className="border border-gray-600 text-gray-300 font-semibold px-7 py-3.5 rounded-full hover:border-white hover:text-white transition-colors">
                Solicitar acceso
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "500+",  l: "Empresas clientes" },
              { v: "48h",   l: "Tiempo de cotización" },
              { v: "30%",   l: "Descuento promedio" },
              { v: "100%",  l: "Despacho a Chile" },
            ].map((s) => (
              <div key={s.l} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <p className="text-3xl font-bold text-[#E8531A]">{s.v}</p>
                <p className="text-gray-400 text-sm mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 max-w-6xl mx-auto px-5">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">Por qué elegirnos</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Ventajas del canal B2B</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "🏷️", title: "Precios diferenciados", desc: "Tarifas especiales por volumen. Mientras más pides, más ahorras." },
            { icon: "📦", title: "Productos exclusivos", desc: "Accede a productos del catálogo B2B que no están disponibles al público general." },
            { icon: "🤝", title: "Ejecutivo asignado", desc: "Un ejecutivo de cuenta dedicado para gestionar tus pedidos y cotizaciones." },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <span className="text-3xl mb-4 block">{b.icon}</span>
              <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catálogo B2B */}
      <section id="catalogo-b2b" className="py-4 pb-20 max-w-6xl mx-auto px-5">
        <div className="border-t border-gray-200 pt-10 mb-2">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">Catálogo exclusivo</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Productos B2B</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {b2bProducts.map((p) => (
            <div key={p.name} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="bg-[#F0EDE6] h-44 flex items-center justify-center relative">
                {p.tag && (
                  <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-gray-900 text-white">
                    {p.tag}
                  </span>
                )}
                <span className="text-6xl">{p.icon}</span>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold tracking-widest text-[#E8531A] mb-1">{p.category}</p>
                <h3 className="font-semibold text-gray-900 text-sm mb-3">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">
                    Precio: {p.price}
                  </span>
                  <button className="text-xs text-[#E8531A] font-semibold hover:underline">
                    Cotizar →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario acceso */}
      <section id="acceso" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-5">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2 text-center">Acceso corporativo</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Solicitar acceso B2B</h2>
          <p className="text-gray-500 text-center mb-10">Completa el formulario y un ejecutivo te contactará en menos de 48 horas.</p>

          <form className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">Nombre</label>
                <input type="text" placeholder="Tu nombre" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#E8531A] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">Empresa</label>
                <input type="text" placeholder="Nombre de empresa" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#E8531A] transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">Email corporativo</label>
              <input type="email" placeholder="nombre@empresa.cl" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#E8531A] transition-colors" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">Rubro</label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-[#E8531A] transition-colors bg-white">
                <option value="">Seleccionar rubro...</option>
                <option>Tecnología</option>
                <option>Retail</option>
                <option>Salud</option>
                <option>Educación</option>
                <option>Construcción</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">¿Qué necesitas?</label>
              <textarea rows={3} placeholder="Regalos corporativos, uniformes, equipamiento..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#E8531A] transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#E8531A] text-white font-semibold py-4 rounded-full hover:bg-[#cf4715] transition-colors">
              Enviar solicitud
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            ¿Ya tienes cuenta?{" "}
            <Link href="#" className="text-[#E8531A] font-semibold hover:underline">Iniciar sesión →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
