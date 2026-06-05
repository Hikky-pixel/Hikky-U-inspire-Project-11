import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from 'lucide-react';

const services = [
  { label: 'Building Construction', href: '/services' },
  { label: 'Civil Engineering Works', href: '/services' },
  { label: 'Project Management', href: '/services' },
  { label: 'Structural Engineering', href: '/services' },
  { label: 'Renovation & Remodeling', href: '/services' },
  { label: 'Facility Maintenance', href: '/services' },
  { label: 'Quantity Surveying', href: '/services' },
  { label: 'Infrastructure Development', href: '/services' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Our Team', href: '/team' },
  { label: 'News & Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1F38] text-gray-300">
      {/* Newsletter bar */}
      <div className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-xl">Stay Updated with BuildPro</h3>
            <p className="text-orange-100 text-sm mt-1">
              Get the latest news, projects, and industry insights in your inbox.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-72 px-4 py-3 rounded-lg text-gray-800 text-sm outline-none"
            />
            <button className="bg-[#0F2A4A] hover:bg-[#1a3a5c] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">B</span>
              </div>
              <div>
                <div className="font-black text-white text-lg leading-tight">BuildPro</div>
                <div className="text-orange-400 text-xs font-semibold tracking-widest uppercase leading-tight">
                  Construction Ltd
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building Excellence. Creating the Future. Nigeria&apos;s trusted partner for
              world-class construction and infrastructure solutions since 2003.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { value: '15+', label: 'Years' },
                { value: '250+', label: 'Projects' },
                { value: '120+', label: 'Employees' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0F2A4A] rounded-lg p-3 text-center">
                  <div className="text-orange-400 font-black text-lg">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-[#0F2A4A] hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-[#1a3a5c]">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-orange-500 group-hover:translate-x-1 transition-transform"
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-[#1a3a5c]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-orange-500 group-hover:translate-x-1 transition-transform"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-[#1a3a5c]">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400 leading-relaxed">
                  Plot 15, Admiralty Way
                  <br />
                  Lekki Phase 1, Lagos State
                  <br />
                  Nigeria
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-orange-400 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <a
                    href="tel:+2348035551200"
                    className="hover:text-orange-400 transition-colors block"
                  >
                    +234 (0) 803 555 1200
                  </a>
                  <a
                    href="tel:+2348147774500"
                    className="hover:text-orange-400 transition-colors block"
                  >
                    +234 (0) 814 777 4500
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <a
                    href="mailto:info@buildproconstruction.com"
                    className="hover:text-orange-400 transition-colors block"
                  >
                    info@buildproconstruction.com
                  </a>
                  <a
                    href="mailto:support@buildproconstruction.com"
                    className="hover:text-orange-400 transition-colors block"
                  >
                    support@buildproconstruction.com
                  </a>
                </div>
              </div>
              <div className="bg-[#0F2A4A] rounded-lg p-4 text-sm">
                <div className="text-white font-semibold mb-2">Business Hours</div>
                <div className="text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon – Fri</span>
                    <span className="text-orange-400">8:00AM – 6:00PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-orange-400">9:00AM – 2:00PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a3a5c] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} BuildPro Construction Ltd. All rights reserved. RC
            892441
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-orange-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="text-gray-500 hover:text-orange-400 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/sitemap.xml"
              className="text-gray-500 hover:text-orange-400 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
