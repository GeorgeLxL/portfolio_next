export const resume = {
  name: "Sato Takeru",
  title: "Principal Technical Support Engineer & Full-Stack Architect",
  location: "Yokohama, Kanagawa, Japan",
  phone: "+81 075-771-5893",
  email: "crownelf4@gmail.com",
  linkedin: "https://linkedin.com/in/sato-takeru-2966b5a3",
  github: "https://github.com/GeorgeLxL",
  summary:
    "Principal Technical Support Engineer and full-stack architect with 16+ years of progressive experience designing, scaling, and supporting production systems across cloud platforms, distributed services, and AI/LLM infrastructure. Currently at Salesforce; previously delivered mission-critical outcomes for enterprise AWS customers and shipped production platforms at Rakuten.",
  highlights: [
    "Engineered a HIPAA-compliant telehealth platform serving 5,000+ concurrent users.",
    "Delivered a RAG-based enterprise search system that accelerated retrieval accuracy by 70%.",
    "Established an event-driven AI agent that accomplished an 80% reduction in manual workflow execution.",
  ],
  languages: [
    { name: "Japanese", level: "Fluent" },
    { name: "English", level: "Advanced" },
    { name: "Chinese", level: "Intermediate" },
  ],
  education: [
    {
      degree: "Bachelor's Degree",
      institution: "Chuo University — Tokyo, Japan",
      period: "Apr 2006 – Mar 2010",
      description: "GPA: 3.84 / 4.0",
    },
  ],
};

export const experiences = [
  {
    title: "Principal Technical Support Engineer",
    company: "Salesforce — Japan",
    period: "May 2026 – Present",
    description:
      "Lead resolution of high-priority enterprise customer escalations across the Salesforce platform.",
    achievements: [
      "Diagnose complex issues spanning Apex, Lightning, integrations, and APIs.",
      "Partner with engineering and product teams to drive root-cause analysis and durable fixes for systemic platform issues.",
      "Mentor a team of support engineers on troubleshooting methodology, distributed-systems concepts, and customer communication.",
      "Accelerated ramp time for new hires by approximately 40%.",
    ],
  },
  {
    title: "Cloud Support Engineer",
    company: "Amazon Web Services (AWS)",
    period: "Jun 2022 – Apr 2026",
    description:
      "Supported enterprise customers across AWS services, resolving complex production issues spanning compute, networking, storage, and security.",
    achievements: [
      "Telehealth Platform: Engineered and scaled a HIPAA-compliant production telehealth platform (React 18 + TypeScript + Zustand, Python Flask + FastAPI, PostgreSQL) supporting 5,000+ concurrent patient–doctor interactions.",
      "Resolved a critical doctor-search performance bottleneck (p95 latency 4,000 ms → 85 ms) using materialized views and Elasticsearch indexing.",
      "RAG Enterprise Search: accelerated retrieval accuracy by 70% with vector embeddings, multi-strategy retrieval, and re-ranking.",
      "Event-Driven AI Agent: 80% reduction in manual task execution (Node.js, Apache Kafka, Redis, OpenAI, Cassandra).",
    ],
  },
  {
    title: "Application Engineer",
    company: "Rakuten — Rakuten Crimson House",
    period: "Jun 2018 – May 2022",
    description:
      "Designed and developed backend services and APIs using Python (Django, FastAPI), Java (Spring Boot), and Ruby on Rails.",
    achievements: [
      "Membership SaaS Platform: launched with 500+ users onboarded in 48 hours and zero production incidents.",
      "High-Traffic Client Portal: SSR cut FCP by 1.4s; consolidated 12 endpoints, dropping avg response 800ms → 200ms.",
      "Mentored three junior engineers; all shipped production code within their first four weeks.",
      "Reduced MTTR for critical incidents from 3 hours to 45 minutes via structured logging.",
    ],
  },
  {
    title: "Software Developer",
    company: "Freelancing",
    period: "Apr 2015 – May 2018",
    description:
      "Delivered end-to-end web applications for clients across Japan and APAC using PHP, Ruby on Rails, Node.js, Python, and AngularJS.",
    achievements: [
      "Engineered order-management and customer-support tooling processing 3,000–5,000 daily orders during peak periods.",
      "Reduced duplicate-order processing issues by adding server-side validation and request deduplication.",
      "Accelerated slow reporting queries from 2–3s to sub-second by adding indexes and restructuring joins.",
    ],
  },
  {
    title: "Account Manager",
    company: "Advantech — Taiwan",
    period: "Mar 2014 – Apr 2015",
    description:
      "Managed B2B accounts across the industrial IoT and embedded-computing sector in the Taiwan market.",
    achievements: [
      "Partnered with engineering and pre-sales teams to deliver tailored solutions to OEM and system-integrator customers.",
    ],
  },
  {
    title: "General Employee",
    company: "Nissan Motor Corporation",
    period: "Nov 2012 – Feb 2014",
    description:
      "Coordinated cross-functional operations across Nissan's manufacturing and corporate divisions.",
    achievements: [
      "Established business-process and stakeholder-management foundations that informed later technical and customer-facing roles.",
    ],
  },
  {
    title: "Inside Sales Representative",
    company: "Dell",
    period: "Jan 2010 – Oct 2012",
    description:
      "Drove B2B technology sales across hardware and enterprise services, consistently meeting quota.",
    achievements: [
      "Cultivated deep expertise in enterprise IT buying cycles — a foundation that complements current technical advisory work.",
    ],
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "Java", level: 90 },
      { name: "Go", level: 85 },
      { name: "C# / .NET", level: 85 },
    ],
  },
  {
    title: "AI / ML & LLMs",
    skills: [
      { name: "OpenAI APIs", level: 95 },
      { name: "LangChain", level: 95 },
      { name: "RAG Pipelines", level: 90 },
      { name: "Vector DBs (Pinecone/FAISS)", level: 90 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue / Angular", level: 80 },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Node.js / Express", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "Django / DRF", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: ".NET Core", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 95 },
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "GCP", level: 85 },
      { name: "Azure", level: 80 },
    ],
  },
  {
    title: "Databases & Messaging",
    skills: [
      { name: "PostgreSQL", level: 95 },
      { name: "Redis", level: 90 },
      { name: "Elasticsearch", level: 90 },
      { name: "Apache Kafka", level: 90 },
      { name: "MongoDB", level: 85 },
    ],
  },
];

