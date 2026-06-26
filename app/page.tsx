"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FeaturesCarousel } from "@/components/features-carousel"
import { ProductSection } from "@/components/product-section"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Scroll translation for section 1 (floating text + speaker)
  const section1Y = useTransform(scrollYProgress, [0, 0.4], ["0vh", "-100vh"])
  const speakerY = useTransform(scrollYProgress, [0, 0.4], ["0vh", "-100vh"])

  // Scroll translation and fade-in for Section 2 center text
  const section2Y = useTransform(scrollYProgress, [0.2, 0.65], ["100vh", "0vh"])
  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  // Fades out the background image overlay and fades in the blue glow
  const bgOverlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1])
  const blueGlowOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1])

  // Button 0: Compact Speaker
  const button0X = useTransform(scrollYProgress, [0, 0.75], ["5%", "25%"])
  const button0Y = useTransform(scrollYProgress, [0, 0.75], ["90%", "30%"])

  // Button 1: Multimedia Speaker
  const button1X = useTransform(scrollYProgress, [0, 0.75], ["32%", "20%"])
  const button1Y = useTransform(scrollYProgress, [0, 0.75], ["90%", "58%"])

  // Button 2: Professional Line
  const button2X = useTransform(scrollYProgress, [0, 0.75], ["32%", "24%"])
  const button2Y = useTransform(scrollYProgress, [0, 0.75], ["90%", "34%"])

  // Button 3: Powered Speaker
  const button3X = useTransform(scrollYProgress, [0, 0.75], ["5%", "22%"])
  const button3Y = useTransform(scrollYProgress, [0, 0.75], ["90%", "58%"])

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
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <section
          className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden select-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.95) 100%), url('/bg-image.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pointer-events-none absolute inset-0 z-0 bg-black/45" />

          {/* Dynamic dark blue radial overlay that fades in on scroll to hide the bg-image */}
          <motion.div
            style={{
              opacity: bgOverlayOpacity,
              backgroundImage: `radial-gradient(circle at center, rgba(15, 23, 42, 0.75) 0%, rgba(0, 0, 0, 0.98) 100%)`,
            }}
            className="pointer-events-none absolute inset-0 z-0"
          />

          <Navbar />

          <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 md:px-12">
            {/* Background Glow */}
            <div className="animate-spotlight pointer-events-none absolute top-1/2 left-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[80px] sm:h-[450px] sm:w-[450px] md:h-[600px] md:w-[600px]" />

            {/* Blue Glow that fades in on scroll */}
            <motion.div
              style={{ opacity: blueGlowOpacity }}
              className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px]"
            />

            {/* Floating Texts Container */}
            <motion.div
              style={{ y: section1Y }}
              className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
            >
              <div className="relative h-full w-full max-w-7xl">
                {/* Audio: top-left */}
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="absolute top-[12%] left-4 text-4xl font-extrabold tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:text-5xl md:top-[16%] md:left-[4%] md:text-6xl lg:left-[8%] lg:text-[70px]"
                >
                  Audio
                </motion.h1>

                {/* Presisi: center-right/top-right */}
                <motion.h1
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute top-[24%] right-4 text-4xl font-extrabold tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:text-5xl md:top-[42%] md:right-[2%] md:text-6xl lg:right-[6%] lg:text-[70px]"
                >
                  Presisi
                </motion.h1>

                {/* Performa: bottom-left/center-left */}
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-[24%] left-4 text-4xl font-extrabold tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:text-5xl md:bottom-[28%] md:left-[2%] md:text-6xl lg:left-[4%] lg:text-[70px]"
                >
                  Performa
                </motion.h1>

                {/* Tinggi: bottom-right */}
                <motion.h1
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute right-4 bottom-[12%] text-4xl font-extrabold tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:text-5xl md:right-[8%] md:bottom-[12%] md:text-6xl lg:right-[12%] lg:text-[70px]"
                >
                  Tinggi
                </motion.h1>
              </div>
            </motion.div>

            {/* Section 2 Center Text ("Jernih Kuat di Setiap Momen") */}
            <motion.div
              style={{ y: section2Y, opacity: section2Opacity }}
              className="pointer-events-none absolute z-10 mx-auto flex flex-col items-center justify-center px-6"
            >
              <h2 className="max-w-2xl px-4 text-center text-4xl leading-tight font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-[70px]">
                Jernih Kuat
                <br />
                <span className="mt-2 block">di Setiap Momen</span>
              </h2>
            </motion.div>

            {/* Speaker Image */}
            <motion.div
              style={{ y: speakerY }}
              className="relative z-10 flex h-[200px] w-[200px] items-center justify-center sm:h-[300px] sm:w-[300px] md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px] xl:h-[520px] xl:w-[520px]"
            >
              {/* Shadow underneath */}
              <div className="pointer-events-none absolute right-[15%] -bottom-4 left-[15%] z-0 h-4 animate-pulse rounded-full bg-black/75 blur-xl" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="animate-float pointer-events-none relative h-full w-full select-none"
              >
                <Image
                  src="/hero-image-hd-v2.png"
                  alt="GMC Bluetooth Speaker"
                  fill
                  priority
                  className="pointer-events-none object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 420px, 520px"
                />
              </motion.div>
            </motion.div>

            {/* Animated 4 buttons/pills */}
            <div className="pointer-events-none absolute inset-0 z-20 mx-auto w-full max-w-6xl">
              {/* Button 0: Compact Speaker */}
              <motion.button
                style={{ left: button0X, top: button0Y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="hover-glow pointer-events-auto absolute cursor-pointer rounded-full border border-white/8 bg-white/4 px-4 py-2 text-center text-[10px] font-semibold tracking-wide text-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:text-white sm:text-xs"
              >
                Compact Speaker
              </motion.button>

              {/* Button 1: Multimedia Speaker */}
              <motion.button
                style={{ left: button1X, top: button1Y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="hover-glow pointer-events-auto absolute cursor-pointer rounded-full border border-white/8 bg-white/4 px-4 py-2 text-center text-[10px] font-semibold tracking-wide text-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:text-white sm:text-xs"
              >
                Multimedia Speaker
              </motion.button>

              {/* Button 2: Professional Line */}
              <motion.button
                style={{ right: button2X, top: button2Y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="hover-glow pointer-events-auto absolute cursor-pointer rounded-full border border-white/8 bg-white/4 px-4 py-2 text-center text-[10px] font-semibold tracking-wide text-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:text-white sm:text-xs"
              >
                Professional Line
              </motion.button>

              {/* Button 3: Powered Speaker */}
              <motion.button
                style={{ right: button3X, top: button3Y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="hover-glow pointer-events-auto absolute cursor-pointer rounded-full border border-white/8 bg-white/4 px-4 py-2 text-center text-[10px] font-semibold tracking-wide text-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:text-white sm:text-xs"
              >
                Powered Speaker
              </motion.button>
            </div>
          </div>
        </section>
      </div>

      <FeaturesCarousel slides={slides} />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Professional Line",
              description:
                "Dirancang untuk kebutuhan profesional dengan performa audio yang lebih kuat, stabil, dan presisi di setiap detail suara.",
              image: "/products/speakers/profesional-line-speaker.png",
            },
            {
              title: "Powered Speaker",
              description:
                "Speaker aktif dengan amplifier terintegrasi, menghadirkan suara jernih, praktis digunakan, dan siap digunakan kapan saja tanpa perangkat tambahan.",
              image: "/products/speakers/powered-speaker.png",
            },
            {
              title: "Multimedia Speaker",
              description:
                "Dirancang untuk kebutuhan hiburan digital, menghadirkan suara jernih dan seimbang untuk musik, film, hingga gaming dalam satu perangkat praktis.",
              image: "/products/speakers/multimedia-speaker.png",
            },
            {
              title: "Compact Speaker",
              description:
                "Desain ringkas dengan performa maksimal, menghadirkan suara jernih dan bertenaga dalam ukuran yang praktis untuk berbagai kebutuhan.",
              image: "/products/speakers/compact-speaker.png",
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="group relative flex min-h-[220px] items-center justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/4 p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/6 sm:min-h-[200px] sm:p-8"
            >
              <div className="mb-28 flex flex-col pr-0 sm:mb-0 sm:pr-40">
                <h3 className="mb-2 text-lg font-bold text-white">
                  {cat.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {cat.description}
                </p>
              </div>
              <div className="pointer-events-none absolute right-0 bottom-0 h-28 w-28 select-none sm:top-0 sm:bottom-0 sm:h-full sm:w-40">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, 180px"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductSection />
      <Footer />
    </main>
  )
}
