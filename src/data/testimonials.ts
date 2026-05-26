export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  init: string;
}

export const testimonials: Testimonial[] = [
  { name: 'Amara O.', role: 'PhD Student, UI', quote: 'STATNOMICS delivered my literature review in 36 hours. Absolute lifesaver during my dissertation crunch! The quality was outstanding.', rating: 5, init: 'AO' },
  { name: 'James K.', role: 'Startup Founder', quote: 'Their business proposal helped us secure a ₦5M grant. The research was impeccable and beautifully presented. Highly recommended.', rating: 5, init: 'JK' },
  { name: 'Fatima B.', role: 'Research Analyst', quote: 'Outstanding data analysis support. They cleaned, analysed, and interpreted 3 years of survey data in SPSS perfectly. Great insights.', rating: 5, init: 'FB' },
  { name: 'Chidi E.', role: 'MBA Student, LASU', quote: 'Got my assignment done overnight with top-notch references. Worth every kobo. The team is responsive and professional.', rating: 5, init: 'CE' },
  { name: 'Sarah M.', role: 'NGO Director', quote: 'STATNOMICS handled our grant report while we focused on fieldwork. Seamless experience. They truly understand the non-profit space.', rating: 5, init: 'SM' },
  { name: 'Kelvin A.', role: 'Undergraduate, UNILAG', quote: 'Affordable, fast, and brilliant. My presentation design won the best project award in my department! Forever grateful.', rating: 5, init: 'KA' },
  { name: 'Peace N.', role: 'MSc Student, OAU', quote: 'The data analysis chapter of my thesis was handled professionally. My supervisor was impressed with the statistical approach used.', rating: 5, init: 'PN' },
  { name: 'Tunde A.', role: 'SME Owner', quote: 'The feasibility study they wrote for my business was detailed and bank-ready. I got my loan approved on first submission.', rating: 5, init: 'TA' },
];
