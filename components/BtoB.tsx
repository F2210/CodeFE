import Link from "next/link";

export default function BtoB() {
  return (
    <section className="py-20 bg-[#E8531A]">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-orange-200 text-sm font-semibold uppercase tracking-widest mb-3">Muki B2B</p>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            ¿Tu empresa necesita<br />regalos o uniformes?
          </h2>
          <p className="text-orange-100 max-w-md leading-relaxed">
            Accede al catálogo B2B exclusivo con precios diferenciados, productos corporativos y atención personalizada para cada cliente.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <Link
            href="/muki-b2b"
            className="bg-white text-[#E8531A] font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors text-center"
          >
            Acceder a Muki B2B →
          </Link>
          <Link
            href="/#contacto"
            className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:border-white transition-colors text-center text-sm"
          >
            Hablar con un ejecutivo
          </Link>
        </div>
      </div>
    </section>
  );
}
