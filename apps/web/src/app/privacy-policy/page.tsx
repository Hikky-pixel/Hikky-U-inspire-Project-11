import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "Read BuildPro Construction Ltd's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="py-16 bg-[#0F2A4A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-300 text-sm">
            Last updated: 1 June 2025 | Effective: 1 June 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
            <p className="text-orange-800 text-sm leading-relaxed">
              <strong>Summary:</strong> BuildPro Construction Ltd (&quot;we&quot;, &quot;our&quot;,
              &quot;us&quot;) is committed to protecting your personal information. This policy
              explains what data we collect, why we collect it, how we use it, and your rights in
              relation to it.
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-10">
            {[
              {
                num: '1',
                title: 'Information We Collect',
                content: `We collect information you provide directly to us, including when you:

• Submit a contact or project enquiry form on our website
• Apply for a job position through our Careers page
• Subscribe to our newsletter or email updates
• Correspond with us by phone, email, or other means

The types of personal data we may collect include:
- Name and professional title
- Company name and position
- Email address and phone number
- Project details and requirements
- Financial information (for invoicing purposes only, on confirmed projects)
- Technical and usage data when you use our website (IP address, browser type, pages visited)`,
              },
              {
                num: '2',
                title: 'How We Use Your Information',
                content: `We use the information we collect for the following purposes:

• To respond to your enquiries and provide project consultations
• To prepare and deliver proposals, contracts, and project documentation
• To manage our business relationship with you as a client, subcontractor, or supplier
• To process job applications and manage recruitment activities
• To send you relevant news, project updates, and marketing communications (only with your consent)
• To improve our website and services through analytics
• To comply with our legal obligations under Nigerian law`,
              },
              {
                num: '3',
                title: 'Legal Basis for Processing',
                content: `We process your personal data based on the following legal grounds:

• Contract performance: Where processing is necessary to fulfil a contract with you or to take steps at your request before entering a contract
• Legitimate interests: Where we have a legitimate business interest in processing your data, such as marketing our services to business clients
• Legal compliance: Where we are required to process data to comply with Nigerian laws and regulations
• Consent: Where you have given us explicit consent to process your data for a specific purpose (such as subscribing to our newsletter)`,
              },
              {
                num: '4',
                title: 'Data Sharing and Disclosure',
                content: `We do not sell, trade, or rent your personal information to third parties. We may share your data with:

• Our professional advisers (legal, accounting, insurance professionals) under confidentiality obligations
• Regulatory and government authorities where required by law
• Technology service providers who assist in operating our website and business systems (under strict data processing agreements)
• Project partners and subcontractors, only where necessary for the delivery of your contracted project and with your knowledge

We will never share your data with parties for their independent marketing or commercial purposes.`,
              },
              {
                num: '5',
                title: 'Data Retention',
                content: `We retain personal data for the following periods:

• Client and project data: For the duration of the project plus 7 years (to comply with Nigerian tax and commercial law requirements)
• Job application data: 6 months from the date of application if unsuccessful; for the duration of employment if successful
• Marketing and newsletter data: Until you unsubscribe or withdraw consent
• Website analytics data: Up to 24 months

After these periods, data is securely deleted or anonymised.`,
              },
              {
                num: '6',
                title: 'Your Rights',
                content: `You have the following rights in relation to your personal data:

• Right of access: You may request a copy of the personal data we hold about you
• Right to rectification: You may request correction of any inaccurate data we hold
• Right to erasure: You may request deletion of your data in certain circumstances
• Right to restrict processing: You may request that we limit how we use your data
• Right to data portability: Where applicable, you may request a copy of your data in a portable format
• Right to object: You may object to certain types of processing, including direct marketing
• Right to withdraw consent: Where processing is based on consent, you may withdraw it at any time

To exercise any of these rights, please contact us at privacy@buildproconstruction.com`,
              },
              {
                num: '7',
                title: 'Cookies and Tracking Technologies',
                content: `Our website uses cookies and similar technologies to:

• Ensure the website functions correctly (strictly necessary cookies)
• Analyse website traffic and user behaviour (analytics cookies — with your consent)
• Remember your preferences and settings (functional cookies)

You can control cookie settings through your browser settings or our cookie consent banner. Note that disabling certain cookies may affect website functionality.`,
              },
              {
                num: '8',
                title: 'Security',
                content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, alteration, or disclosure. These measures include:

• SSL/TLS encryption for all data transmissions on our website
• Access controls limiting data access to authorised staff on a need-to-know basis
• Regular security reviews and staff training on data protection practices
• Secure document management and disposal procedures

While we take all reasonable steps to protect your data, no digital system is completely immune to security risks. We will notify you promptly if we become aware of any security breach that affects your personal data.`,
              },
              {
                num: '9',
                title: 'Third-Party Links',
                content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.`,
              },
              {
                num: '10',
                title: 'Changes to This Policy',
                content: `We may update this Privacy Policy from time to time. The most current version will always be published on this page with the effective date shown above. We will notify registered users of significant changes by email. Continued use of our website after any update constitutes acceptance of the revised policy.`,
              },
              {
                num: '11',
                title: 'Contact Information',
                content: `For any questions about this Privacy Policy, or to exercise your data rights, please contact our Data Protection Officer:

BuildPro Construction Ltd
Plot 15, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria

Email: privacy@buildproconstruction.com
Phone: +234 (0) 803 555 1200

If you are unsatisfied with our response, you have the right to lodge a complaint with the Nigerian Data Protection Commission (NDPC).`,
              },
            ].map((section) => (
              <div key={section.num} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-xl font-black text-[#0F2A4A] mb-4">
                  {section.num}. {section.title}
                </h2>
                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/terms"
              className="border-2 border-gray-200 text-gray-600 hover:bg-gray-50 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              View Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
