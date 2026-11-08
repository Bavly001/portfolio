import { Profile, Experience, Project, SkillCategory, Education, Certification } from '../types/portfolio'

export const profileData: Profile = {
  name: "Bavly Ashraf",
  title: "Software Engineer",
  tagline: "Designing and shipping high-performance, responsive web applications with React, TypeScript & Next.js.",
  bio: "Product-minded Software Engineer with 3+ years of professional experience designing and shipping high-performance, responsive web applications using React, TypeScript, and Next.js. Proven track record of developing scalable, reusable component architectures, integrating frontend clients with backend microservices and REST APIs, and implementing robust state management (Redux Toolkit) and API security. Dedicated to clean code, smooth, responsive UI performance across desktop, tablet, and mobile, and cross-functional team delivery.",
  location: "Cairo, Egypt",
  email: "a_bavly@yahoo.com",
  phone: "+20 127 193 1937",
  linkedin: "https://www.linkedin.com/in/bavlyashraf/",
  github: "https://github.com/Bavly001",
  availability: "Available for Engineering Roles in Cairo, Egypt & Remote",
  stats: [
    {
      label: "Experience",
      value: "3+ Years",
      subtext: "Production Web & Mobile"
    },
    {
      label: "UI Performance",
      value: "Sub-Second",
      subtext: "Fast load & fluid interactions"
    },
    {
      label: "Academic Record",
      value: "3.75 GPA",
      subtext: "Computer Science with Honors"
    },
    {
      label: "Core Stack",
      value: "React & TS",
      subtext: "Next.js, Redux, Tailwind & APIs"
    }
  ]
}

export const experiencesData: Experience[] = [
  {
    id: "dexi",
    role: "Frontend Web Developer",
    company: "Dexi",
    companyTagline: "Smart Dental Assistant & Practice Automation",
    period: "Jul 2024 – Present",
    location: "Cairo, Egypt (Remote)",
    workType: "Part-Time (Current since Jun 2025; Full-Time previously)",
    highlights: [
      {
        title: "Automated Clinical Workflows",
        description: "Architected and delivered core dental workflow automation features using modular React components and custom hooks—including intelligent task allocation and doctor-staff scheduling—eliminating manual paper logs and cutting administrative overhead."
      },
      {
        title: "Real-Time Stock & Inventory Management",
        description: "Built an end-to-end medical supply tracking interface featuring live stock counts, FEFO batch monitoring, and automated low-stock alerts, preventing procedure delays across clinic operations."
      },
      {
        title: "State, Security & Error Handling",
        description: "Centralized client-side state with Redux Toolkit and implemented frontend token/session management (JWT, RBAC), client-side schema validation (React Hook Form/Zod), and React Error Boundaries, eliminating re-renders and preventing data loss."
      }
    ],
    skills: ["React.js", "TypeScript", "Redux Toolkit", "React Hook Form", "Zod", "REST APIs", "Tailwind CSS", "JWT / RBAC"]
  },
  {
    id: "preezy",
    role: "Frontend & React Native Developer",
    company: "PREEZY (GamerG)",
    companyTagline: "High-Traffic Esports Platform & Live Gaming Ecosystem",
    period: "Jun 2025 – Jul 2026",
    location: "Amman, Jordan (Remote)",
    workType: "Remote",
    highlights: [
      {
        title: "High-Traffic Web Applications",
        description: "Engineered responsive web applications with Next.js and TypeScript, building reusable, maintainable UI components for tournament brackets and live analytics, delivering sub-second load times across desktop, tablet, and mobile."
      },
      {
        title: "Cross-Platform & Design Systems",
        description: "Spearheaded the frontend expansion into React Native (iOS & Android), establishing shared design systems and state patterns that unified user experience across web and mobile ecosystems."
      },
      {
        title: "Microservices & Real-Time APIs",
        description: "Integrated frontend clients with backend microservices via REST APIs and WebSockets, utilizing client-side caching, request interceptors, and secure token handling for smooth real-time interaction during live events."
      }
    ],
    skills: ["Next.js", "TypeScript", "React Native", "WebSockets", "REST APIs", "Design Systems", "State Management", "Tailwind CSS"]
  },
  {
    id: "exabyte",
    role: "Frontend Web Developer",
    company: "Exabyte LLC",
    companyTagline: "Enterprise Software & Cloud Engineering Solutions",
    period: "Mar 2024 – Jul 2024",
    location: "Cairo, Egypt (On-site)",
    workType: "On-site",
    highlights: [
      {
        title: "Health Insurance Dashboards",
        description: "Developed operational React/TypeScript web portals for health insurance providers, building complex data forms with client-side validation and robust error handling for claims processing and policyholder management."
      },
      {
        title: "E-Commerce & Sales Analytics",
        description: "Built responsive e-commerce storefronts and interactive sales monitoring dashboards with modular React components, giving merchant management real-time visibility into order lifecycles and revenue trends."
      },
      {
        title: "Agile & Cross-Functional Collaboration",
        description: "Partnered closely with UX/UI designers, backend architects, QA, and DevOps teams within an Agile Scrum workflow; containerized frontend environments using Docker, followed clean Git branching standards, and assisted with CI/CD deployment checks."
      }
    ],
    skills: ["React.js", "TypeScript", "Docker", "Tailwind CSS", "Material-UI", "REST APIs", "Agile / Scrum"]
  }
]

