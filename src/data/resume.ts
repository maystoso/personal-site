// Real content from your résumé. Edit freely as things change.

export const intro = {
  name: 'Myka Escaran',
  tagline: 'CS student at UT Austin. I build things that respond to people.',
  email: 'drewmyka@gmail.com',
};

// Technical projects — the core of the site. Newest first.
export const codeProjects = [
  {
    title: 'Handtracking VFX',
    stack: 'TouchDesigner · MediaPipe',
    period: 'Fall 2026',
    summary:
      'Interactive visual effects driven by hand tracking — gesture-controlled particle systems running on real-time GPU-accelerated simulation.',
  },
  {
    title: 'Home Field Advantage Analyzer',
    stack: 'Java',
    period: 'Fall 2026',
    summary:
      'Parses 15,000+ historical NCAA and MLB scores to measure home field advantage, with an interactive CLI handling multi-file input and path validation.',
  },
  {
    title: 'Binary Search Tree Implementation',
    stack: 'Java',
    period: 'Fall 2025',
    summary:
      'A BST class supporting insertion, deletion, and search while maintaining correct node ordering and structural integrity.',
  },
  {
    title: 'Anagram Solver',
    stack: 'Java',
    period: 'Fall 2025',
    summary:
      'Generates valid anagrams from user input using dictionary-based matching, with hash maps and sets comparing character frequencies efficiently.',
  },
  {
    title: 'Robotic Control Interface for Sawyer',
    stack: 'Python · TeleMoMa',
    period: 'Spring 2025',
    summary:
      'A teleoperation interface for a Sawyer robotic arm, giving users precise and intuitive control for manipulation tasks.',
  },
  {
    title: 'Adaptive Hangman',
    stack: 'Java',
    period: 'Spring 2025',
    summary:
      'Hangman that cheats — partitions words into families using lists, maps, and sets so the computer can adaptively pick the hardest remaining outcome.',
  },
];

export const experience = [
  {
    role: 'Prep Cook',
    org: 'Cava',
    period: 'Spring 2026',
    summary:
      'High-volume food prep and inventory management under strict food safety protocols.',
  },
  {
    role: 'Teacher',
    org: 'Graham Elementary School, through UTeach',
    period: 'Spring 2025',
    summary:
      'Planned and delivered science lessons to 5th graders, aligned to state and district curriculum standards.',
  },
  {
    role: 'Barista',
    org: 'Starbucks',
    period: 'Spring 2024 — Summer 2024',
    summary:
      'Multi-tasking, time management, and communication in a high-pressure service environment.',
  },
];

export const education = [
  {
    degree: 'B.S. Computer Science',
    org: 'University of Texas at Austin',
    period: 'Expected 2028',
    detail:
      'Data Structures & Algorithms, Discrete Mathematics, Introduction to Statistics, Elementary Statistical Methods',
  },
  {
    degree: 'Software Engineering Microcredential',
    org: 'Kingsland University, via MajorClarity',
    period: '2020 — 2024',
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'JavaScript / Node.js', 'CSS', 'C++', 'C#'],
  },
  {
    label: 'Frameworks & libraries',
    items: ['React', 'MediaPipe', 'Discord.js', 'TeleMoMa'],
  },
  {
    label: 'Tools',
    items: ['TouchDesigner', 'Git / GitHub', 'IntelliJ IDEA', 'R Studio', 'VS Code'],
  },
  {
    label: 'Interactive design',
    items: ['Computer vision', 'Gesture-driven interfaces', 'Motion tracking'],
  },
];

export const spokenLanguages = ['English', 'Korean (basic)', 'Tagalog (basic)'];

export const resumeFileHref = '/resume.pdf'; // drop your PDF into /public as resume.pdf