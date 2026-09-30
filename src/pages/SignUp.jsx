import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const initialForm = { name: '', email: '', phone: '', password: '', confirmPassword: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Name is required'
  else if (values.name.trim().length < 3) errors.name = 'Name must be at least 3 characters'

  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email'

  if (!values.phone.trim()) errors.phone = 'Phone number is required'
  else if (!/^[6-9]\d{9}$/.test(values.phone)) errors.phone = 'Enter a valid 10 digit mobile number'

  if (!values.password) errors.password = 'Password is required'
  else if (values.password.length < 6) errors.password = 'Password must be at least 6 characters'
  else if (!/\d/.test(values.password)) errors.password = 'Password must contain at least one number'

  if (!values.confirmPassword) errors.confirmPassword = 'Please confirm your password'
  else if (values.confirmPassword !== values.password) errors.confirmPassword = 'Passwords do not match'

  return errors
}

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-transparent px-4 py-3 outline-none transition focus:border-red-500 ${
    hasError ? 'border-red-500' : 'border-gray-500/40'
  }`

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      toast.error('Please fix the errors in the form')
      return
    }

    setLoading(true)
    setTimeout(() => {
      try {
        localStorage.setItem('user', JSON.stringify({ name: form.name, email: form.email }))
      } catch {
        // ignore storage errors
      }
      setLoading(false)
      toast.success('Account created successfully!')
      navigate('/login')
    }, 1000)
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-2xl bg-white/5 p-8 shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">
            Create <span className="text-red-500">Account</span>
          </h1>
          <p className="mt-2 text-sm opacity-80">Join boAt Store and start shopping</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
          <div>
            <label className="mb-1 block text-sm font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass(errors.name)}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass(errors.email)}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="10 digit mobile number"
              maxLength={10}
              className={inputClass(errors.phone)}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters with a number"
                className={`${inputClass(errors.password)} pr-16`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-400 hover:text-red-500"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className={inputClass(errors.confirmPassword)}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-red-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm opacity-80">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  )
}