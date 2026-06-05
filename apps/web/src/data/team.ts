export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  qualifications: string[];
  experience: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Engr. Michael Adeyemi',
    role: 'Managing Director & CEO',
    department: 'Executive',
    bio: "Engr. Michael Adeyemi is the founding Managing Director and CEO of BuildPro Construction Ltd with over 22 years of experience in the Nigerian and West African construction industry. A COREN-registered Civil and Structural Engineer, he holds an M.Sc. in Construction Management from the University of Lagos and an MBA from Lagos Business School. Under his visionary leadership, BuildPro has grown from a small contracting firm to one of Nigeria's most respected construction companies, delivering over ₦50 billion in project value across 12 states.",
    qualifications: [
      'B.Eng. Civil Engineering – University of Ibadan',
      'M.Sc. Construction Management – University of Lagos',
      'MBA – Lagos Business School (LBS)',
      'COREN Registered Engineer (R.Eng.)',
      'Fellow, Nigerian Society of Engineers (FNSE)',
    ],
    experience: '22+ Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    email: 'm.adeyemi@buildproconstruction.com',
  },
  {
    id: 2,
    name: 'Engr. Sarah Johnson',
    role: 'Director of Operations',
    department: 'Operations',
    bio: "Engr. Sarah Johnson serves as Director of Operations, overseeing all project delivery, supply chain, and operational functions at BuildPro. A highly experienced civil engineer and operations leader, she holds dual qualifications in Civil Engineering and Project Management. Sarah has been instrumental in establishing BuildPro's quality management systems and HSE frameworks, contributing to the company's consistent track record of on-time, on-budget project delivery.",
    qualifications: [
      'B.Eng. Civil Engineering – Obafemi Awolowo University',
      'M.Sc. Project Management – Coventry University, UK',
      'PMP Certification – Project Management Institute',
      'COREN Registered Engineer',
      'ISO 9001 Lead Auditor',
    ],
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    email: 's.johnson@buildproconstruction.com',
  },
  {
    id: 3,
    name: 'David Okafor',
    role: 'Head of Finance',
    department: 'Finance',
    bio: 'David Okafor is a seasoned finance professional with over 16 years of experience in corporate finance, construction project accounting, and financial management. As Head of Finance, he oversees all financial planning, budgeting, treasury management, and reporting functions at BuildPro. David is instrumental in ensuring the financial integrity of all projects and has been key to securing major construction financing arrangements.',
    qualifications: [
      'B.Sc. Accounting – University of Nigeria, Nsukka',
      'MBA Finance – Pan-Atlantic University Lagos',
      'Fellow, Institute of Chartered Accountants of Nigeria (FCCA)',
      'Certified Treasury Manager (CTM)',
    ],
    experience: '16+ Years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    email: 'd.okafor@buildproconstruction.com',
  },
  {
    id: 4,
    name: 'Engr. Fatima Bello',
    role: 'Senior Project Manager',
    department: 'Project Management',
    bio: "Engr. Fatima Bello is a distinguished engineer and project manager who leads BuildPro's most complex and high-profile projects. With a background in Civil Engineering and extensive PMP certification, she has successfully delivered landmark projects including the Meridian Corporate Towers and the Lagos-Ibadan Expressway rehabilitation. Fatima is known for her meticulous attention to detail, strong stakeholder management skills, and commitment to safety and quality.",
    qualifications: [
      'B.Eng. Civil Engineering – Ahmadu Bello University, Zaria',
      'M.Sc. Infrastructure Management – University College London',
      'PMP – Project Management Institute',
      'PRINCE2 Practitioner',
      'COREN Registered Engineer',
    ],
    experience: '14+ Years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    email: 'f.bello@buildproconstruction.com',
  },
  {
    id: 5,
    name: 'Grace Williams',
    role: 'Human Resources Manager',
    department: 'Human Resources',
    bio: "Grace Williams leads all human capital management functions at BuildPro, including talent acquisition, learning & development, employee engagement, performance management, and organizational development. With over 12 years of HR experience in the construction and engineering sector, Grace has been pivotal in building BuildPro's employer brand and developing a high-performance culture that attracts and retains top industry talent.",
    qualifications: [
      'B.Sc. Industrial Relations – University of Ibadan',
      'M.Sc. Human Resource Management – University of Lagos',
      'CIPM – Chartered Institute of Personnel Management of Nigeria',
      'SHRM-CP Certification',
    ],
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    email: 'g.williams@buildproconstruction.com',
  },
  {
    id: 6,
    name: 'Engr. James Thompson',
    role: 'Head of Engineering Services',
    department: 'Engineering',
    bio: "Engr. James Thompson heads BuildPro's Engineering Services department, overseeing structural engineering, MEP design, and technical quality assurance across all projects. A COREN-registered Structural Engineer with extensive experience in high-rise and industrial structural design, James ensures all engineering outputs at BuildPro meet the highest technical standards. He has been the lead structural engineer on several of the company's landmark projects.",
    qualifications: [
      'B.Eng. Structural Engineering – University of Benin',
      'M.Sc. Structural Engineering – Imperial College London',
      'COREN Registered Engineer (R.Eng.)',
      'Member, Institution of Structural Engineers (MIStructE)',
      'ETABS & SAP2000 Advanced Certified',
    ],
    experience: '17+ Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    email: 'j.thompson@buildproconstruction.com',
  },
];