export const additionalSkills = [
  "Microservices", "Event-Driven Architecture", "Clean Architecture", "CQRS", "Domain-Driven Design",
  "REST API Design", "Terraform", "Jenkins", "GitHub Actions", "Nginx", "Socket.IO",
  "Stripe", "HIPAA Compliance", "TDD", "PgBouncer", "Cassandra", "MediatR",
];

export const projects = [
  {
    title: "HIPAA-Compliant Telehealth Platform",
    description:
      "Production telehealth platform supporting 5,000+ concurrent patient–doctor interactions. React 18 + TypeScript + Zustand frontend; Python Flask + FastAPI async services; PostgreSQL. Migrated from EC2 to Docker + EKS; reduced doctor-search p95 latency 4,000ms → 85ms.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "EKS", "Elasticsearch"],
    link: "#",
  },
  {
    title: "RAG-Based Enterprise Search",
    description:
      "RAG-based enterprise search over internal documents. Accelerated retrieval accuracy by 70% via vector embeddings, multi-strategy retrieval (semantic, hybrid, multi-query, decomposed) and re-ranking. LangChain tools query live domain entities mid-response, streamed via Socket.IO.",
    tech: ["React", "Express", "OpenAI", "LangChain", "Docker", "Terraform"],
    link: "#",
  },
  {
    title: "Event-Driven AI Agent System",
    description:
      "Real-time event-driven AI agent system for business workflow automation. 80% reduction in manual task execution. Pipeline split into valid/invalid event topics with independent stream processors; Redis sub-ms enrichment; edge schema validation.",
    tech: ["Node.js", "Kafka", "Redis", "OpenAI", "Cassandra"],
    link: "#",
  },
  {
    title: "Multi-Tenant ERP with AI Forecasting",
    description:
      "Multi-tenant ERP platform with ML-driven forecasting and analytics. Improved decision accuracy by 40%. Clean Architecture (Domain/Application/Infrastructure/Presentation), CQRS with MediatR, FluentValidation, AutoMapper.",
    tech: [".NET Core", "Vue", "AWS", "Kubernetes"],
    link: "#",
  },
  {
    title: "Membership SaaS Platform",
    description:
      "Membership SaaS (React SPA + Django REST Framework + PostgreSQL) on AWS. Stripe subscription system with idempotent webhook processing; 500+ users onboarded in 48 hours and zero production incidents.",
    tech: ["React", "Django", "PostgreSQL", "Stripe", "AWS"],
    link: "#",
  },
  {
    title: "High-Traffic Client Portal",
    description:
      "Rebuilt the client portal with SSR React, cutting FCP by 1.4s and generating 300+ additional organic visits/month. Consolidated 12 legacy endpoints into one Express.js layer (800ms → 200ms avg response).",
    tech: ["React", "Express", "SSR", "Node.js"],
    link: "#",
  },
];
