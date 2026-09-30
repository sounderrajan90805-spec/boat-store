import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Headphones, Speaker, Watch, Zap, Truck, ShieldCheck, RotateCcw, Headset } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import ProductCard from '../components/ProductCard'
import SkeletonCard from '../components/SkeletonCard'
import { products } from '../data/products'

const categoryList = [
  { name: 'Earbuds', icon: Headphones },
  { name: 'Headphones', icon: Headphones },
  { name: 'Smartwatches', icon: Watch },
  { name: 'Speakers', icon: Speaker },
  { name: 'Neckbands', icon: Zap },
]

const perks = [
  { icon: Truck, title: 'Free Shipping', text: 'On orders above ₹499' },
  { icon: ShieldCheck, title: '1 Year Warranty', text: 'On all products' },
  { icon: RotateCcw, title: 'Easy Returns', text: '7 day return policy' },
  { icon: Headset, title: '24/7 Support', text: 'We are here to help' },
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  const featured = products.filter((p) => p.badge === 'Bestseller' || p.badge === 'New').slice(0, 8)

  return (
    <div>
      <HeroSlider />

      <section className="mx-auto mt-12 max-w-7xl px-4">
        <h2 className="mb-6 text-2xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categoryList.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              to={`/products?category=${name}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-red-600 hover:shadow-lg dark:border-zinc-800"
            >
              <span className="rounded-full bg-red-50 p-4 text-red-600 transition group-hover:bg-red-600 group-hover:text-white dark:bg-zinc-800">
                <Icon size={28} />
              </span>
              <span className="font-semibold">{name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="font-medium text-red-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : featured.map((p, i) => (
                <motion.div
                  key={p.id}
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: i * 0.08 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-zinc-900 p-8 text-white sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-4xl">Festive Sale is Live</h2>
          <p className="mt-2 max-w-lg text-white/80">
            Get up to 70% off on earbuds, watches and speakers. Limited time only.
          </p>
          <Link
            to="/products"
            className="mt-5 inline-block rounded-full bg-white px-7 py-3 font-semibold text-red-600 transition hover:scale-105"
          >
            Grab the Deal
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5 dark:border-zinc-800"
          >
            <Icon className="text-red-600" size={30} />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-500">{text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}