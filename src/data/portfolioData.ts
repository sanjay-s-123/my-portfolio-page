export interface SkillItem {
  name: string;
  category: 'ai' | 'realtime' | 'backend' | 'frontend' | 'embedded';
  level: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  tagline: string;
  summary: string;
  tech: string[];
  attribution: string;
  attributionUrl: string;
  image: string;
  status: 'Production' | 'Live Beta' | 'Active Engine';
  metrics: string[];
  architectureDetails: string[];
  keyChallenges: string;
}

export const PROFILE = {
  name: "Sanjay S",
  title: "Founder & Lead Systems Architect @ PRISMATIX4",
  tagline: "Engineering Intelligent Systems, Autonomous Agents, and Real-Time Architectures.",
  bio: "Founder of PRISMATIX4. Bridging machine learning, real-time protocols (WebRTC/Socket.IO), and low-level system design. Specializing in high-performance autonomous agents, distributed backends, and virtual hardware simulation.",
  philosophy: "Software should not be passive; it should be proactive, resilient, and human-centric.",
  links: {
    github: "https://github.com/sanjay-s-123",
    linkedin: "https://www.linkedin.com/in/sanjay-s-tech/",
    prismatix4: "https://prismatix4.vercel.app/",
    email: "teamprismatix4@gmail.com",
  },
  stats: [
    { label: "Production Systems", value: "4+" },
    { label: "Real-Time Latency", value: "< 45ms" },
    { label: "Active Team Engineers", value: "4 Nodes" },
    { label: "Architecture Uptime", value: "99.9%" },
  ]
};

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'ai', label: 'AI & Intelligent Systems' },
  { id: 'realtime', label: 'Real-Time & Networking' },
  { id: 'backend', label: 'Backend & Architecture' },
  { id: 'frontend', label: 'Mobile & Frontend' },
  { id: 'embedded', label: 'Embedded & Simulation' },
] as const;

