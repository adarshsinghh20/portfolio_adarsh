export const profile = {
  name: 'Adarsh Singh',
  title: 'Full-Stack Web Developer',
  tagline:
    'B.Tech IT student building secure MERN applications with REST APIs, JWT auth, and clean UX. Open to internships, freelance projects, and full-time roles.',
  email: 'adarshsing.0108@gmail.com',
  phone: '+91 9555159901',
  location: 'Ghaziabad, India',
  linkedin: 'https://www.linkedin.com/in/adarsh-singh-b357712a6/',
  github: 'https://github.com/adarshsinghh20',
  image: '/adarshfinal.png',
  logo: '/AS_LOGO.png',
  availability: ['Internships', 'Freelance', 'Full-time'],
}

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'React.js'],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JWT Authentication',
      'Middleware',
    ],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'SQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    category: 'Concepts',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'OS',
      'DBMS',
      'Computer Networks',
    ],
  },
]

export const projects = [
  {
    name: 'SnapCart',
    subtitle: 'Full-Stack E-Commerce Platform',
    date: 'Mar 2025',
    highlights: [
      'MERN e-commerce app with JWT auth, user profiles, and role-based admin access.',
      'RESTful APIs for catalog, cart, orders, and user management with validation middleware.',
      'Scalable MongoDB schemas for products, orders, and users.',
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'JWT',
      'Cloudinary',
      'Nodemailer',
    ],
  },
  {
    name: 'FinTrack',
    subtitle: 'Personal Finance & Expense Management',
    date: 'Dec 2025',
    highlights: [
      'Track income, expenses, category budgets, and spending patterns.',
      'JWT auth with bcrypt hashing and secure multi-user sessions.',
      'CRUD APIs with validation; aggregation pipelines for monthly summaries.',
    ],
    stack: ['MongoDB', 'Express.js', 'Node.js', 'JavaScript', 'JWT', 'REST API'],
  },
  {
    name: 'EHR for ASHA Workers',
    subtitle: 'Healthcare Management (Major Project)',
    date: 'Jun 2026',
    highlights: [
      'REST backend for patients, visits, vaccinations, and ANC records.',
      'JWT authentication, RBAC, and secure access for ASHA workers and PHC admins.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
  },
]

export const experience = [
  {
    role: 'Virtual Intern — Full-Stack Web Development',
    company: 'Codec Technologies',
    period: '2026',
    points: [
      'Built a finance tracker full-stack project for personal expense management.',
      'Hands-on with React.js, Node.js, Express.js, MongoDB, and REST APIs.',
    ],
  },
]

export const education = [
  {
    school: 'Dr. APJ Abdul Kalam Technical University',
    degree: 'B.Tech — Information Technology',
    detail: '79.67% (till 6th semester)',
    period: '2023 – 2027',
    location: 'Ghaziabad, India',
  },
]

export const certifications = [
  {
    title: 'Meta Full-Stack Web Developer Professional Certificate',
    issuer: 'Coursera',
    detail:
      'React.js, Node.js, Express.js, REST API design, databases, version control.',
  },
]

export const achievements = [
  '250+ DSA problems on LeetCode and GeeksforGeeks (arrays, strings, linked lists, trees, DP, greedy).',
  'Inter-college technical fests — teamwork, communication, and problem-solving.',
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
