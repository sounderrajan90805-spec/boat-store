import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const info = [
  { icon: '📍', title: 'Address', text: '123 Anna Salai, Chennai, Tamil Nadu 600002' },
  { icon: '📞', title: 'Phone', text: '+91 98765 43210' },
  { icon: '✉️', title: 'Email', text: 'support@boatstore.in' },
  { icon: '🕒', title: 'Working Hours', text: 'Mon - Sat, 9:00 AM - 6:00 PM' },
]

const initialForm = { name: '', email: '', phone: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  else if (values.name.trim().length < 3) errors.name = 'Name must be at least 3 characters'

  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email'

  if (values.phone && !/^[6-9]\d{9}$/.test(values.phone)) {
    errors.phone = 'Enter a valid 10 digit mobile number'
  }

  if (!values.message.trim()) errors.message = 'Message is required'
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'

  return errors
}

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-transparent px-4 py-3 outline-none transition focus:border-red-500 ${
    hasError ? 'border-red-500' : 'border-gray-500/40'
  }`

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

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

    setSending(true)
    setTimeout(() => {
      setSending(false)
      setForm(initialForm)
      toast.success('Message sent! We will get back to you soon.')
    }, 1200)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Contact Us
        </p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
          Get in <span className="text-red-500">Touch</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl opacity-80">
          Have a question about a product or an order? Send us a message and our team will reply
          as soon as possible.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        {/* Contact info */}
        <div className="space-y-4 md:col-span-2">
          {info.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 shadow-lg transition hover:-translate-y-1"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm opacity-80">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5 rounded-2xl bg-white/5 p-6 shadow-lg md:col-span-3"
        >
          <div>
            <label className="mb-1 block text-sm font-semibold">Name</label>
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

          <div className="grid gap-5 sm:grid-cols-2">
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
              <label className="mb-1 block text-sm font-semibold">Phone (optional)</label>
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
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className={inputClass(errors.message)}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-full bg-red-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </div>
  )
}