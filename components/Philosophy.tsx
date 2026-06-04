export default function Philosophy() {
  return (
    <section id="nosotros" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">Quiénes somos</p>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Curación de productos<br />para <span className="text-[#E8531A]">vivir mejor</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Muki selecciona artículos funcionales con criterio de diseño para outdoor, hogar y estilo de vida. Cada producto pasa por un proceso de validación de calidad y usabilidad antes de entrar al catálogo.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Distribuimos a empresas en todo Chile con condiciones B2B y también vendemos directo al consumidor final a través de Muki Store.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "85+", label: "Productos curados" },
            { num: "500+", label: "Empresas clientes" },
            { num: "15",  label: "Categorías activas" },
            { num: "100%", label: "Despacho nacional" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-800 rounded-xl p-6">
              <p className="text-3xl font-bold text-[#E8531A]">{s.num}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
