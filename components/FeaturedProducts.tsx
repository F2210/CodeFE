const products = [
  {
    name: "Red Lamp",
    category: "Iluminación",
    price: "$309",
    tag: "Más vendido",
    bg: "bg-red-50",
  },
  {
    name: "Grey Chair",
    category: "Sillas",
    price: "$599",
    tag: "Nuevo",
    bg: "bg-stone-100",
  },
  {
    name: "Lamps Group",
    category: "Iluminación",
    price: "$890",
    tag: "Set colección",
    bg: "bg-amber-50",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="productos" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Selección Curada</p>
            <h2 className="text-4xl font-bold text-white">Productos Destacados</h2>
          </div>
          <a href="#b2b" className="hidden md:block text-xs tracking-widest uppercase text-stone-400 border-b border-stone-600 pb-1 hover:text-white hover:border-white transition-colors">
            Ver catálogo completo →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className={`${p.bg} aspect-[4/3] flex items-center justify-center mb-4 overflow-hidden`}>
                <div className="w-24 h-24 rounded-full bg-white/40 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs tracking-widest uppercase text-stone-500 mb-1">{p.category}</p>
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-stone-700 text-stone-300 px-2 py-1">{p.tag}</span>
                  <p className="text-xl font-bold text-white mt-2">{p.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
