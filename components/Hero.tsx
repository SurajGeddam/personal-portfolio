"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      <motion.h1
        className="text-5xl font-bold font-heading"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Suraj Geddam
      </motion.h1>
      <motion.p
        className="text-xl font-body mt-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        MS in Machine Learning @ Georgia Tech
      </motion.p>
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="/resume.pdf"
          className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-body hover:bg-primary hover:text-white transition-colors"
        >
          View Resume
        </a>
        <a
          href="/contact"
          className="px-6 py-3 bg-primary text-white rounded-lg font-body hover:bg-opacity-80 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
} 