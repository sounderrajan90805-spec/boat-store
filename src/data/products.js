const img = (seed) => `https://picsum.photos/seed/${seed}/600/600`

export const categories = ['All', 'Earbuds', 'Headphones', 'Smartwatches', 'Speakers', 'Neckbands']

export const products = [
  {
    id: 1, name: 'Airdopes 141 ANC', category: 'Earbuds', price: 1499, mrp: 4990,
    rating: 4.4, reviews: 12840, badge: 'Bestseller',
    description: 'True wireless earbuds with active noise cancellation, 42H playback and ASAP fast charge.',
    features: ['Active Noise Cancellation', '42H Playback', 'ENx Technology', 'IPX4 Water Resistance'],
    images: [img('earbuds1a'), img('earbuds1b'), img('earbuds1c')],
  },
  {
    id: 2, name: 'Airdopes Alpha', category: 'Earbuds', price: 999, mrp: 2990,
    rating: 4.2, reviews: 8420, badge: 'New',
    description: 'Lightweight earbuds with 50H total playback and low latency gaming mode.',
    features: ['50H Playback', 'Beast Mode 50ms Latency', 'IWP Technology', 'Type-C Charging'],
    images: [img('earbuds2a'), img('earbuds2b'), img('earbuds2c')],
  },
  {
    id: 3, name: 'Rockerz 450', category: 'Headphones', price: 1299, mrp: 3990,
    rating: 4.3, reviews: 25610, badge: 'Bestseller',
    description: 'On-ear wireless headphones with 40mm drivers and up to 15 hours of playtime.',
    features: ['40mm Drivers', '15H Playback', 'Dual Pairing', 'Soft Ear Cushions'],
    images: [img('head3a'), img('head3b'), img('head3c')],
  },
  {
    id: 4, name: 'Nirvana 751 ANC', category: 'Headphones', price: 3499, mrp: 7990,
    rating: 4.5, reviews: 5120, badge: 'Premium',
    description: 'Over-ear premium headphones with hybrid ANC and 80H battery life.',
    features: ['Hybrid ANC', '80H Playback', '3D Spatial Audio', 'Bluetooth 5.3'],
    images: [img('head4a'), img('head4b'), img('head4c')],
  },
  {
    id: 5, name: 'Wave Call 2', category: 'Smartwatches', price: 1799, mrp: 6990,
    rating: 4.1, reviews: 18930, badge: 'Sale',
    description: '1.83 inch HD display smartwatch with Bluetooth calling and 100+ sports modes.',
    features: ['1.83" HD Display', 'Bluetooth Calling', '100+ Sports Modes', 'SpO2 & Heart Rate'],
    images: [img('watch5a'), img('watch5b'), img('watch5c')],
  },
  {
    id: 6, name: 'Ultima Prime', category: 'Smartwatches', price: 2999, mrp: 8990,
    rating: 4.4, reviews: 7340, badge: 'New',
    description: 'AMOLED smartwatch with always-on display, GPS and 7-day battery.',
    features: ['AMOLED Display', 'Built-in GPS', '7 Day Battery', 'Metal Frame'],
    images: [img('watch6a'), img('watch6b'), img('watch6c')],
  },
  {
    id: 7, name: 'Stone 352', category: 'Speakers', price: 1199, mrp: 3490,
    rating: 4.3, reviews: 31200, badge: 'Bestseller',
    description: 'Portable 10W Bluetooth speaker with 12H playtime and IPX7 water resistance.',
    features: ['10W Output', '12H Playtime', 'IPX7 Waterproof', 'TWS Feature'],
    images: [img('speaker7a'), img('speaker7b'), img('speaker7c')],
  },
  {
    id: 8, name: 'Aavante Bar 1600', category: 'Speakers', price: 4999, mrp: 11990,
    rating: 4.2, reviews: 3890, badge: 'Premium',
    description: '2.1 channel soundbar with wired subwoofer and 120W of powerful sound.',
    features: ['120W RMS', '2.1 Channel', 'Wired Subwoofer', 'HDMI ARC'],
    images: [img('speaker8a'), img('speaker8b'), img('speaker8c')],
  },
  {
    id: 9, name: 'Rockerz 255 Pro+', category: 'Neckbands', price: 999, mrp: 2990,
    rating: 4.3, reviews: 42100, badge: 'Bestseller',
    description: 'Wireless neckband with 60H playback, ASAP charge and IPX7 sweat resistance.',
    features: ['60H Playback', 'ASAP Charge', 'IPX7', 'Dual Pairing'],
    images: [img('neck9a'), img('neck9b'), img('neck9c')],
  },
  {
    id: 10, name: 'Rockerz 330 Pro', category: 'Neckbands', price: 1299, mrp: 3490,
    rating: 4.4, reviews: 9870, badge: 'Sale',
    description: 'ANC neckband with 60H battery life and ENx voice clarity.',
    features: ['ANC', '60H Battery', 'ENx Technology', 'Type-C Charging'],
    images: [img('neck10a'), img('neck10b'), img('neck10c')],
  },
]