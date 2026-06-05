import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Award, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about BuildPro Construction Ltd — our story, mission, vision, values, and the leadership team driving Nigeria's construction excellence.",
};

const coreValues = [
  {
    icon: '⚖️',
    title: 'Integrity',
    description:
      'We conduct all business with the highest ethical standards, honesty, and transparency.',
  },
  {
    icon: '🏆',
    title: 'Excellence',
    description: 'We pursue the highest standards of quality in every aspect of our work.',
  },
  {
    icon: '🦺',
    title: 'Safety',
    description: 'Safety is non-negotiable. Every person on our sites goes home safely every day.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description:
      'We embrace technology and creative thinking to deliver smarter construction solutions.',
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    description:
      'We integrate sustainable practices to create lasting value for communities and the environment.',
  },
  {
    icon: '🤝',
    title: 'Teamwork',
    description:
      'Our strength comes from the collective expertise and collaboration of our diverse team.',
  },
  {
    icon: '😊',
    title: 'Customer Satisfaction',
    description:
      'We place our clients at the centre of everything we do, exceeding expectations every time.',
  },
];

const timeline = [
  {
    year: '2003',
    title: 'Company Founded',
    description:
      'BuildPro Construction Ltd was incorporated in Lagos, Nigeria, initially focusing on residential building projects in the Lagos metropolitan area.',
  },
  {
    year: '2006',
    title: 'Civil Engineering Expansion',
    description:
      'We secured our first government road contract and expanded into civil engineering works, growing our team to 40 professionals.',
  },
  {
    year: '2009',
    title: 'ISO 9001 Certification',
    description:
      'Achieved ISO 9001 Quality Management System certification, formalising our commitment to quality across all operations.',
  },
  {
    year: '2012',
    title: 'First Landmark Project',
    description:
      'Completed the Lekki Office Complex — our first ₦1B+ project — establishing BuildPro as a major construction force in Lagos.',
  },
  {
    year: '2015',
    title: 'National Expansion',
    description:
      'Opened regional offices in Abuja and Port Harcourt, expanding our footprint to 8 states across Nigeria.',
  },
  {
    year: '2018',
    title: 'ISO 45001 & 14001 Certified',
    description:
      'Achieved ISO 45001 (Health & Safety) and ISO 14001 (Environmental) certifications, solidifying our HSE management leadership.',
  },
  {
    year: '2020',
    title: '₦10B Project Milestone',
    description:
      'Delivered the Kano Central Business District — our first ₦8B+ project — and surpassed ₦10B in cumulative project value delivered.',
  },
  {
    year: '2023',
    title: '₦50B+ Total Value Delivered',
    description:
      'Crossed the ₦50 billion milestone in total project value delivered across 250+ completed projects in 12 Nigerian states.',
  },
];

const achievements = [
  {
    title: 'Best Construction Company',
    year: '2024',
    body: 'Lagos Chamber of Commerce & Industry',
  },
  {
    title: 'Excellence in Infrastructure',
    year: '2023',
    body: 'Nigerian Institution of Civil Engineers (NICE)',
  },
  { title: 'HSE Leadership Award', year: '2022', body: 'Nigeria Construction Industry Council' },
  { title: 'LEED Gold Project Award', year: '2022', body: 'Green Building Council of Nigeria' },
  { title: 'Best Employer — Construction', year: '2021', body: 'HR People Magazine Nigeria' },
  { title: 'Presidential Commendation', year: '2020', body: 'Federal Republic of Nigeria' },
];

const certifications = [
  'COREN (Council for the Regulation of Engineering in Nigeria)',
  'ISO 9001:2015 — Quality Management System',
  'ISO 45001:2018 — Occupational Health & Safety',
  'ISO 14001:2015 — Environmental Management',
  'NIQS — Nigerian Institute of Quantity Surveyors',
  'CORBON — Council of Registered Builders of Nigeria',
  'NIOB — Nigerian Institute of Building',
  'Pre-Qualified Federal Government Contractor',
];

