export default function Footer() {
  return (
    <footer className="bg-stone-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-2xl font-bold tracking-[0.3em] text-white">MUKI</span>
        <p className="text-stone-500 text-sm text-center">
          Diseño curado · Catálogo B2B · Iluminación & Mobiliario
        </p>
        <p className="text-stone-600 text-xs tracking-widest uppercase">
          © 2026 Muki Store
        </p>
      </div>
    </footer>
  );
}
