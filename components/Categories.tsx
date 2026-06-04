const categories = [
  {
    name: "Iluminación",
    description: "Lámparas de pie, colgantes y de mesa para todo tipo de espacio.",
    count: "24 productos",
    color: "bg-amber-50",
    icon: (
      <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 48 48">
        <path strokeWidth="1.5" d="M24 6 L16 24 L32 24 Z" />
        <rect x="21" y="24" width="6" height="14" strokeWidth="1.5" />
        <line x1="14" y1="38" x2="34" y2="38" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Sillas & Sillones",
    description: "Mobiliario de asiento con diseño contemporáneo y materiales premium.",
    count: "18 productos",
    color: "bg-stone-100",
    icon: (
      <svg className="w-12 h-12 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 48 48">
        <path strokeWidth="1.5" d="M10 20 L10 32 L38 32 L38 20 Q24 14 10 20Z" />
        <line x1="14" y1="32" x2="14" y2="42" strokeWidth="1.5" />
        <line x1="34" y1="32" x2="34" y2="42" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Mesas",
    description: "Mesas auxiliares, centros y de comedor de edición limitada.",
    count: "12 productos",
    color: "bg-rose-50",
    icon: (
      <svg className="w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 48 48">
        <rect x="8" y="20" width="32" height="4" rx="1" strokeWidth="1.5" />
        <line x1="16" y1="24" x2="16" y2="40" strokeWidth="1.5" />
        <line x1="32" y1="24" x2="32" y2="40" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Accesorios Deco",
    description: "Objetos decorativos y piezas de arte para completar cada ambiente.",
    count: "31 productos",
    color: "bg-sky-50",
    icon: (
      <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="14" strokeWidth="1.5" />
        <path strokeWidth="1.5" d="M24 10 Q32 24 24 38 Q16 24 24 10Z" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Nuestro Catálogo</p>
        <h2 className="text-4xl font-bold text-stone-900">Categorías</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`${cat.color} p-8 group cursor-pointer hover:shadow-lg transition-shadow`}
          >
            <div className="mb-6">{cat.icon}</div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">{cat.name}</h3>
            <p className="text-sm text-stone-500 mb-4 leading-relaxed">{cat.description}</p>
            <p className="text-xs tracking-widest uppercase text-stone-400">{cat.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
