import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('wishlist')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const isWishlisted = (id) => wishlist.includes(id)

  const toggleWishlist = (product) => {
    if (isWishlisted(product.id)) {
      setWishlist((prev) => prev.filter((id) => id !== product.id))
      toast('Removed from wishlist', { icon: '💔' })
    } else {
      setWishlist((prev) => [...prev, product.id])
      toast.success('Added to wishlist')
    }
  }

  return (
    <WishlistContext.Provider value={{ wishlist, isWishlisted, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)