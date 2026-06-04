export default function BtoB() {
  return (
    <section id="b2b" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Programa B2B</p>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              ¿Eres distribuidor<br />o diseñador?
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              Accede a nuestro catálogo mayorista con precios exclusivos, disponibilidad anticipada de nuevas colecciones y soporte comercial dedicado para proyectos de interiorismo y retail.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Precios especiales por volumen",
                "Catálogo digital de alta resolución",
                "Asesor comercial asignado",
                "Entrega express en proyectos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900 mb-6">Solicitar acceso</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">Empresa</label>
                  <input
                    type="text"
                    placeholder="Nombre empresa"
                    className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="email@empresa.com"
                  className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">Tipo de negocio</label>
                <select className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-600 focus:outline-none focus:border-stone-900 transition-colors bg-transparent">
                  <option value="">Seleccionar...</option>
                  <option>Estudio de diseño / Arquitectura</option>
                  <option>Retail / Tienda de decoración</option>
                  <option>Hotel / Hospitalidad</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">Mensaje (opcional)</label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 text-white text-xs tracking-widest uppercase py-4 hover:bg-stone-700 transition-colors mt-2"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
