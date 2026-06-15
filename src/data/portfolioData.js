import ProjectImg1 from "../assets/Yikshar.jpg";

export const personalInfo = {
  name: "Utkarsh Gupta",
  role: "Senior Frontend Engineer & React Specialist",
  tagline: "Crafting high-performance, scalable web applications with intuitive user experiences. 3+ years of driving business value through optimized UI architectures.",
  about: "I am an experienced Frontend Developer specializing in the React ecosystem. With over 3 years of professional experience, I focus on building scalable component libraries, optimizing web performance, and delivering complex, data-driven interfaces. I bridge the gap between robust engineering and exceptional user experience.",
  email: "utkarsh@example.com", // Placeholder
  github: "https://github.com/utkarsh3020",
  linkedin: "https://linkedin.com/in/utkarsh3020", // Placeholder
  resume: "/assets/UtkarshGupta_CV.pdf",
};

export const skills = [
  {
    category: "Frontend Core",
    items: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Context API", "React Query"]
  },
  {
    category: "Styling & UI",
    items: ["Vanilla CSS", "CSS Variables", "Tailwind CSS", "Material UI", "Responsive Design"]
  },
  {
    category: "Architecture & Tools",
    items: ["Vite", "REST APIs", "Git & GitHub", "Component-Driven Development"]
  },
  {
    category: "Backend Familiarity",
    items: ["Node.js", "Express.js", "MongoDB"]
  }
];

export const experience = [
  {
    id: 1,
    role: "Project Engineer",
    company: "Rawattech Consulting and Solutions Private Limited",
    duration: "Jan 2023 - Present",
    points: [
      "Spearheaded the frontend development of scalable React applications, reducing load times by 30% through advanced code-splitting and asset optimization.",
      "Architected reusable component libraries, accelerating cross-team development velocity and ensuring design consistency.",
      "Integrated complex REST APIs and managed global state using Redux Toolkit to handle dynamic user data efficiently.",
      "Mentored junior developers and instituted code review best practices, improving overall codebase quality."
    ]
  },
  {
    id: 2,
    role: "Full Stack Web Developer",
    company: "Wisflux Private Limited",
    duration: "July 2022 - Aug 2022",
    points: [
      "Collaborated in agile environments to deliver full-stack features, enhancing overall platform functionality and user engagement.",
      "Developed responsive interfaces and integrated backend services using Node.js and RESTful APIs."
    ]
  },
  {
    id: 3,
    role: "Web Developer",
    company: "CVDigimax",
    duration: "Mar 2022 - May 2022",
    points: [
      "Developed responsive and accessible web interfaces, ensuring cross-browser compatibility and optimal mobile experiences.",
      "Optimized legacy codebases, improving core web vitals and overall site performance metrics."
    ]
  }
];

