# boAt Store

A modern, responsive consumer electronics store frontend inspired by boAt, built with React and Vite.

Live Demo: https://boat-store-eosin.vercel.app

## Features

- Pages: Home, Products, Product Details, About Us, Contact Us, Login, Sign Up, 404
- Form validation on Login and Sign Up
- Toast notifications for user actions
- Product search and filtering
- Hero image slider / carousel
- Wishlist and Add to Cart (frontend only)
- Dark / Light mode toggle
- Responsive navigation menu (mobile, tablet, desktop)
- Loading skeletons
- Smooth page transitions, animations and hover effects
- Scroll-to-top button

## Tech Stack

- React + Vite
- React Router
- Tailwind CSS
- Framer Motion
- Context API (Cart, Wishlist, Theme)

## Getting Started

```bash
git clone https://github.com/sounderrajan90805-spec/boat-store.git
cd boat-store
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
  components/   Navbar, Footer, ProductCard, PageTransition, ScrollToTop
  context/      CartContext, WishlistContext, ThemeContext
  data/         products.js
  pages/        Home, Products, ProductDetails, About, Contact, Login, SignUp, NotFound
```

## Author

S. Sounderrajan