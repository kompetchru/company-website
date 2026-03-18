"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/services", label: "บริการ" },
  { href: "/contact", label: "ติดต่อเรา" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#0A2463] flex items-center justify-center shadow-lg group-hover:shadow-[#00B4D8]/40 transition-shadow">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <p className={`font-bold text-base leading-tight transition-colors ${scrolled ? "text-[#0A2463]" : "text-white"}`}>
                โปรเทค
              </p>
              <p className={`text-xs leading-tight transition-colors ${scrolled ? "text-[#00B4D8]" : "text-[#00B4D8]"}`}>
                IT Solutions
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-[#00B4D8] text-white shadow-md"
                    : scrolled
                    ? "text-[#1E3A5F] hover:bg-[#0A2463]/8 hover:text-[#0A2463]"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-[#00B4D8] text-white rounded-lg text-sm font-semibold hover:bg-[#0096B7] transition-colors shadow-md hover:shadow-[#00B4D8]/30"
            >
              ขอใบเสนอราคา
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[#0A2463]" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="เปิดเมนู"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#00B4D8] text-white"
                    : "text-[#1E3A5F] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 bg-[#00B4D8] text-white rounded-lg text-sm font-semibold text-center"
            >
              ขอใบเสนอราคา
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
