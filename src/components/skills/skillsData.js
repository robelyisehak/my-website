// src/components/skills/skillsData.js
export const skillsCategories = [
  {
    id: "basic",
    title: "Basic Languages",
    icon: "Code2",
    color: "from-orange-500 to-red-600",
    description: "Foundation of web development",
    languages: [
      {
        name: "HTML5",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        learnedFrom: "freeCodeCamp, W3Schools, YouTube (Traversy Media)",
        projects: ["Personal portfolio v1", "10+ static landing pages", "All university assignments"],
        details: "Mastered semantic HTML, accessibility (ARIA), SEO best practices, and modern form handling."
      },
      {
        name: "CSS3",
        level: 93,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        learnedFrom: "Kevin Powell YouTube, CSS-Tricks, Tailwind Labs docs",
        projects: ["This portfolio", "Dark mode systems", "Animated landing pages"],
        details: "Expert in Flexbox, Grid, animations, responsive design, and utility-first CSS with Tailwind."
      },
      {
        name: "JavaScript",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        learnedFrom: "JavaScript.info, The Net Ninja, freeCodeCamp",
        projects: ["Interactive dashboards", "To-do apps", "Real-time form validation"],
        details: "Deep knowledge of ES6+, async/await, DOM manipulation, closures, and modern APIs."
      }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: "Layers",
    color: "from-cyan-500 to-blue-600",
    description: "Modern tools for scalable apps",
    languages: [
      {
        name: "React.js",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        learnedFrom: "React official docs, Scrimba, Kent C. Dodds",
        projects: ["This portfolio", "Admin dashboards", "E-commerce frontend"],
        details: "Hooks, Context API, custom hooks, performance optimization, and state management."
      },
      {
        name: "Next.js",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        learnedFrom: "Vercel docs, Lee Robinson, Theo",
        projects: ["SEO-optimized blogs", "Full-stack apps", "This portfolio (planned migration)"],
        details: "SSR, SSG, App Router, Server Components, and Vercel deployment mastery."
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: "Server",
    color: "from-purple-600 to-pink-600",
    description: "Server-side & data management",
    languages: [
      {
        name: "PHP",
        level: 82,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        learnedFrom: "Laravel docs, Traversy Media, university courses",
        projects: ["Brokerage Management System", "Vehicle Management System"],
        details: "OOP, secure authentication, CRUD operations, and integration with MySQL."
      },
      {
        name: "Node.js",
        level: 78,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        learnedFrom: "Node.js docs, The Net Ninja, Academind",
        projects: ["REST APIs", "Real-time chat features", "Authentication systems"],
        details: "Express.js, middleware, JWT auth, and API design."
      },
      {
        name: "MySQL",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        learnedFrom: "University DB course, W3Schools, MySQL docs",
        projects: ["Brokerage system DB", "Vehicle system", "User management systems"],
        details: "Schema design, complex queries, indexing, and performance optimization."
      }
    ]
  },
  
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: "Wrench",
    color: "from-green-500 to-emerald-600",
    description: "DevOps & productivity",
    languages: [
      {
        name: "Git & GitHub",
        level: 87,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        learnedFrom: "GitHub Learning Lab, Git docs, daily practice",
        projects: ["50+ repositories", "Team collaboration", "CI/CD pipelines"],
        details: "Branching strategies, PR reviews, Git workflows, and GitHub Actions."
      },
      {
        name: "VS Code",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        learnedFrom: "Daily use since 2022",
        projects: ["All projects", "Custom snippets", "Extension setup"],
        details: "Master of shortcuts, debugging, extensions, and workspace customization."
      }
      
    ]
  }
];