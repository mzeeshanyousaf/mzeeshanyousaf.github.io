import type { Award, Education, Experience } from '../types/portfolio';

export const experience: Experience[] = [
  {
    period: '05/2025 — Present',
    role: 'SSE – WordPress Engineer',
    company: 'Amentotech',
    location: 'Lahore, Pakistan (Hybrid / On-site)',
    current: true,
    summary:
      'Architecting and developing custom WordPress themes, bespoke plugins, and headless solutions using React, GraphQL, and REST APIs for global enterprise clients.',
    achievements: [
      { value: '98+', label: 'Google Lighthouse CWV across enterprise client builds' },
      { value: '100%', label: 'Update-safe VIP coding standards & zero-vulnerability audit' },
    ],
    responsibilities: [
      'Architect and develop custom WordPress themes, bespoke plugins, and headless solutions using React, GraphQL, and REST APIs for global enterprise clients.',
      'Optimize site performance, scalability, and security using advanced caching strategies, CDNs, database tuning, and vulnerability patching.',
      'Collaborate directly with cross-functional stakeholders to translate complex business requirements into high-performing technical specifications.',
      'Enforce WordPress Coding Standards, CI/CD pipelines, Git workflows, and rigorous code reviews to maintain clean, reusable codebases.',
      'Research and implement modern web paradigms, including React-based custom Gutenberg block development (@wordpress/scripts) and headless CMS setups.',
    ],
    stack: ['WordPress Core', 'PHP (OOP)', 'React', 'GraphQL', 'REST APIs', 'MySQL', 'Gutenberg'],
  },
  {
    period: '10/2022 — 05/2025',
    role: 'Full-Stack Developer (WordPress, PHP, Shopify)',
    company: 'Webbuggs',
    location: 'Lahore, Pakistan',
    summary:
      'Engineered secure OOP PHP backends, built custom WooCommerce order and payment pipelines, executed cross-platform Shopify migrations, and optimized server response times.',
    achievements: [
      { value: '−40%', label: 'Page load times reduced via query indexing & caching' },
      { value: '0%', label: 'SQLi and XSS vulnerabilities through security hardening' },
    ],
    responsibilities: [
      'Optimized server response times, reducing page load times by 40% through caching and database indexing.',
      'Engineered secure, object-oriented (OOP) PHP-based back-end solutions, eliminating SQL injection (SQLi) and XSS vulnerabilities.',
      'Maintained and customized complex Shopify, WordPress, and WooCommerce applications for international clients.',
      'Built custom WooCommerce payment and order management systems, extending core functionality with custom plugins.',
      'Integrated third-party APIs and custom plugins to streamline business operations and improve site performance.',
    ],
    stack: ['PHP 8.x', 'WooCommerce', 'Shopify Liquid', 'REST APIs', 'MySQL', 'Tailwind CSS', 'Docker'],
  },
];

export const educationList: Education[] = [
  {
    degree: 'Master of Science in Computer Science (MSCS)',
    school: 'The Islamia University of Bahawalpur',
    period: '2019 — 2022',
    grade: 'CGPA 3.56 / 4.00',
    location: 'Bahawalpur, Pakistan',
  },
  {
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    school: 'The Islamia University of Bahawalpur',
    period: '2018 — 2020',
    location: 'Bahawalpur, Pakistan',
  },
];

export const education = educationList[0];

export const awardsList: Award[] = [
  {
    title: 'Employee of the Month (November 2023)',
    organization: 'Webbuggs',
    date: '11/2023',
    description:
      'Recognized for outstanding dedication, technical leadership, and lead architecture on high-impact client systems.',
  },
  {
    title: 'Outstanding Poster Presentation Award',
    organization: 'The Islamia University of Bahawalpur (IUB)',
    date: '06/2022',
    description:
      'Recognized for pioneering research presentation on "Age and Gender Recognition" utilizing computer vision deep learning models.',
  },
  {
    title: 'Professional Freelancing & Business Management',
    organization: 'DigiSkills.pk',
    date: '11/2019',
    description: 'Certified in agile digital project delivery, global client management, and commercial freelancing.',
    credentialId: '6EYHTCDPQ',
  },
  {
    title: 'Computer Hardware & Network Professional',
    organization: 'Punjab Vocational Training Council (PVTC)',
    date: '01/2018',
    description: 'Professional hardware diagnostics, system administration, and network engineering certification.',
    credentialId: 'BNR-01-ET13-006-18-26',
  },
];
