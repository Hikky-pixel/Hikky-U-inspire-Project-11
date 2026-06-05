import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'BuildPro Construction offers 8 comprehensive construction services including building construction, civil engineering, project management, structural engineering, renovation, facility maintenance, quantity surveying, and infrastructure development.',
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F2A4A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Comprehensive Construction <span className="text-orange-400">Solutions</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From building construction to large-scale infrastructure development, we offer the full
            spectrum of services your project needs — delivered with technical excellence and
            professionalism.
          </p>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#service-${service.id}`}
                className="bg-white rounded-xl p-3 text-center border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-1">{service.icon}</div>
                <div className="text-xs font-bold text-[#0F2A4A] group-hover:text-orange-500 transition-colors leading-tight">
                  {service.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <div>
        {services.map((service, idx) => (
          <section
            key={service.id}
            id={`service-${service.id}`}
            className={`py-20 scroll-mt-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                    <span className="bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded-full">
                      Service {String(service.id).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-[#0F2A4A] mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="font-bold text-[#0F2A4A] mb-4 text-sm uppercase tracking-wider">
                      Key Benefits
                    </h3>
                    <div className="space-y-2.5">
                      {service.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="text-orange-500 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-600 text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors flex items-center gap-2 group"
                    >
                      Request a Quote
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <Link
                      href="/projects"
                      className="border-2 border-[#0F2A4A] text-[#0F2A4A] hover:bg-[#0F2A4A] hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>

                {/* Process + Image */}
                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover rounded-2xl shadow-lg mb-6"
                  />
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="font-bold text-[#0F2A4A] mb-5 text-sm uppercase tracking-wider">
                      Our Process
                    </h3>
                    <div className="space-y-4">
                      {service.process.map((step) => (
                        <div key={step.step} className="flex gap-4">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <div className="font-bold text-[#0F2A4A] text-sm">{step.title}</div>
                            <div className="text-gray-500 text-xs mt-1 leading-relaxed">
                              {step.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-300 mb-8 text-base">
            Every project is unique. Contact us to discuss your specific requirements and how
            BuildPro can deliver the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center gap-2 group"
            >
              Get a Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+2348035551200"
              className="border-2 border-white/40 hover:border-white text-white font-bold px-10 py-4 rounded-xl text-base transition-all hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
