import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    "Read BuildPro Construction Ltd's Terms and Conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="py-16 bg-[#0F2A4A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black text-white mb-3">Terms & Conditions</h1>
          <p className="text-gray-300 text-sm">
            Last updated: 1 June 2025 | Effective: 1 June 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
            <p className="text-orange-800 text-sm leading-relaxed">
              <strong>
                Please read these Terms and Conditions carefully before using the BuildPro
                Construction Ltd website or engaging our services.
              </strong>{' '}
              By using our website or engaging our services, you agree to be bound by these Terms.
              If you do not agree, please do not use our website or services.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                num: '1',
                title: 'Company Information',
                content: `BuildPro Construction Ltd (&quot;the Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a company incorporated in the Federal Republic of Nigeria with RC No. 892441, with its registered office at Plot 15, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria.`,
              },
              {
                num: '2',
                title: 'Website Use',
                content: `2.1 By accessing and using this website (www.buildproconstruction.com), you confirm that you are at least 18 years of age and accept these Terms and Conditions in full.

2.2 You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website.

2.3 We reserve the right to modify, suspend, or discontinue the website at any time without notice.

2.4 Unauthorised use of this website may be a criminal offence under the Nigerian Cybercrime (Prohibition, Prevention, etc.) Act 2015.`,
              },
              {
                num: '3',
                title: 'Intellectual Property',
                content: `3.1 All content on this website — including text, images, graphics, logos, project photographs, design elements, and data — is the property of BuildPro Construction Ltd or its licensors and is protected by Nigerian and international intellectual property laws.

3.2 You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise exploit any content from this website without our prior written consent.

3.3 The BuildPro Construction Ltd name and logo are registered trademarks. Unauthorised use of our trademarks is strictly prohibited.`,
              },
              {
                num: '4',
                title: 'Construction Services',
                content: `4.1 Information presented on this website regarding our services, completed projects, and team capabilities is provided for general information purposes only and does not constitute a contractual offer.

4.2 All construction and engineering services provided by BuildPro Construction Ltd are governed by the specific terms of the relevant contract or Letter of Award agreed with each client. In the event of any conflict between these website Terms and a signed construction contract, the signed construction contract shall prevail.

4.3 Project timelines, costs, and outcomes described on this website are based on our historical experience and are provided as indicative guidance only. Each project is unique and actual results will depend on project-specific factors.`,
              },
              {
                num: '5',
                title: 'Enquiries and Proposals',
                content: `5.1 Submission of an enquiry or contact form on this website does not create any binding obligation on BuildPro Construction Ltd to provide a proposal, quotation, or service.

5.2 Any proposal, quotation, or estimate provided by BuildPro is valid for 30 days from the date of issue unless otherwise stated, and is subject to the terms and conditions stated in that proposal.

5.3 A binding contract is only formed when both parties have signed a formal Contract Agreement or Letter of Award.`,
              },
              {
                num: '6',
                title: 'Disclaimers and Limitation of Liability',
                content: `6.1 While we take care to ensure the accuracy of information on this website, we make no representations or warranties as to its completeness, accuracy, or fitness for a particular purpose.

6.2 BuildPro Construction Ltd shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, this website or reliance on information contained herein.

6.3 Our total liability in connection with this website or any information contained herein shall not exceed ₦50,000 (fifty thousand naira).

6.4 These limitations do not apply to liability for death or personal injury caused by our negligence, or to the extent that such limitations are prohibited by applicable Nigerian law.`,
              },
              {
                num: '7',
                title: 'Third-Party Links and Content',
                content: `7.1 Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those websites and accept no responsibility for them or for any loss or damage that may arise from your use of them.

7.2 Our website may display project photographs taken on behalf of our clients. These are used with the permission of the relevant clients and are intended to showcase our work.`,
              },
              {
                num: '8',
                title: 'Privacy',
                content: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at www.buildproconstruction.com/privacy-policy to understand our data practices.`,
              },
              {
                num: '9',
                title: 'Governing Law and Jurisdiction',
                content: `9.1 These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.

9.2 Any dispute arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.

9.3 For disputes in relation to construction contracts (rather than website use), the dispute resolution mechanisms specified in the relevant construction contract shall apply.`,
              },
              {
                num: '10',
                title: 'Amendments',
                content: `We reserve the right to modify these Terms and Conditions at any time. Updated Terms will be posted on this page with a revised effective date. Continued use of this website after any changes constitutes your acceptance of the amended Terms.`,
              },
              {
                num: '11',
                title: 'Contact',
                content: `For any questions regarding these Terms and Conditions, please contact:

BuildPro Construction Ltd
Plot 15, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria
Email: legal@buildproconstruction.com
Phone: +234 (0) 803 555 1200`,
              },
            ].map((section) => (
              <div key={section.num} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-xl font-black text-[#0F2A4A] mb-4">
                  {section.num}. {section.title}
                </h2>
                <div
                  className="text-gray-600 text-sm leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
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
              href="/privacy-policy"
              className="border-2 border-gray-200 text-gray-600 hover:bg-gray-50 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
