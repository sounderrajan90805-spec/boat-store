import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const page = (el) => <PageTransition>{el}</PageTransition>

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={page(<Home />)} />
            <Route path="/products" element={page(<Products />)} />
            <Route path="/products/:id" element={page(<ProductDetails />)} />
            <Route path="/about" element={page(<About />)} />
            <Route path="/contact" element={page(<Contact />)} />
            <Route path="/login" element={page(<Login />)} />
            <Route path="/signup" element={page(<SignUp />)} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}