export const projects = [
  {
    id: 1,
    img: ProjectImg1,
    title: "YIKSHAR - Scalable E-Commerce Frontend",
    shortDescription: "A high-performance e-commerce platform built for scale, featuring advanced product filtering, secure authentication, and seamless cart management.",
    longDescription: "YIKSHAR is a fully responsive e-commerce web application engineered to deliver a seamless shopping experience. It features robust user authentication, dynamic product search with debouncing, advanced category filtering, and a comprehensive product details page. The application leverages Redux Toolkit for complex global state management, including cart and wishlist functionalities, ensuring synchronized data across components.",
    features: [
      "Secure JWT-based Authentication System",
      "Debounced Product Search and Category Filtering",
      "Dynamic Product Details Page with Image Galleries",
      "Centralized Cart and Wishlist Management via Redux",
      "Responsive, Mobile-First Design Architecture"
    ],
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs", "TanStack Query", "Vite"],
    businessImpact: "Engineered a conversion-optimized checkout flow and reduced time-to-interactive for product listings by implementing highly optimized component architecture.",
    bullets: [
      "Designed a highly scalable component architecture using React.js and modern UI/UX practices.",
      "Implemented complex state management using Redux Toolkit for Cart, Wishlist, and Auth states.",
      "Integrated secure REST APIs for real-time product data and user authentication.",
      "Optimized performance to achieve fast load times and smooth rendering of extensive product lists."
    ],
    github: "#",
    live: "https://yikshar.com/"
  },
  // {
  //   id: 2,
  //   img: "",
  //   title: "OmniDash - Business Intelligence Dashboard",
  //   shortDescription: "A complex data visualization dashboard allowing businesses to track metrics in real-time.",
  //   longDescription: "OmniDash provides real-time insights into business operations through interactive charts, data grids, and customizable widgets. The dashboard is highly performant, capable of rendering large datasets smoothly using windowing techniques and optimized React re-renders.",
  //   features: [
  //     "Interactive Data Visualization",
  //     "Real-time Data Fetching and Polling",
  //     "Customizable Dashboard Layouts",
  //     "Advanced Data Grid with Sorting and Filtering"
  //   ],
  //   technologies: ["React", "TypeScript", "Chart.js", "Vite"],
  //   businessImpact: "Empowered decision-makers with real-time analytics, improving data accessibility and operational efficiency.",
  //   bullets: [
  //     "Engineered robust data pipelines integrating complex backend APIs.",
  //     "Implemented strict TypeScript typing for rock-solid application stability.",
  //     "Optimized heavy data rendering to maintain 60fps performance."
  //   ],
  //   github: "#",
  //   live: "#"
  // },
  // {
  //   id: 3,
  //   img:"",
  //   title: "SyncFlow - Team Productivity Tool",
  //   shortDescription: "A Kanban-style task management application with drag-and-drop functionality.",
  //   longDescription: "SyncFlow is a collaborative workspace that streamlines team productivity. It features a fully interactive Kanban board, real-time status updates, and comprehensive task details. The application utilizes advanced drag-and-drop APIs and robust state management to handle complex user interactions seamlessly.",
  //   features: [
  //     "Interactive Kanban Board with Drag-and-Drop",
  //     "Real-time Collaborative Updates",
  //     "Comprehensive Task Creation and Assignment",
  //     "Activity Feeds and Notifications"
  //   ],
  //   technologies: ["React", "Context API", "CSS Variables", "HTML5 Drag and Drop"],
  //   businessImpact: "Enhanced team collaboration by providing a highly intuitive and responsive interface for task management.",
  //   bullets: [
  //     "Built a seamless drag-and-drop interface prioritizing UX and accessibility.",
  //     "Managed complex local and global states to ensure UI consistency.",
  //     "Designed a sleek, glassmorphism-inspired interface."
  //   ],
  //   github: "#",
  //   live: "#"
  // },
  // {
  //   id: 4,
  //   img:"",
  //   title: "Blueprint UI - Component Library",
  //   shortDescription: "An open-source, accessible, and highly customizable React component library.",
  //   longDescription: "Blueprint UI is a comprehensive library of reusable React components designed to accelerate development while maintaining strict accessibility standards. It includes a robust theming engine and extensive documentation, demonstrating a deep understanding of component design patterns.",
  //   features: [
  //     "Fully Accessible (WCAG compliant) Components",
  //     "Advanced CSS Variable Theming Engine",
  //     "Comprehensive Interactive Documentation",
  //     "Lightweight and Zero Dependency Core"
  //   ],
  //   technologies: ["React", "CSS Modules", "Storybook"],
  //   businessImpact: "Accelerated cross-functional team development velocity by providing a unified and tested design system.",
  //   bullets: [
  //     "Architected highly flexible components using Compound Component and Render Props patterns.",
  //     "Ensured 100% accessibility compliance with ARIA roles and keyboard navigation.",
  //     "Implemented a scalable CSS architecture to prevent style leaking."
  //   ],
  //   github: "#",
  //   live: "#"
  // }
];
