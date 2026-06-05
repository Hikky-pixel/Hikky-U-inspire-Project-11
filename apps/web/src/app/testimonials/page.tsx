import type { Metadata } from 'next';
import Link from 'next/link';
import { testimonials } from '@/data/testimonials';
import { Star, Quote, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description:
    'Read what our clients say about BuildPro Construction Ltd. Testimonials from property developers, government agencies, corporate organizations, and private clients.',
};

const stats = [
  { v: '98%', l: 'Client Satisfaction Rate' },
  { v: '250+', l: 'Completed Projects' },
  { v: '10+', l: 'Years Average Client Relationship' },
  { v: '80%', l: 'Repeat Business Rate' },
];

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F2A4A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Client Testimonials
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our Clients <span className="text-orange-400">Say It Best</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it. Read what property developers, government agencies,
            corporate organizations, and private clients say about their experience working with
            BuildPro.
          </p>
        </div>
      </section>

      {/* Satisfaction Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black text-orange-500">{s.v}</div>
                <div className="text-gray-500 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#0F2A4A] rounded-3xl p-8 md:p-14 text-center">
            <Quote size={48} className="text-orange-400 mx-auto mb-6" />
            <p className="text-white text-xl md:text-2xl leading-relaxed italic mb-8 font-light">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-16 h-16 rounded-full object-cover border-3 border-orange-400"
              />
              <div className="text-left">
                <div className="text-white font-bold">{testimonials[0].name}</div>
                <div className="text-gray-400 text-sm">{testimonials[0].role}</div>
                <div className="text-orange-400 text-sm font-semibold">
                  {testimonials[0].company}
                </div>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="#F97316" className="text-orange-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white/10 rounded-xl px-4 py-2 inline-block">
              <span className="text-gray-400 text-xs">Project: </span>
              <span className="text-orange-300 text-xs font-semibold">
                {testimonials[0].project}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F2A4A]">All Client Reviews</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-orange-200 transition-all"
              >
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">
                    {t.category}
                  </span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} fill="#F97316" className="text-orange-400" />
                    ))}
                  </div>
                </div>

                <Quote size={24} className="text-orange-200 mb-3" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-[#0F2A4A] text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                      <div className="text-orange-500 text-xs font-semibold">{t.company}</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-500">
                    <span className="font-semibold">Project: </span>
                    {t.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="text-gray-300 mb-8 text-base">
            Experience the BuildPro difference. Contact us today to discuss your project and join
            the 250+ clients who have trusted us with their most important construction projects.
          </p>
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-xl text-base transition-colors inline-flex items-center gap-2 group"
          >
            Start Your Project Today
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
