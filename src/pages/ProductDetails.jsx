import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import ProductImage from '../components/ProductImage'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()

  const product = products.find((p) => p.id === Number(id))
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold">Product not found</h2>
        <Link
          to="/products"
          className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Back to Products
        </Link>
      </div>
    )
  }

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)
  const wished = isWishlisted(product.id)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm font-semibold text-red-500 hover:underline"
      >
        ← Back
      </button>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Image gallery */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <ProductImage
              category={product.category}
              variant={product.images[activeImg]}
              className="h-96 w-full transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveImg(i)}
                className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-white transition ${
                  activeImg === i ? 'border-red-500' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <ProductImage
                  category={product.category}
                  variant={src}
                  className="h-full w-full"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            {product.category}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold md:text-4xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold">{product.rating}</span>
            <span className="opacity-70">({product.reviews.toLocaleString()} reviews)</span>
            {product.badge && (
              <span className="ml-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                {product.badge}
              </span>
            )}
          </div>

          <div className="mt-5 flex items-end gap-3">
            <span className="text-4xl font-extrabold">₹{product.price.toLocaleString()}</span>
            <span className="text-lg line-through opacity-60">₹{product.mrp.toLocaleString()}</span>
            <span className="font-bold text-green-400">{discount}% off</span>
          </div>

          <p className="mt-5 leading-relaxed opacity-80">{product.description}</p>

          <h3 className="mt-6 mb-2 text-lg font-bold">Key Features</h3>
          <ul className="space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* Quantity */}
          <div className="mt-8 flex items-center gap-4">
            <span className="font-semibold">Quantity</span>
            <div className="flex items-center rounded-full border border-white/20">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-10 w-10 text-xl font-bold hover:text-red-500"
              >
                −
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="h-10 w-10 text-xl font-bold hover:text-red-500"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => addToCart(product, qty)}
              className="flex-1 rounded-full bg-red-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-red-700"
            >
              Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={`rounded-full border px-6 py-3 font-bold transition hover:scale-105 ${
                wished
                  ? 'border-red-500 bg-red-500/10 text-red-500'
                  : 'border-white/30 hover:border-red-500 hover:text-red-500'
              }`}
            >
              {wished ? '♥ Wishlisted' : '♡ Wishlist'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">More in {product.category}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="overflow-hidden rounded-2xl bg-white/5 shadow-lg transition hover:-translate-y-1"
              >
                <ProductImage
                  category={p.category}
                  variant={p.images[0]}
                  className="h-48 w-full bg-white"
                />
                <div className="p-4">
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="font-semibold text-red-500">₹{p.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}