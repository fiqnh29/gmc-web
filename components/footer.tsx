"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const handleLogoClick = () => {
    window.history.pushState(null, "", window.location.pathname)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCategoryClick = (categoryName: string) => {
    window.dispatchEvent(
      new CustomEvent("select-category", { detail: categoryName })
    )
    const element = document.getElementById("produk")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="w-full border-t border-white/5 bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="flex flex-col justify-between md:col-span-8">
            <div>
              <h2 className="text-3xl leading-tight font-extrabold tracking-tight select-none sm:text-4xl">
                TEKNOLOGI <span className="text-white/40">LOKAL,</span>
                <br />
                STANDAR GLOBAL
              </h2>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-b border-white/5 pb-8 md:border-none md:pb-0">
              <div
                onClick={handleLogoClick}
                className="cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/logo.png"
                  alt="GMC Logo"
                  width={96}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors duration-300 hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors duration-300 hover:text-white"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.78-.22-.22-.43-.45-.62-.69-.02 1.62-.01 3.24-.01 4.86 0 2.27-.47 4.58-1.95 6.32-1.72 2.05-4.41 3.09-7.05 2.92-2.83-.17-5.54-1.76-6.83-4.32-1.49-2.91-1.12-6.73 1.02-9.25 1.62-1.93 4.14-2.89 6.61-2.61v4.09c-1.21-.15-2.52.28-3.28 1.26-.9 1.11-.99 2.75-.24 3.94.75 1.2 2.22 1.84 3.61 1.62 1.21-.19 2.17-1.16 2.37-2.37.11-1.44.04-2.89.07-4.33.02-3.15-.01-6.3.01-9.45z" />
                  </svg>
                </a>
                <a
                  href="https://shopee.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors duration-300 hover:text-white"
                  aria-label="Shopee"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.1 8c-.6 0-1.1-.3-1.4-.8-.4-.7-.4-1.6-.1-2.3C18 4 18.7 3.5 19.5 3.5c.8 0 1.5.5 1.8 1.3.4.8.3 1.7-.1 2.4-.3.5-.8.8-1.1.8M12 2C9.2 2 7 4.2 7 7c0 .4.1.9.2 1.3h9.6c.1-.4.2-.9.2-1.3 0-2.8-2.2-5-5-5m7.1 8.5H4.9c-.8 0-1.4.6-1.4 1.4L4.6 20c.1 1.1.9 2 2 2h10.8c1.1 0 1.9-.9 2-2l1.1-8.1c.1-.8-.5-1.4-1.4-1.4M12 17.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3" />
                  </svg>
                </a>
                <a
                  href="https://tokopedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors duration-300 hover:text-white"
                  aria-label="Tokopedia"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm1.07-5.75l-.9.92C12.45 13.42 12 14 12 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold tracking-wider text-white">
                Kategori
              </span>
              <ul className="flex flex-col gap-2.5 text-sm text-white/50">
                {["Speaker", "Kipas", "Kompor", "Grill"].map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="cursor-pointer transition-colors duration-300 hover:text-white"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold tracking-wider text-white">
                Company
              </span>
              <ul className="flex flex-col gap-2.5 text-sm text-white/50">
                <li>
                  <Link
                    href="#tentang-kami"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const el = document.getElementById("produk")
                      if (el) el.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="cursor-pointer transition-colors duration-300 hover:text-white"
                  >
                    Produk
                  </button>
                </li>
                <li>
                  <Link
                    href="#event"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Event
                  </Link>
                </li>
                <li>
                  <Link
                    href="#kontak"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <span>&copy; 2026. GMC Elektronik. All Rights Reserved</span>
          <div className="flex items-center gap-6">
            <Link
              href="#privacy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy & Cookies policy
            </Link>
            <Link
              href="#terms"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
