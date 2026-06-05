'use client';

import { useState } from 'react';
import { jobPostings, companyBenefits } from '@/data/careers';
import { MapPin, Briefcase, DollarSign, Clock, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { toast } from 'sonner';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const job = jobPostings.find((j) => j.id === selectedJob);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setShowApplyForm(false);
    setSelectedJob(null);
    toast.success('Application submitted! Our HR team will be in touch within 5 business days.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

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
            Careers
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Build Your Career at <span className="text-orange-400">BuildPro</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join a team of talented professionals building Nigeria&apos;s most iconic structures. We
            invest in our people as much as we invest in our projects.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                Our Culture
              </div>
              <h2 className="text-3xl font-black text-[#0F2A4A] mb-5">
                A Place Where Careers Are Built
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At BuildPro, we believe that great buildings are built by great people. We foster a
                culture of continuous learning, mutual respect, and shared achievement. Every team
                member — from our MD to our site supervisors — is valued, developed, and given the
                tools to succeed.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are proud to be an equal-opportunity employer committed to diversity and
                inclusion. Our team of 120+ professionals represents Nigeria&apos;s rich diversity,
                and we actively recruit and develop talent from all backgrounds.
              </p>
              <div className="space-y-3">
                {[
                  'Merit-based career advancement',
                  'Annual professional development budget',
                  'Mentoring by senior industry leaders',
                  'Exposure to landmark national projects',
                  'Inclusive and respectful work culture',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                alt="Construction team"
                className="rounded-2xl h-52 w-full object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80"
                alt="Engineering work"
                className="rounded-2xl h-52 w-full object-cover shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Benefits
            </div>
            <h2 className="text-3xl font-black text-[#0F2A4A]">Why Work at BuildPro</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {companyBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all text-center group"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-[#0F2A4A] text-sm mb-2 group-hover:text-orange-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Open Positions
            </div>
            <h2 className="text-3xl font-black text-[#0F2A4A] mb-3">Current Job Openings</h2>
            <p className="text-gray-500 text-base">{jobPostings.length} positions currently open</p>
          </div>

          <div className="space-y-4">
            {jobPostings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">
                          {job.department}
                        </span>
                        <span className="bg-green-100 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full">
                          {job.type}
                        </span>
                        <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full">
                          {job.level}
                        </span>
                      </div>
                      <h3 className="font-black text-[#0F2A4A] text-lg mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-orange-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign size={12} className="text-orange-400" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} className="text-orange-400" />
                          Posted {job.posted}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="border-2 border-[#0F2A4A] text-[#0F2A4A] hover:bg-[#0F2A4A] hover:text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                      >
                        {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                      </button>
                      <button
                        onClick={() => {
                          setSelectedJob(job.id);
                          setShowApplyForm(true);
                        }}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-2 group"
                      >
                        Apply Now
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail */}
                  {selectedJob === job.id && !showApplyForm && (
                    <div className="mt-6 pt-6 border-t border-gray-100 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-[#0F2A4A] text-sm mb-3 uppercase tracking-wider">
                          Description
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {job.description}
                        </p>
                        <h4 className="font-bold text-[#0F2A4A] text-sm mb-3 uppercase tracking-wider">
                          Requirements
                        </h4>
                        <div className="space-y-2">
                          {job.requirements.map((r) => (
                            <div key={r} className="flex items-start gap-2">
                              <CheckCircle2
                                size={13}
                                className="text-orange-500 mt-0.5 flex-shrink-0"
                              />
                              <span className="text-gray-600 text-sm">{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0F2A4A] text-sm mb-3 uppercase tracking-wider">
                          Key Responsibilities
                        </h4>
                        <div className="space-y-2">
                          {job.responsibilities.map((r) => (
                            <div key={r} className="flex items-start gap-2">
                              <Briefcase
                                size={13}
                                className="text-orange-400 mt-0.5 flex-shrink-0"
                              />
                              <span className="text-gray-600 text-sm">{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {showApplyForm && job && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowApplyForm(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-black text-[#0F2A4A]">Apply: {job.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{job.location}</p>
                </div>
                <button
                  onClick={() => setShowApplyForm(false)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={18} className="text-gray-600" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
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
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
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
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                    Cover Letter / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us why you are the ideal candidate for this role..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 resize-none"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Please send your CV to{' '}
                  <a
                    href="mailto:careers@buildproconstruction.com"
                    className="text-orange-500 font-semibold"
                  >
                    careers@buildproconstruction.com
                  </a>{' '}
                  along with this application.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                  {!submitting && <ArrowRight size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-gray-300 mb-8">
            We are always interested in hearing from talented construction professionals. Send your
            CV to our HR team.
          </p>
          <a
            href="mailto:careers@buildproconstruction.com"
            className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-xl text-base transition-colors inline-flex items-center gap-2 group"
          >
            Send Speculative Application
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
