export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    category: 'Getting Started',
    question: 'How do I get started with a construction project with BuildPro?',
    answer:
      'Getting started is simple. Contact us via phone, email, or our website contact form to schedule a free initial consultation. During the consultation, we will discuss your project requirements, timeline, budget, and objectives. Our team will then develop a preliminary proposal and, once agreed, proceed with detailed design and planning.',
  },
  {
    id: 2,
    category: 'Getting Started',
    question: 'What types of projects does BuildPro undertake?',
    answer:
      'BuildPro handles a wide range of construction projects including residential buildings (from single homes to large estates), commercial office buildings, retail complexes, industrial facilities, government buildings, roads and highways, drainage and water infrastructure, and renovation/remodeling works. We serve both public and private sector clients.',
  },
  {
    id: 3,
    category: 'Costs & Pricing',
    question: 'How much does construction cost in Nigeria?',
    answer:
      'Construction costs vary significantly depending on project type, location, specification, and market conditions. As a guide, residential construction can range from ₦150,000 to ₦450,000+ per square metre depending on the quality of finishes. Commercial buildings typically range from ₦200,000 to ₦600,000 per square metre. We provide detailed cost plans during the pre-construction phase to give you accurate project-specific figures.',
  },
  {
    id: 4,
    category: 'Costs & Pricing',
    question: 'Do you offer fixed-price contracts?',
    answer:
      'Yes, we can offer lump-sum (fixed-price) contracts for projects with a fully defined scope of work. This gives clients cost certainty. For projects with evolving scopes, we can offer target-cost or remeasured contracts. Our Quantity Surveying team will advise on the most appropriate contract type for your specific project.',
  },
  {
    id: 5,
    category: 'Costs & Pricing',
    question: 'What is the payment structure for construction projects?',
    answer:
      'Payment structures are defined in the contract agreement and typically follow project milestones. A common structure includes a mobilization advance (usually 10-15%), followed by monthly progress valuations certified by the project quantity surveyor. Final payment is made upon completion and acceptance of the works. We do not request large upfront payments without a corresponding programme of works.',
  },
  {
    id: 6,
    category: 'Timelines',
    question: 'How long does it take to complete a building project?',
    answer:
      'Construction timelines depend on project complexity and scale. A 3-bedroom house typically takes 6-12 months. A small commercial building takes 12-18 months. Large residential estates or commercial complexes may take 18-36 months. We provide a detailed construction programme at the start of each project and report progress against it monthly.',
  },
  {
    id: 7,
    category: 'Timelines',
    question: 'Can BuildPro guarantee project completion dates?',
    answer:
      'We commit to the project programme set out in our contract and take every measure to meet delivery dates. Our programme includes float for weather and minor delays. Where client-requested changes or unforeseeable events affect the programme, we will notify you immediately with revised schedules and mitigation plans. We have an excellent track record of on-time delivery.',
  },
  {
    id: 8,
    category: 'Quality',
    question: 'How does BuildPro ensure construction quality?',
    answer:
      'We operate a comprehensive Quality Management System (QMS) certified to ISO 9001. This includes material testing at approved laboratories, site inspection and test plans (ITPs), daily quality supervisor checks, independent third-party inspections, and project quality audits. Every project has a dedicated quality manager responsible for maintaining quality standards throughout.',
  },
  {
    id: 9,
    category: 'Safety',
    question: 'What safety standards does BuildPro follow?',
    answer:
      'Safety is our number one priority. We operate under our certified HSE Management System aligned with ISO 45001. All workers undergo mandatory HSE induction training before site access. We conduct daily toolbox talks, weekly safety inspections, and monthly HSE audits. All our projects target zero Lost Time Injuries (LTI). Our MD chairs a monthly company-wide HSE review meeting.',
  },
  {
    id: 10,
    category: 'Safety',
    question: 'Is BuildPro insured for construction risks?',
    answer:
      "Yes. BuildPro carries comprehensive insurance coverage including Contractor's All Risk (CAR) insurance, Public Liability insurance, Employer's Liability insurance, and Professional Indemnity insurance. Certificates of insurance are provided to clients as part of contract documentation. Project-specific insurance can also be arranged as required.",
  },
  {
    id: 11,
    category: 'Contracts',
    question: 'What contract types does BuildPro use?',
    answer:
      'We use standard form contracts including FIDIC, JCT, NEC, and NIOB standard forms, depending on project type and client preference. For smaller projects, we use our own professional contract templates. All contracts clearly define scope, programme, payment terms, variation procedures, and dispute resolution mechanisms. We recommend clients engage independent legal review of all contracts.',
  },
  {
    id: 12,
    category: 'Contracts',
    question: 'How are changes and variations managed?',
    answer:
      'All variations to the agreed scope of work must be formally instructed in writing through a Variation Order (VO). Our QS team will price each variation before it is executed, ensuring you have cost visibility on all changes. Unauthorised variations or verbal instructions are not implemented without written confirmation. This protects both parties throughout the project.',
  },
  {
    id: 13,
    category: 'Contracts',
    question: 'What happens if there is a dispute during construction?',
    answer:
      'Our contracts include a tiered dispute resolution mechanism: first, senior management negotiation; second, mediation through a mutually agreed mediator; and third, arbitration per the Lagos Court of Arbitration rules. We aim to resolve all disputes amicably at the lowest tier possible. In 22+ years of operation, BuildPro has successfully resolved all disputes without resort to litigation.',
  },
  {
    id: 14,
    category: 'Design & Planning',
    question: 'Does BuildPro offer architectural design services?',
    answer:
      'Yes, through our in-house design team and our network of partner architectural firms, we can provide full design-and-build services including architectural, structural, MEP, and landscape design. Our Structural Engineering department handles all structural design in-house. We can also work with your own appointed architects as the main contractor.',
  },
  {
    id: 15,
    category: 'Design & Planning',
    question: 'Can BuildPro help obtain planning approval and building permits?',
    answer:
      'Absolutely. Our experienced team can assist with all regulatory approvals including Lagos LASBCA Building Permits, Environmental Impact Assessment (EIA) approvals, LASEPA permits, DPR approvals for petroleum-related facilities, and Federal Ministry of Environment approvals. We have in-depth knowledge of regulatory requirements across the states where we operate.',
  },
  {
    id: 16,
    category: 'Maintenance',
    question: 'Does BuildPro offer post-construction maintenance services?',
    answer:
      'Yes. Our Facility Maintenance division provides comprehensive planned and reactive maintenance services. We offer maintenance contracts covering civil/structural, electrical, plumbing, HVAC, and general building maintenance. After project completion, all buildings are covered by a 12-month defects liability period during which we rectify any defects at no additional cost.',
  },
  {
    id: 17,
    category: 'Maintenance',
    question: 'What is included in the defects liability period?',
    answer:
      'The defects liability period (DLP), typically 12 months after practical completion, covers the rectification of any defects that arise due to faulty workmanship or materials. Our team will carry out inspections at the 6-month and 12-month mark and rectify all identified defects promptly. The DLP does not cover damage due to client misuse or natural disasters.',
  },
  {
    id: 18,
    category: 'Sustainability',
    question: 'Does BuildPro incorporate green building principles?',
    answer:
      'Yes, sustainability is a core value at BuildPro. We integrate green building principles including energy-efficient design, waste reduction and recycling programmes, use of sustainable and locally sourced materials, rainwater harvesting systems, solar power integration, and environmentally sensitive site management. We have delivered LEED-certified projects and can target specific green building ratings.',
  },
  {
    id: 19,
    category: 'Procurement',
    question: 'How does BuildPro select and manage subcontractors?',
    answer:
      "All our subcontractors are prequalified through our rigorous Vendor Management System which assesses technical capability, financial stability, HSE performance, and quality track record. Approved subcontractors are re-assessed annually. On-site, all subcontractors operate under BuildPro's HSE and quality requirements with daily oversight from our site management team.",
  },
  {
    id: 20,
    category: 'Getting Started',
    question: 'Does BuildPro operate outside Lagos?',
    answer:
      "Yes, BuildPro operates across 12 states in Nigeria including Lagos, Abuja (FCT), Rivers, Kano, Ogun, Oyo, Enugu, Delta, Kaduna, Akwa Ibom, Anambra, and Kogi. We have established regional relationships and supply chains in each state where we operate. We are also expanding our operations to other West African countries in line with our vision to become one of Africa's most trusted construction companies.",
  },
];

export const faqCategories = [
  'All',
  'Getting Started',
  'Costs & Pricing',
  'Timelines',
  'Quality',
  'Safety',
  'Contracts',
  'Design & Planning',
  'Maintenance',
  'Sustainability',
  'Procurement',
];
