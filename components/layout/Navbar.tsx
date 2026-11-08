"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">AS</div>
          <span className="font-semibold tracking-tight text-dark text-[17px]">Ajay Salunkhe</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[15px] text-muted">
          <Link href="/work" className="hover:text-dark transition">Work</Link>
          <Link href="/projects" className="text-primary font-semibold hover:text-primary-hover transition">Projects</Link>
          <Link href="/approach" className="hover:text-dark transition">Approach</Link>
          <Link href="/insights" className="hover:text-dark transition">Insights</Link>
          <Link href="/about" className="hover:text-dark transition">About</Link>
          <Link href="/framework" className="hover:text-dark transition">Framework</Link>
          <Link href="/tools" className="hover:text-dark transition">Tools</Link>
          <Link href="/pqc-migration" className="text-blue-600 font-semibold hover:text-blue-800 transition">PQC Hub</Link>
        </div>

        <Link href="/contact" className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-primary text-white text-[15px] font-medium hover:bg-primary-hover transition">
          Get in Touch
        </Link>

        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-5 py-4 space-y-4 text-[15px]">
            <Link href="/work" className="block text-muted hover:text-dark transition" onClick={() => setIsOpen(false)}>Work</Link>
            <Link href="/projects" className="block text-primary font-semibold hover:text-primary-hover transition" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/approach" className="block text-muted hover:text-dark transition" onClick={() => setIsOpen(false)}>Approach</Link>
            <Link href="/insights" className="block text-muted hover:text-dark transition" onClick={() => setIsOpen(false)}>Insights</Link>
            <Link href="/about" className="block text-muted hover:text-dark transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/framework" className="block text-muted hover:text-dark transition" onClick={() => setIsOpen(false)}>Framework</Link>
            <Link href="/tools" className="block text-muted hover:text-dark transition" onClick={() => setIsOpen(false)}>Tools</Link>
            <Link href="/pqc-migration" className="block text-blue-600 font-semibold hover:text-blue-800 transition" onClick={() => setIsOpen(false)}>PQC Hub</Link>
            <Link href="/contact" className="inline-flex mt-2 px-5 py-2.5 rounded-lg bg-primary text-white text-[15px] font-medium" onClick={() => setIsOpen(false)}>Get in Touch</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