export const SKILLS: SkillItem[] = [
  // AI & Intelligent Systems
  {
    name: "Autonomous Agents",
    category: "ai",
    level: "Architect",
    description: "Multi-agent orchestration, state machines, tool calling, and autonomous decision loops.",
    tags: ["LLM Agents", "Tool Calling", "Autonomy"]
  },
  {
    name: "LLM Orchestration",
    category: "ai",
    level: "Advanced",
    description: "Structured output parsing, context compression, RAG retrieval pipelines, and prompt topology.",
    tags: ["LangChain", "RAG", "Prompt Engineering"]
  },
  {
    name: "Voice Pipelines (STT/TTS)",
    category: "ai",
    level: "Advanced",
    description: "Real-time speech-to-text chunking, neural voice synthesis, and duplex conversational streaming.",
    tags: ["Whisper", "Neural TTS", "Streaming Audio"]
  },
  {
    name: "NLP & Semantic Systems",
    category: "ai",
    level: "Proficient",
    description: "Vector embeddings, intent classification, entity extraction, and conversational memory.",
    tags: ["Embeddings", "Intent Engine", "Vector DB"]
  },

  // Real-Time & Networking
  {
    name: "WebRTC Signaling & Media",
    category: "realtime",
    level: "Architect",
    description: "Encrypted peer-to-peer data channels, audio/video pipelines, STUN/TURN traversal, and SDP negotiation.",
    tags: ["WebRTC", "P2P", "MediaStream", "TURN"]
  },
  {
    name: "Socket.IO & WebSockets",
    category: "realtime",
    level: "Advanced",
    description: "Bi-directional event buses, room broadcast partitions, automatic heartbeat reconnects, and binary frames.",
    tags: ["Socket.IO", "WebSockets", "Low-Latency"]
  },
  {
    name: "VoIP & CallKit Integration",
    category: "realtime",
    level: "Advanced",
    description: "Native lockscreen telephone incoming call triggers, push-to-talk channels, and audio session management.",
    tags: ["CallKit", "VoIP Push", "Mobile Audio"]
  },

  // Backend & Architecture
  {
    name: "NestJS Microservices",
    category: "backend",
    level: "Architect",
    description: "Modular enterprise controllers, dependency injection, custom guards, interceptors, and message brokers.",
    tags: ["NestJS", "Microservices", "TypeScript"]
  },
  {
    name: "Node.js & Python Systems",
    category: "backend",
    level: "Advanced",
    description: "High-throughput asynchronous servers, background task queues, and asynchronous computational workers.",
    tags: ["Node.js", "Python", "AsyncIO", "Workers"]
  },
  {
    name: "PostgreSQL & Prisma ORM",
    category: "backend",
    level: "Advanced",
    description: "Relational modeling, ACID transactions, complex joins, migration strategies, and indexing optimization.",
    tags: ["PostgreSQL", "Prisma", "SQL Optimization"]
  },
  {
    name: "REST & API Security",
    category: "backend",
    level: "Advanced",
    description: "Stateless JWT auth, rate limiting, OpenAPI specifications, and edge API caching.",
    tags: ["REST", "Security", "OpenAPI", "CORS"]
  },

  // Mobile & Frontend
  {
    name: "Flutter & Dart",
    category: "frontend",
    level: "Advanced",
    description: "Cross-platform mobile applications, custom native platform channels, and reactive state architectures.",
    tags: ["Flutter", "Dart", "BLoC", "Mobile"]
  },
  {
    name: "React & TypeScript",
    category: "frontend",
    level: "Advanced",
    description: "High-performance reactive user interfaces, component design systems, and custom hooks.",
    tags: ["React 18", "TypeScript", "Hooks"]
  },
  {
    name: "Tailwind CSS & Design Systems",
    category: "frontend",
    level: "Expert",
    description: "Pixel-perfect glassmorphism, responsive cyber layouts, micro-animations, and CSS tokens.",
    tags: ["Tailwind", "Design Systems", "Glassmorphism"]
  },

  // Embedded & Simulation
  {
    name: "ESP32 & Embedded C/C++",
    category: "embedded",
    level: "Advanced",
    description: "Dual-core FreeRTOS firmware, Wi-Fi/BLE mesh nodes, sensor data acquisition, and hardware interrupts.",
    tags: ["ESP32", "FreeRTOS", "C/C++", "IoT"]
  },
  {
    name: "Arduino & Sensor Bus Protocols",
    category: "embedded",
    level: "Advanced",
    description: "I2C, SPI, UART serial bus telemetry, PWM motor drivers, and low-power circuit design.",
    tags: ["Arduino", "I2C/SPI", "Sensors", "Hardware"]
  },
  {
    name: "WebAssembly Simulation",
    category: "embedded",
    level: "Architect",
    description: "In-browser emulation of microcontroller instruction cycles, virtual logic gates, and oscilloscope telemetry.",
    tags: ["WebAssembly", "WASM", "Virtual Lab"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "sara",
    title: "SARA — Autonomous Voice AI & Life OS",
    role: "Founder & Lead Architect",
    tagline: "Proactive lockscreen voice agent & cross-platform Life OS.",
    summary: "Transcends passive notifications by initiating native telephone calls over the lockscreen at target times, holding real-time interactive two-way voice check-ins and unifying finances, habits, and career tracking into a queryable Life OS.",
    tech: ["Autonomous AI", "LLM", "Real-Time Audio", "CallKit/VoIP", "Cross-Platform", "NestJS"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./sara_thumbnail.png",
    status: "Live Beta",
    metrics: ["< 320ms Voice Turnaround", "Native CallKit Lockscreen Rings", "End-to-End Encrypted Data"],
    architectureDetails: [
      "Engineered an autonomous proactive trigger loop that triggers native telephone lockscreen calls via Apple CallKit and Android ConnectionService.",
      "Built a bi-directional audio pipeline streaming audio chunks to a low-latency Whisper STT engine and synthesizing responses via an ultra-responsive neural TTS pipeline.",
      "Integrated a localized memory engine that tracks habitual goals, daily schedules, and financial records into a persistent context vector store.",
      "Architected backend microservices on NestJS with stateful WebSocket sessions for instantaneous context retrieval."
    ],
    keyChallenges: "Solving the lockscreen waking limitation on mobile OS without user intervention while maintaining minimal battery drain and guaranteeing voice stream synchronization."
  },
  {
    id: "snap",
    title: "SNAP — Personal Care Network",
    role: "Full-Stack Mobile Developer & Media Pipeline Architect",
    tagline: "Real-time care coordination, one-touch SOS, and P2P WebRTC consultations.",
    summary: "Cross-platform assistive ecosystem featuring dual-role caregiver/receiver dashboards, instantaneous WebSocket push notifications, scheduled medication adherence tracking, and low-latency encrypted peer-to-peer WebRTC video calling with English/Tamil localization.",
    tech: ["Flutter", "Dart", "NestJS", "WebRTC", "Socket.IO", "PostgreSQL", "Prisma"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./snap_thumbnail.jpg",
    status: "Production",
    metrics: ["Sub-50ms SOS Broadcast", "Direct Encrypted P2P Media", "English + Tamil Native Localization"],
    architectureDetails: [
      "Designed and deployed the end-to-end WebRTC media signaling server on NestJS with STUN/TURN fallback relays for carrier-grade video consultations.",
      "Constructed a dual-dashboard Flutter client with high-contrast accessibility modes, one-touch emergency dispatch, and real-time vital telemetry.",
      "Implemented a resilient WebSocket push messaging engine dispatching critical medication alerts and geofencing triggers to family caregivers.",
      "Created localized language bundles with dynamic runtime switching between English and Tamil for senior-friendly ergonomics."
    ],
    keyChallenges: "Achieving peer-to-peer connectivity across strict symmetric NATs and mobile carrier firewalls during urgent one-touch medical SOS scenarios."
  },
  {
    id: "physense",
    title: "PhySense — Virtual Hardware Simulation Platform",
    role: "Founder & Simulation Engine Developer",
    tagline: "Experience hardware before you touch it.",
    summary: "Browser-based virtual electronics laboratory allowing students to test microcontrollers (ESP32/Arduino), connect virtual sensors, and debug embedded logic before committing to physical circuits.",
    tech: ["ESP32", "Arduino", "WebAssembly", "IoT", "Circuit Emulation"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./physense_thumbnail.jpg",
    status: "Active Engine",
    metrics: ["Cycle-Accurate MCU Emulation", "Interactive Digital Oscilloscope", "Zero Hardware Cost Virtual Lab"],
    architectureDetails: [
      "Compiled core AVR and Xtensa microcontroller instruction interpreters into high-performance WebAssembly modules running directly in client browser threads.",
      "Engineered an interactive circuit graph solver capable of computing nodal voltages, digital logic levels, and sensor bus transactions (I2C/SPI) at 60 FPS.",
      "Integrated a virtual 2-channel oscilloscope and logic analyzer measuring microsecond digital pulse widths and PWM duty cycles.",
      "Enabled instantaneous C/C++ code compilation and flashing directly to virtual chips with interactive step-by-step breakpoints."
    ],
    keyChallenges: "Simulating asynchronous hardware interrupts and real-time clock cycles inside a single-threaded browser JavaScript sandbox without dropping frame rates."
  },
  {
    id: "studentspace",
    title: "Student Space — Academic & Life Productivity Platform",
    role: "Founder & Full-Stack Developer",
    tagline: "One unified platform for every dimension of student life.",
    summary: "Centralized hub managing academic schedules, assignment milestones, and productivity metrics to reduce cognitive fragmentation.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./student_space_thumbnail.png",
    status: "Production",
    metrics: ["Unified Academic Milestone Radar", "Relational Timetable Normalization", "Fast Edge Cached Deliveries"],
    architectureDetails: [
      "Engineered a unified student dashboard reducing context switching across lectures, exams, project sprints, and personal milestones.",
      "Designed a normalized PostgreSQL schema with Prisma ORM supporting recurring course schedules, grading weights, and dynamic progress scoring.",
      "Implemented an interactive GPA forecasting engine simulating performance scenarios based on pending assignments.",
      "Built resilient offline-first caching strategies allowing students to view schedules during intermittent campus Wi-Fi outages."
    ],
    keyChallenges: "Designing an ultra-clean visual hierarchy that synthesizes dense academic deadlines into an intuitive glanceable interface."
  }
];

export const PRISMATIX4_INFO = {
  name: "PRISMATIX4",
  role: "Founder & Lead Systems Architect",
  statement: "PRISMATIX4 is the collaborative technology collective founded by Sanjay S, uniting four specialized engineers across Systems, Backend, Frontend, and Machine Learning to build production-grade, human-centric software.",
  pillars: [
    { title: "Systems & Architecture", lead: "Sanjay S", desc: "Autonomous pipelines, real-time protocols, and foundational engineering." },
    { title: "Distributed Backend", lead: "Backend Core", desc: "High-concurrency microservices, data consistency, and cloud infrastructure." },
    { title: "Mobile & Interfaces", lead: "Frontend Core", desc: "Fluid cross-platform experiences, design systems, and responsive ergonomics." },
    { title: "Machine Intelligence", lead: "AI Core", desc: "Applied neural networks, voice interfaces, and predictive agentic workflows." }
  ],
  hubUrl: "https://prismatix4.vercel.app/"
};
