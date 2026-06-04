const categories = [
  { name: "Outdoor",   icon: "⛺" },
  { name: "Cocina",    icon: "🍳" },
  { name: "BBQ",       icon: "🔥" },
  { name: "Regalos",   icon: "🎁" },
  { name: "Relojes",   icon: "⌚" },
  { name: "Viajes",    icon: "✈️" },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-20 max-w-6xl mx-auto px-5">
      <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">Explorar</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Categorías destacadas</h2>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="border border-gray-200 rounded-xl flex flex-col items-center gap-3 py-5 px-3 hover:border-[#E8531A] hover:shadow-sm transition-all group cursor-pointer bg-white"
          >
            <span className="text-3xl">{cat.icon}</span>
            <span className="text-xs font-medium text-gray-600 group-hover:text-[#E8531A] transition-colors">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
