'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { team } from '@/data/team';
import { testimonials } from '@/data/testimonials';
import { blogPosts } from '@/data/blog';
import { faqs } from '@/data/faqs';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Award,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Phone,
  Mail,
  ChevronDown,
  MapPin,
} from 'lucide-react';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience', icon: Clock },
  { value: 250, suffix: '+', label: 'Completed Projects', icon: Award },
  { value: 120, suffix: '+', label: 'Team Members', icon: Users },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Star },
  { value: 12, suffix: '', label: 'States Served', icon: MapPin },
  { value: 50, suffix: 'B+', label: '₦ Project Value', icon: TrendingUp },
];

const whyUs = [
  {
    icon: Award,
    title: 'Proven Track Record',
    description:
      '250+ completed projects across Nigeria, worth over ₦50 billion, delivered on time and within budget.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'ISO 45001 certified HSE management system with an exemplary zero LTI record on major projects.',
  },
  {
    icon: Zap,
    title: 'Innovation-Driven',
    description:
      'We use BIM, drone surveys, and modern construction technology to deliver smarter, faster projects.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'COREN-registered engineers, PMP-certified project managers, and highly skilled construction professionals.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assured',
    description:
      'ISO 9001 certified quality management system with rigorous inspection and testing protocols.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Approach',
    description:
      'We integrate green building principles and sustainable practices into every project we deliver.',
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const featuredBlog = blogPosts.slice(0, 3);
  const previewFaqs = faqs.slice(0, 5);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/95 via-[#0F2A4A]/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 rounded-full px-4 py-1.5 mb-6">
              <span
                className="w-2 h-2 bg-orange-400 rounded-full"
                style={{ animation: 'pulseDot 1.5s ease-in-out infinite' }}
              />
              <span className="text-orange-300 text-sm font-semibold tracking-wide">
                Nigeria&apos;s Premier Construction Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Building <span className="text-orange-400">Excellence.</span>
              <br />
              Creating the <span className="text-orange-400">Future.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              BuildPro Construction Ltd delivers world-class building and infrastructure projects
              across Nigeria. 15+ years, 250+ completed projects, ₦50B+ delivered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-2 group"
              >
                Get a Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/10"
              >
                <Play size={18} />
                View Projects
              </Link>
            </div>

            {/* Hero stats strip */}
            <div className="grid grid-cols-3 gap-4 mt-14">
              {[
                { v: '15+', l: 'Years' },
                { v: '250+', l: 'Projects' },
                { v: '98%', l: 'Satisfaction' },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-orange-500 pl-4">
                  <div className="text-2xl md:text-3xl font-black text-white">{s.v}</div>
                  <div className="text-gray-400 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown
            size={20}
            className="text-orange-400"
            style={{ animation: 'bounceDown 1.5s ease-in-out infinite' }}
          />
        </div>
      </section>

      {/* ─── COMPANY INTRO ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                About BuildPro
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A] leading-tight mb-6">
                Nigeria&apos;s Trusted Construction & Infrastructure Partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-base">
                BuildPro Construction Ltd is a professional construction and infrastructure company
                combining innovation, technical expertise, and industry best practices to deliver
                reliable, sustainable construction solutions for public and private sector clients
                across Nigeria.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                With 15+ years of experience and a portfolio spanning luxury residences, office
                towers, highways, and public infrastructure, we are committed to building excellence
                in everything we do.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'COREN registered engineering company',
                  'ISO 9001 & ISO 45001 certified',
                  'Pre-qualified federal & state government contractor',
                  'Delivering across 12 Nigerian states',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="bg-[#0F2A4A] hover:bg-[#1a3a5c] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors flex items-center gap-2 group"
                >
                  Learn More About Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#0F2A4A] text-[#0F2A4A] hover:bg-[#0F2A4A] hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80"
                  alt="BuildPro Construction Project"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-black">₦50B+</div>
                <div className="text-sm text-orange-100">Projects Delivered</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#0F2A4A] text-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} fill="#F97316" className="text-orange-500" />
                  ))}
                </div>
                <div className="text-sm font-bold">98% Client Satisfaction</div>
                <div className="text-xs text-gray-400">Based on 250+ projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A] leading-tight mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-gray-500 text-base">
              From structural engineering to complete project management, we offer the full spectrum
              of construction services your project demands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all group"
              >
                <div className="w-14 h-14 bg-orange-100 group-hover:bg-orange-500 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[#0F2A4A] text-base mb-2 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-1 text-orange-500 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="bg-[#0F2A4A] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-colors inline-flex items-center gap-2 group"
            >
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section ref={statsRef} className="py-20 bg-[#0F2A4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=50)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Our Numbers Tell the Story
            </h2>
            <p className="text-gray-400">
              Two decades of excellence measured in results that matter.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return <StatCard key={stat.label} stat={stat} Icon={Icon} visible={statsVisible} />;
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A] leading-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-orange-500 hover:text-orange-600 font-bold text-sm flex items-center gap-2 group"
            >
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((project) => (
              <Link
                key={project.id}
                href="/projects"
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/80 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-sm leading-tight">{project.title}</h3>
                    <p className="text-gray-300 text-xs mt-1 flex items-center gap-1">
                      <MapPin size={10} />
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-semibold text-[#0F2A4A]">{project.value}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                  alt="Construction site"
                  className="rounded-2xl h-56 w-full object-cover shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"
                  alt="Engineering team"
                  className="rounded-2xl h-56 w-full object-cover shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 min-w-[260px]">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Award size={28} className="text-orange-500" />
                </div>
                <div>
                  <div className="font-black text-[#0F2A4A] text-lg">Award Winning</div>
                  <div className="text-gray-500 text-xs">Best Construction Company 2024</div>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:pt-0">
              <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A] leading-tight mb-8">
                The BuildPro Difference
              </h2>
              <div className="grid gap-5">
                {whyUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4 group">
                      <div className="w-11 h-11 bg-orange-100 group-hover:bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon
                          size={20}
                          className="text-orange-500 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0F2A4A] text-sm mb-1">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM PREVIEW ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Our Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A] leading-tight mb-4">
              Meet the Experts Behind Our Success
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((member) => (
              <Link key={member.id} href="/team" className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#0F2A4A]/0 group-hover:bg-[#0F2A4A]/60 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-white text-xs font-bold text-center px-2">
                        View Profile
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-[#0F2A4A] text-xs leading-tight">{member.name}</h3>
                <p className="text-gray-500 text-xs mt-0.5">{member.role}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/team"
              className="border-2 border-[#0F2A4A] text-[#0F2A4A] hover:bg-[#0F2A4A] hover:text-white font-bold px-8 py-3 rounded-xl text-sm transition-all"
            >
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-[#0F2A4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=30)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">What Our Clients Say</h2>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
              <Quote size={40} className="text-orange-400 mx-auto mb-6" />
              <p className="text-white text-lg md:text-xl leading-relaxed italic mb-8">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
                />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonials[activeTestimonial].role},{' '}
                    {testimonials[activeTestimonial].company}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} fill="#F97316" className="text-orange-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() =>
                  setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)
                }
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={18} className="text-white" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === activeTestimonial ? 'bg-orange-500' : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((p) => (p + 1) % testimonials.length)}
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/testimonials"
              className="text-orange-400 hover:text-orange-300 font-bold text-sm inline-flex items-center gap-2 group"
            >
              Read All Testimonials
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ PREVIEW ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Quick answers to the most common questions about working with BuildPro.
            </p>
          </div>
          <div className="space-y-3">
            {previewFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <span className="font-semibold text-[#0F2A4A] text-sm">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-orange-500 flex-shrink-0 transition-transform ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-orange-500 hover:text-orange-600 font-bold text-sm inline-flex items-center gap-2 group"
            >
              View All FAQs ({faqs.length} Questions)
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                Latest News
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A]">Insights & Updates</h2>
            </div>
            <Link
              href="/blog"
              className="text-orange-500 hover:text-orange-600 font-bold text-sm flex items-center gap-2 group"
            >
              View All Articles
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {featuredBlog.map((post) => (
              <Link
                key={post.id}
                href="/blog"
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#0F2A4A] text-base leading-tight mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-600 font-medium">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5c] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Ready to Build?
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            Let&apos;s Build Your Vision <span className="text-orange-400">Together</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            From concept to completion, BuildPro delivers construction excellence. Contact us today
            for a free consultation and quote on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-base transition-colors shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-2 group"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-10 py-4 rounded-xl text-base transition-colors hover:bg-white/10 flex items-center justify-center gap-2"
            >
              View Our Portfolio
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
            <a
              href="tel:+2348035551200"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Phone size={16} className="text-orange-400" />
              +234 (0) 803 555 1200
            </a>
            <a
              href="mailto:info@buildproconstruction.com"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Mail size={16} className="text-orange-400" />
              info@buildproconstruction.com
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
        @keyframes pulseDot {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.85);
          }
        }
        @keyframes bounceDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
      `}</style>
    </div>
  );
}

function StatCard({
  stat,
  Icon,
  visible,
}: {
  stat: (typeof stats)[0];
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  visible: boolean;
}) {
  const count = useCountUp(stat.value, 2000, visible);
  return (
    <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
        <Icon size={22} className="text-orange-400" />
      </div>
      <div className="text-2xl md:text-3xl font-black text-white">
        {visible ? count : 0}
        {stat.suffix}
      </div>
      <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
    </div>
  );
}
