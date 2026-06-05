export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  category: string;
  rating: number;
  quote: string;
  project: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alhaji Musa Ibrahim',
    role: 'Executive Director',
    company: 'Ibrahim Property Development Group',
    category: 'Property Developer',
    rating: 5,
    quote:
      'BuildPro Construction delivered the Harmony Luxury Estate beyond our expectations. Their attention to detail, quality of workmanship, and professional project management was exceptional. Every single unit was sold before completion — a testament to the quality BuildPro brought to the table. We will absolutely be working with them again.',
    project: 'Harmony Luxury Residential Estate',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
  },
  {
    id: 2,
    name: 'Dr. Chioma Obi',
    role: 'Permanent Secretary',
    company: 'Lagos State Ministry of Works',
    category: 'Government Agency',
    rating: 5,
    quote:
      'The Badagry Coastal Drainage project was delivered on schedule and within the approved budget. More importantly, the flooding problems that plagued three communities for years have been completely resolved. The Lagos State Government commends BuildPro for their professionalism and commitment to quality on this critical public infrastructure project.',
    project: 'Badagry Coastal Drainage Project',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
  },
  {
    id: 3,
    name: 'Mr. Chukwuemeka Nwosu',
    role: 'Group Managing Director',
    company: 'Apex Logistics International',
    category: 'Corporate Organization',
    rating: 5,
    quote:
      'The industrial warehouse complex BuildPro delivered at Apapa has transformed our operations. The quality of the heavy-duty flooring, the loading bay design, and the overall facility layout exceeded our operational requirements. Their team was responsive, professional, and truly understood our logistics needs. A fantastic construction partner.',
    project: 'Apapa Port Industrial Warehouse Complex',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    id: 4,
    name: 'Engr. Bisi Afolabi',
    role: 'Director General',
    company: 'Enugu State Water Resources Agency',
    category: 'Government Agency',
    rating: 5,
    quote:
      'The water treatment plant in Enugu is one of the most important public infrastructure projects our agency has ever managed. BuildPro handled the entire construction process with remarkable competence — from the intake structure to the 25km distribution pipeline. Over 300,000 Enugu residents now have access to clean, safe water. BuildPro made that possible.',
    project: 'Enugu State Water Treatment Plant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    id: 5,
    name: 'Mrs. Adaeze Eze',
    role: 'Chief Executive Officer',
    company: 'Nextgen Retail Properties',
    category: 'Property Developer',
    rating: 5,
    quote:
      "The Nextgen Shopping Plaza project was completed ahead of schedule and with zero compromise on quality. BuildPro's project management team kept us informed at every stage. The result is a shopping destination that has genuinely transformed retail in Ikeja. Our investment thesis was validated on day one when 90% of units were leased before we even opened. Remarkable work.",
    project: 'Nextgen Shopping Plaza',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  },
  {
    id: 6,
    name: 'Arch. Tunde Fashola',
    role: 'Development Director',
    company: 'Grandview Hospitality Group',
    category: 'Corporate Organization',
    rating: 5,
    quote:
      'Delivering a 5-star hospitality project requires an extraordinary level of precision, and BuildPro delivered precisely that. Every detail — from the grand ballroom to the spa finishes, the rooftop bar to the guest room acoustic performance — was executed flawlessly. The hotel received a 5-star rating and has been featured in major hospitality publications. BuildPro are world-class builders.',
    project: 'Grandview Hotel & Hospitality Resort',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    id: 7,
    name: 'Barr. Kelechi Okonkwo',
    role: 'Chairman',
    company: 'Okonkwo Family Trust',
    category: 'Private Client',
    rating: 5,
    quote:
      'I commissioned BuildPro to renovate my family estate in Ikoyi, and I could not be more satisfied with the outcome. They transformed a dated property into a stunning modern home. The project team was professional, respectful of our space, and the quality of finishing is simply outstanding. The value of the property has increased significantly. I recommend BuildPro without any reservations.',
    project: 'Royal Palm Terrace Renovation',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    id: 8,
    name: 'Engr. Sule Ahmed',
    role: 'Director of Infrastructure',
    company: 'NNPC Engineering & Technical Company',
    category: 'Corporate Organization',
    rating: 5,
    quote:
      "The road network BuildPro constructed within our Port Harcourt refinery complex is outstanding. They worked within an operational refinery environment which demands the highest standards of safety and precision. They met those standards every single day. Our logistics efficiency has improved by 35% since the roads were commissioned. We are very happy with BuildPro's service.",
    project: 'Port Harcourt Refinery Road Network',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
  },
  {
    id: 9,
    name: 'Prof. Yusuf Danjuma',
    role: 'Project Director',
    company: 'Kano State Urban Development Authority',
    category: 'Government Agency',
    rating: 5,
    quote:
      "The Kano Central Business District project has put Kano on the map as a modern, investment-ready city. BuildPro's execution was masterful — managing multiple towers, the retail podium, civic centre, and road infrastructure simultaneously, all delivered to the highest standard. Over 2,000 jobs were created and the Presidential commissioning ceremony was a proud moment for Kano State.",
    project: 'Kano Central Business District',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    id: 10,
    name: 'Mrs. Funmi Adegunwa',
    role: 'CEO',
    company: 'Meridian Property Partners',
    category: 'Property Developer',
    rating: 5,
    quote:
      "The Meridian Corporate Towers are a landmark addition to Victoria Island's skyline. BuildPro achieved LEED Gold certification which was a critical deliverable for us, and the towers achieved 100% occupancy within six months of opening. Their twin-tower execution plan was brilliantly managed, and the quality of the curtain wall glazing and interior finishes is truly world-class. A brilliant partner.",
    project: 'Meridian Corporate Towers',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
  },
];
