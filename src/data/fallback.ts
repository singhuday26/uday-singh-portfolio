import {
  ProjectDB,
  EducationDB,
  AchievementDB,
  SkillCategoryDB,
} from "@/types";

export const fallbackProjects: ProjectDB[] = [
  {
    id: "1",
    title: "MediSafe – Hospital Management Platform",
    overview:
      "Drove 40% improvement in user engagement by building a data-informed hospital management platform serving 10,000+ users. Took end-to-end ownership from feature conception to impact measurement, combining React.js frontend with analytics to optimize patient, doctor, and staff workflows.",
    problem:
      "Healthcare platform needed measurable improvements in user engagement and workflow efficiency",
    role: "Product Engineer with full ownership of frontend features and user engagement metrics",
    methodology:
      "Built component library with React.js, implemented A/B testing for UI improvements, tracked user behavior analytics, collaborated cross-functionally to align features with business goals",
    results:
      "Achieved 40% increase in user engagement, reduced workflow completion time by 25%, delivered reusable component system adopted across 5+ features",
    tech_stack: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Component Architecture",
      "Analytics",
      "A/B Testing",
    ],
    image: "/assets/project-medicare.webp",
    github_link: "https://github.com/singhuday26",
    demo_link: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "EduSphere360 – EdTech Product Platform",
    overview:
      "Improved platform performance by 20% and drove user retention through data-driven feature development. As Product Engineer and Co-Founder, owned the entire frontend stack while using analytics to inform product decisions and measure feature impact on key business metrics.",
    problem:
      "Educational platform needed performance optimization and data-driven product development to improve retention",
    role: "Product Engineer & Co-Founder with end-to-end ownership of frontend and product analytics",
    methodology:
      "Implemented performance monitoring, analyzed user behavior data to prioritize features, built component library, used metrics to validate product decisions",
    results:
      "Delivered 20% performance improvement, increased user retention by 15%, built analytics dashboard tracking 10+ product metrics, validated feature impact through data",
    tech_stack: [
      "React",
      "JavaScript ES6+",
      "TypeScript",
      "Performance Optimization",
      "Product Analytics",
      "Data-Driven Development",
    ],
    image: "/assets/project-edusphere.webp",
    github_link: "https://github.com/singhuday26",
    demo_link: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Customer Analytics Dashboard – Data Product",
    overview:
      "Built interactive analytics dashboard processing 5k+ customer records, achieving 85% user engagement and driving data-informed business decisions. Combined frontend engineering with data visualization to deliver actionable insights that reduced customer churn by 12%.",
    problem:
      "Business needed data visualization tool to reduce churn and improve customer insights",
    role: "Product Engineer specializing in data visualization and business impact measurement",
    methodology:
      "Implemented data visualization libraries, optimized query performance, collaborated with data team to define key metrics, validated dashboard impact on business decisions",
    results:
      "Achieved 85% user engagement with dashboard, enabled data-driven decisions reducing churn by 12%, optimized data rendering for 3x faster load times",
    tech_stack: [
      "JavaScript",
      "TypeScript",
      "Data Visualization",
      "Performance Optimization",
      "Analytics",
      "Business Intelligence",
    ],
    image: "/assets/project-churn.webp",
    github_link: "https://github.com/singhuday26",
    demo_link: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Smart IoT Waste Management – Real-time Product",
    overview:
      "Achieved 90% accuracy in real-time waste classification by building responsive IoT interface with data-driven optimization. Owned full product cycle from sensor data integration to user interface, measuring and improving classification accuracy through iterative development.",
    problem:
      "IoT system needed accurate real-time interface to optimize waste management operations",
    role: "Product Engineer with ownership of real-time interface and accuracy metrics",
    methodology:
      "Implemented real-time data streaming, analyzed sensor data patterns to improve accuracy, built responsive UI, measured classification performance, iterated based on data insights",
    results:
      "Achieved 90% real-time classification accuracy (up from 75%), reduced system latency by 40%, delivered scalable architecture handling 1000+ concurrent sensor streams",
    tech_stack: [
      "JavaScript",
      "TypeScript",
      "Real-time Systems",
      "IoT Integration",
      "Data Analytics",
      "Performance Optimization",
    ],
    image: "/assets/project-waste_management.webp",
    github_link: "https://github.com/singhuday26",
    demo_link: null,
    created_at: new Date().toISOString(),
  },
];

export const fallbackEducation: EducationDB[] = [
  {
    id: "1",
    institution: "Vellore Institute of Technology (VIT-AP University)",
    degree: "B.Tech in Computer Science & Engineering (Data Analytics)",
    duration: "2023-2027",
    location: "Amaravati, AP",
    cgpa: "9.15 / 10.0",
    highlight: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    institution: "Saharanpur Public School (ISC Board)",
    degree: "Class XII - Science Stream",
    duration: "2022",
    location: "Saharanpur, UP",
    cgpa: "84.8%",
    highlight: false,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    institution: "Saharanpur Public School (ICSE Board)",
    degree: "Class X",
    duration: "2020",
    location: "Saharanpur, UP",
    cgpa: "97% (1st Rank in District)",
    highlight: true,
    created_at: new Date().toISOString(),
  },
];

export const fallbackAchievements: AchievementDB[] = [
  {
    id: "1",
    title: "Amazon HackOn (2025)",
    description:
      "Secured position in top 4% of teams (top 2,000 out of 50,000+), advancing to Round 3",
    category: "Hackathon",
    icon_name: "Trophy",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Smart India Hackathon (SIH 2024)",
    description:
      "Developed a full-stack web application prototype for Ministry of Education problem statement, delivering working product in 36 hours",
    category: "Hackathon",
    icon_name: "Award",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Microsoft Learn Student Ambassadors - VIT-AP",
    description:
      "Technical Mentor & Event Coordinator (Aug 2023-2024) - Conducted Python and Data Science workshops for 100+ students",
    category: "Leadership",
    icon_name: "Users",
    created_at: new Date().toISOString(),
  },
];

export const fallbackSkillCategories: SkillCategoryDB[] = [
  {
    id: "1",
    title: "Frontend Technologies",
    icon_name: "Code",
    skills: [
      "React",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
      "Vite",
    ],
    featured: ["React", "JavaScript", "TypeScript"],
    display_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "UI Engineering & Performance",
    icon_name: "Monitor",
    skills: [
      "Component Architecture",
      "State Management",
      "Performance Optimization",
      "Responsive Design",
      "Web APIs",
      "Browser Optimization",
    ],
    featured: [
      "Component Architecture",
      "Performance Optimization",
      "Responsive Design",
    ],
    display_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Development Stack & APIs",
    icon_name: "Layers",
    skills: [
      "Node.js",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "Docker",
      "CI/CD",
    ],
    featured: ["REST APIs", "Git", "Node.js"],
    display_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Tools & Collaboration",
    icon_name: "Wrench",
    skills: [
      "VS Code",
      "Chrome DevTools",
      "Figma",
      "Webpack",
      "ESLint",
      "Jest",
      "Agile/Scrum",
      "Cross-functional Teams",
    ],
    featured: ["Chrome DevTools", "Agile/Scrum", "Cross-functional Teams"],
    display_order: 4,
    created_at: new Date().toISOString(),
  },
];
