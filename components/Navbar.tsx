"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-primary shadow-soft z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-heading font-bold text-white">
          SurajG.
        </Link>
        <div className="hidden md:flex space-x-16">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-body text-lg md:text-xl ${
                pathname === l.href ? "text-primary" : "text-gray-100"
              } hover:text-primary transition-colors`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open menu"
          >
            <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-4 top-16 bg-gray-900 rounded-lg shadow-lg py-2 px-4 flex flex-col space-y-2 min-w-[140px] border border-gray-700 z-50">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-body text-base py-2 px-2 rounded hover:bg-primary/10 ${
                    pathname === l.href ? "text-primary" : "text-gray-100"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 