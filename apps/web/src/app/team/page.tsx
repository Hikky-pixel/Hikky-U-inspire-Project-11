import type { Metadata } from 'next';
import Link from 'next/link';
import { team } from '@/data/team';
import { Mail, ArrowRight, GraduationCap, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    "Meet BuildPro Construction's experienced leadership team — COREN-registered engineers, certified project managers, and industry experts driving excellence.",
};

export default function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F2A4A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=80)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Our Leadership
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Meet the Experts Behind <span className="text-orange-400">Our Success</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our leadership team brings together decades of experience in engineering, project
            management, finance, and human capital to deliver Nigeria&apos;s most complex
            construction projects.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: '120+', l: 'Total Employees' },
              { v: '35+', l: 'Registered Engineers' },
              { v: '8', l: 'PMP Certified PMs' },
              { v: '15+', l: 'Avg. Years Experience' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black text-orange-500">{s.v}</div>
                <div className="text-gray-500 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Executive Team
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F2A4A]">
              Leadership & Management
            </h2>
          </div>

          {/* Featured CEO */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-10">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2">
                <img
                  src={team[0].image}
                  alt={team[0].name}
                  className="w-full h-full object-cover object-top min-h-[300px]"
                />
              </div>
              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-2">
                  {team[0].department}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#0F2A4A] mb-2">
                  {team[0].name}
                </h2>
                <p className="text-orange-500 font-semibold text-base mb-5">{team[0].role}</p>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{team[0].bio}</p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={16} className="text-orange-500" />
                    <span className="font-bold text-[#0F2A4A] text-sm">Qualifications</span>
                  </div>
                  <div className="space-y-1.5">
                    {team[0].qualifications.map((q) => (
                      <div key={q} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2">
                    <Briefcase size={14} className="text-orange-500" />
                    <span className="text-sm font-semibold text-[#0F2A4A]">
                      {team[0].experience}
                    </span>
                  </div>
                  {team[0].email && (
                    <a
                      href={`mailto:${team[0].email}`}
                      className="flex items-center gap-2 bg-orange-50 text-orange-600 rounded-xl px-4 py-2 text-sm font-semibold hover:bg-orange-100 transition-colors"
                    >
                      <Mail size={14} />
                      Contact
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Team */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.slice(1).map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center"
                      >
                        <Mail size={14} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-1">
                    {member.department}
                  </div>
                  <h3 className="font-black text-[#0F2A4A] text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Key Qualifications
                    </div>
                    <div className="space-y-1">
                      {member.qualifications.slice(0, 3).map((q) => (
                        <div key={q} className="text-xs text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                          {q}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase size={13} className="text-orange-500" />
                      <span className="font-semibold text-[#0F2A4A] text-xs">
                        {member.experience}
                      </span>
                    </div>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-orange-500 hover:text-orange-600 text-xs font-semibold flex items-center gap-1"
                      >
                        <Mail size={12} />
                        {member.email.split('@')[0]}@...
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-[#0F2A4A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Join Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Be Part of Something Extraordinary
          </h2>
          <p className="text-gray-300 text-base mb-8 max-w-2xl mx-auto">
            We are always looking for talented engineers, project managers, and construction
            professionals who share our commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center gap-2 group"
            >
              View Open Positions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/40 hover:border-white text-white font-bold px-10 py-4 rounded-xl text-base transition-all hover:bg-white/10 flex items-center justify-center gap-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