export default function AboutPage() {
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
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Building Nigeria&apos;s Future <span className="text-orange-400">Since 2003</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Two decades of engineering excellence, project delivery, and a deep commitment to
            building a better Nigeria — one landmark project at a time.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="BuildPro Construction"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-2xl p-6 text-white shadow-xl">
                <div className="text-4xl font-black">22+</div>
                <div className="text-sm text-orange-100">Years of Excellence</div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-black text-[#0F2A4A] mb-5">
                From Small Beginnings to Industry Leadership
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BuildPro Construction Ltd was founded in 2003 by Engr. Michael Adeyemi, a visionary
                civil engineer with a passion for building world-class structures in Nigeria. What
                started as a small team of 8 professionals working on residential projects in Lagos
                has grown into one of Nigeria&apos;s most respected construction and infrastructure
                companies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over two decades, we have expanded from Lagos to a national footprint spanning 12
                states, diversifying our capabilities to encompass building construction, civil
                engineering, structural engineering, project management, facility maintenance, and
                infrastructure development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, with over 120 employees, a fleet of modern heavy plant, and a portfolio of
                250+ completed projects worth over ₦50 billion, BuildPro stands as a testament to
                what vision, integrity, and relentless pursuit of excellence can achieve.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: '2003', l: 'Founded' },
                  { v: '250+', l: 'Projects' },
                  { v: '12', l: 'States' },
                  { v: '₦50B+', l: 'Delivered' },
                ].map((s) => (
                  <div key={s.l} className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#0F2A4A]">{s.v}</div>
                    <div className="text-gray-500 text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Target size={30} className="text-orange-500" />
              </div>
              <h2 className="text-2xl font-black text-[#0F2A4A] mb-5">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                To deliver exceptional construction and engineering solutions through innovation,
                quality craftsmanship, safety, and integrity while creating lasting value for our
                clients, employees, and communities.
              </p>
              <div className="space-y-3">
                {[
                  'Innovation in every project',
                  'Uncompromising quality standards',
                  'Safety as our first priority',
                  'Creating value that lasts',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0F2A4A] rounded-3xl p-10 shadow-sm">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={30} className="text-orange-400" />
              </div>
              <h2 className="text-2xl font-black text-white mb-5">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-base mb-6">
                To become one of Africa&apos;s most trusted construction and infrastructure
                companies, recognized for excellence, sustainability, and the successful delivery of
                world-class projects that transform communities and drive economic growth.
              </p>
              <div className="space-y-3">
                {[
                  'Pan-African construction leader',
                  'Recognized for sustainability excellence',
                  'Trusted by governments & developers',
                  'Driving economic transformation',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Core Values
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A] mb-4">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="text-center p-5 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all group bg-white"
              >
                <div className="text-3xl mb-3">{val.icon}</div>
                <h3 className="font-bold text-[#0F2A4A] text-sm mb-2 group-hover:text-orange-500 transition-colors">
                  {val.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed hidden md:block">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A]">Company Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div
                    className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <div className="text-orange-500 font-black text-lg mb-1">{item.year}</div>
                      <h3 className="font-bold text-[#0F2A4A] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-0 items-center justify-center relative">
                    <div className="absolute w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10" />
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-[#0F2A4A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Awards & Achievements</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((ach) => (
              <div
                key={ach.title}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{ach.title}</div>
                  <div className="text-gray-400 text-xs mt-1">{ach.body}</div>
                  <div className="text-orange-400 text-xs font-bold mt-1">{ach.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Certifications
            </div>
            <h2 className="text-3xl font-black text-[#0F2A4A]">Professional Accreditations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Partner with BuildPro?</h2>
          <p className="text-orange-100 mb-8 text-base">
            Contact our team today for a free project consultation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-500 hover:bg-orange-50 font-black px-10 py-4 rounded-xl text-base transition-colors inline-flex items-center gap-2 group"
          >
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
