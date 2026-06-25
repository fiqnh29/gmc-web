"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  ChevronDown,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react"

export interface Product {
  id: string
  name: string
  category: "Speaker" | "Kipas" | "Kompor" | "Grill"
  subCategory: string
  image: string
  price: string
  description: string
  specs: Record<string, string>
}

const PRODUCTS_DATA: Product[] = [
  {
    id: "speaker-899-q",
    name: "Speaker 899 Q",
    category: "Speaker",
    subCategory: "Professional Line",
    image: "/profesional-line-speaker.png",
    price: "Rp 1.899.000",
    description:
      "Speaker active professional GMC 899 Q dirancang untuk kebutuhan panggung, rapat besar, maupun karaoke keluarga dengan kualitas suara dahsyat dan bass super mantap.",
    specs: {
      "Daya Keluaran (RMS)": "150W",
      Woofer: "12 Inch Double",
      Konektivitas: "Bluetooth 5.0, USB, SD Card, Aux, FM Radio",
      "Input Mikrofon": "2x Jack 6.35mm dengan Kontrol Echo",
      Baterai: "Accu Rechargeable 12V / 7A (Tahan hingga 6-8 jam)",
      Dimensi: "38cm x 34cm x 85cm",
      "Fitur Khusus":
        "Wireless Mic Included (2 Pcs), LED Party Light, Remote Control",
    },
  },
  {
    id: "speaker-883-b",
    name: "Speaker 883 B",
    category: "Speaker",
    subCategory: "Powered Speaker",
    image: "/powered-speaker.png",
    price: "Rp 949.000",
    description:
      "GMC 883 B dirancang khusus sebagai Speaker Multimedia Aktif bertenaga tinggi untuk kepuasan mendengarkan musik, menonton film, dan pesta rumahan dengan efek pencahayaan dinamis.",
    specs: {
      "Daya Keluaran (RMS)": "80W",
      Woofer: "8 Inch",
      Konektivitas: "Bluetooth, USB, SD Card, RCA Input",
      "Input Mikrofon": "1x Jack Input dengan Echo Volume",
      Daya: "AC 220V / 50Hz",
      Dimensi: "28cm x 26cm x 48cm",
      "Fitur Khusus":
        "RGB LED Light Dynamic, Super Bass Tech, Equalizer Preset",
    },
  },
  {
    id: "speaker-881-E",
    name: "Speaker 881 E",
    category: "Speaker",
    subCategory: "Powered Speaker",
    image: "/products/speakers/881e-speaker.png",
    price: "Rp 1.099.000",
    description:
      "Perpaduan sempurna estetika modern dan performa suara. GMC 881 E dilengkapi lampu ring LED pelangi di sekeliling driver yang berkedip mengikuti ritme lagu kesukaan Anda.",
    specs: {
      "Daya Keluaran (RMS)": "95W",
      Woofer: "8 Inch Double",
      Konektivitas: "Bluetooth 5.0, USB, Aux, TF Card",
      Baterai: "Rechargeable 4500mAh (Tahan 4-5 jam)",
      Dimensi: "30cm x 28cm x 65cm",
      "Fitur Khusus": "Rainbow Ring LED, Vocal Canceller, TWS Connection",
    },
  },
  {
    id: "speaker-881-b",
    name: "Speaker 881 B",
    category: "Speaker",
    subCategory: "Compact Speaker",
    image: "/compact-speaker.png",
    price: "Rp 549.000",
    description:
      "Soundbar GMC 881 B menghadirkan solusi audio teater rumah ringkas. Sangat pas diletakkan di bawah TV atau monitor komputer Anda tanpa memakan banyak tempat.",
    specs: {
      "Daya Keluaran (RMS)": "40W",
      Driver: "Dual 2.5 Inch + Passive Radiator",
      Konektivitas: "Bluetooth, USB, Aux, Optical Input, HDMI ARC",
      Daya: "DC 12V Adapter",
      Dimensi: "60cm x 7cm x 6cm",
      "Fitur Khusus": "3D Surround Effect, Wall Mountable, Ultra-slim Design",
    },
  },
  {
    id: "speaker-881-h",
    name: "Speaker 881 H",
    category: "Speaker",
    subCategory: "Multimedia Speaker",
    image: "/multimedia-speaker.png",
    price: "Rp 799.000",
    description:
      "Dengan gaya vintage klasik berbalut kayu walnut premium, GMC 881 H adalah ornamen meja sekaligus pemutar musik berkualitas tinggi dengan kontrol bass & treble analog.",
    specs: {
      "Daya Keluaran (RMS)": "50W",
      Woofer: "4 Inch + Dual Tweeter",
      Konektivitas: "Bluetooth, USB, Aux, RCA, FM Radio",
      Daya: "AC 220V",
      Dimensi: "34cm x 18cm x 22cm",
      "Fitur Khusus":
        "Analog Knob Controls (Bass, Treble, Volume), Retro Cloth Grill",
    },
  },
  {
    id: "speaker-899-s",
    name: "Speaker 899 S",
    category: "Speaker",
    subCategory: "Powered Speaker",
    image: "/products/speakers/899s-speaker.png",
    price: "Rp 1.399.000",
    description:
      "Tower Speaker GMC 899 S berdiri tegak menghantarkan suara merata ke seluruh sudut ruangan. Cocok dipasangkan dengan smart TV Anda untuk pengalaman home theater maksimal.",
    specs: {
      "Daya Keluaran (RMS)": "110W",
      Woofer: "8 Inch Dual + Midrange + Tweeter",
      Konektivitas: "Bluetooth, USB, RCA, Coaxial, Optical",
      Daya: "AC 220V",
      Dimensi: "24cm x 30cm x 110cm",
      "Fitur Khusus": "3-Way Speaker System, LED Display, Equalizer Adjustment",
    },
  },
  {
    id: "kipas-309",
    name: "Kipas Angin Stand GMC 309",
    category: "Kipas",
    subCategory: "Stand Fan",
    image: "/products/fans/519-fan.png",
    price: "Rp 249.000",
    description:
      "Kipas angin berdiri (stand fan) GMC 309 dengan baling-baling aerodinamis menghasilkan embusan angin sejuk merata dan hemat energi untuk ruangan tamu atau kamar tidur.",
    specs: {
      "Ukuran Baling-Baling": "16 Inch",
      Kecepatan: "3 Pilihan Kecepatan",
      "Daya Listrik": "45 Watt",
      "Fitur Keamanan": "Thermofuse Protected (Anti Korsleting)",
      Bahan: "Plastik ABS Tebal & Kokoh",
    },
  },
  {
    id: "kipas-508",
    name: "Kipas Angin Dinding GMC 508",
    category: "Kipas",
    subCategory: "Wall Fan",
    image: "/products/fans/521-fan.png",
    price: "Rp 229.000",
    description:
      "Kipas dinding GMC 508 menghemat area lantai dengan pemasangan di dinding. Dilengkapi tali penarik ganda untuk mengatur kecepatan dan osilasi secara praktis.",
    specs: {
      "Ukuran Baling-Baling": "16 Inch",
      Kecepatan: "3 Speed dengan Double Pull Cord",
      "Daya Listrik": "40 Watt",
      Osilasi: "Auto Swing 90 Derajat",
      "Fitur Keamanan": "Thermal Fuse",
    },
  },
  {
    id: "kipas-702",
    name: "Kipas Angin Meja GMC 702",
    category: "Kipas",
    subCategory: "Desk Fan",
    image: "/products/fans/725-fan.png",
    price: "Rp 189.000",
    description:
      "Desk fan mini GMC 702 sangat cocok ditaruh di meja kerja atau meja belajar. Memiliki motor yang sunyi (low noise) sehingga konsentrasi belajar tetap terjaga.",
    specs: {
      "Ukuran Baling-Baling": "12 Inch",
      "Daya Listrik": "35 Watt",
      "Material Baling-baling": "Plastik PP lentur & kuat",
      Kecepatan: "2 Tingkat Kecepatan",
    },
  },
  {
    id: "kompor-202",
    name: "Kompor Gas Kaca GMC 202",
    category: "Kompor",
    subCategory: "Gas Stove",
    image: "/products/stoves/212-stove.png",
    price: "Rp 449.000",
    description:
      "Kompor gas 2 tungku GMC 202 dengan permukaan tempered glass mewah yang tahan panas and mudah dibersihkan. Mempercantik dapur modern Anda.",
    specs: {
      "Jumlah Tungku": "2 Tungku Kuningan",
      "Bahan Permukaan": "Tempered Glass 7mm",
      Pemantik: "Mekanik Otomatis",
      "Beban Maksimal": "Hingga 20kg per tungku",
    },
  },
  {
    id: "kompor-101",
    name: "Kompor Portable GMC 101",
    category: "Kompor",
    subCategory: "Portable Stove",
    image: "/products/stoves/112-stove.png",
    price: "Rp 219.000",
    description:
      "Kompor portable GMC 101 untuk kebutuhan kamping, bepergian, atau hotpot di meja makan. Bisa menggunakan gas kaleng butana maupun tabung LPG 3kg/12kg.",
    specs: {
      "Bahan Bakar": "Gas Butana Kaleng / Gas LPG",
      "Konsumsi Gas": "150g/jam",
      "Koper Penyimpanan": "Termasuk Koper Plastik Eksklusif",
      "Fitur Keamanan": "Double Stage Regulator",
    },
  },
  {
    id: "kompor-401",
    name: "Kompor Induksi GMC 401",
    category: "Kompor",
    subCategory: "Induction Cooker",
    image: "/products/stoves/626-stove.png",
    price: "Rp 399.000",
    description:
      "Kompor induksi listrik GMC 401. Memasak lebih aman tanpa api, dilengkapi panel sentuh digital pintar dengan berbagai menu masak otomatis.",
    specs: {
      "Daya Listrik": "400W - 1200W (Dapat diatur)",
      "Bahan Permukaan": "Crystal Glass Premium",
      "Fitur Keamanan": "Auto-Off Sensor, Child Lock",
      Timer: "Tersedia hingga 240 menit",
    },
  },
  {
    id: "grill-2in1",
    name: "GMC Electric Grill & Hotpot",
    category: "Grill",
    subCategory: "Electric Grill",
    image: "/products/grills/107-stainless.png",
    price: "Rp 349.000",
    description:
      "GMC Electric Grill & Hotpot memadukan panggangan barbekyu dan panci shabu-shabu dalam satu alat listrik praktis. Nikmati pesta suki & grill di rumah!",
    specs: {
      "Daya Listrik": "1200 Watt",
      Lapisan: "Anti Lengket Teflon (Non-stick Coating)",
      "Kontrol Suhu": "Dual Thermostat (Kontrol Suhu Terpisah)",
      Dimensi: "36cm x 22cm x 10cm",
    },
  },
  {
    id: "grill-pan",
    name: "GMC Multi Grill Pan 102",
    category: "Grill",
    subCategory: "Manual Grill",
    image: "/products/grills/273-stainless.png",
    price: "Rp 159.000",
    description:
      "Panci panggangan GMC Multi Grill ditaruh langsung di atas kompor gas. Memiliki saluran pembuangan minyak berlebih untuk panggangan yang lebih sehat.",
    specs: {
      "Dimensi Pan": "48cm x 28cm",
      Bahan: "Die-cast Aluminum dengan Lapisan Granite",
      Kesesuaian: "Kompor Gas, Kompor Portable",
      "Fitur Khusus": "Minyak Mengalir Otomatis",
    },
  },
  {
    id: "grill-charcoal",
    name: "GMC Charcoal Grill Foldable",
    category: "Grill",
    subCategory: "Charcoal Grill",
    image: "/products/grills/274-stainless.png",
    price: "Rp 129.000",
    description:
      "Pemanggang arang GMC klasik luar ruangan untuk hasil panggangan beraroma asap (smoky) alami yang khas. Cocok untuk pesta halaman belakang.",
    specs: {
      Material: "Stainless Steel Anti Karat",
      "Kaki Pemanggang": "Dapat dilipat (Foldable)",
      "Area Memanggang": "45cm x 30cm",
      Berat: "1.8 kg",
    },
  },
]

