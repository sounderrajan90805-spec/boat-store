import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductImage from './ProductImage'

const slides = [
  {
    tag: 'Up to 70% off',
    title: 'Plug into Nirvana',
    text: 'Premium earbuds with ANC and up to 42 hours of playback.',
    gradient: 'from-red-700 via-red-600 to-zinc-900',
    category: 'Earbuds',
    variant: 0,
    link: '/products?category=Earbuds',
  },
  {
    tag: 'New Arrival',
    title: 'Smartwatches that keep up',
    text: 'AMOLED display, GPS and 7-day battery life.',
    gradient: 'from-zinc-900 via-zinc-800 to-red-700',
    category: 'Smartwatches',
    variant: 1,
    link: '/products?category=Smartwatches',
  },
  {
    tag: 'Bestseller',
    title: 'Sound that moves you',
    text: 'Powerful speakers and headphones for every mood.',
    gradient: 'from-orange-600 via-red-600 to-zinc-900',
    category: 'Headphones',
    variant: 2,
    link: '/products?category=Headphones',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
    return () => clearInterval(timer)
  }, [index])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)
  const slide = slides[index]

  return (
    <section className="relative mx-auto mt-4 max-w-7xl overflow-hidden rounded-3xl px-4">
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${slide.gradient} text-white`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-6 px-6 py-10 sm:px-12 md:grid-cols-2 md:py-16"
          >
            <div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                {slide.tag}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
                {slide.title}
              </h1>
              <p className="mt-3 max-w-md text-white/80">{slide.text}</p>
              <Link
                to={slide.link}
                className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-red-600 transition hover:scale-105 hover:shadow-lg"
              >
                Shop Now
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="h-56 w-56 overflow-hidden rounded-3xl shadow-2xl sm:h-72 sm:w-72">
                <ProductImage
                  category={slide.category}
                  variant={slide.variant}
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 transition hover:bg-black/50"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 transition hover:bg-black/50"
        >
          <ChevronRight />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}