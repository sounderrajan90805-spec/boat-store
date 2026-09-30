import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const liked = isWishlisted(product.id)
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <ProductImage
            category={product.category}
            variant={product.images[0]}
            className="aspect-square w-full transition duration-500 group-hover:scale-110"
          />
        </Link>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow transition hover:scale-110 dark:bg-zinc-900/90"
        >
          <Heart
            size={18}
            className={liked ? 'fill-red-600 text-red-600' : 'text-gray-600 dark:text-gray-300'}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.category}
        </p>
        <Link to={`/products/${product.id}`}>
          <h3 className="mt-1 line-clamp-1 font-semibold transition hover:text-red-600">
            {product.name}
          </h3>
        </Link>

        <div className="mt-1 flex items-center gap-1 text-sm">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-gray-500">({product.reviews.toLocaleString('en-IN')})</span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-gray-500 line-through">
            ₹{product.mrp.toLocaleString('en-IN')}
          </span>
          <span className="text-sm font-semibold text-green-600">{discount}% off</span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 font-semibold text-white transition hover:bg-red-700 active:scale-95"
        >
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  )
}