export const projectsData: Project[] = [
  {
    id: "kitcheniano-dashboard",
    title: "Kitcheniano — Multi-Tenant Kitchen Operations Dashboard",
    tagline: "Enterprise multi-tenant kitchen management & real-time inventory platform built with Next.js 14, NestJS 10, and TiDB Cloud MySQL.",
    category: "Full-Stack Platform",
    badgeText: "Microservice Ecosystem • Next.js 14 & NestJS",
    featured: true,
    description: "Architected an enterprise multi-tenant restaurant operations platform featuring strict tenant data isolation, FEFO automated stock deduction, real-time SSE kitchen order dispatching, and Backblaze B2 S3 storage. Part of a distributed microservices ecosystem synchronized with the customer storefront.",
    longDescription: "Kitcheniano Dashboard is the mission-critical kitchen operations core of a distributed restaurant microservices ecosystem. Decoupled from public customer storefronts, it empowers kitchen managers and administrative staff to monitor real-time incoming orders, track ingredient inventory via First-Expired, First-Out (FEFO) heuristics, reconcile multi-tenant financial ledgers, and manage menu items with cloud image storage. Backed by NestJS 10, TypeORM, and TiDB Cloud Serverless MySQL with strict organizationId relational partitioning.",
    features: [
      "Microservices Architecture: Decoupled operations hub synchronized with the customer storefront via SSE bridges and a shared TiDB Cloud MySQL database",
      "Strict Multi-Tenant Isolation: Complete relational data partitioning via indexed organizationId foreign keys and NestJS TenantGuard middleware",
      "Real-Time Kitchen Dispatch: Server-Sent Events (SSE) push live order updates, kitchen status changes, and audio alert chimes to kitchen displays",
      "FEFO Stock Intelligence: Non-negative automated batch inventory deduction prioritizing earliest expiring ingredients with low-stock warnings",
      "Order Lifecycle & Financials: Full pipeline management (Received, In Kitchen, Ready, Out for Delivery, Completed) with discounts and P&L ledgers",
      "Cloud Object Storage: Backblaze B2 S3 integration via AWS SDK v3 with pre-signed upload URLs and multi-region image delivery",
      "Production Containerization: Multi-stage Dockerized deployment with NestJS hosted on Render and Next.js 14 Standalone hosted on Vercel"
    ],
    technologies: ["Next.js 14", "TypeScript", "NestJS 10", "MySQL (TiDB Cloud)", "TypeORM", "Tailwind CSS", "TanStack Query", "Zustand", "SSE", "Backblaze B2 S3", "Docker"],
    metrics: "Production Deployed • Vercel + Render + TiDB Cloud",
    liveUrl: "https://kitcheniano-dashboard-fe.vercel.app/",
    pipelineTitle: "Kitchen Operations Microservice Pipeline",
    pipelineSubtitle: "Dashboard to Shared Cloud Data Layer",
    architectureFlow: [
      { step: "01", title: "Next.js 14 App", desc: "Zustand auth, TanStack Query cache, SSE live listeners & Tailwind UI" },
      { step: "02", title: "NestJS Core API", desc: "JWT & TenantGuard validation, TypeORM modules & event emitters" },
      { step: "03", title: "FEFO Inventory", desc: "Automated batch deductions, low-stock threshold triggers & audit logs" },
      { step: "04", title: "Shared TiDB Cloud", desc: "Multi-tenant MySQL partitioned database with TLS 1.2 connection pools" },
    ]
  },
  {
    id: "kitcheniano-client",
    title: "Kitcheniano — Customer Storefront & Live Order Tracker",
    tagline: "High-performance customer-facing food ordering web application with live SSE order tracking, Express microservice, and instant checkout.",
    category: "Full-Stack Platform",
    badgeText: "Microservice Ecosystem • Next.js 14 & Express",
    featured: true,
    description: "Built a responsive customer ordering experience with real-time SSE order tracking, dynamic cart & checkout, customer authentication, and seamless microservice synchronization with the Kitcheniano Operations Dashboard.",
    longDescription: "Kitcheniano Customer Storefront serves as the consumer-facing gateway of the Kitcheniano microservices ecosystem. It operates independently as a decoupled Next.js 14 frontend and Express 4 microservice, enabling customers to browse live restaurant menus, customize dishes, place delivery or pickup orders, and watch live order status transitions in real time via Server-Sent Events. Seamlessly synchronized with the Kitcheniano Operations Dashboard via shared TiDB Cloud MySQL and backend notification bridges.",
    features: [
      "Decoupled Microservice Design: Lightweight Express REST microservice bridging customer orders directly into kitchen operations",
      "Live Order Progress Tracking: Real-time visual timeline updated instantly via Server-Sent Events (SSE) and polling fallback",
      "Dynamic Cart & Instant Checkout: Responsive cart drawer, address validation, phone formatting, and flexible order notes",
      "Customer Identity & Order History: Secure JWT authentication with bcrypt password hashing and past order lookup",
      "Cross-Service Image Optimization: Dynamic remote image resolution from Backblaze B2 S3 and Render CDN",
      "Optimistic UI & State Resilience: Persistent cart and auth state with responsive mobile-first culinary design system",
      "Production Deployed: Zero-latency edge deployment on Vercel with Express backend hosted on Render"
    ],
    technologies: ["Next.js 14", "TypeScript", "Express.js", "Node.js", "MySQL (TiDB Cloud)", "Tailwind CSS", "Zustand", "SSE", "JWT / bcrypt", "Vercel"],
    metrics: "Production Deployed • Vercel + Render + Open Source",
    githubUrl: "https://github.com/Bavly001/kitcheniano-client-FE",
    githubBackendUrl: "https://github.com/Bavly001/kitcheniano-client-BE",
    liveUrl: "https://kitcheniano-client-fe.vercel.app/",
    pipelineTitle: "Storefront to Kitchen Microservice Flow",
    pipelineSubtitle: "Customer Order to Kitchen Prep",
    architectureFlow: [
      { step: "01", title: "Customer Storefront", desc: "Next.js 14 responsive menu, interactive cart drawer & guest/user checkout" },
      { step: "02", title: "Express Service", desc: "Lightweight API validating orders, hashing auth credentials & managing sessions" },
      { step: "03", title: "Shared Data Layer", desc: "Synchronized orders, clients, and menu records on TiDB Cloud MySQL" },
      { step: "04", title: "Live SSE Dispatch", desc: "Real-time kitchen broadcast notifying kitchen staff and customer tracker" },
    ]
  },
  {
    id: "doit-todolist",
    title: "Doit — Full-Stack Productivity & Task Platform",
    tagline: "Modern production-grade task management system with React 18, Express 4 REST API, and TiDB Cloud Serverless MySQL.",
    category: "Full-Stack Platform",
    badgeText: "Full-Stack Web App • React 18 & Node.js",
    featured: true,
    description: "Architected and delivered an end-to-end productivity web platform featuring decoupled SPA architecture, JWT authentication with bcrypt hashing, multi-tenant relational persistence, and TiDB Cloud Serverless integration.",
    longDescription: "Doit is an enterprise-grade full-stack task and project management suite engineered for real-world productivity. The frontend leverages React 18, TypeScript, Tailwind CSS, Redux Toolkit, and TanStack Query for optimistic updates and zero-latency caching. The backend is powered by a high-throughput Express 4 REST API connected to TiDB Cloud Serverless MySQL via SSL/TLS 1.2 connection pools, complete with auto-reconnecting resilience and comprehensive Docker containerization.",
    features: [
      "Decoupled Full-Stack Architecture: React 18 SPA communicating with modular Express REST API",
      "Robust Cloud Database: MySQL 8 protocol on TiDB Cloud Serverless with TLS transport encryption & connection pooling",
      "Enterprise Authentication: Secure JWT bearer tokens (HS256) with bcrypt password hashing (10 rounds) & route guards",
      "Advanced State Management: Redux Toolkit for auth and theme persistence alongside TanStack Query for cache invalidation",
      "Smart Task Views & Scheduling: Today, Upcoming, Inbox, and custom Project categorization with real-time counters",
      "Dynamic Personalization: Full Light/Dark mode and 8 customizable accent color palettes persisted across sessions",
      "Production Containerization: Multi-stage Docker & docker-compose orchestration for reproducible local and cloud builds"
    ],
    technologies: ["React 18", "TypeScript", "Express.js", "Node.js", "MySQL (TiDB Cloud)", "Redux Toolkit", "TanStack Query", "Docker", "Tailwind CSS", "JWT / bcrypt"],
    metrics: "Production Deployed • Cloudflare Workers + Render + TiDB Cloud",
    githubUrl: "https://github.com/Bavly001/todo-list-app",
    githubBackendUrl: "https://github.com/Bavly001/todo-list-app-BE",
    liveUrl: "https://todo-list-app.bavly200138.workers.dev/",
    pipelineTitle: "Full-Stack Architecture Flow",
    pipelineSubtitle: "Client to Cloud Database",
    architectureFlow: [
      { step: "01", title: "React 18 SPA", desc: "Type-safe UI with Redux Toolkit, TanStack Query & Tailwind" },
      { step: "02", title: "Express REST API", desc: "Modular route handlers, CORS, JSON parsing & error boundaries" },
      { step: "03", title: "JWT & Security", desc: "HMAC SHA-256 tokens, bcrypt password hashing & protected routes" },
      { step: "04", title: "TiDB Cloud MySQL", desc: "Serverless relational DB with TLS 1.2 connection pooling" },
    ]
  },
  {
    id: "facetcher",
    title: "Facetcher — AI Sketch-to-Realism Web Platform",
    tagline: "Graduation Project: AI deep-learning engine rendering hand-drawn sketches into photorealistic faces.",
    category: "AI Platform",
    badgeText: "Graduation Project • AI Deep Learning",
    featured: true,
    description: "Served as Frontend Lead architecting an interactive sketch canvas, instant rendering engine, and RESTful API communication with machine learning inference backends.",
    longDescription: "Facetcher enables users to draw human facial features interactively on a responsive HTML5/React canvas and synthesizes high-fidelity photographic portraits in real time using deep neural networks. Built modular state synchronization and optimized image transfer pipelines.",
    features: [
      "Interactive multi-layer sketch canvas with brush smoothing and stroke history",
      "Real-time REST communication with PyTorch deep-learning inference API",
      "Instant dual-panel preview comparing vector line sketches with photorealistic outputs",
      "High-resolution export and parameter controls for facial feature adjustments"
    ],
    technologies: ["React.js", "TypeScript", "Canvas API", "RESTful APIs", "State Management", "Tailwind CSS"],
    metrics: "Graduated with Honors (3.75 GPA) • Led Frontend Architecture",
    githubUrl: "https://github.com/Bavly001",
    pipelineTitle: "Reconstruction Neural Flow",
    pipelineSubtitle: "End-to-End Pipeline",
    architectureFlow: [
      { step: "01", title: "Input Sketch", desc: "Hand-drawn / digital strokes on HTML5 canvas" },
      { step: "02", title: "Generator GAN", desc: "Deep feature synthesis & latent encoding" },
      { step: "03", title: "Discriminator", desc: "Photorealistic adversarial loss feedback" },
      { step: "04", title: "Real Portrait", desc: "High-res realistic render with feature controls" },
    ]
  },
  {
    id: "dexi-suite",
    title: "Dexi Dental Assistant & Inventory Suite",
    tagline: "Intelligent clinical workflow automation and medical stock management system.",
    category: "Healthtech & Clinic",
    featured: true,
    description: "Architected core dental workflow automation, doctor-staff scheduling, and an end-to-end FEFO batch stock monitoring interface preventing procedural delays.",
    longDescription: "A comprehensive SaaS platform built for dental clinics to manage appointments, staff rotations, and high-value dental consumables. Features automated alert thresholds, FEFO (First-Expired, First-Out) tracking, and role-based access control.",
    features: [
      "Automated task allocation and doctor-staff calendar scheduling",
      "FEFO batch stock monitoring with automatic low-supply warnings",
      "Centralized Redux Toolkit state with memoized re-render optimization",
      "Full token/session management with JWT, RBAC, and Zod schema validation"
    ],
    technologies: ["React.js", "TypeScript", "Redux Toolkit", "React Hook Form", "Zod", "REST APIs", "Tailwind CSS"],
    metrics: "Reduced administrative overhead & eliminated manual stock logs",
    githubUrl: "https://github.com/Bavly001"
  },
  {
    id: "preezy-tournament",
    title: "PREEZY Esports & Tournament Live Hub",
    tagline: "High-traffic live esports tournament brackets, analytics, and cross-platform companion.",
    category: "Gaming & Esports",
    featured: true,
    description: "Engineered responsive Next.js web applications and spearheaded React Native mobile extensions with WebSocket live updates and sub-second load times.",
    longDescription: "Live gaming ecosystem serving thousands of concurrent competitive gamers. Features real-time interactive match brackets, live score streaming via WebSockets, and unified design token integration across web and mobile platforms.",
    features: [
      "Dynamic interactive tournament bracket engine with live match status",
      "Real-time WebSocket event listeners with zero-lag live score transitions",
      "Unified design system and shared component tokens across React and React Native",
      "Intelligent client-side caching and API request interceptors"
    ],
    technologies: ["Next.js", "TypeScript", "React Native", "WebSockets", "REST APIs", "Tailwind CSS"],
    metrics: "Sub-second load times & zero-lag responsiveness during live events",
    githubUrl: "https://github.com/Bavly001"
  },
  {
    id: "insurance-portal",
    title: "Health Insurance Claims & Policy Portal",
    tagline: "Operational web portal for health insurance claims processing and policyholder management.",
    category: "Enterprise Portal",
    featured: false,
    description: "Developed operational React/TypeScript enterprise web portals with complex multi-step forms, real-time client validation, and strict data security.",
    longDescription: "Built for healthcare insurers to streamline claim submissions, adjudications, and policyholder account verifications. Implemented resilient error boundaries and responsive data tables.",
    features: [
      "Multi-step claims submission wizard with conditional validation rules",
      "Comprehensive policyholder record management and document upload",
      "Containerized with Docker for seamless CI/CD staging deployments",
      "High-density data tables with sorting, filtering, and pagination"
    ],
    technologies: ["React.js", "TypeScript", "Material-UI", "REST APIs", "Docker", "Tailwind CSS"],
    metrics: "Accelerated claim intake & streamlined underwriter workflows",
    githubUrl: "https://github.com/Bavly001"
  },
  {
    id: "merchant-analytics",
    title: "E-Commerce & Merchant Sales Dashboard",
    tagline: "Interactive sales analytics and order lifecycle monitoring platform for retail merchants.",
    category: "Fintech & E-Commerce",
    featured: false,
    description: "Built responsive e-commerce storefronts and interactive analytics dashboards giving merchant executives real-time visibility into order lifecycles and revenue trends.",
    longDescription: "Real-time analytics portal offering comprehensive data visualizations for sales trends, customer retention, inventory velocity, and order completion metrics across multiple retail channels.",
    features: [
      "Dynamic KPI metrics summary with live sales and revenue tracking",
      "Order lifecycle timeline from payment authorization to fulfillment",
      "Clean modular component architecture with reusable widget library",
      "Fully responsive layout optimized for desktop and mobile management"
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Agile / Scrum"],
    metrics: "Live visibility into order lifecycles and revenue trends",
    githubUrl: "https://github.com/Bavly001"
  }
]

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Architecture",
    description: "Building scalable, high-performance web applications with smooth, responsive UI.",
    skills: [
      "React.js",
      "TypeScript",
      "Next.js",
      "React Native",
      "JavaScript (ES6+)",
      "React Hooks",
      "Component Architecture",
      "Lifecycle Management"
    ]
  },
  {
    id: "state-security",
    title: "State & Validation",
    description: "Centralized predictability, schema enforcement, and zero-data-loss integrity.",
    skills: [
      "Redux Toolkit",
      "Context API",
      "React Hook Form",
      "Zod Validation",
      "Error Boundaries",
      "Client Caching",
      "State Normalization"
    ]
  },
  {
    id: "api-backend",
    title: "APIs, Security & Backend",
    description: "Seamless integration with microservices, secure authentication, and data layers.",
    skills: [
      "RESTful APIs",
      "Microservices",
      "JWT & Session Auth",
      "OAuth2 & RBAC",
      "WebSockets",
      "Node.js",
      "SQL (PostgreSQL / MySQL)",
      "API Security"
    ]
  },
  {
    id: "ui-devops",
    title: "UI, Tools & DevOps",
    description: "Modern design systems, automated containerization, and agile workflows.",
    skills: [
      "Tailwind CSS",
      "Framer Motion",
      "Material-UI",
      "Responsive Design",
      "Docker",
      "Git & GitHub",
      "Vite & Webpack",
      "Agile / Scrum / Jira"
    ]
  }
]

export const educationData: Education = {
  degree: "Bachelor of Computer Science",
  institution: "Future Academy",
  period: "Graduated 2023",
  gpa: "3.75 / 4.0",
  honors: "Excellent with Honors",
  graduationProject: {
    name: "Facetcher",
    role: "Frontend Lead",
    description: "AI deep-learning web platform translating hand-drawn facial sketches into photorealistic human faces. Architected the interactive sketch canvas, instant rendering engine, and RESTful API communication.",
    technologies: ["React.js", "TypeScript", "Canvas API", "REST APIs", "Tailwind CSS"]
  }
}

export const certificationsData: Certification[] = [
  {
    title: "React - The Complete Guide (incl. React Router & Redux)",
    issuer: "Udemy",
    date: "Dec 2023",
    url: "https://www.udemy.com/certificate/UC-d3057c6e-85dd-4f2a-a896-b48b530ed36e/"
  }
]
