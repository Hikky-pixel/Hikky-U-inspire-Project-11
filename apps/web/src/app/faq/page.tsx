'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs, faqCategories } from '@/data/faqs';
import { ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F2A4A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            FAQs
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Frequently Asked <span className="text-orange-400">Questions</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Answers to the most common questions about working with BuildPro — from getting started
            to post-completion maintenance.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenFaq(null);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 mb-8">
            Showing <span className="font-bold text-[#0F2A4A]">{filtered.length}</span> questions
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filtered.map((faq, idx) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:border-orange-200 transition-colors"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-orange-500 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <span className="font-semibold text-[#0F2A4A] text-sm leading-relaxed">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-orange-500 flex-shrink-0 transition-transform mt-0.5 ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="ml-11 border-t border-gray-100 pt-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      <div className="mt-3">
                        <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 text-center border border-gray-100">
            <h2 className="text-3xl font-black text-[#0F2A4A] mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8 text-base">
              Our team is ready to answer any specific questions about your project requirements.
              Contact us today for a free consultation.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <a
                href="tel:+2348035551200"
                className="flex flex-col items-center gap-2 bg-white rounded-2xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Phone size={22} className="text-orange-500" />
                </div>
                <span className="font-bold text-[#0F2A4A] text-sm">Call Us</span>
                <span className="text-gray-500 text-xs">+234 (0) 803 555 1200</span>
              </a>
              <a
                href="mailto:info@buildproconstruction.com"
                className="flex flex-col items-center gap-2 bg-white rounded-2xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Mail size={22} className="text-orange-500" />
                </div>
                <span className="font-bold text-[#0F2A4A] text-sm">Email Us</span>
                <span className="text-gray-500 text-xs">info@buildproconstruction.com</span>
              </a>
              <Link
                href="/contact"
                className="flex flex-col items-center gap-2 bg-orange-500 rounded-2xl p-5 hover:bg-orange-600 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-400/30 rounded-xl flex items-center justify-center">
                  <ArrowRight size={22} className="text-white" />
                </div>
                <span className="font-bold text-white text-sm">Contact Form</span>
                <span className="text-orange-100 text-xs">Send us a message</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
