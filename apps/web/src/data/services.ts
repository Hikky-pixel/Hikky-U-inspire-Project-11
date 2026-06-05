export interface Service {
  id: number;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'building-construction',
    title: 'Building Construction',
    icon: '🏗️',
    shortDescription:
      'End-to-end construction of residential, commercial, and public buildings to the highest standards.',
    description:
      'BuildPro Construction delivers comprehensive building construction services across all sectors. From luxury residential estates to large-scale commercial complexes, we manage every phase of the construction lifecycle — from concept design through to final handover. Our experienced team of engineers, architects, and construction professionals ensures that each project is delivered on time, within budget, and to the highest quality standards.',
    benefits: [
      'Experienced multidisciplinary team of engineers and architects',
      'End-to-end project delivery from design to handover',
      'Use of premium materials sourced from certified suppliers',
      'Strict adherence to building codes and safety regulations',
      'Real-time project tracking and transparent reporting',
      'Post-construction support and defects liability coverage',
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Brief',
        description:
          'We begin with a thorough consultation to understand your project requirements, budget, and timeline.',
      },
      {
        step: 2,
        title: 'Design & Planning',
        description:
          'Our design team develops detailed architectural and engineering drawings with full approval submissions.',
      },
      {
        step: 3,
        title: 'Procurement',
        description:
          'We source and procure premium materials and subcontractors through our vetted supply chain.',
      },
      {
        step: 4,
        title: 'Construction',
        description:
          'Skilled teams execute the build with daily supervision, quality checks, and HSE compliance.',
      },
      {
        step: 5,
        title: 'Testing & Commissioning',
        description:
          'All systems are tested and commissioned to ensure full functionality before handover.',
      },
      {
        step: 6,
        title: 'Handover & Support',
        description:
          'We complete a formal handover with as-built drawings, manuals, and a defects liability period.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 2,
    slug: 'civil-engineering',
    title: 'Civil Engineering Works',
    icon: '🌉',
    shortDescription:
      'Expert civil engineering solutions for roads, bridges, drainage, and public infrastructure.',
    description:
      'Our civil engineering division handles complex infrastructure projects for government agencies and private developers. We specialize in road construction and rehabilitation, bridge works, drainage systems, earthworks, and large-scale site development. With a fleet of modern heavy equipment and a team of registered COREN engineers, we deliver infrastructure that lasts.',
    benefits: [
      'COREN-registered senior engineers on all projects',
      'Modern heavy plant and equipment fleet',
      'Track record on federal and state government projects',
      'Rigorous geotechnical and structural analysis',
      'Environmental impact compliance',
      'Proven experience across 12 states in Nigeria',
    ],
    process: [
      {
        step: 1,
        title: 'Feasibility & Survey',
        description:
          'Topographic surveys, soil investigations, and feasibility studies form the project foundation.',
      },
      {
        step: 2,
        title: 'Engineering Design',
        description:
          'Detailed design with structural calculations, drainage design, and traffic analysis.',
      },
      {
        step: 3,
        title: 'Mobilization',
        description:
          'Equipment mobilization, site setup, and community liaison before works commence.',
      },
      {
        step: 4,
        title: 'Construction Execution',
        description:
          'Phased construction with daily quality control, safety inspections, and progress reporting.',
      },
      {
        step: 5,
        title: 'Quality Assurance',
        description:
          'Independent laboratory testing of materials and completed works against specifications.',
      },
      {
        step: 6,
        title: 'Completion & Maintenance',
        description:
          'Final inspection, snagging, and handover with optional maintenance contracts.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 3,
    slug: 'project-management',
    title: 'Project Management',
    icon: '📋',
    shortDescription:
      'Professional project management services ensuring delivery on time, within scope and budget.',
    description:
      "Our Project Management team provides expert oversight and coordination for construction projects of all sizes. Whether acting as Project Manager, Owner's Representative, or Contract Administrator, we apply proven methodologies including PMBOK and Prince2 frameworks to ensure your project succeeds. We manage cost, schedule, quality, risk, and stakeholder communications throughout the project lifecycle.",
    benefits: [
      'PMP and PRINCE2 certified project managers',
      'Dedicated project control systems and reporting dashboards',
      'Proactive risk identification and mitigation strategies',
      'Experienced in multi-contractor project environments',
      'Regular client briefings and transparent communication',
      'Change management and variation control expertise',
    ],
    process: [
      {
        step: 1,
        title: 'Project Initiation',
        description:
          'Establish project governance, define scope, objectives, and appoint the PM team.',
      },
      {
        step: 2,
        title: 'Planning',
        description:
          'Develop detailed work breakdown structures, schedules, budgets, and risk registers.',
      },
      {
        step: 3,
        title: 'Execution',
        description:
          'Coordinate all project parties, manage contracts, and track progress against baseline.',
      },
      {
        step: 4,
        title: 'Monitoring & Control',
        description:
          'Real-time monitoring of KPIs with corrective actions to keep projects on track.',
      },
      {
        step: 5,
        title: 'Closeout',
        description:
          'Manage practical completion, punch lists, and formal project closeout procedures.',
      },
      {
        step: 6,
        title: 'Post-Project Review',
        description: 'Lessons-learned sessions and documentation to drive continuous improvement.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 4,
    slug: 'structural-engineering',
    title: 'Structural Engineering',
    icon: '⚙️',
    shortDescription:
      'Innovative structural design and analysis for safe, efficient building systems.',
    description:
      "BuildPro's Structural Engineering team provides advanced analysis, design, and detailing for all types of structures including high-rise buildings, bridges, industrial facilities, and retrofitting of existing structures. We use industry-leading software including ETABS, SAP2000, and Tekla Structures to deliver safe, economical, and innovative structural solutions.",
    benefits: [
      'COREN registered structural engineers',
      'Advanced structural analysis software (ETABS, SAP2000)',
      'Experience with high-rise, industrial and bridge structures',
      'Seismic and wind load analysis capability',
      'Structural assessment and retrofitting services',
      'Coordination with architectural and MEP teams',
    ],
    process: [
      {
        step: 1,
        title: 'Concept Structural Design',
        description:
          'Early-stage structural system selection and member sizing to inform architectural design.',
      },
      {
        step: 2,
        title: 'Detailed Analysis',
        description:
          'Comprehensive load analysis, structural modeling, and member design using software tools.',
      },
      {
        step: 3,
        title: 'Detailing & Drawing',
        description:
          'Production of reinforcement drawings, connection details, and steel fabrication drawings.',
      },
      {
        step: 4,
        title: 'Review & Approval',
        description: 'Peer review, regulatory submissions, and approval from relevant authorities.',
      },
      {
        step: 5,
        title: 'Construction Support',
        description:
          'Site inspections, RFI responses, and construction engineering support during build phase.',
      },
      {
        step: 6,
        title: 'As-Built Documentation',
        description: 'Final as-built structural drawings and completion certificates for records.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    id: 5,
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    icon: '🔨',
    shortDescription:
      'Complete renovation and remodeling services that transform existing structures into modern spaces.',
    description:
      'Our Renovation and Remodeling division specializes in breathing new life into existing buildings. From residential upgrades to full commercial refurbishments, we assess existing structures, develop innovative redesign solutions, and execute renovations to the same high standards as our new-build projects. We minimize disruption while maximizing the value and performance of your property.',
    benefits: [
      'Detailed building condition assessment before works',
      'Value engineering to maximize renovation ROI',
      'Minimal disruption renovation planning',
      'Structural assessment and compliance upgrades',
      'Modern MEP systems replacement and upgrades',
      'Interior design consultation included',
    ],
    process: [
      {
        step: 1,
        title: 'Building Assessment',
        description:
          'Thorough condition survey to identify structural issues, systems deficiencies, and opportunities.',
      },
      {
        step: 2,
        title: 'Design Development',
        description:
          'Develop renovation concept with layout optimization, material selections, and cost estimates.',
      },
      {
        step: 3,
        title: 'Permits & Approvals',
        description:
          'Submit for planning permissions and building regulation approvals as required.',
      },
      {
        step: 4,
        title: 'Demolition & Strip-Out',
        description:
          'Careful removal of existing finishes and systems with waste management and recycling.',
      },
      {
        step: 5,
        title: 'Renovation Works',
        description:
          'Phased execution of structural, MEP, and finishing works with quality control at each stage.',
      },
      {
        step: 6,
        title: 'Handover',
        description:
          'Final inspection, cleaning, snagging completion, and formal handover to client.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 6,
    slug: 'facility-maintenance',
    title: 'Facility Maintenance',
    icon: '🔧',
    shortDescription:
      'Comprehensive facility management and maintenance services to keep your assets performing optimally.',
    description:
      "BuildPro's Facility Maintenance division provides planned and reactive maintenance services for commercial buildings, residential estates, industrial facilities, and public infrastructure. Our teams of qualified technicians and engineers are available 24/7 to respond to maintenance needs, ensuring your facilities remain safe, compliant, and operational at all times.",
    benefits: [
      '24/7 emergency maintenance response',
      'Planned preventive maintenance programs',
      'Qualified technicians across all disciplines',
      'Asset management software and reporting',
      'Compliance and statutory maintenance management',
      'Cost-effective maintenance contracts',
    ],
    process: [
      {
        step: 1,
        title: 'Asset Register & Audit',
        description:
          'Comprehensive audit of all building assets, systems, and equipment to build a maintenance register.',
      },
      {
        step: 2,
        title: 'Maintenance Planning',
        description:
          'Develop a planned preventive maintenance schedule for all assets throughout the year.',
      },
      {
        step: 3,
        title: 'Mobilization',
        description:
          'Deploy dedicated site teams, tools, and spare parts inventory for the facility.',
      },
      {
        step: 4,
        title: 'PPM Execution',
        description: 'Systematic preventive maintenance with documentation and compliance records.',
      },
      {
        step: 5,
        title: 'Reactive Response',
        description:
          '24/7 helpdesk and emergency response teams for breakdowns and urgent repairs.',
      },
      {
        step: 6,
        title: 'Reporting & Review',
        description:
          'Monthly performance reports, KPI reviews, and annual maintenance strategy updates.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
  },
  {
    id: 7,
    slug: 'quantity-surveying',
    title: 'Quantity Surveying',
    icon: '📐',
    shortDescription:
      'Expert cost management and quantity surveying services to optimize your construction investment.',
    description:
      'Our Quantity Surveying team provides comprehensive cost management services throughout the project lifecycle. From initial feasibility estimates to final account settlement, our NIQS-registered quantity surveyors apply rigorous cost control methodologies to ensure your project delivers value for money. We manage procurement, valuations, variation control, and dispute resolution.',
    benefits: [
      'NIQS registered quantity surveyors',
      'Accurate cost planning from pre-design stage',
      'Tender documentation and procurement management',
      'Monthly valuations and cash flow forecasting',
      'Variation and change control management',
      'Final account negotiation and settlement',
    ],
    process: [
      {
        step: 1,
        title: 'Feasibility Estimate',
        description:
          'Early cost benchmarking and order-of-magnitude estimates to test project viability.',
      },
      {
        step: 2,
        title: 'Cost Planning',
        description:
          'Elemental cost plan developed as design progresses with value engineering options.',
      },
      {
        step: 3,
        title: 'Tendering',
        description:
          'Bill of quantities preparation, tender issue, evaluation, and contractor selection support.',
      },
      {
        step: 4,
        title: 'Contract Administration',
        description:
          'Monthly valuations, variation pricing, and financial reporting during construction.',
      },
      {
        step: 5,
        title: 'Final Account',
        description:
          'Preparation and agreement of the final account, including variation settlements.',
      },
      {
        step: 6,
        title: 'Post-Contract Review',
        description:
          'Cost benchmarking and lessons-learned documentation for future project improvement.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 8,
    slug: 'infrastructure-development',
    title: 'Infrastructure Development',
    icon: '🌐',
    shortDescription:
      'Large-scale infrastructure development for sustainable communities and economic growth.',
    description:
      'BuildPro leads the delivery of critical infrastructure across Nigeria. Our infrastructure development services encompass roads and highways, water supply and sanitation systems, power infrastructure, telecommunications ducting, and community development projects. We partner with federal and state governments, development banks, and private sector clients to deliver infrastructure that drives economic growth and improves lives.',
    benefits: [
      'Prequalified for federal and state government contracts',
      'Experience with World Bank and AfDB funded projects',
      'Large fleet of modern heavy plant and equipment',
      'In-house civil, structural, and MEP engineering capacity',
      'Community engagement and local content development',
      'Environmental and social safeguard compliance',
    ],
    process: [
      {
        step: 1,
        title: 'Project Identification',
        description:
          'Stakeholder engagement, needs assessment, and project scoping with government partners.',
      },
      {
        step: 2,
        title: 'Feasibility & EIA',
        description:
          'Technical feasibility studies and Environmental Impact Assessment preparation.',
      },
      {
        step: 3,
        title: 'Detailed Design',
        description:
          'Engineering designs, specifications, BOQ, and procurement documents preparation.',
      },
      {
        step: 4,
        title: 'Construction',
        description:
          'Phased infrastructure delivery with interim milestones and government supervision.',
      },
      {
        step: 5,
        title: 'Testing & Commissioning',
        description:
          'Performance testing, system commissioning, and handover to operating authorities.',
      },
      {
        step: 6,
        title: 'Capacity Building',
        description:
          'Training of local operators and maintenance staff for long-term sustainability.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
];
