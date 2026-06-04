"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const ticker = [
    "OUTDOOR", "COCINA", "REGALOS CORPORATIVOS", "VIAJES", "BBQ",
    "RELOJES", "DISTRIBUCIÓN B2B", "DESPACHO NACIONAL",
  ];

  return (
    <>
      {/* Barra principal */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-[#E8531A]">MUKI</span>
            <span className="text-lg text-[#E8531A]">向き</span>
          </Link>

          {/* Nav desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
            <Link href="/" className="hover:text-[#E8531A] transition-colors">Inicio</Link>
            <Link href="/#categorias" className="hover:text-[#E8531A] transition-colors">Categorías</Link>
            <Link href="/#nosotros" className="hover:text-[#E8531A] transition-colors">Nosotros</Link>
            <Link href="/#contacto" className="hover:text-[#E8531A] transition-colors">Contacto</Link>
            <Link href="/muki-b2b" className="hover:text-[#E8531A] transition-colors">Muki B2B</Link>
          </div>

          {/* CTA */}
          <Link
            href="/#categorias"
            className="hidden md:block bg-gray-900 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            Catálogo
          </Link>

          {/* Hamburger mobile */}
          <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Ticker naranja */}
        <div className="bg-[#E8531A] overflow-hidden h-9 flex items-center">
          <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
            {[...ticker, ...ticker].map((item, i) => (
              <span key={i} className="text-white text-xs font-semibold tracking-widest uppercase px-5 flex items-center gap-4">
                {item}
                <span className="w-1 h-1 rounded-full bg-white/60 inline-block ml-4" />
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 top-[96px] z-40 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="flex flex-col px-5 py-4 gap-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
            <Link href="/#categorias" onClick={() => setOpen(false)}>Categorías</Link>
            <Link href="/#nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
            <Link href="/#contacto" onClick={() => setOpen(false)}>Contacto</Link>
            <Link href="/muki-b2b" onClick={() => setOpen(false)} className="text-[#E8531A] font-semibold">Muki B2B</Link>
          </div>
        </div>
      )}
    </>
  );
}
