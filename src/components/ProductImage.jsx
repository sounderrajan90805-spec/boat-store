import { useState } from 'react'

const photos = {
  Earbuds: { prefix: 'earbuds', count: 5 },
  Headphones: { prefix: 'headphones', count: 3 },
  Smartwatches: { prefix: 'smartwatches', count: 3 },
  Speakers: { prefix: 'speakers', count: 3 },
  Neckbands: { prefix: 'neckband', count: 3 },
}

function toIndex(variant, count) {
  const n = Number(variant)
  if (Number.isFinite(n)) return Math.abs(Math.floor(n)) % count
  const text = String(variant || '')
  let sum = 0
  for (let i = 0; i < text.length; i++) sum += text.charCodeAt(i)
  return sum % count
}

export default function ProductImage({ category = '', variant = 0, className = '' }) {
  const [failed, setFailed] = useState(false)
  const info = photos[category]

  if (!info || failed) {
    return (
      <div
        role="img"
        aria-label={category}
        className={`${className} flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300 text-lg font-bold text-red-700`}
      >
        {category}
      </div>
    )
  }

  const index = toIndex(variant, info.count)

  return (
    <img
      src={`/images/${info.prefix}-${index + 1}.jpg`}
      alt={category}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} object-cover`}
    />
  )
}