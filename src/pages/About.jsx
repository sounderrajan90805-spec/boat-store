import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const stats = [
  { value: '10M+', label: 'Happy Customers' },
  { value: '500+', label: 'Products' },
  { value: '4.4★', label: 'Average Rating' },
  { value: '100+', label: 'Cities Served' },
]

const values = [
  {
    icon: '🎧',
    title: 'Premium Sound',
    text: 'Every product is tuned to deliver powerful, crystal clear audio at a price everyone can afford.',
  },
  {
    icon: '⚡',
    title: 'Fast & Reliable',
    text: 'Quick charging, long battery life and fast delivery so you never have to wait.',
  },
  {
    icon: '🛡️',
    title: '1 Year Warranty',
    text: 'We stand behind our products with a full year warranty and friendly support.',
  },
  {
    icon: '💙',
    title: 'Made for You',
    text: 'Designed for the young and the restless, with style that matches your lifestyle.',
  },
]

const team = [
  { name: 'Aarav Mehta', role: 'Founder & CEO' },
  { name: 'Priya Nair', role: 'Head of Design' },
  { name: 'Rahul Verma', role: 'Product Lead' },
  { name: 'Sneha Iyer', role: 'Customer Support' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">About Us</p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
          Plug Into <span className="text-red-500">Nirvana</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed opacity-80">
          boAt Store is a home for audio and wearable lovers. We build earbuds, headphones,
          smartwatches, speakers and neckbands that sound great, look great and cost less.
        </p>
      </motion.section>

      {/* Stats */}
      <section className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-white/5 p-6 text-center shadow-lg"
          >
            <p className="text-3xl font-extrabold text-red-500">{s.value}</p>
            <p className="mt-1 text-sm opacity-80">{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Story */}
      <section className="mt-16 grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-4 leading-relaxed opacity-80">
            We started with a simple idea: great audio should not be a luxury. A small team of
            music lovers came together to build products that people actually enjoy using every
            day.
          </p>
          <p className="mt-3 leading-relaxed opacity-80">
            Today millions of people trust us for their music, calls, workouts and gaming. And we
            are just getting started.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block rounded-full bg-red-600 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-red-700"
          >
            Shop Now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl bg-white shadow-lg"
        >
          <img
            src="/images/headphones-1.jpg"
            alt="boAt headphones"
            className="h-80 w-full object-contain p-4 transition-transform duration-500 hover:scale-105" />
        </motion.div>
      </section>

      {/* Values */}
      <section className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 p-6 shadow-lg transition hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="text-4xl">{v.icon}</div>
              <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Meet the Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 p-6 text-center shadow-lg transition hover:-translate-y-2"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-2xl font-extrabold text-white">
                {m.name.charAt(0)}
              </div>
              <h3 className="mt-4 font-bold">{m.name}</h3>
              <p className="text-sm text-blue-400">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-3xl bg-gradient-to-r from-red-600 to-red-800 p-10 text-center text-white"
      >
        <h2 className="text-3xl font-extrabold">Have a question?</h2>
        <p className="mt-2 opacity-90">Our team is happy to help you anytime.</p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-bold text-red-600 transition hover:scale-105"
        >
          Contact Us
        </Link>
      </motion.section>
    </div>
  )
}