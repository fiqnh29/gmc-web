"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, Search, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuLinks = ["SPEAKER", "KIPAS", "KOMPOR", "GRILL"]
  const rightLinks = ["TENTANG KAMI", "KONTAK"]

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault()
    window.history.pushState(null, "", `#${link.toLowerCase()}`)
    window.dispatchEvent(new CustomEvent("select-category", { detail: link }))
    const element = document.getElementById("produk")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.history.pushState(null, "", window.location.pathname)
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const handleSearchClick = () => {
    const searchInput = document.getElementById("cari-produk")
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: "smooth", block: "center" })
      setTimeout(() => {
        searchInput.focus()
      }, 300)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="animate-fade-down relative z-50 w-full">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-12">
          <div
            onClick={handleLogoClick}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="GMC Logo"
              width={109}
              height={32}
              priority
              className="h-8 w-auto object-contain"
            />
          </div>

          <nav className="mr-auto hidden items-center gap-8 pl-12 md:flex">
            {menuLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleMenuClick(e, link)}
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

            <button
              onClick={handleSearchClick}
              className="hover-glow flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
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
              onClick={(e) => handleMenuClick(e, link)}
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

        <div
          onClick={handleSearchClick}
          className="relative mt-4 w-64 cursor-pointer"
        >
          <input
            type="text"
            readOnly
            placeholder="Cari produk..."
            className="w-full cursor-pointer rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white placeholder-white/40 transition-all duration-300 focus:outline-none"
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
