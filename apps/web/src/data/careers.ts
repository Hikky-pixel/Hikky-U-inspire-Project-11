export interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: 'Civil Engineer',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    type: 'Full-Time',
    level: 'Mid-Level',
    salary: '₦400,000 – ₦650,000/month',
    posted: 'June 1, 2025',
    description:
      'We are looking for a qualified and experienced Civil Engineer to join our growing Engineering Services team. The successful candidate will be responsible for the design, supervision, and management of civil engineering works across multiple active projects in Lagos and environs.',
    requirements: [
      'B.Eng. or B.Sc. in Civil Engineering from a recognised university',
      'COREN registration (or evidence of registration process)',
      'Minimum 4 years post-NYSC experience in civil construction',
      'Proficiency in AutoCAD, Civil 3D, and Microsoft Project',
      'Experience with road works, drainage, or building construction',
      'Strong understanding of geotechnical principles and foundation design',
    ],
    responsibilities: [
      'Prepare and review engineering drawings, specifications, and BOQs',
      'Supervise site activities and ensure quality of workmanship',
      'Conduct material testing coordination and interpretation of results',
      'Manage subcontractors and coordinate with the site team',
      'Prepare daily and weekly progress reports',
      'Ensure HSE compliance on all assigned works',
    ],
  },
  {
    id: 2,
    title: 'Site Supervisor',
    department: 'Operations',
    location: 'Lagos & Ogun State',
    type: 'Full-Time',
    level: 'Mid-Level',
    salary: '₦200,000 – ₦350,000/month',
    posted: 'June 1, 2025',
    description:
      'BuildPro is seeking experienced Site Supervisors to oversee day-to-day construction activities on active residential and commercial projects. The ideal candidates will have hands-on experience in building construction with demonstrated leadership of site labour teams.',
    requirements: [
      'HND or B.Sc. in Building Technology, Civil Engineering, or related field',
      'Minimum 5 years of site supervision experience in building construction',
      'Good knowledge of reading and interpreting architectural and structural drawings',
      'Strong leadership and communication skills',
      'HSE certification (NEBOSH, ISPON, or equivalent) is an advantage',
      "Valid driver's licence",
    ],
    responsibilities: [
      'Supervise all construction activities on assigned sites',
      'Manage and coordinate labour gangs and subcontractor teams',
      'Ensure work is executed per approved drawings and specifications',
      'Conduct daily HSE toolbox talks and enforce PPE compliance',
      'Prepare daily site diaries and labour returns',
      'Coordinate materials delivery and site logistics',
    ],
  },
  {
    id: 3,
    title: 'Quantity Surveyor',
    department: 'Commercial',
    location: 'Lagos, Nigeria',
    type: 'Full-Time',
    level: 'Mid-Level',
    salary: '₦350,000 – ₦550,000/month',
    posted: 'May 20, 2025',
    description:
      'We have an exciting opportunity for a competent Quantity Surveyor to join our Commercial team. The successful candidate will support the cost management, tendering, and contract administration functions across a portfolio of concurrent projects.',
    requirements: [
      'B.Sc. or HND in Quantity Surveying from a recognised institution',
      'NIQS student membership or associate membership',
      'Minimum 3 years experience in a construction QS role',
      'Proficiency in QS software (e.g. Cubit, CostX, or similar)',
      'Strong numeracy, analytical, and written communication skills',
      'Experience with FIDIC or NEC contract administration is an advantage',
    ],
    responsibilities: [
      'Prepare Bills of Quantities and tender documentation',
      'Conduct pre- and post-contract cost estimates and cost plans',
      'Prepare and agree monthly valuations with subcontractors',
      'Process and price client and subcontractor variations',
      'Manage the final account process for assigned projects',
      'Maintain up-to-date contract cost reports',
    ],
  },
  {
    id: 4,
    title: 'Project Manager',
    department: 'Project Management',
    location: 'Abuja / Lagos',
    type: 'Full-Time',
    level: 'Senior',
    salary: '₦600,000 – ₦1,000,000/month',
    posted: 'May 15, 2025',
    description:
      'BuildPro is seeking an experienced and driven Project Manager to lead the delivery of major construction projects in our growing Abuja operations. The successful candidate will be responsible for all aspects of project delivery including programme, cost, quality, HSE, and client management.',
    requirements: [
      'B.Eng. or B.Sc. in Civil Engineering, Quantity Surveying, or related discipline',
      'PMP certification (mandatory) or PRINCE2 Practitioner',
      'Minimum 8 years construction industry experience, with 4 years in project management',
      'Demonstrated track record of delivering projects exceeding ₦500 million',
      'Proficiency in Primavera P6 or MS Project',
      'Excellent stakeholder management and client-facing skills',
    ],
    responsibilities: [
      'Lead the planning, execution, monitoring, and closing of assigned projects',
      'Manage relationships with clients, consultants, and key stakeholders',
      'Control project cost, programme, and quality against agreed baselines',
      'Chair weekly project review meetings and monthly client progress meetings',
      'Manage the project team including site engineers, supervisors, and QS',
      'Prepare monthly project status reports for executive management',
    ],
  },
  {
    id: 5,
    title: 'Architect',
    department: 'Design',
    location: 'Lagos, Nigeria',
    type: 'Full-Time',
    level: 'Mid-Level',
    salary: '₦380,000 – ₦600,000/month',
    posted: 'April 30, 2025',
    description:
      'We are looking for a creative and technically proficient Architect to join our Design division. The successful candidate will be responsible for developing architectural designs for residential, commercial, and mixed-use development projects from concept through to construction documentation.',
    requirements: [
      'B.Arch. or M.Arch. from a recognised school of architecture',
      'Registration with ARCON (or evidence of registration process)',
      'Minimum 4 years post-graduation experience in an architectural practice',
      'Advanced proficiency in AutoCAD, Revit, SketchUp, and Adobe Creative Suite',
      'Strong portfolio demonstrating design capability across project types',
      'Knowledge of Lagos and Nigerian planning regulations',
    ],
    responsibilities: [
      'Develop architectural concepts and design development presentations for clients',
      'Produce construction drawings, specifications, and planning submission documents',
      'Coordinate with structural engineers, MEP consultants, and QS on integrated design',
      'Carry out site visits to review construction against drawings and resolve design queries',
      'Manage the regulatory approval process including LASBCA submissions',
      'Contribute to business development through proposal preparation and client presentations',
    ],
  },
  {
    id: 6,
    title: 'HR Officer',
    department: 'Human Resources',
    location: 'Lagos, Nigeria',
    type: 'Full-Time',
    level: 'Entry-Level',
    salary: '₦150,000 – ₦250,000/month',
    posted: 'April 20, 2025',
    description:
      'We are seeking a proactive and organised HR Officer to support the Human Resources department in delivering core HR functions including recruitment, employee relations, payroll processing, learning & development coordination, and HR records management.',
    requirements: [
      'B.Sc. in Human Resource Management, Industrial Relations, or related field',
      'CIPM student membership or associate membership is an advantage',
      '1-2 years experience in an HR role (internship experience considered)',
      'Proficiency in Microsoft Office Suite and HRIS software',
      'Strong interpersonal, communication, and organisational skills',
      'High level of discretion and professionalism',
    ],
    responsibilities: [
      'Support end-to-end recruitment processes including job posting, screening, and onboarding',
      'Maintain accurate and up-to-date employee records in the HRIS',
      'Coordinate monthly payroll inputs and liaise with finance',
      'Assist in the planning and coordination of L&D programmes',
      'Support employee engagement initiatives and internal communications',
      'Handle employee relations queries and escalate complex issues appropriately',
    ],
  },
];

