// All site content lives here. Edit this file to update text, projects or links.

export const profile = {
  name: 'Aadhya Sharma',
  email: 'officialaadhyasharma@gmail.com',
  github: 'https://github.com/Aadhya2209',
  linkedin: 'https://www.linkedin.com/in/aadhya-sharma-67488b2a5/',
  location: 'Jammu, India',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

export const stats = [
  { value: '2', suffix: '×', label: 'IIT Jammu research internships' },
  { value: '4', label: 'internships since 2025' },
  { value: '9', suffix: '+', label: 'AI and cloud certifications' },
  { value: '7.5', label: 'CGPA, GCET Jammu' },
]

export const tickerSkills = [
  'Graph Neural Networks', 'Hypergraph Convolution', 'Computer Vision', 'Deep Learning',
  'React', 'Node.js', 'Firebase', 'Python', 'Streamlit', 'Power BI', 'Neo4j', 'Docker',
]

export const services = [
  {
    icon: 'graph',
    title: 'AI/ML Research',
    text: "Graph and hypergraph neural networks applied to computer vision and audio, with IIT Jammu's research group.",
    chips: ['GCN', 'Hypergraph conv', 'ResNet-50', 'CV'],
  },
  {
    icon: 'code',
    title: 'Full-Stack Development',
    text: 'Web apps with REST APIs, authentication and real-time data, shipped in sprint-based teams.',
    chips: ['React', 'Node.js', 'Express', 'Firebase'],
  },
  {
    icon: 'chart',
    title: 'Data Analytics',
    text: 'Dashboards and analysis that turn raw datasets into trends people can act on.',
    chips: ['Python', 'Power BI', 'IBM SkillsBuild'],
  },
]

export const research = [
  {
    status: 'In progress',
    done: false,
    viz: 'hyper',
    date: 'Oct 2026 – present · with Dr. Sheetal Varshney',
    title: 'Graph Refinement in Latent Space: Hypergraph Convolution for Underwater Object Detection',
    question: 'Can higher-order relations between image regions find fish when colour, visibility and background all work against the detector?',
    text: 'Hypergraph convolution on a ResNet-50 backbone for fish detection in underwater video, targeting colour distortion, occlusion and moving backgrounds.',
  },
  {
    status: 'Completed',
    done: true,
    viz: 'wave',
    date: 'Jun – Jul 2026',
    title: 'Infant Cry Classification with Graph Convolutional Networks',
    question: 'Can a model tell why a baby is crying from the audio alone?',
    text: 'Represented infant cry recordings as graphs and classified them with GCN-based deep learning methods.',
  },
]

export const experience = [
  {
    when: 'Oct 2026 – now', role: 'Research Intern', org: 'IIT Jammu', type: 'Current',
    points: ['Underwater object detection with hypergraph convolution and a ResNet-50 backbone.'],
  },
  {
    when: 'Aug – Sep 2026', role: 'Data Analytics with AI Intern', org: 'IBM SkillsBuild · AICTE · BharatCares', type: 'Remote',
    points: ['Completed the 6-week IBM SkillsBuild Data Analytics with AI internship.'],
  },
  {
    when: 'Jun – Jul 2026', role: 'Research Intern', org: 'IIT Jammu', type: 'Research',
    points: ['Infant cry classification using graph convolutional networks.'],
  },
  {
    when: 'Jun – Aug 2025', role: 'Full Stack Developer Intern', org: 'Techible · IIT Jammu I3C', type: 'On-site',
    points: [
      "300+ hours of full-stack training under IIT Jammu's I3C innovation program.",
      'Built and deployed web apps with REST APIs, Firebase OTP auth and real-time databases.',
      'Delivered responsive UIs in Agile sprints with GitHub version control.',
    ],
  },
]

const gh = (repo) => `https://github.com/Aadhya2209/${repo}`

export const projects = [
  {
    title: 'QueueSetu', tag: 'Latest', featured: true, size: 'lg', art: 'queue', repo: gh('queuesetu-app'),
    text: 'An app for managing queues, so people can wait less and know where they stand.',
  },
  {
    title: 'Campus Placement Analytics', tag: 'IBM SkillsBuild · 2026', size: 'lg', art: 'analytics', repo: gh('IBM_Project'),
    text: "Streamlit dashboard on 215 students' placement data. Found work experience lifts placement from 59.6% to 86.5%.",
    tech: 'Python · Pandas · Plotly · Streamlit',
  },
  {
    title: 'FreshFusionBowl', tag: 'Live site', size: 'md', art: 'food', repo: gh('FreshFusionBowl'), live: 'https://fresh-fusion-bowl.vercel.app',
    text: 'Responsive multi-page site for a healthy-food cloud kitchen: menu with prices, events, contact form and a light/dark toggle.',
    tech: 'HTML · CSS · JavaScript',
  },
  {
    title: 'DigiBridge', tag: '2025', size: 'md', art: 'learn', repo: gh('new_digibridge'),
    text: 'Students discover digital learning resources. Firebase OTP phone login, Bootstrap UI.',
  },
  {
    title: 'Global AQI Dashboard', tag: '2025', size: 'md', art: 'air', repo: gh('AQI_ANALSIS_PROJECT_POWER_BI'),
    text: 'Air quality across 50+ countries with drill-down trends and seasonal shifts.',
  },
  {
    title: 'Cached Info', tag: '2025', size: 'sm', art: 'auth', repo: gh('Cached-info'),
    text: 'Login and profile system with session handling, validation and secure Firebase storage.',
  },
  {
    title: 'DreamScape', tag: '2025', size: 'sm', art: 'sleep', repo: gh('project_dreamscape'),
    text: 'Mobile-first sleep tracker built around accessibility and smooth interaction.',
  },
  {
    title: 'Ludo in the browser', tag: 'JavaScript', size: 'sm', art: 'ludo', repo: gh('GAME'),
    text: 'A playable Ludo board game written in vanilla JavaScript.',
  },
  {
    title: 'Chat application', tag: 'Java', size: 'sm', art: 'chat', repo: gh('Chatting_Application'),
    text: 'A messaging app written in Java.',
  },
]

export const stack = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'C/C++', 'Java'] },
  { group: 'AI / Data', items: ['GNNs', 'Hypergraph nets', 'Computer vision', 'Deep learning', 'Power BI'] },
  { group: 'Web', items: ['React', 'Node.js', 'Express', 'REST', 'Firebase', 'MongoDB', 'Bootstrap'] },
  { group: 'Graphs & tools', items: ['Neo4j', 'Knowledge graphs', 'Docker', 'Git', 'Oracle Cloud'] },
]

export const certifications = [
  { name: 'Data Analytics with AI Internship', issuer: 'IBM · AICTE · BharatCares', date: 'Sep 2026' },
  { name: 'Agentic AI Foundations Associate', issuer: 'Oracle University', date: 'Jul 2026' },
  { name: 'AI-ML Engineer Certificate', issuer: 'Reliance Foundation', date: 'Jul 2026' },
  { name: 'Google AI Essentials + Prompting Essentials', issuer: 'Google · Coursera', date: 'Jul 2026' },
  { name: 'Power BI for Business Applications', issuer: 'Microsoft Elevate · AICTE', date: 'Mar 2026' },
  { name: 'OCI 2025 AI Foundations Associate', issuer: 'Oracle University', date: 'Sep 2025' },
  { name: 'Cyber Job Simulation · AI for Beginners', issuer: 'Deloitte Australia · HP LIFE', date: '2025' },
]

export const education = [
  { score: '7.5', label: 'CGPA · B.E. Computer Engineering, GCET Jammu (2023 – 2027)' },
  { score: '88.8%', label: 'Class 12, PCM · Oriental Academy' },
  { score: '94.6%', label: 'Class 10 · Carmel Convent School' },
]
