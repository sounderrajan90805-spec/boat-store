import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-extrabold">
            bo<span className="text-red-600">A</span>t Store
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Plug into nirvana with premium audio and wearables.
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Shop</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li><Link to="/products" className="hover:text-red-600">All Products</Link></li>
            <li><Link to="/wishlist" className="hover:text-red-600">Wishlist</Link></li>
            <li><Link to="/cart" className="hover:text-red-600">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Company</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li><Link to="/about" className="hover:text-red-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-red-600">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Account</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li><Link to="/login" className="hover:text-red-600">Login</Link></li>
            <li><Link to="/signup" className="hover:text-red-600">Sign Up</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500 dark:border-zinc-800">
        © {new Date().getFullYear()} boAt Store. Student project (not the official website).
      </div>
    </footer>
  )
}