export const companyBenefits = [
  {
    icon: '💰',
    title: 'Competitive Salary',
    description:
      'We offer market-leading compensation packages benchmarked against industry data, reviewed annually.',
  },
  {
    icon: '🏥',
    title: 'Health Insurance',
    description: 'Comprehensive HMO coverage for employees and their immediate family members.',
  },
  {
    icon: '📚',
    title: 'Learning & Development',
    description:
      'Annual training budget, professional certification sponsorship, and in-house skills development programmes.',
  },
  {
    icon: '🏖️',
    title: 'Generous Leave',
    description:
      '21 days annual leave, sick leave, maternity/paternity leave, and compassionate leave provisions.',
  },
  {
    icon: '🚗',
    title: 'Transport Allowance',
    description: 'Monthly transport or fuel allowance for all confirmed employees based in Lagos.',
  },
  {
    icon: '📈',
    title: 'Career Growth',
    description:
      'Structured career pathways, mentoring programmes, and fast-track opportunities for high performers.',
  },
  {
    icon: '🤝',
    title: 'Pension (NSITF)',
    description:
      'Full statutory pension contributions (employer 10%, employee 8%) to your designated PFA.',
  },
  {
    icon: '🏆',
    title: 'Performance Bonuses',
    description:
      'Annual performance bonuses for individuals and project teams who exceed delivery targets.',
  },
];
