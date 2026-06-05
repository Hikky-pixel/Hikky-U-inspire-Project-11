'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { toast } from 'sonner';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+234 (0) 803 555 1200', '+234 (0) 814 777 4500'],
    action: 'tel:+2348035551200',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [
      'info@buildproconstruction.com',
      'support@buildproconstruction.com',
      'projects@buildproconstruction.com',
    ],
    action: 'mailto:info@buildproconstruction.com',
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    lines: ['Plot 15, Admiralty Way', 'Lekki Phase 1', 'Lagos State, Nigeria'],
    action: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Fri: 8:00AM – 6:00PM', 'Saturday: 9:00AM – 2:00PM', 'Sunday: Closed'],
    action: '',
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'bg-blue-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'bg-sky-500' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'bg-blue-700' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'bg-pink-600' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'bg-red-600' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setSubmitting(false);
    setSubmitted(true);
    toast.success('Message received! We will respond within 24 hours on business days.');
    setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F2A4A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Let&apos;s Build Something <span className="text-orange-400">Great Together</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your project? Contact our team for a free consultation and quote. We
            typically respond within 24 business hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const content = (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all h-full">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-orange-500" />
                  </div>
                  <h3 className="font-bold text-[#0F2A4A] text-base mb-3">{method.title}</h3>
                  <div className="space-y-1">
                    {method.lines.map((line) => (
                      <p key={line} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
              return method.action ? (
                <a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={method.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                  Send Us a Message
                </div>
                <h2 className="text-3xl font-black text-[#0F2A4A]">
                  Get a Free Project Consultation
                </h2>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 text-sm mb-6">
                    Thank you for contacting BuildPro Construction. Our team will review your
                    enquiry and respond within 24 hours on business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Adeyemi"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+234 803 000 0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your company name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all bg-white"
                      >
                        <option value="">Select a service</option>
                        <option>Building Construction</option>
                        <option>Civil Engineering Works</option>
                        <option>Project Management</option>
                        <option>Structural Engineering</option>
                        <option>Renovation & Remodeling</option>
                        <option>Facility Maintenance</option>
                        <option>Quantity Surveying</option>
                        <option>Infrastructure Development</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Estimated Project Budget
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all bg-white"
                      >
                        <option value="">Select a range</option>
                        <option>Under ₦50 Million</option>
                        <option>₦50M – ₦200M</option>
                        <option>₦200M – ₦500M</option>
                        <option>₦500M – ₦1 Billion</option>
                        <option>₦1B – ₦5 Billion</option>
                        <option>Above ₦5 Billion</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project — location, type of works, scope, timeline, and any specific requirements..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-black py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-2 group"
                  >
                    {submitting ? (
                      'Sending your message...'
                    ) : (
                      <>
                        Send Message & Request a Quote
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                  <p className="text-gray-500 text-xs text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy-policy" className="text-orange-500 hover:underline">
                      Privacy Policy
                    </a>
                    . We will respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>

            {/* Map + Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Google Maps Embed Placeholder */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-56 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80)',
                  }}
                />
                <div className="absolute inset-0 bg-[#0F2A4A]/60 flex flex-col items-center justify-center">
                  <MapPin size={36} className="text-orange-400 mb-2" />
                  <div className="text-white font-bold text-sm text-center px-4">
                    Plot 15, Admiralty Way
                    <br />
                    Lekki Phase 1, Lagos
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Office Details */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0F2A4A] mb-4 text-base">Head Office</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex gap-3">
                    <MapPin size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      BuildPro Construction Ltd
                      <br />
                      Plot 15, Admiralty Way
                      <br />
                      Lekki Phase 1, Lagos State
                      <br />
                      Nigeria
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="tel:+2348035551200" className="hover:text-orange-500 block">
                        +234 (0) 803 555 1200
                      </a>
                      <a href="tel:+2348147774500" className="hover:text-orange-500 block">
                        +234 (0) 814 777 4500
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <a
                        href="mailto:info@buildproconstruction.com"
                        className="hover:text-orange-500 block text-xs"
                      >
                        info@buildproconstruction.com
                      </a>
                      <a
                        href="mailto:support@buildproconstruction.com"
                        className="hover:text-orange-500 block text-xs"
                      >
                        support@buildproconstruction.com
                      </a>
                      <a
                        href="mailto:projects@buildproconstruction.com"
                        className="hover:text-orange-500 block text-xs"
                      >
                        projects@buildproconstruction.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0F2A4A] mb-4 text-base">
                  Follow Us on Social Media
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`${color} w-10 h-10 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity`}
                    >
                      <Icon size={18} className="text-white" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-3">
                  Follow us for project updates, industry news, and behind-the-scenes insights.
                </p>
              </div>

              {/* Emergency */}
              <div className="bg-[#0F2A4A] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2 text-base">Emergency / 24-Hour Line</h3>
                <p className="text-gray-300 text-sm mb-3">
                  For urgent facility maintenance or site emergencies on active BuildPro projects:
                </p>
                <a
                  href="tel:+2348035551200"
                  className="text-orange-400 font-black text-lg hover:text-orange-300 transition-colors"
                >
                  +234 (0) 803 555 1200
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
