"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  title: string
  description: string
  image: string
}

interface FeaturesCarouselProps {
  slides: Slide[]
}

export function FeaturesCarousel({ slides }: FeaturesCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!slideRef.current) return

    const handleResize = () => {
      setSlideWidth(slideRef.current?.offsetWidth || 0)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  return (
    <section className="relative w-full overflow-hidden border-t border-white/3 bg-[#070709] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-8 border-b border-white/6 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col">
            <div className="mb-4 w-fit rounded-md bg-white px-4 py-1.5 text-[10px] font-black tracking-widest text-black uppercase shadow-sm">
              Keunggulan GMC
            </div>
            <h2 className="max-w-3xl text-2xl leading-tight font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
              Dirancang dengan teknologi akustik dan material berkualitas
            </h2>
            <p className="mt-3 max-w-2xl text-base text-white/50 sm:text-lg">
              untuk menghasilkan suara presisi, jernih, dan seimbang di setiap
              frekuensi.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/2 text-white/60 shadow-lg transition-all duration-300 hover:border-white/30 hover:bg-white/8 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-white/60"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/2 text-white/60 shadow-lg transition-all duration-300 hover:border-white/30 hover:bg-white/8 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-white/60"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex h-full min-h-40 flex-col justify-center lg:col-span-4">
            <div className="transform transition-all duration-500 ease-in-out">
              <h3 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                {slides[currentSlide].title}
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden px-2 py-4 lg:col-span-8">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (slideWidth + 24)}px)`,
              }}
            >
              {slides.map((slide, idx) => {
                const isActive = idx === currentSlide
                return (
                  <div
                    key={slide.title}
                    ref={idx === 0 ? slideRef : null}
                    className={`relative aspect-4/3 w-full shrink-0 cursor-pointer overflow-hidden rounded-3xl border transition-all duration-500 sm:aspect-video md:w-125 ${
                      isActive
                        ? "scale-100 border-white/20 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        : "scale-95 border-white/5 opacity-40 hover:opacity-60"
                    }`}
                    onClick={() => setCurrentSlide(idx)}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
