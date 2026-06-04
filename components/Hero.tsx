export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-100 pt-16">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-50 opacity-60 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-stone-200 opacity-80 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div className="space-y-8">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-500">Diseño · Iluminación · Mobiliario</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-stone-900 leading-none">
            MUKI
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-md">
            Piezas de diseño curado para espacios que inspiran. Catálogo B2B de iluminación y mobiliario de alto nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#categorias"
              className="inline-flex items-center justify-center bg-stone-900 text-white text-sm tracking-widest uppercase px-8 py-4 hover:bg-stone-700 transition-colors"
            >
              Ver Catálogo
            </a>
            <a
              href="#b2b"
              className="inline-flex items-center justify-center border border-stone-400 text-stone-700 text-sm tracking-widest uppercase px-8 py-4 hover:border-stone-900 hover:text-stone-900 transition-colors"
            >
              Ser Distribuidor
            </a>
          </div>
        </div>

        {/* Tarjeta de producto destacado */}
        <div className="relative">
          <div className="bg-white shadow-2xl p-8 space-y-6">
            <div className="aspect-square bg-stone-100 flex items-center justify-center">
              {/* Icono SVG de lámpara */}
              <svg className="w-40 h-40 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                <path strokeWidth="2" d="M50 10 L35 45 L65 45 Z" />
                <rect x="46" y="45" width="8" height="30" strokeWidth="2" />
                <line x1="30" y1="75" x2="70" y2="75" strokeWidth="2" />
                <ellipse cx="50" cy="27" rx="8" ry="8" fill="currentColor" opacity="0.2" />
              </svg>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-400">Colección Signature</p>
              <h3 className="text-xl font-semibold text-stone-900 mt-1">Red Lamp Series</h3>
              <p className="text-stone-500 text-sm mt-2">Iluminación artesanal de alta gama para proyectos de interiorismo</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-stone-100">
              <span className="text-2xl font-bold text-stone-900">$309</span>
              <span className="text-xs tracking-widest uppercase text-stone-400">Precio mayorista</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-300 -z-10" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <div className="w-px h-12 bg-stone-300" />
      </div>
    </section>
  );
}
