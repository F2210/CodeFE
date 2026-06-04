import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen pt-[96px] grid md:grid-cols-2">
      {/* Lado izquierdo — texto */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-16 bg-[#F5F3EE]">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E8531A]" />
          <span className="text-sm text-gray-500">Nueva colección 2025</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Productos con<br />diseño para una<br />vida más{" "}
          <em className="text-[#E8531A] not-italic">simple</em>
        </h1>

        <p className="text-gray-500 mt-4 mb-10 max-w-sm leading-relaxed">
          Seleccionamos artículos funcionales para outdoor, hogar y estilo de vida. Distribución para empresas y consumidores finales en todo Chile.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/#categorias"
            className="bg-[#E8531A] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#cf4715] transition-colors"
          >
            Ver catálogo
          </Link>
          <Link
            href="/#contacto"
            className="border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            Contactar →
          </Link>
        </div>
      </div>

      {/* Lado derecho — producto */}
      <div className="relative bg-gray-900 flex flex-col items-center justify-center min-h-[480px]">
        {/* Badge NEW */}
        <div className="absolute top-8 right-8 bg-[#E8531A] text-white text-xs font-bold px-4 py-2 rounded-full tracking-widest">
          NEW +
        </div>

        {/* Imagen/placeholder producto */}
        <div className="border-2 border-[#E8531A] rounded-2xl p-6 w-64 h-64 flex items-center justify-center mb-6">
          <div className="text-6xl">🎒</div>
        </div>

        <p className="text-white font-semibold text-sm tracking-wide">Muki Travel Pack Pro</p>

        {/* Decoración lateral */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-24 bg-gray-700 rounded-r-full" />
      </div>
    </section>
  );
}
