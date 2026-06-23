import { Navbar } from "@/components/navbar"
import { FeaturesCarousel } from "@/components/features-carousel"
import Image from "next/image"

export default function Page() {
  const speakerPills = [
    "Compact Speaker",
    "Multimedia Speaker",
    "Professional Line",
    "Powered Speaker",
  ]

  const slides = [
    {
      title: "Material",
      description:
        "Dibuat dengan material kayu berkualitas, speaker GMC menghadirkan resonansi alami yang menghasilkan suara lebih hangat, solid, dan berkarakter.",
      image: "/material-slide.png",
    },
    {
      title: "Konektivitas",
      description:
        "Dilengkapi dengan teknologi Bluetooth generasi terbaru dan panel kontrol intuitif untuk koneksi nirkabel yang cepat, stabil, dan tanpa hambatan.",
      image: "/connectivity-slide.png",
    },
    {
      title: "Akustik",
      description:
        "Arsitektur akustik dual-driver dengan bass port belakang menghasilkan suara bass yang bertenaga and distorsi minimal bahkan pada volume tinggi.",
      image: "/acoustic-slide.png",
    },
  ]

  return (
    <main className="min-h-screen w-full bg-black text-white selection:bg-blue-600 selection:text-white">
      <section
        className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden select-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.95) 100%), url('/bg-image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/45" />

        <Navbar />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-10 md:px-12">
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
            <div className="animate-fade-right flex flex-col justify-center md:col-span-7">
              <div className="mb-5 w-fit rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1 text-[11px] font-bold tracking-widest text-blue-400 uppercase">
                Premium Audio Series
              </div>

              <h1 className="text-4xl leading-[1.1] font-black tracking-tight text-white sm:text-5xl lg:text-[68px]">
                Audio Presisi.
                <br />
                <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                  Performa Maksimal.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Rasakan detail audio sejernih kristal dengan GMC Bluetooth
                Speaker. Dibuat dengan material premium leather, dual speaker
                akustik, dan teknologi bass dinamis yang menghadirkan performa
                audio tingkat profesional ke dalam genggaman Anda.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="cursor-pointer rounded-full bg-linear-to-r from-[#274bd1] to-[#4f46e5] px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30">
                  Lihat Detail
                </button>
                <button className="cursor-pointer rounded-full border border-white/15 bg-white/3 px-8 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/8">
                  Spesifikasi
                </button>
              </div>
            </div>

            <div className="animate-fade-left relative flex items-center justify-center md:col-span-5">
              <div className="animate-spotlight pointer-events-none absolute top-1/2 left-1/2 z-0 h-75 w-75 rounded-full bg-linear-to-tr from-blue-500/20 to-indigo-500/30 blur-[80px] sm:h-87.5 sm:w-87.5 md:h-100 md:w-100" />
              <div className="animate-float relative z-10 flex h-60 w-60 items-center justify-center sm:h-75 sm:w-75 md:h-87.5 md:w-87.5 lg:h-100 lg:w-100">
                <div className="pointer-events-none absolute right-[15%] -bottom-3.75 left-[15%] z-0 h-5 animate-pulse rounded-full bg-black/70 blur-xl" />

                <div className="animate-zoom-in-fade pointer-events-none relative h-full w-full transition-transform duration-300 ease-out select-none">
                  <Image
                    src="/hero-image-hd-v2.png"
                    alt="GMC Bluetooth Speaker"
                    fill
                    priority
                    className="pointer-events-none object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)] select-none"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer
          className="animate-fade-up relative z-20 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-3 px-6 pt-4 pb-12 sm:gap-4"
          style={{ animationDelay: "450ms" }}
        >
          {speakerPills.map((pill) => (
            <button
              key={pill}
              className="hover-glow cursor-pointer rounded-full border border-white/8 bg-white/4 px-5 py-2.5 text-xs font-semibold tracking-wide text-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              {pill}
            </button>
          ))}
        </footer>
      </section>

      <FeaturesCarousel slides={slides} />
    </main>
  )
}
