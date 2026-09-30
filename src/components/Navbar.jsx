import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Menu, Moon, ShoppingCart, Sun, User, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

function Badge({ count }) {
  if (!count) return null
  return (
    <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-bold text-white">
      {count}
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { cartCount } = useCart()
  const { wishlist } = useWishlist()

  const linkClass = ({ isActive }) =>
    `relative font-medium transition-colors hover:text-red-600 ${
      isActive ? 'text-red-600' : 'text-gray-700 dark:text-gray-300'
    }`

  const iconBtn =
    'relative rounded-full p-2 text-gray-700 transition hover:bg-gray-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-zinc-800'

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          bo<span className="text-red-600">A</span>t
          <span className="ml-1 text-xs font-medium text-gray-500">Store</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button onClick={toggleTheme} className={iconBtn} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/wishlist" className={iconBtn} aria-label="Wishlist">
            <Heart size={20} />
            <Badge count={wishlist.length} />
          </Link>
          <Link to="/cart" className={iconBtn} aria-label="Cart">
            <ShoppingCart size={20} />
            <Badge count={cartCount} />
          </Link>
          <Link to="/login" className={`${iconBtn} hidden sm:block`} aria-label="Login">
            <User size={20} />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`${iconBtn} md:hidden`}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-200 bg-white md:hidden dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {[...links, { to: '/login', label: 'Login' }, { to: '/signup', label: 'Sign Up' }].map(
                (l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 font-medium ${
                        isActive
                          ? 'bg-red-50 text-red-600 dark:bg-zinc-900'
                          : 'text-gray-700 dark:text-gray-300'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}