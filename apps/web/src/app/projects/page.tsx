'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, categories } from '@/data/projects';
import { MapPin, Calendar, ArrowRight, DollarSign, CheckCircle2 } from 'lucide-react';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  const project = projects.find((p) => p.id === selectedProject);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F2A4A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our Completed <span className="text-orange-400">Projects</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            250+ completed projects across 12 Nigerian states. From luxury residences to highways
            and public infrastructure — every project tells a story of excellence.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl mx-auto mt-10">
            {[
              { v: '250+', l: 'Projects' },
              { v: '12', l: 'States' },
              { v: '₦50B+', l: 'Value' },
              { v: '98%', l: 'On-Time' },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-white/10 border border-white/20 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-black text-orange-400">{s.v}</div>
                <div className="text-gray-400 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-500 mb-6">
            Showing <span className="font-bold text-[#0F2A4A]">{filtered.length}</span> project
            {filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer group"
                onClick={() => setSelectedProject(proj.id)}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/60 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {proj.category}
                    </span>
                    <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {proj.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="text-white font-bold text-sm">{proj.value}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0F2A4A] text-base mb-3 group-hover:text-orange-500 transition-colors">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-orange-400" />
                      {proj.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-orange-400" />
                      {proj.year}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {proj.description}
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 font-bold text-sm flex items-center gap-1 group/btn">
                    View Details
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-lg shadow-lg"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {project.status}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-black text-[#0F2A4A] mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-5">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-orange-500" />
                  {project.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-orange-500" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <DollarSign size={14} className="text-orange-500" />
                  {project.value}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#0F2A4A] mb-3 text-sm uppercase tracking-wider">
                    Scope of Work
                  </h3>
                  <div className="space-y-2">
                    {project.scope.map((s) => (
                      <div key={s} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F2A4A] mb-3 text-sm uppercase tracking-wider">
                    Results Achieved
                  </h3>
                  <div className="space-y-2">
                    {project.results.map((r) => (
                      <div key={r} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors flex items-center gap-2"
                >
                  Start a Similar Project
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="border-2 border-gray-200 text-gray-600 hover:bg-gray-50 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-orange-100 mb-8">Let&apos;s build something extraordinary together.</p>
          <Link
            href="/contact"
            className="bg-white text-orange-500 hover:bg-orange-50 font-black px-10 py-4 rounded-xl text-base transition-colors inline-flex items-center gap-2 group"
          >
            Get a Free Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
