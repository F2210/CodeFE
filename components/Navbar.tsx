export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-2xl font-bold tracking-[0.3em] text-stone-900">MUKI</span>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest text-stone-600 uppercase">
          <a href="#categorias" className="hover:text-stone-900 transition-colors">Catálogo</a>
          <a href="#productos" className="hover:text-stone-900 transition-colors">Productos</a>
          <a href="#filosofia" className="hover:text-stone-900 transition-colors">Filosofía</a>
          <a href="#b2b" className="hover:text-stone-900 transition-colors">B2B</a>
        </div>
        <a
          href="#b2b"
          className="text-xs tracking-widest uppercase border border-stone-900 text-stone-900 px-5 py-2.5 hover:bg-stone-900 hover:text-white transition-colors"
        >
          Contactar
        </a>
      </div>
    </nav>
  );
}
