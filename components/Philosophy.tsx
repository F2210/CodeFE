const pillars = [
  {
    num: "01",
    title: "Diseño Curado",
    desc: "Cada pieza es seleccionada con criterio estético y funcional, priorizando materiales nobles y proporciones impecables.",
  },
  {
    num: "02",
    title: "Calidad Premium",
    desc: "Trabajamos exclusivamente con fabricantes que comparten nuestra obsesión por el detalle y la durabilidad.",
  },
  {
    num: "03",
    title: "Visión B2B",
    desc: "Entendemos las necesidades del interiorista, arquitecto y retailer. Ofrecemos condiciones especiales y asesoría dedicada.",
  },
];

export default function Philosophy() {
  return (
    <section id="filosofia" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Texto principal */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Nuestra Visión</p>
          <h2 className="text-4xl font-bold text-stone-900 leading-tight mb-8">
            Filosofía de<br />Diseño MUKI
          </h2>
          <p className="text-stone-500 leading-relaxed mb-12">
            MUKI nace de la convicción de que los espacios bien diseñados transforman la experiencia humana. Cada objeto en nuestro catálogo ha pasado por un proceso riguroso de selección que garantiza coherencia estética y excelencia material.
          </p>
          <a href="#b2b" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-stone-900 border-b border-stone-900 pb-1 hover:gap-5 transition-all">
            Conoce más →
          </a>
        </div>

        {/* Pilares */}
        <div className="space-y-0">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`py-8 border-t border-stone-200 ${i === pillars.length - 1 ? "border-b" : ""}`}
            >
              <div className="flex gap-6">
                <span className="text-xs font-mono text-stone-300 pt-1 shrink-0">{p.num}</span>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
