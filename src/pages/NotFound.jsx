import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
    >
      <h1 className="text-8xl font-extrabold text-red-600">404</h1>
      <p className="mt-4 text-xl font-semibold">Page not found</p>
      <p className="mt-2 opacity-70">
      </p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-red-700"
      >
        Back to Home
      </Link>
    </motion.section>
  );
}