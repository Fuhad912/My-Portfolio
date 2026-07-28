import { projects } from './projects.js'

export const profile = {
  name: 'Fuhad Bello',
  preferredName: 'Fuhad',
  location: 'Osun State, Nigeria',
  role: 'Computer Science Student',
  affiliation: 'Summit University · Founder, Thinkright',
  heroKicker: 'Software Engineer in Progress',
  headline: 'I build software, then I make it feel obvious.',
  heroSubtitle:
    "Computer science student who spends more time in the backend than the browser. I've shipped a CBT exam platform used by real students, a real-time social app backed by Supabase, and an AI assistant with real conversation state.",
  stats: [
    { value: String(projects.length), label: 'Projects shipped' },
    { value: '3+', label: 'Years writing code' },
    { value: '2', label: 'Products with real users' },
  ],
  about: {
    kicker: 'About',
    title: 'Currently studying computer science. Mostly found in the backend.',
    paragraphs: [
      "I started by building websites for small businesses in Nigeria — the kind of work where the site has to survive real customers, real payments, and real complaints when something breaks. That pressure taught me more about engineering than any tutorial did.",
      "These days I care most about the parts users never see: data models, state that doesn't drift, and systems that don't fall over when traffic isn't zero. Thinkright and Clashe — a real-time social app I'm building on Supabase — are where most of that thinking lives right now.",
      "I'm not chasing trends. I'm trying to get good at the fundamentals — clean architecture, sane APIs, and code a stranger could maintain — while I finish my degree.",
    ],
  },
  currentlyFocusedOn: [
    'Backend architecture and database design',
    'Clashe — a real-time social debate app built on Supabase',
    'Building Thinkright into a platform that scales past one classroom',
  ],
  avatar: {
    src: '/images/fuhad-portrait.jpg',
    alt: 'Portrait of Fuhad Bello',
  },
  contact: {
    email: 'fuhadbello09@gmail.com',
    whatsapp: 'https://wa.me/2348160271964',
    instagram: 'https://instagram.com/akintomiwa_bello_',
    linkedin:
      'https://www.linkedin.com/in/fuhad-bello-893aa7322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    x: 'https://x.com/BelloFuhad94169',
    github: 'https://github.com/fuhad912',
  },
  footerNote: `© ${new Date().getFullYear()} Fuhad Bello`,
}

export const focusAreas = [
  {
    title: 'Backend & Data',
    description:
      'API design, relational data modelling, and real-time state sync — the kind of consistency Clashe needs to keep votes and comments accurate across users.',
  },
  {
    title: 'Frontend Engineering',
    description:
      'React and vanilla JS interfaces that stay fast and accessible — component structure over copy-pasted divs.',
  },
  {
    title: 'Applied AI',
    description:
      'Conversational tools with real session state and response logic, not single-shot prompt demos.',
  },
  {
    title: 'Payments & Commerce',
    description:
      'Checkout flows and order systems wired to real gateways, built to handle the edge cases that show up once money is involved.',
  },
  {
    title: 'Product Thinking',
    description:
      'Turning a rough idea into a working system end to end. Thinkright started as a plan on paper, not a template.',
  },
  {
    title: 'Tooling',
    description: 'React, Vite, Tailwind, Git, and a growing comfort with the parts of the stack below the UI.',
  },
]

export const testimonials = [
  {
    name: 'Adebayo Okeowo',
    role: 'CEO, TechStart Nigeria',
    quote:
      'Fuhad rebuilt our platform and stayed involved well past launch. He asked the right questions before writing a single line of code.',
  },
  {
    name: 'Fatima Yusuf',
    role: 'Founder, Lagos Fashion Hub',
    quote:
      'The checkout flow he built handled our first real traffic spike without issues. That mattered more to me than how it looked.',
  },
  {
    name: 'Chukwudi Eze',
    role: 'Managing Director, Abuja Consulting',
    quote:
      'Clear communication, realistic timelines, and code that our next developer could actually read and extend.',
  },
]

export const faqs = [
  {
    question: 'What are you working on right now?',
    answer:
      "Two things: Thinkright, a CBT exam platform for JAMB students, and Clashe, a real-time social debate app built on Supabase. I'm also studying computer science full-time.",
  },
  {
    question: "What's your actual stack?",
    answer:
      'Java (Spring Boot) and Python on the backend, alongside React, JavaScript, and Tailwind for frontend interfaces. My primary focus is shifting heavily toward backend engineering and systems architecture to align with the evolving demands of the modern tech ecosystem.',
  },
  {
    question: 'Are you open to internships or junior roles?',
    answer:
      "Yes. I'm looking for a team where I can go deeper on backend engineering while I finish my degree.",
  },
  {
    question: 'Do you still take freelance or contract work?',
    answer:
      'Selectively. Reach out with the project scope and timeline and I\u2019ll tell you honestly if I\u2019m the right fit.',
  },
  {
    question: "What's the fastest way to reach you?",
    answer: 'Email is best. WhatsApp and LinkedIn work too if that\u2019s easier for you.',
  },
]
