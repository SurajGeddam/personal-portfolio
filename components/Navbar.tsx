"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    setDark(stored === "dark");
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-soft z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-heading font-bold">
          SurajG.
        </Link>
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-body ${
                pathname === l.href ? "text-primary" : "text-gray-700 dark:text-gray-300"
              } hover:text-primary transition-colors`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={toggleDark} className="ml-4 p-2 rounded-lg">
          {mounted ? (dark ? "🌞" : "🌙") : null}
        </button>
        <div className="md:hidden">
          {/* You can add a hamburger icon & mobile menu here */}
        </div>
      </div>
    </nav>
  );
} 