const CATEGORIES = [
  "Semua Produk",
  "Speaker",
  "Kipas",
  "Kompor",
  "Grill",
] as const

export function ProductSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Semua Produk")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"default" | "nama-asc" | "nama-desc">(
    "default"
  )
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [visibleCount, setVisibleCount] = useState(9)
  const [showFilterPanel, setShowFilterPanel] = useState(false)

  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  )

  useEffect(() => {
    const handleSelectCategory = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      const categoryName = customEvent.detail
      const mapped = CATEGORIES.find(
        (c) => c.toLowerCase() === categoryName.toLowerCase()
      )
      if (mapped) {
        setSelectedCategory(mapped)
      }
    }

    window.addEventListener("select-category", handleSelectCategory)

    const timeoutId = setTimeout(() => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        const mapped = CATEGORIES.find(
          (c) => c.toLowerCase() === hash.toLowerCase()
        )
        if (mapped) {
          setSelectedCategory(mapped)
          setTimeout(() => {
            const element = document.getElementById("produk")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }, 100)
        }
      }
    }, 0)

    return () => {
      window.removeEventListener("select-category", handleSelectCategory)
      clearTimeout(timeoutId)
    }
  }, [])

  const availableSubcategories = useMemo(() => {
    const subset = PRODUCTS_DATA.filter(
      (p) =>
        selectedCategory === "Semua Produk" || p.category === selectedCategory
    )
    const subs = new Set<string>()
    subset.forEach((p) => subs.add(p.subCategory))
    return Array.from(subs)
  }, [selectedCategory])

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setSelectedSubcategories([])
    setVisibleCount(9)
  }

  const toggleSubcategory = (sub: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]
    )
    setVisibleCount(9)
  }

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      if (
        selectedCategory !== "Semua Produk" &&
        product.category !== selectedCategory
      ) {
        return false
      }
      if (
        selectedSubcategories.length > 0 &&
        !selectedSubcategories.includes(product.subCategory)
      ) {
        return false
      }
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase()
        const matchesName = product.name.toLowerCase().includes(query)
        const matchesCategory = product.category.toLowerCase().includes(query)
        const matchesSub = product.subCategory.toLowerCase().includes(query)
        return matchesName || matchesCategory || matchesSub
      }
      return true
    }).sort((a, b) => {
      if (sortBy === "nama-asc") {
        return a.name.localeCompare(b.name)
      }
      if (sortBy === "nama-desc") {
        return b.name.localeCompare(a.name)
      }
      return 0
    })
  }, [selectedCategory, selectedSubcategories, searchQuery, sortBy])

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount)
  }, [filteredProducts, visibleCount])

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9)
  }

  return (
    <section
      id="produk"
      className="border-t border-white/5 bg-[#070709] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {}
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Produk
        </h2>

        {}
        <div className="flex flex-col gap-6 border-b border-white/5 pb-8 md:flex-row md:items-center md:justify-between">
          {}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`cursor-pointer rounded-full text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-white px-4 py-2 text-black shadow-md sm:px-5 sm:py-2.5"
                      : "px-3.5 py-2 text-white/60 hover:text-white sm:px-4 sm:py-2.5"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {}
          <div className="relative w-full max-w-xs md:w-80">
            <input
              id="cari-produk"
              type="text"
              placeholder="Cari produk"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-[#111113] py-2.5 pr-10 pl-5 text-xs text-white placeholder-white/30 outline-hidden transition-all duration-300 focus:border-white/30 focus:bg-[#151517] focus:ring-1 focus:ring-white/20 sm:text-sm"
            />
            <Search className="absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-white/40" />
          </div>
        </div>

        {}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/50 sm:text-sm">
            Menampilkan{" "}
            {filteredProducts.length > 0 ? displayedProducts.length : 0} dari{" "}
            {filteredProducts.length} produk
          </div>

          <div className="flex items-center gap-3">
            {}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-[#111113] px-4 py-2 text-xs font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-[#151517] active:scale-98 sm:text-sm"
              >
                <span>Urutan</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${showSortDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showSortDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowSortDropdown(false)}
                  />
                  <div className="absolute right-0 z-50 mt-2 w-44 rounded-xl border border-white/10 bg-[#141417] p-1.5 shadow-2xl backdrop-blur-md">
                    <button
                      onClick={() => {
                        setSortBy("default")
                        setShowSortDropdown(false)
                      }}
                      className={`w-full cursor-pointer rounded-lg px-3.5 py-2 text-left text-xs font-medium transition-all sm:text-sm ${
                        sortBy === "default"
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      Default
                    </button>
                    <button
                      onClick={() => {
                        setSortBy("nama-asc")
                        setShowSortDropdown(false)
                      }}
                      className={`w-full cursor-pointer rounded-lg px-3.5 py-2 text-left text-xs font-medium transition-all sm:text-sm ${
                        sortBy === "nama-asc"
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      Nama (A - Z)
                    </button>
                    <button
                      onClick={() => {
                        setSortBy("nama-desc")
                        setShowSortDropdown(false)
                      }}
                      className={`w-full cursor-pointer rounded-lg px-3.5 py-2 text-left text-xs font-medium transition-all sm:text-sm ${
                        sortBy === "nama-desc"
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      Nama (Z - A)
                    </button>
                  </div>
                </>
              )}
            </div>

            {}
            <button
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition-all duration-300 active:scale-98 sm:text-sm ${
                showFilterPanel || selectedSubcategories.length > 0
                  ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                  : "border-white/10 bg-[#111113] text-white/80 hover:border-white/20 hover:bg-[#151517]"
              }`}
            >
              <SlidersHorizontal size={14} />
              <span>Filter</span>
              {selectedSubcategories.length > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[9px] font-bold text-white">
                  {selectedSubcategories.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {}
        {showFilterPanel && (
          <div className="mt-4 rounded-2xl border border-white/5 bg-[#0e0e11] p-5">
            <h4 className="mb-3 text-xs font-bold tracking-wider text-white/40 uppercase">
              Filter Berdasarkan Kategori Spesifik
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {availableSubcategories.map((sub) => {
                const isSelected = selectedSubcategories.includes(sub)
                return (
                  <button
                    key={sub}
                    onClick={() => toggleSubcategory(sub)}
                    className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "border border-white/10 bg-white/3 text-white/60 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {sub}
                  </button>
                )
              })}
              {availableSubcategories.length === 0 && (
                <span className="text-xs text-white/30 italic">
                  Tidak ada kategori spesifik yang tersedia
                </span>
              )}
            </div>
            {selectedSubcategories.length > 0 && (
              <button
                onClick={() => setSelectedSubcategories([])}
                className="mt-4 cursor-pointer text-xs font-bold text-blue-400 hover:text-blue-300"
              >
                Reset Filter
              </button>
            )}
          </div>
        )}

        {}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.map((product) => {
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group flex cursor-pointer flex-col bg-transparent transition-all duration-300"
              >
                {}
                <div className="relative aspect-[1.12/1] w-full select-none">
                  {}
                  <svg
                    className="absolute inset-0 h-full w-full text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:scale-[1.01] group-hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="currentColor"
                  >
                    <path
                      d="M 0,90 
                         Q 0,100 10,100 
                         L 90,100 
                         Q 100,100 100,90 
                         L 100,8 
                         Q 100,0 92,0 
                         L 66,0 
                         Q 60,0 60,7 
                         Q 60,14 54,14 
                         L 8,14 
                         Q 0,14 0,22 
                         Z"
                    />
                  </svg>

                  {}
                  <div className="absolute top-[3.5%] left-[4.5%] z-20 flex max-w-[calc(60%-16px)] flex-wrap gap-1.5">
                    <span className="rounded-full bg-[#2a2a2c]/90 px-3.5 py-1.5 text-[10px] font-bold tracking-wider text-white/90 uppercase shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:bg-[#343436]/90">
                      {product.category}
                    </span>
                    <span className="max-w-[120px] truncate rounded-full bg-[#2a2a2c]/90 px-3.5 py-1.5 text-[10px] font-bold tracking-wider text-white/80 uppercase shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:bg-[#343436]/90">
                      {product.subCategory}
                    </span>
                  </div>

                  {}
                  <div className="absolute inset-0 z-10 flex items-center justify-center p-6 pt-10">
                    <div className="relative h-[82%] w-[82%] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    </div>
                  </div>
                </div>

                {}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400">
                  {product.name}
                </h3>

                {}
                <div className="mt-5 flex w-full items-center justify-between rounded-full border border-white/20 bg-transparent py-2 pr-2 pl-6 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/5">
                  <span className="text-sm font-semibold tracking-wide text-white/95">
                    Lihat detail
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-105">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {}
        {filteredProducts.length === 0 && (
          <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 py-20 text-center">
            <SlidersHorizontal size={36} className="mb-4 text-white/20" />
            <h3 className="text-lg font-bold text-white">
              Tidak ada produk ditemukan
            </h3>
            <p className="mt-1 max-w-sm text-sm text-white/40">
              Coba sesuaikan kata kunci pencarian Anda atau atur ulang kategori
              filter.
            </p>
          </div>
        )}

        {}
        {filteredProducts.length > displayedProducts.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="cursor-pointer rounded-full bg-white px-8 py-3 text-xs font-extrabold tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-white/95 hover:shadow-lg active:scale-95 sm:text-sm"
            >
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>

      {}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {}
          <div
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          />

          {}
          <div className="animate-zoom-in-fade relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col gap-8 overflow-y-auto rounded-3xl border border-white/10 bg-[#0d0d0f] p-6 shadow-2xl select-none sm:p-8 md:grid md:grid-cols-12 md:gap-12 md:p-10">
            {}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#161619] text-white/60 transition-all hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            {}
            <div className="flex flex-col items-center justify-center md:col-span-5">
              <div className="relative flex aspect-square w-full items-center justify-center rounded-2xl bg-white p-8 shadow-inner">
                <div className="relative h-full w-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
              </div>
              {}
            </div>

            {}
            <div className="flex flex-col justify-between md:col-span-7">
              <div>
                {}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-[11px] font-bold tracking-wider text-blue-400 uppercase">
                    {selectedProduct.category}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-wider text-white/70 uppercase">
                    {selectedProduct.subCategory}
                  </span>
                </div>

                <h3 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                  {selectedProduct.name}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-white/70 sm:text-base">
                  {selectedProduct.description}
                </p>

                {}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="mb-4 text-xs font-bold tracking-widest text-white/40 uppercase">
                    Spesifikasi Teknis
                  </h4>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-3 text-xs sm:grid-cols-2 sm:text-sm">
                    {Object.entries(selectedProduct.specs).map(([key, val]) => (
                      <div
                        key={key}
                        className="flex flex-col border-b border-white/5 pb-2"
                      >
                        <span className="mb-0.5 font-medium text-white/40">
                          {key}
                        </span>
                        <span className="font-bold text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {}
              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
                <a
                  href={`https://wa.me/628123456789?text=Halo%20GMC,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(selectedProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:scale-[1.02] hover:bg-green-500 active:scale-98 sm:text-sm"
                >
                  Hubungi Penjual (WhatsApp)
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="cursor-pointer rounded-xl border border-white/10 bg-white/3 px-6 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:bg-white/8 sm:text-sm"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
