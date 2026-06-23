"use client"

import { useState } from "react"
import { Menu, Search, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuLinks = ["SPEAKER", "KIPAS", "KOMPOR", "GRILL"]
  const rightLinks = ["TENTANG KAMI", "KONTAK"]

  return (
    <>
      <header className="animate-fade-down relative z-50 w-full">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-12">
          <div className="group flex cursor-pointer items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#274bd1] shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-xs font-black text-white select-none">
                gmc
              </span>
            </div>
            <span className="text-xl font-black tracking-wider text-white">
              GMC
            </span>
          </div>

          <nav className="mr-auto hidden items-center gap-8 pl-12 md:flex">
            {menuLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative py-1 text-xs font-bold tracking-widest text-white/70 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-8 md:flex">
            {rightLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="relative py-1 text-xs font-bold tracking-widest text-white/70 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {link}
              </a>
            ))}

            <button className="hover-glow flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white">
              <Search size={14} strokeWidth={2.5} />
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="z-55 cursor-pointer p-2 text-white transition-colors hover:text-white/80 md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-45 flex flex-col items-center justify-center gap-8 bg-black/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {menuLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold tracking-widest text-white/80 transition-all duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
          <div className="my-2 h-[1px] w-12 bg-white/20" />
          {rightLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold tracking-widest text-white/80 transition-all duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="relative mt-4 w-64">
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white placeholder-white/40 transition-all duration-300 focus:border-white/30 focus:outline-none"
          />
          <Search
            size={16}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-white/40"
          />
        </div>
      </div>
    </>
  )
}
