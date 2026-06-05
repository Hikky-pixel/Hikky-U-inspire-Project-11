'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Blog / News', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0F2A4A] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
          <span className="text-gray-300">
            Plot 15, Admiralty Way, Lekki Phase 1, Lagos, Nigeria
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+2348035551200"
              className="flex items-center gap-1 hover:text-orange-400 transition-colors"
            >
              <Phone size={13} />
              +234 (0) 803 555 1200
            </a>
            <a
              href="mailto:info@buildproconstruction.com"
              className="hover:text-orange-400 transition-colors"
            >
              info@buildproconstruction.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-xl bg-white' : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#0F2A4A] rounded-lg flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition-colors duration-300">
                <span className="text-white font-black text-lg">B</span>
              </div>
              <div>
                <div className="font-black text-[#0F2A4A] text-lg leading-tight">BuildPro</div>
                <div className="text-orange-500 text-xs font-semibold tracking-widest uppercase leading-tight">
                  Construction Ltd
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#0F2A4A] hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50">
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[200px] py-2 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      pathname === link.href
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-[#0F2A4A] hover:text-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="ml-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-orange-200"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#0F2A4A] hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-2.5 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                      pathname === link.href
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-[#0F2A4A] hover:text-orange-500 hover:bg-orange-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-3 rounded-lg text-sm transition-colors mt-3"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
