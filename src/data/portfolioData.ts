export type Locale = 'en' | 'ar';

export type ProjectCategoryId =
  | 'all'
  | 'agentic'
  | 'rag'
  | 'recsys';

export interface ArchitectureStep {
  stage: string;
  detail: string;
}

export interface ArchitectureDiagram {
  id: string;
  tabLabel: string;
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  surfaceTone?: 'dark' | 'light';
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  categoryId: Exclude<ProjectCategoryId, 'all'>;
  categoryLabel: string;
  highlightMetric?: string;
  liveUrl?: string;
  summary: string;
  tags: string[];
  story: {
    projectOverview: string;
    businessContext: string;
    challenge: string;
    myRole: string;
    solutionDesign: string;
    solutionArchitecture: {
      overview: string;
      diagrams?: ArchitectureDiagram[];
      illustrativeFlow: ArchitectureStep[];
    };
    technicalStack: { category: string; items: string }[];
    keyEngineeringDecisions: { decision: string; rationale: string }[];
    resultsAndImpact: string;
    confidentialityNote: string;
  };
}

export interface ExpertiseDomain {
  id: string;
  domain: string;
  summary: string;
  capabilities: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  context: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  metric: string;
  label: string;
  context: string;
  link?: string;
}

export interface EducationItem {
  id: string;
  degreeOrCert: string;
  institution: string;
  period: string;
  notes: string;
}

export interface CommunityItem {
  id: string;
  role: string;
  organization: string;
}

export interface PortfolioLocaleData {
  ui: {
    nav: {
      about: string;
      projects: string;
      expertise: string;
      experience: string;
      education: string;
      contact: string;
      openMenu: string;
      closeMenu: string;
    };
    hero: {
      primaryCta: string;
      secondaryCta: string;
      languageLabel: string;
    };
    sections: {
      about: { index: string; eyebrow: string };
      projects: {
        index: string;
        eyebrow: string;
        title: string;
        description: string;
        filterLabel: string;
        readCaseStudy: string;
        livePlatform: string;
        diagramsLabel: string;
        categories: { id: ProjectCategoryId; label: string }[];
      };
      expertise: {
        index: string;
        eyebrow: string;
        title: string;
        description: string;
      };
      experience: {
        index: string;
        eyebrow: string;
        title: string;
      };
      achievements: {
        index: string;
        eyebrow: string;
        title: string;
        description: string;
        viewCredential: string;
      };
      education: {
        index: string;
        eyebrow: string;
        title: string;
        academicHeading: string;
        communityHeading: string;
        certificationsHeading: string;
      };
      contact: {
        index: string;
        eyebrow: string;
        emailLabel: string;
        sendEmail: string;
        copy: string;
        copied: string;
        copyAria: string;
        connect: string;
        viewRepos: string;
      };
      modal: {
        closeLabel: string;
        backToProjects: string;
        caseStudyLabel: string;
        companyLabel: string;
        periodLabel: string;
        domainLabel: string;
        verifiedOutcomeLabel: string;
        livePlatformLabel: string;
        visitLivePlatform: string;
        contentsLabel: string;
        previousProject: string;
        nextProject: string;
        viewAllProjects: string;
        projectOverview: string;
        businessContext: string;
        challenge: string;
        myRole: string;
        solutionDesign: string;
        systemArchitecture: string;
        systemDiagramsTitle: string;
        diagramsBadge: string;
        expandDiagram: string;
        closeDiagram: string;
        systemFlowTitle: string;
        illustrativeBadge: string;
        technicalStack: string;
        keyEngineeringDecisions: string;
        resultsAndImpact: string;
        confidentialityNote: string;
      };
      footer: {
        philosophy: string;
        caseStudies: string;
        experience: string;
        contact: string;
      };
    };
  };
  profile: {
    name: string;
    title: string;
    location: string;
    positioningStatement: string;
    heroHighlights: string[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    workflowSteps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  projects: ProjectCaseStudy[];
  expertise: ExpertiseDomain[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  education: EducationItem[];
  certifications: EducationItem[];
  community: CommunityItem[];
  contact: {
    heading: string;
    subtext: string;
    email: string;
    linkedinUrl: string;
    linkedinLabel: string;
    githubUrl: string;
    githubLabel: string;
  };
}

export const portfolioContent: Record<Locale, PortfolioLocaleData> = {
  en: {
    ui: {
      nav: {
        about: 'About',
        projects: 'Projects',
        expertise: 'Expertise',
        experience: 'Experience',
        education: 'Education',
        contact: 'Contact',
        openMenu: 'Open navigation menu',
        closeMenu: 'Close navigation menu',
      },
      hero: {
        primaryCta: 'Explore Case Studies',
        secondaryCta: 'Get in Touch',
        languageLabel: 'Language',
      },
      sections: {
        about: { index: '01', eyebrow: 'Engineering Philosophy' },
        projects: {
          index: '02',
          eyebrow: 'Featured Projects',
          title: 'Production Systems & Case Studies',
          description:
            'Select any project to inspect the business context, actual bottleneck, architectural reasoning, and verified outcomes.',
          filterLabel: 'Filter projects by domain',
          readCaseStudy: 'Read Case Study',
          livePlatform: 'Live Platform',
          diagramsLabel: 'Architecture Diagrams',
          categories: [
            { id: 'all', label: 'All' },
            { id: 'agentic', label: 'Agentic AI' },
            { id: 'rag', label: 'RAG & LLMs' },
            { id: 'recsys', label: 'RecSys & Search' },
          ],
        },
        expertise: {
          index: '03',
          eyebrow: 'Technical Expertise',
          title: 'Organized by Engineering Domain',
          description:
            'Production capabilities across agentic systems, hybrid retrieval, neural recommendation models, and distributed MLOps.',
        },
        experience: {
          index: '04',
          eyebrow: 'Professional Experience',
          title: 'Work History & Engineering Ownership',
        },
        achievements: {
          index: '05',
          eyebrow: 'Verified Outcomes',
          title: 'Measured Impact & Engineering Benchmarks',
          description:
            'Production metrics, verified sales and client outcomes, retrieval benchmarks, and competitive programming credentials.',
          viewCredential: 'View Credential',
        },
        education: {
          index: '06',
          eyebrow: 'Background',
          title: 'Education, Certifications & Community',
          academicHeading: 'Academic Education',
          communityHeading: 'Community Involvement',
          certificationsHeading: 'Certifications',
        },
        contact: {
          index: '07',
          eyebrow: 'Contact',
          emailLabel: 'Email',
          sendEmail: 'Send Email',
          copy: 'Copy',
          copied: 'Copied',
          copyAria: 'Copy email address',
          connect: 'Connect',
          viewRepos: 'View Repositories',
        },
        modal: {
          closeLabel: 'Close case study',
          backToProjects: 'Back to Projects',
          caseStudyLabel: 'Case Study',
          companyLabel: 'Organization',
          periodLabel: 'Timeline',
          domainLabel: 'Domain',
          verifiedOutcomeLabel: 'Verified Outcome',
          livePlatformLabel: 'Live Platform',
          visitLivePlatform: 'Visit Live Platform',
          contentsLabel: 'Case Study Breakdown',
          previousProject: 'Previous Project',
          nextProject: 'Next Project',
          viewAllProjects: 'All Case Studies',
          projectOverview: 'Project Overview',
          businessContext: 'Business Context',
          challenge: 'The Challenge',
          myRole: 'My Role',
          solutionDesign: 'Solution Design',
          systemArchitecture: 'System Architecture',
          systemDiagramsTitle: 'System & Model Architecture Diagrams',
          diagramsBadge: 'Actual System Architecture',
          expandDiagram: 'Expand full view',
          closeDiagram: 'Close diagram preview',
          systemFlowTitle: 'High-Level System Flow',
          illustrativeBadge: 'Illustrative Architecture Visualization',
          technicalStack: 'Technical Stack',
          keyEngineeringDecisions: 'Key Engineering Decisions',
          resultsAndImpact: 'Results & Business Impact',
          confidentialityNote: 'Confidentiality Note',
        },
        footer: {
          philosophy: 'Philosophy',
          caseStudies: 'Case Studies',
          experience: 'Experience',
          contact: 'Contact',
        },
      },
    },
    profile: {
      name: 'Salma Waheed',
      title: 'AI & Machine Learning Engineer',
      location: 'Cairo, Egypt',
      positioningStatement:
        'AI & Machine Learning Engineer with 2 years of experience building production LLM systems, multi-agent workflows, hybrid RAG architectures, and high-concurrency personalization platforms. I start with the actual business bottleneck, select the simplest architecture that solves it reliably, and ship it to production.',
      heroHighlights: [
        'LangGraph & Multi-Agent Workflows',
        'Hybrid RAG & Arabic NLP',
        'High-Concurrency RecSys & Search',
        'Production MLOps & Streaming',
      ],
    },
    about: {
      heading: 'Good AI engineering starts with diagnosing the real bottleneck.',
      paragraphs: [
        'Over two years of shipping production AI systems—from multi-agent automation and Arabic legal RAG at Transformix Digital Solutions to high-concurrency recommendation engines and enterprise support agents at Numinix—I have learned that model selection is rarely the hardest part of the job.',
        'The real leverage comes from understanding the operational workflow first: figuring out where latency is leaking, why search returns zero results, why an LLM hallucinates on legal edge cases, or why a single monolithic prompt breaks down under multi-step business logic.',
        'I work comfortably across stakeholder communication, solution architecture, and hands-on production engineering—connecting PyTorch, LangGraph, hybrid retrieval, and distributed data pipelines directly to measurable operational outcomes.',
      ],
      workflowSteps: [
        {
          step: '01',
          title: 'Bottleneck Discovery',
          description:
            'Map the workflow pain point with stakeholders and isolate what needs deterministic logic, better retrieval, or agentic reasoning.',
        },
        {
          step: '02',
          title: 'Architecture & Trade-offs',
          description:
            'Design around real constraints—article-level legal accuracy, sub-100ms inference SLAs, or multi-step tool execution reliability.',
        },
        {
          step: '03',
          title: 'Evaluation-Driven Build',
          description:
            'Anchor retrieval and orchestration in concrete failure suites, structured tool calling, and observability rather than guesswork.',
        },
        {
          step: '04',
          title: 'Production Deployment',
          description:
            'Ship containerized, observable services backed by FastAPI, PostgreSQL/pgvector, Redis, Kafka, and cloud infrastructure.',
        },
      ],
    },
    projects: [
      {
        id: 'media-buying-platform',
        title: 'AI-Powered Media Buying Platform',
        subtitle: 'Multi-Agent Campaign Automation',
        company: 'Transformix Digital Solutions',
        period: 'May 2026 – Present',
        categoryId: 'agentic',
        categoryLabel: 'Agentic AI',
        highlightMetric: '+47% Clients Served',
        summary:
          'Multi-agent media buying platform replacing weeks of manual campaign preparation with brief-driven market intelligence, ad copy synthesis, and Meta Ads integration—increasing clients served by 47%+.',
        tags: ['LangGraph', 'AWS Bedrock (Claude)', 'Meta Ads MCP', 'FastAPI', 'PostgreSQL'],
        story: {
          projectOverview:
            'Built at Transformix Digital Solutions, this platform starts directly from the client brief to automate market and competitor research, performance diagnostics, ad concept and copywriting generation, and direct Meta Ads campaign execution via a coordinated multi-agent system powered by LangGraph and AWS Bedrock (Claude).',
          businessContext:
            'Before any ad campaign could go live, media buying agencies spent weeks on manual prep—researching markets and competitors, analyzing prior performance, and writing ad concepts and copy. Every new client demanded significant manual hours, directly tying agency growth to adding more staff.',
          challenge:
            'Eliminating weeks of manual prep requires coordinating four distinct workflows—competitor intelligence, quantitative ad analysis, creative ideation/copywriting, and live Meta Ads campaign management—from a single client brief. Collapsing all of that into a single monolithic LLM prompt causes fragile tool calls, context pollution, and opaque failures, while operators still need live visibility and persisted campaign state.',
          myRole:
            'As the AI Engineer on the platform, I designed and built the LangGraph multi-agent orchestration layer, integrated AWS Bedrock (Claude) function calling with Meta Ads MCP tools and web search, engineered the FastAPI backend with Server-Sent Events (SSE) progress streaming and PostgreSQL/Alembic persistence, and wired execution into the React, Vite, and Tailwind CSS interface.',
          solutionDesign:
            'Rather than prompting one generalist model to run the entire campaign workflow, I structured the pipeline into four bounded, specialized agents—Research, Analysis, Creative, and Copywriter—mirroring how a senior media buying team operates. Starting from the client brief, the skill chain runs four phases inside one Meta Ads–connected workspace: Market Intelligence (Ad Library shortlisting and buyer-screenshot deep analysis), Creative Strategy (campaign-ready hooks, ad copy, UGC scripts, and test matrices), Campaign Launch & Budget (ABO/CBO split, QA, and first-72h rules via Meta Ads MCP), and Own Ads Analysis (CPA/ROAS triage into KILL, KEEP, SCALE, ITERATE, or HOLD actions) with feedback loops back to creative iteration and budget adjustments.',
          solutionArchitecture: {
            overview:
              'A FastAPI orchestration service executes the stateful LangGraph skill chain powered by AWS Bedrock (Claude), routing intent across Meta Ads MCP tools, web search, and Higgsfield while streaming stage-by-stage updates via SSE to the React/TypeScript frontend and persisting campaign state in PostgreSQL.',
            diagrams: [
              {
                id: 'media-buying-skill-chain',
                tabLabel: '01. Agent Skill Chain',
                title: '01. AI Media Buyer Agent — Skill Chain & Feedback Loops',
                caption:
                  'Claude agent routes intent across Meta Ads MCP & Higgsfield through 4 stages: (1) Market intelligence (Ad Library shortlist + buyer screenshot deep analysis), (2) Creative strategy, (3) Campaign launch + budget (ABO/CBO, QA, first 72h rules → Meta Ads MCP go live), and (4) Own ads analysis (CPA/ROAS diagnosis → KILL/KEEP/SCALE/ITERATE/HOLD) with creative iteration and budget adjustment feedback loops.',
                imageSrc: '/assets/aistudio/image_b56364b6.png',
                imageAlt:
                  'AI media buyer agent skill chain diagram showing Meta Ads MCP and Higgsfield connected to Claude agent routing across Market intelligence, Creative strategy, Campaign launch and budget, Meta Ads MCP go live, and Own ads analysis with Iterate creatives and Adjust budget feedback loops.',
                surfaceTone: 'light',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. Research & Analysis Agents',
                detail:
                  'Gather external market context via web search and pull campaign telemetry through Meta Ads MCP tools.',
              },
              {
                stage: '02. Creative & Copywriter Agents',
                detail:
                  'Synthesize research and performance findings into structured ad copy and creative outputs.',
              },
              {
                stage: '03. SSE Pipeline Streaming',
                detail:
                  'Push step-by-step agent progress updates from FastAPI to the React frontend in real time.',
              },
              {
                stage: '04. Stateful Persistence',
                detail:
                  'Store campaign configurations, tool outputs, and iterations in PostgreSQL with Alembic migrations.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'Agent Orchestration & LLM',
              items: 'LangGraph, AWS Bedrock (Claude), Structured Function Calling',
            },
            {
              category: 'External Tools & Integrations',
              items: 'Meta Ads MCP, Higgsfield, Web Search',
            },
            {
              category: 'Backend & Persistence',
              items: 'FastAPI, Server-Sent Events (SSE), PostgreSQL, Alembic',
            },
            {
              category: 'Frontend Interface',
              items: 'React, Vite, Tailwind CSS',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'Multi-Agent Role Decomposition over Single-Prompt Execution',
              rationale:
                'Isolating Research, Analysis, Creative, and Copywriter responsibilities keeps context windows focused, prevents cross-stage instruction drift, and makes individual skill chains testable and debuggable.',
            },
            {
              decision: 'Server-Sent Events (SSE) for Long-Running Agent Pipelines',
              rationale:
                'Multi-step research, tool execution, and ad synthesis run asynchronously over several seconds; SSE streams granular stage events over standard HTTP without the operational overhead of bidirectional WebSockets.',
            },
            {
              decision: 'MCP-Standardized Tool Interface for Ad Platform Actions',
              rationale:
                'Routing live ad queries and campaign launches through Meta Ads MCP decouples platform API contracts from prompt logic and establishes clean guardrails around live campaign state changes.',
            },
          ],
          resultsAndImpact:
            'Increased agency clients served by +47% while cutting manual time and effort per campaign. By launching more campaigns faster from a single brief-to-Meta Ads workspace, the team supports larger ad budgets and more clients without proportional hiring costs.',
          confidentialityNote:
            'Specific client ad accounts, proprietary campaign heuristics, internal bidding thresholds, and prompt templates remain confidential to Transformix Digital Solutions. Architectural details are presented at a system and skill-chain level.',
        },
      },
      {
        id: 'omnichannel-lead-agent',
        title: 'Omnichannel Lead Agent',
        subtitle: 'Social Media Lead Capture, Odoo CRM Sync & Quotation Assistant',
        company: 'AI Sales & Marketing Solution',
        period: '2026',
        categoryId: 'agentic',
        categoryLabel: 'Agentic AI',
        highlightMetric: '+40% Qualified Leads',
        summary:
          'Unified AI assistant handling inquiries across Facebook, WhatsApp, and Instagram—filtering genuine leads, syncing automatically into Odoo CRM, and drafting quotations for human pricing review.',
        tags: ['Facebook', 'WhatsApp', 'Instagram', 'Odoo CRM', 'Lead Qualification', 'Human-in-the-Loop Pricing'],
        story: {
          projectOverview:
            'Omnichannel Lead Agent captures and qualifies incoming customer inquiries across Facebook, WhatsApp, and Instagram in one workflow—answering common questions, separating real buyers from casual inquiries, syncing qualified leads into Odoo CRM, and preparing draft price quotations for human review before dispatch.',
          businessContext:
            'Prospective buyers reach out across Facebook, WhatsApp, and Instagram simultaneously. Previously, staff had to open each platform separately, read through incoming messages, and manually sort genuinely interested prospects from everyday questions—consuming hours each day while serious buyers dropped off in busy queues.',
          challenge:
            'Disconnected social channels caused delayed replies and lost high-intent prospects during peak traffic, while preparing follow-up quotes manually slowed down sales response times. At the same time, the business needed strict human control over final pricing and external client messaging rather than letting AI send unreviewed prices.',
          myRole:
            'Guided by focusing on where time and leads are lost and building the simplest practical AI workflow with measurable impact, I designed and implemented the end-to-end omnichannel assistant across FAQ automation, conversation qualification, Odoo CRM lead syncing, and human-reviewed quotation drafting.',
          solutionDesign:
            'The assistant connects Facebook, WhatsApp, and Instagram into a single automated intake and triage pipeline. It answers routine FAQs directly, filters every conversation to determine whether the sender is a genuine lead, logs and updates qualified prospects automatically inside Odoo CRM for unified cross-channel visibility, and drafts a tailored quotation for each qualified lead—pausing cleanly at a human checkpoint where a team member sets prices and approves before sending.',
          solutionArchitecture: {
            overview:
              'Conversations from Facebook, WhatsApp, and Instagram flow through automated FAQ handling and lead qualification before syncing directly into Odoo CRM and generating draft quotations held for human pricing review.',
            illustrativeFlow: [
              {
                stage: '01. Omnichannel Inquiry Intake',
                detail:
                  'Receive incoming messages and answer common questions automatically across Facebook, WhatsApp, and Instagram.',
              },
              {
                stage: '02. Automated Lead Qualification',
                detail:
                  'Filter each conversation to separate genuine prospective leads from casual questions.',
              },
              {
                stage: '03. Odoo CRM Auto-Sync',
                detail:
                  'Log qualified leads and update their details automatically in Odoo CRM so the team sees every channel in one place.',
              },
              {
                stage: '04. Draft Quotation & Human Review',
                detail:
                  'Generate a draft price quotation for every qualified lead and pause for staff pricing and final review before sending.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'Messaging Channels',
              items: 'Facebook, WhatsApp, Instagram',
            },
            {
              category: 'CRM & Data Visibility',
              items: 'Odoo CRM (Automated Lead Creation & Record Updates)',
            },
            {
              category: 'Sales Workflow & Guardrails',
              items: 'Automated FAQ Replies, Lead Qualification, Draft Price Quotations, Human-in-the-Loop Pricing Approval',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'Single Cross-Channel Qualification into Odoo CRM',
              rationale:
                'Consolidating Facebook, WhatsApp, and Instagram triage directly into Odoo CRM eliminates manual platform switching and ensures no interested prospect gets missed in busy queues.',
            },
            {
              decision: 'Human-in-the-Loop Checkpoint Before Quotation Dispatch',
              rationale:
                'Stopping the automation right after drafting the quote lets sales staff set accurate pricing and inspect what goes to each customer—speeding up follow-up without sacrificing commercial control.',
            },
          ],
          resultsAndImpact:
            'Delivered a +40% increase in qualified leads, eliminated manual message triage across all three platforms, ensured zero missed leads, and accelerated quotation delivery while preserving complete human control over pricing—raising conversation-to-deal conversion.',
          confidentialityNote:
            'Client brand accounts, internal pricing matrices, and customer conversation logs remain private; the cross-channel workflow, Odoo CRM integration, and verified sales impact are presented at a solution level.',
        },
      },
      {
        id: 'lawagent-arabic-rag',
        title: 'LawAgent',
        subtitle: 'Arabic RAG Assistant over Saudi Labour Law',
        company: 'Transformix Digital Solutions',
        period: 'May 2026 – Present',
        categoryId: 'rag',
        categoryLabel: 'RAG & LLMs',
        highlightMetric: '100% P@1 · 71% Scenario Recall · +25% Client Leads',
        liveUrl: 'https://tafahom.thetransformix.com/',
        summary:
          'High-precision Arabic legal RAG system indexing 171 official Saudi labour-law documents (~3,900 pages) with a five-path hybrid retriever and complex-case Paymob lawyer booking—delivering +25% client leads.',
        tags: ['Azure OpenAI', 'ChromaDB', 'BM25 + RRF', 'Paymob Booking', 'FastAPI', 'PostgreSQL'],
        story: {
          projectOverview:
            'LawAgent is a specialized Arabic Retrieval-Augmented Generation (RAG) legal assistant engineered over 171 official Saudi Labour Law documents (~3,900 pages). Beyond answering exact article lookups and multi-document scenarios accurately from official text, it converts complex inquiries into booked legal consultations via Paymob.',
          businessContext:
            'Workers and employers asking about Saudi Labour Law require exact, trustworthy answers grounded directly in the official statutory text across ~3,900 pages of Arabic PDFs. Previously, whenever a legal situation became too complex for self-service reading, visitors left the site without contacting a lawyer—costing the firm qualified prospective clients.',
          challenge:
            'Off-the-shelf RAG pipelines break severely on Arabic statutory corpora: fixed-size token chunking splits legal articles mid-clause, naive ingestion retains repealed provisions inside the vector index, bidirectional Unicode control characters corrupt query matching, and dense semantic embeddings alone struggle with exact Arabic article-number references or mandatory law-to-regulation links—leaving baseline scenario recall at just 38%. Moreover, the system needed to turn complex, edge-case visitors into warm consultation leads rather than dead ends.',
          myRole:
            'I architected and implemented the structure-aware Arabic document chunking pipeline, built the five-path hybrid retrieval and source-capped re-ranking engine, integrated the Paymob consultation-booking handoff for complex legal cases, developed the FastAPI, PostgreSQL, and Gradio stack, and constructed the failure-driven evaluation suite from real failed queries.',
          solutionDesign:
            'I approached retrieval precision as a legal document engineering problem prior to generation. At ingestion time, PDFs pass through Azure Document Intelligence layout extraction before branching into a regex-based Core Document Chunker (preserving 1 legal article per chunk with zero mid-article splits) and a type-routed Corpus Chunker, excluding repealed articles so answers never rely on outdated text and enriching each article with an LLM-generated subject line across 4,011 total chunks. At query time, input sanitation strips bidi artifacts and dispatches parallel exact-article regex lookup alongside an LLM Query Planner (up to 4 Modern Standard Arabic queries), executing three complementary search arms fused via Reciprocal Rank Fusion (RRF), round-robin merging, weighted source-capped re-ranking, and a deterministic law-to-regulation join—while routing complex cases directly to book a consultation or case via a Paymob booking link.',
          solutionArchitecture: {
            overview:
              'A two-stage ingestion and hybrid retrieval system indexing 4,011 intact Arabic legal chunks in ChromaDB and BM25, feeding a five-path retrieval, fusion, weight-based re-ranking, and law-to-regulation join pipeline—connected to a Paymob booking handoff for complex cases and served via FastAPI, PostgreSQL, Azure OpenAI, and Gradio.',
            diagrams: [
              {
                id: 'lawagent-chunking',
                tabLabel: '01. Chunking Pipeline',
                title: '01. Structure-Aware Arabic Legal Chunking Pipeline',
                caption:
                  '170 Arabic PDFs → Azure DI layout extraction to structured markdown → Core document chunker (448 regex-parsed intact articles, never mid-article splits) + Corpus chunker (3,563 chunks across 4 parser routes) → LLM-generated subject line per article → 4,011 chunks indexed in Chroma.',
                imageSrc: '/assets/aistudio/image_8c7cf0ae.png',
                imageAlt:
                  'Structure-aware chunking pipeline from 170 Arabic PDFs through Azure DI layout extraction, Core document chunker (448 chunks) and Corpus chunker (3,563 chunks), Subject line generation, to 4,011 chunks in Chroma index.',
                surfaceTone: 'light',
              },
              {
                id: 'lawagent-retrieval',
                tabLabel: '02. Hybrid Retrieval',
                title: '02. Five-Path Hybrid Retrieval, Fusion & Re-Ranking Pipeline',
                caption:
                  'User message → Sanitize (bidi chars, whitespace) → Exact article lookup (Regex) & Query planner (<=4 MSA queries) → Hybrid search (Bedrock Dense -> Chroma, BM25 light10 b=0.4, Expanded LLM rewrite <=4 tok) → RRF K=10 & Round-robin merge → Re-rank weight() (0.85x corpus, 0.5x superseded, 3/source cap) → Law <-> regulation join.',
                imageSrc: '/assets/aistudio/image_26762c63.png',
                imageAlt:
                  'Hybrid retrieval flowchart from User message and Sanitize through Exact article lookup, Query planner, Dense/BM25/Expanded hybrid search, RRF K=10 and Round-robin merge, weight() re-ranking, and Law-to-regulation join.',
                surfaceTone: 'light',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. Article-Level Legal Chunker',
                detail:
                  'Index 4,011 intact articles from 171 documents without splitting legal provisions, filtering out repealed clauses.',
              },
              {
                stage: '02. Five-Path Hybrid Retrieval',
                detail:
                  'Run exact article lookup, dense vector search, BM25 fused via RRF, LLM query planning, and deterministic law-to-regulation joins.',
              },
              {
                stage: '03. Source-Capped Re-Ranking',
                detail:
                  'Balance retrieved evidence across sources before context assembly to prevent single-document dominance.',
              },
              {
                stage: '04. Failure Evaluation & Paymob Booking Handoff',
                detail:
                  'Validate accuracy on real failed queries and guide visitors with complex legal cases to book a consultation or case via Paymob.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'LLM & Document Intelligence',
              items: 'Azure OpenAI, AWS Bedrock Embeddings, Azure Document Intelligence (Layout Extraction)',
            },
            {
              category: 'Retrieval & Indexing',
              items: 'ChromaDB, BM25 (light10, b=0.4), RRF (K=10), Custom Regex Legal Parsers',
            },
            {
              category: 'Backend, Conversion & UI',
              items: 'Python, FastAPI, PostgreSQL, Gradio, Paymob Booking Link Integration',
            },
            {
              category: 'Evaluation',
              items: 'Custom Scenario Evaluation Suite Built from Real Failed Queries',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'Article-Boundary Chunking Instead of Fixed Token Windows',
              rationale:
                'Ensuring 1 chunk equals 1 intact legal unit guarantees every retrieved passage retains complete statutory conditions and exceptions while eliminating repealed provisions at index time.',
            },
            {
              decision: 'Five-Path Retrieval + Deterministic Law-to-Regulation Join',
              rationale:
                'Combining regex exact-article matching, dense semantic vectors, Arabic-stemmed BM25, query expansion, and deterministic statutory cross-reference joins resolves both explicit article citations and multi-document scenario questions.',
            },
            {
              decision: 'Source-Capped & Supersession-Weighted Re-Ranking',
              rationale:
                'Applying weights (0.85x corpus, 0.5x superseded) and capping results at 3 chunks per source prevents long auxiliary documents from crowding out primary statutory articles in the LLM context.',
            },
            {
              decision: 'Failure-Driven Evaluation & Complex-Case Paymob Escalation',
              rationale:
                'Evaluating against real failed queries closed retrieval blind spots, while routing complex legal cases to Paymob consultation booking turns high-intent visitors into retained firm leads.',
            },
          ],
          resultsAndImpact:
            'Achieved 100% precision@1 on exact article lookup (90% production article lookup accuracy), 97.5% top-6 known-item recall, raised complex scenario recall from 38% to 71%, and generated a +25% increase in client leads by converting departing visitors into booked Paymob consultations and cases with zero added marketing spend.',
          confidentialityNote:
            'Built over publicly available official Saudi Labour Law documents; internal prompt templates, client firm details, and proprietary evaluation logs remain confidential.',
        },
      },
      {
        id: 'diomedia-german-rag',
        title: 'Diomedia AI Assistant',
        subtitle: 'Full-Stack RAG German Language Learning Platform',
        company: 'Transformix Digital Solutions',
        period: 'May 2026 – Present',
        categoryId: 'rag',
        categoryLabel: 'RAG & LLMs',
        summary:
          'Full-stack language learning platform combining curriculum-grounded hybrid RAG over textbooks and video transcripts with multilingual code-switching, quiz generation, and admin controls.',
        tags: ['LangChain', 'PostgreSQL + pgvector', 'React / TypeScript', 'FastAPI', 'Docker / Nginx'],
        story: {
          projectOverview:
            'Diomedia AI Assistant is a full-stack, production-deployed German language learning platform uniting a curriculum-grounded Hybrid RAG tutor (with German, Arabic, and English code-switching), automated quiz generation, and an administrative governance console.',
          businessContext:
            'Learners studying German from Arabic and English backgrounds need an interactive AI tutor strictly aligned with their course textbooks and video dialogues. At the same time, platform operators require authentication, API token-budget controls, and quiz analytics to run AI tutoring sustainably in production.',
          challenge:
            'General-purpose conversational LLMs routinely drift outside course scope, explain grammar constructs inconsistently with the student’s textbook level, and offer no built-in role-based access control, token-usage governance, or structured assessment loop grounded in multimedia course content.',
          myRole:
            'I designed and delivered the end-to-end architecture across the AI retrieval layer, FastAPI + LangChain backend, PostgreSQL/pgvector schema, administrative governance controls, and containerized production deployment.',
          solutionDesign:
            'I engineered a three-signal hybrid retrieval pipeline inside PostgreSQL with pgvector over custom course textbook PDFs and video dialogue transcripts—merging Azure OpenAI semantic embeddings, lexical keyword matching, and grammatical heuristics. On top of retrieval, the FastAPI backend powers both a code-switching multilingual tutor persona (German, Arabic, English) and an automated quiz generator, governed by JWT role-based authentication (RBAC), per-user API token budgets, and quiz analytics in the React/TypeScript frontend and Admin Dashboard.',
          solutionArchitecture: {
            overview:
              'A React/TypeScript frontend and Admin Dashboard communicate with a FastAPI + LangChain backend backed by PostgreSQL/pgvector and Azure OpenAI, packaged via Docker Compose behind an Nginx reverse proxy secured with automated Let’s Encrypt SSL.',
            diagrams: [
              {
                id: 'diomedia-fullstack-arch',
                tabLabel: '01. Full-Stack Architecture',
                title: '01. End-to-End Platform, Retrieval & Deployment Architecture',
                caption:
                  'Frontend Layer (React/TypeScript UI & Admin Dashboard) → FastAPI Backend (Quiz Generator, Multilingual AI Tutor, API Token Budgets, JWT RBAC, Quiz Analytics) → AI & Retrieval Layer (Hybrid Retrieval combining Azure OpenAI Semantic Embeddings, Lexical Keyword Overlap & Grammatical Heuristics) → PostgreSQL + pgvector (Video Transcripts & Textbook PDFs), deployed via Docker Compose, Nginx Reverse Proxy & Let’s Encrypt SSL.',
                imageSrc: '/assets/aistudio/mermaid-diagram_ec94960b.png',
                imageAlt:
                  'Diomedia full-stack system architecture showing Frontend Layer, Backend Layer with FastAPI services, AI & Retrieval Layer, PostgreSQL pgvector Data Layer, and Docker Compose Nginx SSL Deployment.',
                surfaceTone: 'light',
              },
              {
                id: 'diomedia-hybrid-rag',
                tabLabel: '02. Hybrid RAG Pipeline',
                title: '02. Semantic, Lexical & Grammatical Hybrid Retrieval Flow',
                caption:
                  'User Query → Query Processing → 3 parallel retrieval arms (Azure OpenAI Embeddings in PostgreSQL pgvector, Lexical Keyword Matching, and Grammatical Heuristics) → Hybrid Retrieval Results → Relevant Learning Content → Azure OpenAI → Multilingual Tutor Response.',
                imageSrc: '/assets/aistudio/mermaid-diagram_1__922803ea.png',
                imageAlt:
                  'Diomedia Hybrid RAG retrieval pipeline showing parallel Semantic Retrieval, Lexical Keyword Matching, and Grammatical Heuristics merging into Azure OpenAI multilingual tutor responses.',
                surfaceTone: 'light',
              },
              {
                id: 'diomedia-platform-flow',
                tabLabel: '03. Platform Flow',
                title: '03. Learner & Admin Product Workflow',
                caption:
                  'Authentication gates two learner workflows — Multilingual AI Tutor (German/Arabic/English via Hybrid RAG over textbooks & transcripts) and Automated Quiz Generation & Attempts — while Admin Dashboard governs Quiz Analytics and API Token Budgets.',
                imageSrc: '/assets/aistudio/mermaid-diagram_2__2ab21f79.png',
                imageAlt:
                  'Diomedia user and admin workflow diagram covering Authentication, Multilingual AI Tutor, Automated Quiz Generation, Quiz Analytics, and API Token Budgets.',
                surfaceTone: 'light',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. Multimodal Curriculum Ingestion',
                detail:
                  'Index custom textbook PDFs and video dialogue transcripts into PostgreSQL pgvector.',
              },
              {
                stage: '02. Hybrid Linguistic Retrieval',
                detail:
                  'Blend Azure OpenAI semantic embeddings with lexical keyword overlap and grammatical heuristics.',
              },
              {
                stage: '03. Multilingual Tutor & Quiz Engine',
                detail:
                  'Deliver code-switching explanations (German, Arabic, English) and automated curriculum quizzes.',
              },
              {
                stage: '04. Admin Governance & Proxy Layer',
                detail:
                  'Enforce JWT RBAC, API token budgets, quiz analytics, and Let’s Encrypt SSL via Nginx + Docker Compose.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'AI & Retrieval',
              items: 'Azure OpenAI, LangChain, PostgreSQL + pgvector (Semantic + Lexical + Grammatical Hybrid Search)',
            },
            {
              category: 'Backend & Security',
              items: 'FastAPI, JWT Role-Based Authentication (RBAC), API Token Budget Controls',
            },
            {
              category: 'Frontend Application',
              items: 'React, TypeScript, Learner Tutor & Admin Analytics Dashboard',
            },
            {
              category: 'Infrastructure & Deployment',
              items: 'Docker Compose, Nginx Reverse Proxy, Let’s Encrypt SSL',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'Triple-Signal Hybrid Search (Semantic + Lexical + Grammatical)',
              rationale:
                'Combining vector similarity with exact lexical matching and grammatical heuristics handles both conceptual questions and exact German grammar/vocabulary lookups grounded in textbook examples.',
            },
            {
              decision: 'PostgreSQL + pgvector as Unified Relational & Vector Store',
              rationale:
                'Keeping curriculum chunks, quiz records, JWT roles, and token budgets inside a single transactional database simplifies deployment and guarantees atomic consistency between learning analytics and user state.',
            },
            {
              decision: 'Built-In API Token Budgeting & Reverse-Proxy SSL Hardening',
              rationale:
                'Enforcing token quotas and RBAC at the FastAPI layer behind Nginx + Let’s Encrypt protects LLM spend and prepares the platform directly for real user traffic.',
            },
          ],
          resultsAndImpact:
            'Shipped a production-ready, SSL-secured full-stack language learning platform uniting curriculum-grounded AI tutoring, German/Arabic/English code-switching, automated assessment, and granular token/cost governance.',
          confidentialityNote:
            'Proprietary course textbooks, video dialogue scripts, and tutor prompt configurations remain private intellectual property; the full-stack and retrieval architecture are shared at a conceptual level.',
        },
      },
      {
        id: 'session-based-recsys',
        title: 'High-Concurrency Session-Based Recommendation System',
        subtitle: 'Distributed Sequence Modeling at 10K+ QPS',
        company: 'Numinix',
        period: 'Jan 2025 – Apr 2026',
        categoryId: 'recsys',
        categoryLabel: 'RecSys & Search',
        highlightMetric: '+40% Sales Lift · 10K+ QPS · <100ms',
        summary:
          'Distributed session-based recommender fusing RNNs, Transformers, and GNNs via stateful streaming and Redis to surface relevant products from a visitor’s very first session—driving +40% e-commerce sales at 10K+ QPS (<100ms latency).',
        tags: ['PyTorch (RNN / Transformer / GNN)', 'FastAPI', 'Redis Feature Store', 'Stream Processing'],
        story: {
          projectOverview:
            'Engineered at Numinix, this production recommendation system predicts next-item user intent from live browsing behavior—viewed items, interactions, and action sequence—so even first-time anonymous shoppers immediately see matching products at 10,000+ QPS and under 100ms latency.',
          businessContext:
            'Most e-commerce visitors are new or anonymous shoppers with zero prior purchase history. Despite carrying thousands of catalog products, stores previously showed generic items to first-time visitors, causing shoppers to bounce without ever finding what suited them.',
          challenge:
            'Personalizing for anonymous first-visit traffic means inferring intent strictly from live in-session actions (viewed items, interactions, and click sequence) rather than historical user profiles—while holding strict sub-100ms latency at 10,000+ concurrent QPS without losing session continuity across distributed clusters.',
          myRole:
            'I architected the multi-model recommendation fusion network (RNNs, Transformers with Attention, and GNNs), implemented stateful stream processing to maintain session continuity across distributed clusters, and built the scalable FastAPI model-serving layer backed by a Redis feature store.',
          solutionDesign:
            'To capture complementary behavioral signals without sacrificing latency, the neural recommender fuses representations from three distinct model families: an RNN for sequential ordering, a GNN for structural item-transition graphs, and a Transformer with Attention for long-range intra-session dependencies. Model outputs pass through dedicated Projection layers and combine via WeightedSum and a FusionLayer to produce FinalPrediction, while stateful streaming updates live session features in Redis for constant-time FastAPI lookup at serving time.',
          solutionArchitecture: {
            overview:
              'Stateful stream processing maintains distributed session continuity inside a Redis feature store, serving real-time features into a multi-model RNN + GNN + Transformer fusion engine behind a high-throughput FastAPI inference tier.',
            diagrams: [
              {
                id: 'recsys-fusion',
                tabLabel: '01. Model Fusion Architecture',
                title: '01. Multi-Model Hybrid Recommender Fusion (RNN + GNN + Transformer)',
                caption:
                  'RNNModel, GNNModel, and TransformerModel outputs pass through dedicated Projection layers and combine via WeightedSum and FusionLayer to generate FinalPrediction.',
                imageSrc: '/assets/aistudio/image_9a8c543b.png',
                imageAlt:
                  'Model architecture diagram showing RNNModel, GNNModel, and TransformerModel projected into WeightedSum and FusionLayer producing FinalPrediction.',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. Stateful Stream Ingestion',
                detail:
                  'Track user clickstreams in real time while preserving session continuity across clusters.',
              },
              {
                stage: '02. Redis Feature Store',
                detail:
                  'Serve low-latency session features and item representations on demand.',
              },
              {
                stage: '03. Multi-Model Inference Layer',
                detail:
                  'Combine RNN, Transformer Attention, and GNN representations to score next-item intent.',
              },
              {
                stage: '04. FastAPI Serving SLA',
                detail:
                  'Return ranked session recommendations reliably at 10K+ QPS within sub-100ms latency.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'Neural Architectures',
              items: 'PyTorch — RNNs, Transformers with Attention, Graph Neural Networks (GNNs)',
            },
            {
              category: 'Feature Store & Streaming',
              items: 'Redis Feature Store, Stateful Distributed Stream Processing',
            },
            {
              category: 'Serving Tier',
              items: 'FastAPI Scalable Model Serving Layer',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'Projection-Based Hybrid Fusion (RNN + GNN + Transformer)',
              rationale:
                'Projecting heterogeneous model embeddings into a shared latent space before WeightedSum and FusionLayer lets sequential, attention, and graph-transition signals reinforce each other without brittle cascading stages.',
            },
            {
              decision: 'Decoupling State via Redis Feature Store & Stateful Streaming',
              rationale:
                'Maintaining distributed session state continuously in Redis rather than reconstructing histories per API request keeps FastAPI workers stateless and predictable under 10K+ QPS load.',
            },
          ],
          resultsAndImpact:
            'Drove a +40% increase in sales across deployed e-commerce sites while reliably serving 10,000+ queries per second (QPS) under 100ms latency—turning anonymous first-time visitors into buyers immediately instead of losing them to bounces.',
          confidentialityNote:
            'Client platform identity, proprietary catalog schemas, feature engineering weights, and production cluster configurations are confidential under NDA; the neural fusion and serving architecture are shared at a high level.',
        },
      },
      {
        id: 'streaming-analytics-personalization',
        title: 'Real-Time Streaming Analytics & Personalization Architecture',
        subtitle: 'Distributed Event Processing & Multi-Armed Bandits',
        company: 'Numinix',
        period: 'Jan 2025 – Apr 2026',
        categoryId: 'recsys',
        categoryLabel: 'RecSys & Search',
        highlightMetric: '100K+ Events/min · <200ms Latency',
        summary:
          'Highly available distributed streaming platform processing 100K+ events/min under 200ms latency using Apache Spark Streaming, Kafka, Multi-Armed Bandits, Prometheus, Grafana, and MLflow.',
        tags: [
          'Apache Spark Streaming',
          'Apache Kafka',
          'Multi-Armed Bandits',
          'Prometheus & Grafana',
          'MLflow',
        ],
        story: {
          projectOverview:
            'A highly available distributed event-streaming and online personalization architecture built at Numinix, sustaining 100,000+ events per minute under 200ms latency with dynamic Multi-Armed Bandit personalization and full-stack observability.',
          businessContext:
            'High-velocity digital products generate continuous streams of user interactions where personalization strategies must adapt immediately to live traffic behavior—and engineering teams need real-time telemetry to catch latency spikes or model degradation before user experience drops.',
          challenge:
            'Batch ETL pipelines introduce multi-hour delays that make personalization stale during live campaigns. Conversely, moving to real-time streaming introduces operational risks: backpressure at 100K+ events/min, cold-start exploration vs. exploitation trade-offs, and silent model drift if infrastructure and ML metrics are disconnected.',
          myRole:
            'I engineered the Apache Kafka and Apache Spark Streaming data pipeline, deployed Multi-Armed Bandit algorithms for adaptive personalization, and integrated end-to-end system and ML observability via Prometheus, Grafana, and MLflow.',
          solutionDesign:
            'I separated asynchronous event ingestion (Kafka Producer & Topics) from stream transformation (Spark Streaming, Stream Preprocessor, Graph Builder, Feature Engineering) and model serving. Multi-Armed Bandits balance real-time exploration and exploitation on incoming feedback, while the runtime lifecycle continuously pushes operational latency and model health telemetry into Prometheus, Grafana, and MLflow.',
          solutionArchitecture: {
            overview:
              'Kafka Producers and Topics feed Spark Streaming workers across preprocessing, graph building, feature engineering, model checkpoints, and the Prediction Service—monitored continuously by Metrics Collector, Model Monitor, Prometheus, Grafana, and MLflow.',
            diagrams: [
              {
                id: 'streaming-lifecycle',
                tabLabel: '01. Runtime Lifecycle',
                title: '01. Streaming Engine, Prediction Service & Health Monitoring Lifecycle',
                caption:
                  'Configuration loading & initialization → Start Spark Streaming, Prediction Service & Stream Handler → Process Incoming Events, Generate Predictions, Update Metrics & Monitor System Health → Graceful Shutdown.',
                imageSrc: '/assets/aistudio/image_263aa0dc.png',
                imageAlt:
                  'Runtime lifecycle flowchart showing Initialization, Start Spark Streaming, Start Prediction Service, Start Stream Handler, Process Incoming Events, Generate Predictions, Update Metrics, Monitor System Health, and Shutdown System.',
              },
              {
                id: 'streaming-pipeline',
                tabLabel: '02. Streaming & Monitoring',
                title: '02. Kafka Ingestion, Stream Preprocessing & Observability Pipeline',
                caption:
                  'Kafka Producer & Topic → Spark Streaming → Stream Preprocessor, Graph Builder & Feature Engineering → Model Pipeline, Serving Layer & Monitoring (Metrics Collector + Model Monitor).',
                imageSrc: '/assets/aistudio/image_d93d0197.png',
                imageAlt:
                  'Distributed streaming architecture showing Kafka Producer, Kafka Topic, Spark Streaming, Stream Preprocessor, Graph Builder, Feature Engineering, Model Pipeline, Serving Layer, and Monitoring.',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. Event Ingestion (Kafka)',
                detail:
                  'Ingest high-volume user event streams into partitioned Kafka topics with high availability.',
              },
              {
                stage: '02. Stream Processing (Spark)',
                detail:
                  'Process 100K+ events/min in Apache Spark Streaming within a sub-200ms latency budget.',
              },
              {
                stage: '03. Dynamic Personalization (Bandits)',
                detail:
                  'Deploy Multi-Armed Bandit algorithms to adapt recommendations continuously from live feedback.',
              },
              {
                stage: '04. System & ML Observability',
                detail:
                  'Track throughput, latency, model health, and experiment lineage via Prometheus, Grafana, and MLflow.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'Distributed Streaming',
              items: 'Apache Kafka, Apache Spark Streaming',
            },
            {
              category: 'Online Personalization',
              items: 'Multi-Armed Bandit Algorithms, Dynamic Feature Engineering & Graph Building',
            },
            {
              category: 'Observability & MLOps',
              items: 'Prometheus, Grafana, MLflow',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'Multi-Armed Bandits over Static Periodic Retraining',
              rationale:
                'Bandits balance exploration of fresh candidates and exploitation of high-performing options continuously on streaming feedback, eliminating cold-start lag between batch training runs.',
            },
            {
              decision: 'Unified Infrastructure & Model Telemetry Lifecycle',
              rationale:
                'Embedding Metrics Collector and Model Monitor directly alongside the Prediction Service and Spark Stream Handler lets operators correlate infrastructure latency (Prometheus/Grafana) with model behavior (MLflow) in real time.',
            },
          ],
          resultsAndImpact:
            'Sustained 100,000+ events/min throughput at sub-200ms end-to-end latency in high-availability production with continuous health and model monitoring.',
          confidentialityNote:
            'Client traffic characteristics, reward formulations, and internal alerting thresholds are confidential under NDA; the distributed streaming lifecycle and observability architecture are presented at a high level.',
        },
      },
      {
        id: 'product-discovery-hybrid-search',
        title: 'Product Discovery & Hybrid Search Optimization',
        subtitle: 'Domain NER + Dense & Sparse Retrieval',
        company: 'Numinix',
        period: 'Jan 2025 – Apr 2026',
        categoryId: 'recsys',
        categoryLabel: 'RecSys & Search',
        highlightMetric: '~70% Fewer Zero-Result Queries',
        summary:
          'End-to-end product understanding and hybrid search pipeline combining fine-tuned BERT NER with FAISS dense vectors and BM25 sparse retrieval to convert missed searches into sales.',
        tags: ['Fine-Tuned BERT (NER)', 'FAISS', 'BM25', 'Hybrid Search'],
        story: {
          projectOverview:
            'An end-to-end product understanding and hybrid search system built at Numinix that combines domain-tuned BERT Named Entity Recognition (NER) with FAISS dense vector search and BM25 sparse retrieval so shoppers reliably find in-stock products.',
          businessContext:
            'Across online stores, shoppers frequently searched for items that were actually in stock in the catalog yet received zero matching results—abandoning sessions and costing the business direct, high-intent sales opportunities.',
          challenge:
            'Both single-paradigm search approaches fail on messy real-world queries: pure lexical search (BM25) breaks whenever shoppers phrase attributes differently from catalog titles, whereas pure dense vector search blurs exact model codes, SKUs, or constrained attributes—producing both poor recall and degraded precision.',
          myRole:
            'I fine-tuned BERT for domain-specific Named Entity Recognition (NER) within the end-to-end product understanding pipeline, and designed and optimized the Hybrid Search architecture integrating FAISS dense vector embeddings with BM25 sparse retrieval.',
          solutionDesign:
            'I structured query and catalog understanding upstream before retrieval. First, the fine-tuned BERT NER model parses unstructured user queries and product text into explicit domain entities and attributes. Then, a hybrid search tier runs FAISS dense vector retrieval alongside BM25 sparse lexical matching in parallel, unifying semantic intent matching with exact attribute precision.',
          solutionArchitecture: {
            overview:
              'Unstructured product catalog entries and incoming search queries pass through fine-tuned BERT NER for structured entity extraction prior to parallel FAISS dense similarity search and BM25 sparse retrieval.',
            illustrativeFlow: [
              {
                stage: '01. Domain-Specific NER (BERT)',
                detail:
                  'Extract key product entities and attributes from unstructured queries and catalog text.',
              },
              {
                stage: '02. Dense + Sparse Retrieval',
                detail:
                  'Execute FAISS dense vector similarity alongside BM25 sparse lexical matching.',
              },
              {
                stage: '03. Hybrid Ranking Output',
                detail:
                  'Unify semantic recall and exact-match precision to eliminate dead-end searches.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'NLP & Product Understanding',
              items: 'Fine-Tuned BERT (Domain-Specific Named Entity Recognition)',
            },
            {
              category: 'Hybrid Retrieval',
              items: 'FAISS Dense Vector Index, BM25 Sparse Retrieval',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'Domain Fine-Tuned BERT NER Upstream of Retrieval',
              rationale:
                'Extracting explicit product entities rather than feeding raw unparsed query strings lets the retrieval layer separate descriptive intent from hard product attributes.',
            },
            {
              decision: 'Combining FAISS Dense Vectors with BM25 Sparse Matching',
              rationale:
                'FAISS recovers semantically equivalent synonyms when keywords diverge, while BM25 guarantees exact lexical fidelity for specific model names, brands, and technical attributes.',
            },
          ],
          resultsAndImpact:
            'Cut zero-result searches by approximately 70% while improving recall and precision—directly converting previously lost product searches into completed sales.',
          confidentialityNote:
            'Client catalog taxonomy, labeled NER training datasets, and exact ranking weights remain proprietary under NDA; the product understanding and hybrid search pipeline are presented at a high level.',
        },
      },
      {
        id: 'enterprise-agentic-orchestration',
        title: 'Enterprise Agentic AI & LLM Orchestration',
        subtitle: 'Stateful Multi-Agent Customer Support Platform',
        company: 'Numinix',
        period: 'Jan 2025 – Apr 2026',
        categoryId: 'agentic',
        categoryLabel: 'Agentic AI',
        highlightMetric: '>60% Escalation Reduction',
        summary:
          'Production multi-agent customer support platform built with LangGraph and LangChain that resolves routine inquiries autonomously—cutting human escalations by >60%, lowering support costs, and speeding up resolution.',
        tags: ['LangGraph', 'LangChain', 'Tool Calling', 'Dynamic Memory', 'Hybrid Search'],
        story: {
          projectOverview:
            'Designed and deployed at Numinix, this enterprise multi-agent customer support platform autonomously handles routine customer inquiries using LangGraph and LangChain, reducing human-agent escalations by over 60% so support staff can focus on harder cases.',
          businessContext:
            'Enterprise customer support teams were bogged down by high volumes of routine requests alongside complex multi-turn account and policy issues. Slow queues and repetitive handoffs drove up support costs and risked losing frustrated customers.',
          challenge:
            'Stateless single-turn FAQ bots break as soon as a user’s issue spans multiple conversational turns, requires fetching live context via backend tools, or depends on nuanced policy retrieval—forcing repetitive human handoffs.',
          myRole:
            'I designed and deployed the stateful multi-agent reasoning workflow using LangGraph and LangChain, implemented structured tool calling, dynamic memory management, and hybrid vector search, and optimized LLM inference pipelines for reliable production execution.',
          solutionDesign:
            'I modeled customer resolution as a stateful graph in LangGraph rather than linear prompt chaining. Specialized agent nodes coordinate dynamically over conversation memory, retrieve authoritative policy context through Hybrid Search over vector databases, and execute verified backend actions via structured Tool Calling—escalating cleanly to human agents only when case complexity warrants manual intervention.',
          solutionArchitecture: {
            overview:
              'LangGraph state graphs coordinate multi-step reasoning across specialized support nodes backed by dynamic memory, hybrid vector search over enterprise knowledge, and structured tool calling with optimized LLM inference.',
            illustrativeFlow: [
              {
                stage: '01. Stateful Reasoning Graph',
                detail:
                  'Route customer intent across LangGraph nodes with dynamic conversation memory.',
              },
              {
                stage: '02. Hybrid Knowledge Retrieval',
                detail:
                  'Query vector databases via hybrid search for accurate policy and product grounding.',
              },
              {
                stage: '03. Tool Execution & Inference Tuning',
                detail:
                  'Invoke structured backend tools and fall back cleanly to human agents only when warranted.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'Agent Frameworks',
              items: 'LangGraph, LangChain, Stateful Reasoning Workflows',
            },
            {
              category: 'Retrieval & Capabilities',
              items: 'Structured Tool Calling, Dynamic Memory Management, Hybrid Vector Search',
            },
            {
              category: 'Inference & Optimization',
              items: 'LLM Inference Pipeline Optimization',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'Stateful LangGraph Workflows with Dynamic Memory',
              rationale:
                'Graph-based state transitions preserve verified context across multi-turn troubleshooting and support deterministic routing and safe fallback paths compared to unconstrained prompt loops.',
            },
            {
              decision: 'Hybrid Vector Search + Structured Tool Calling',
              rationale:
                'Separating static policy grounding (hybrid retrieval) from live operational lookups/actions (structured tool schemas) minimizes hallucinated support answers and ensures predictable backend execution.',
            },
          ],
          resultsAndImpact:
            'Reduced human-agent customer support escalations by over 60% in production—freeing human agents for complex cases while delivering lower support costs and faster service that improves customer retention.',
          confidentialityNote:
            'Enterprise client identity, internal support policies, proprietary API schemas, and customer interaction transcripts are confidential under NDA; the orchestration design is presented at an architectural level.',
        },
      },
    ],
    expertise: [
      {
        id: 'agentic-ai',
        domain: 'Generative AI & Agent Engineering',
        summary:
          'Stateful multi-agent workflows with bounded roles, tool/function calling, and dynamic memory.',
        capabilities: [
          'LangGraph, LangChain, LlamaIndex, CrewAI, Deep Agents',
          'OpenAI, Anthropic (Claude / AWS Bedrock), Azure OpenAI',
          'Tool / Function Calling & MCP Integrations (Meta Ads MCP)',
          'Stateful Memory Management & SSE Progress Streaming',
        ],
      },
      {
        id: 'rag-search',
        domain: 'Hybrid RAG & Intelligent Search',
        summary:
          'Retrieval architectures engineered for high recall, domain structure, and multilingual accuracy.',
        capabilities: [
          'Hybrid Search (Dense Vectors + BM25 + RRF Fusion)',
          'Cross-Encoders, Source-Capped Re-Ranking & Query Planning',
          'Vector Databases: PostgreSQL pgvector, ChromaDB, FAISS, Supabase',
          'Custom Document Chunking & Arabic / Multilingual NLP',
        ],
      },
      {
        id: 'dl-recsys',
        domain: 'Deep Learning, Fine-Tuning & RecSys',
        summary:
          'Training, adapting, and serving neural architectures for recommendations, NER, and forecasting.',
        capabilities: [
          'PyTorch, TensorFlow, Hugging Face Transformers, scikit-learn',
          'BERT, LLaMA, PEFT, QLoRA Fine-Tuning',
          'Session-Based RecSys (RNN, Transformer Attention, GNN)',
          'Multi-Armed Bandits, Collaborative Filtering & ARIMA',
        ],
      },
      {
        id: 'distributed-data',
        domain: 'Distributed Systems & Data Engineering',
        summary:
          'Low-latency streaming pipelines, feature stores, and ETL infrastructure for real-time ML.',
        capabilities: [
          'Apache Kafka & Apache Spark (Streaming & SQL)',
          'Redis Feature Stores & Stateful Stream Processing',
          'Apache Airflow, SQLAlchemy, MySQL, PostgreSQL, Alembic',
          'Microservices Architecture & ETL Pipelines',
        ],
      },
      {
        id: 'mlops-cloud',
        domain: 'LLM Infrastructure, Cloud & MLOps',
        summary:
          'Serving, containerizing, monitoring, and securing AI workloads in production.',
        capabilities: [
          'vLLM, TensorRT, Inference Optimization & FastAPI Serving',
          'Docker, Docker Compose, Kubernetes, Nginx & SSL',
          'AWS, Google Cloud Platform (GCP), Azure & CI/CD',
          'Observability & Tracking: MLflow, Prometheus, Grafana',
        ],
      },
      {
        id: 'core-swe',
        domain: 'Core Software Engineering & Product Framing',
        summary:
          'Strong algorithmic fundamentals paired with clear stakeholder problem framing.',
        capabilities: [
          'Python, C++, SQL, TypeScript/React (Full-Stack Integration)',
          'Object-Oriented Design (OOP), Data Structures & Algorithms',
          'Evaluation Suites from Real Failure Scenarios',
          'Connecting Technical Architecture to Business Bottlenecks',
        ],
      },
    ],
    experience: [
      {
        id: 'transformix',
        role: 'AI Engineer',
        company: 'Transformix Digital Solutions',
        period: 'May 2026 – Present',
        location: 'Egypt',
        context:
          'Building production multi-agent platforms, Arabic legal RAG systems, and full-stack AI learning products.',
        highlights: [
          'Developed an AI-Powered Media Buying Platform with specialized Research, Analysis, Creative, and Copywriter agents orchestrated via LangGraph and FastAPI with SSE progress tracking, AWS Bedrock (Claude), Meta Ads MCP, web search, and PostgreSQL/Alembic.',
          'Built LawAgent, an Arabic RAG assistant over 171 Saudi labour-law documents (~3,900 pages / 4,011 intact article chunks) with a five-path hybrid retriever, hitting 100% precision@1 on article lookup, 97.5% top-6 recall, and raising scenario recall from 38% to 71%.',
          'Architected and deployed Diomedia AI Assistant, a full-stack RAG German learning platform using LangChain, PostgreSQL pgvector, Azure OpenAI, React/TypeScript, JWT RBAC admin controls, and Docker Compose behind Nginx with automated SSL.',
        ],
      },
      {
        id: 'numinix',
        role: 'AI Engineer',
        company: 'Numinix',
        period: 'Jan 2025 – Apr 2026',
        location: 'Egypt',
        context:
          'Designing high-concurrency recommendation systems, hybrid search optimization, enterprise agentic support, and streaming analytics.',
        highlights: [
          'Architected a High-Concurrency Session-Based Recommendation System (RNNs, Transformers with Attention, GNNs) with stateful stream processing, FastAPI, and a Redis feature store serving 10K+ QPS at sub-100ms latency.',
          'Fine-tuned BERT for domain-specific NER and engineered a Hybrid Search pipeline (FAISS + BM25), driving a 70% reduction in zero-result queries.',
          'Deployed an Enterprise Agentic AI customer support platform with LangGraph, LangChain, Tool Calling, dynamic memory, and Hybrid Search—reducing human-agent escalation by over 60%.',
          'Engineered a Real-Time Streaming Analytics & Personalization architecture processing 100K+ events/min at sub-200ms latency (Apache Spark Streaming, Kafka, Multi-Armed Bandits, Prometheus, Grafana, MLflow), alongside Predictive Modeling & Demand Forecasting (Collaborative Filtering, Content-Based models, MySQL/SQLAlchemy ETL, ARIMA).',
        ],
      },
      {
        id: 'sprints',
        role: 'AI & ML Intern',
        company: 'Sprints',
        period: 'Dec 2024 – Apr 2025',
        location: 'Cairo, Egypt',
        context:
          'Delivered production-ready NLP and deep learning systems within an agile engineering team.',
        highlights: [
          'Developed an adaptive AI learning platform featuring a conversational tutor powered by LangGraph workflows for multi-step reasoning, dynamic curriculum generation, and contextual Q&A.',
          'Built scalable NLP pipelines for real-time intent classification and entity extraction, containerized via Docker and integrated with Supabase Vector for efficient retrieval.',
        ],
      },
    ],
    achievements: [
      {
        id: 'ach-media-buying',
        metric: '+47%',
        label: 'Increase in Clients Served',
        context:
          'AI-Powered Media Buying Platform replaced weeks of manual brief-to-campaign prep and Meta Ads management, enabling the team to serve more clients without proportional hiring.',
      },
      {
        id: 'ach-omnichannel',
        metric: '+40%',
        label: 'Qualified Leads Captured & Synced',
        context:
          'Omnichannel Lead Agent automated Facebook, WhatsApp, and Instagram triage into Odoo CRM with draft price quotations held for human pricing approval.',
      },
      {
        id: 'ach-recsys-sales',
        metric: '+40%',
        label: 'E-Commerce Sales Lift (10K+ QPS · <100ms)',
        context:
          'Session-Based Recommendation System captured live browsing intent for first-time anonymous visitors across deployed e-commerce stores.',
      },
      {
        id: 'ach-lawagent',
        metric: '+25%',
        label: 'Client Leads · 100% P@1 Legal Lookup',
        context:
          'LawAgent indexed 4,011 Saudi labour-law chunks (97.5% Recall@6, 38% → 71% scenario recall) and converted complex inquiries into booked Paymob consultations.',
      },
      {
        id: 'ach-search',
        metric: '~70%',
        label: 'Reduction in Zero-Result Store Searches',
        context:
          'Achieved at Numinix via domain BERT NER and FAISS + BM25 hybrid search optimization—turning previously lost product searches into sales.',
      },
      {
        id: 'ach-escalation',
        metric: '>60%',
        label: 'Reduction in Human Support Escalations',
        context:
          'Enterprise Agentic AI support handled routine inquiries autonomously via LangGraph and hybrid search, lowering support cost and speeding up customer retention.',
      },
      {
        id: 'ach-recsys',
        metric: '10K+ QPS',
        label: 'Session-Based RecSys Inference Throughput',
        context:
          'Multi-model distributed recommendation engine (RNN, Transformer, GNN) served with FastAPI and Redis feature store under sub-100ms latency.',
      },
      {
        id: 'ach-streaming',
        metric: '100K+/min',
        label: 'Real-Time Streaming Events at <200ms Latency',
        context:
          'High-availability Apache Spark Streaming and Kafka personalization platform monitored via Prometheus, Grafana, and MLflow.',
      },
      {
        id: 'ach-ecpc',
        metric: 'ECPC / ACPC',
        label: 'Egyptian Collegiate Programming Competition (2021–2022)',
        context:
          'Competitive programming experience focused on advanced algorithms and data structures optimization.',
        link: 'https://drive.google.com/file/d/1HNHTNU87ZlWn6nbnM1JVjqV3ZaGieCp0/view?usp=drivesdk',
      },
    ],
    education: [
      {
        id: 'damanhour-cs',
        degreeOrCert: 'Bachelor’s Degree in Computer Science',
        institution: 'Damanhour University — Faculty of Computers and Information',
        period: '2020 – June 2024',
        notes: 'GPA: 3.4 / 4.0',
      },
    ],
    certifications: [
      {
        id: 'cert-sprints-genai',
        degreeOrCert: 'Generative AI Techniques Specialization',
        institution: 'Sprints AI Academy & American Center Cairo',
        period: '2025',
        notes: 'Advanced LLMs, Agentic Frameworks, QLoRA, and Production ML.',
      },
      {
        id: 'cert-dlai',
        degreeOrCert: 'Supervised Machine Learning',
        institution: 'DeepLearning.AI (Coursera)',
        period: '2024',
        notes: 'Core supervised learning foundations and model evaluation.',
      },
      {
        id: 'cert-google-data',
        degreeOrCert: 'Data, Data Everywhere',
        institution: 'Google (Google Cloud Skills Boost)',
        period: '2024',
        notes: 'Data analytics workflows and structured data foundations.',
      },
    ],
    community: [
      {
        id: 'gdg-damanhur',
        role: 'Active Contributor & Member',
        organization: 'Google Developer Groups (GDG) Damanhur',
      },
      {
        id: 'students-union',
        role: 'Students’ Union Representative',
        organization: 'Faculty of Computers and Information, Damanhour University',
      },
    ],
    contact: {
      heading: 'Let’s talk about the bottleneck you need to solve.',
      subtext:
        'Open to discussing AI engineering roles, production agentic workflows, hybrid RAG systems, and scalable ML architecture.',
      email: 'salmawaheed8421@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/in/salma-waheed-148a50226',
      linkedinLabel: 'LinkedIn',
      githubUrl: 'https://github.com/Salmawaheed3',
      githubLabel: 'GitHub',
    },
  },

  ar: {
    ui: {
      nav: {
        about: 'نبذة عني',
        projects: 'المشاريع',
        expertise: 'الخبرات التقنية',
        experience: 'الخبرة العملية',
        education: 'التعليم',
        contact: 'تواصل معي',
        openMenu: 'فتح قائمة التنقل',
        closeMenu: 'إغلاق قائمة التنقل',
      },
      hero: {
        primaryCta: 'استعراض المشاريع',
        secondaryCta: 'تواصل معي',
        languageLabel: 'اللغة',
      },
      sections: {
        about: { index: '01', eyebrow: 'منهجية العمل الهندسية' },
        projects: {
          index: '02',
          eyebrow: 'أبرز المشاريع',
          title: 'أنظمة إنتاجية ودراسات حالة',
          description:
            'اضغط على أي مشروع عشان تشوف الـ Business Context، الـ Bottleneck الحقيقي، القرارات المعمارية، والنتائج الموثقة.',
          filterLabel: 'تصفية المشاريع حسب المجال',
          readCaseStudy: 'قراءة تفاصيل المشروع',
          livePlatform: 'زيارة المنصة',
          diagramsLabel: 'مخططات معمارية',
          categories: [
            { id: 'all', label: 'الكل' },
            { id: 'agentic', label: 'Agentic AI' },
            { id: 'rag', label: 'RAG & LLMs' },
            { id: 'recsys', label: 'RecSys & Search' },
          ],
        },
        expertise: {
          index: '03',
          eyebrow: 'الخبرات التقنية',
          title: 'مقسمة حسب المجال الهندسي',
          description:
            'قدرات عملية في أنظمة الـ Multi-Agent، الـ Hybrid RAG، أنظمة التوصيات عالية التزامن، وتشغيل نماذج الـ ML في الـ Production.',
        },
        experience: {
          index: '04',
          eyebrow: 'الخبرة العملية',
          title: 'المسار المهني والمسؤوليات الهندسية',
        },
        achievements: {
          index: '05',
          eyebrow: 'نتائج موثقة',
          title: 'أرقام حقيقية ومؤشرات أداء من الـ Production',
          description:
            'مقاييس تشغيل، نتائج مبيعات وعملاء موثقة، تقييم retrieval، وإنجازات برمجية.',
          viewCredential: 'عرض الشهادة',
        },
        education: {
          index: '06',
          eyebrow: 'الخلفية الأكاديمية',
          title: 'التعليم، الشهادات، والأنشطة المجتمعية',
          academicHeading: 'التعليم الأكاديمي',
          communityHeading: 'المشاركة المجتمعية',
          certificationsHeading: 'الشهادات التدريبية',
        },
        contact: {
          index: '07',
          eyebrow: 'التواصل',
          emailLabel: 'البريد الإلكتروني',
          sendEmail: 'إرسال إيميل',
          copy: 'نسخ',
          copied: 'تم النسخ',
          copyAria: 'نسخ البريد الإلكتروني',
          connect: 'تواصل عبر LinkedIn',
          viewRepos: 'استعراض GitHub',
        },
        modal: {
          closeLabel: 'إغلاق تفاصيل المشروع',
          backToProjects: 'العودة إلى المشاريع',
          caseStudyLabel: 'دراسة حالة تفصيلية',
          companyLabel: 'الجهة / الشركة',
          periodLabel: 'الفترة الزمنية',
          domainLabel: 'المجال',
          verifiedOutcomeLabel: 'النتيجة الموثقة',
          livePlatformLabel: 'المنصة الحية',
          visitLivePlatform: 'زيارة المنصة الحية',
          contentsLabel: 'أقسام الشرح',
          previousProject: 'المشروع السابق',
          nextProject: 'المشروع التالي',
          viewAllProjects: 'كل المشاريع',
          projectOverview: 'نظرة عامة على المشروع',
          businessContext: 'السياق التجاري (Business Context)',
          challenge: 'التحدي الهندسي ونقطة الاختناق',
          myRole: 'دوري الهندسي في المشروع',
          solutionDesign: 'تصميم الحل (Solution Design)',
          systemArchitecture: 'معمارية النظام (System Architecture)',
          systemDiagramsTitle: 'المخططات المعمارية الفعلية للنظام والموديل',
          diagramsBadge: 'معمارية النظام الفعلية',
          expandDiagram: 'تكبير المخطط',
          closeDiagram: 'إغلاق معاينة المخطط',
          systemFlowTitle: 'مسار عمل النظام (High-Level Flow)',
          illustrativeBadge: 'رسم توضيحي لمسار النظام',
          technicalStack: 'التقنيات المستخدمة (Technical Stack)',
          keyEngineeringDecisions: 'أبرز القرارات الهندسية (Key Engineering Decisions)',
          resultsAndImpact: 'النتائج والأثر التجاري (Results & Business Impact)',
          confidentialityNote: 'ملاحظة السرية والخصوصية',
        },
        footer: {
          philosophy: 'منهجية العمل',
          caseStudies: 'المشاريع',
          experience: 'الخبرة العملية',
          contact: 'التواصل',
        },
      },
    },
    profile: {
      name: 'سلمى وحيد',
      title: 'مهندسة ذكاء اصطناعي وتعلم آلي',
      location: 'القاهرة، مصر',
      positioningStatement:
        'مهندسة AI و Machine Learning بخبرة سنتين في بناء أنظمة LLM جاهزة للـ Production، و Multi-Agent Workflows، وأنظمة Hybrid RAG، ومنصات التوصيات عالية التزامن. ببدأ دايماً من فهم الـ Business Bottleneck الحقيقي، وأختار أبسط Architecture تحل المشكلة باعتمادية وتوصل لنتيجة ملموسة في التشغيل.',
      heroHighlights: [
        'LangGraph & Multi-Agent Workflows',
        'Hybrid RAG & Arabic NLP',
        'High-Concurrency RecSys & Search',
        'Production MLOps & Streaming',
      ],
    },
    about: {
      heading: 'هندسة الذكاء الاصطناعي الصح بتبدأ بتشخيص الـ Bottleneck الحقيقي، مش باختيار الموديل.',
      paragraphs: [
        'على مدار سنتين من شحن أنظمة AI في بيئة الـ Production — من أنظمة الـ Multi-Agent و الـ Arabic Legal RAG في Transformix Digital Solutions، لأنظمة التوصيات عالية التزامن ووكلاء الدعم الذكيين في Numinix — اتعلمت إن اختيار الـ Model نادراً ما بيكون أصعب جزء في الشغل.',
        'القيمة الحقيقية بتيجي لما تفهم الـ Workflow التشغيلي الأول: تعرف فين الـ Latency بتضيع، ليه الـ Search بيرجع نتائج فاضية، ليه الـ LLM بيهلوس في الحالات القانونية المركبة، أو ليه Prompt واحد كبير بيتكسر تحت منطق بيزنس متعدد الخطوات.',
        'بشتغل براحة ما بين التواصل مع الـ Stakeholders، تصميم الـ Solution Architecture، والتنفيذ الهندسي العملي — وبربط PyTorch و LangGraph و Hybrid Retrieval و Distributed Data Pipelines مباشرة بنتائج تشغيلية واضحة.',
      ],
      workflowSteps: [
        {
          step: '01',
          title: 'اكتشاف الـ Bottleneck',
          description:
            'ترجمة مشاكل الـ Stakeholders لقيود تقنية واضحة، والفصل بين اللي محتاج منطق برمجي محدد واللي محتاج Retrieval أدق أو Agentic Reasoning.',
        },
        {
          step: '02',
          title: 'تصميم الـ Architecture والـ Trade-offs',
          description:
            'التصميم على أساس القيود الفعلية: دقة على مستوى المادة القانونية، زمن استجابة تحت 100ms، أو اعتمادية في تنفيذ الـ Tools.',
        },
        {
          step: '03',
          title: 'بناء مبني على الـ Evaluation',
          description:
            'تأسيس الـ Retrieval والـ Orchestration على اختبارات مبنية من أخطاء حقيقية و Structured Tool Calling و Observability بدل التخمين.',
        },
        {
          step: '04',
          title: 'إطلاق الـ Production',
          description:
            'تسليم خدمات قابلة للقياس والتشغيل المستقر باستخدام FastAPI و PostgreSQL/pgvector و Redis و Kafka و Docker.',
        },
      ],
    },
    projects: [
      {
        id: 'media-buying-platform',
        title: 'منصة Media Buying مدعومة بالذكاء الاصطناعي',
        subtitle: 'أتمتة الحملات الإعلانية عبر نظام Multi-Agent',
        company: 'Transformix Digital Solutions',
        period: 'مايو 2026 – الآن',
        categoryId: 'agentic',
        categoryLabel: 'Agentic AI',
        highlightMetric: 'زيادة 47%+ في عدد العملاء',
        summary:
          'منصة Multi-Agent تبدأ من بيانات العميل (Brief) وتستبدل أسابيع من التحضير اليدوي ببحث السوق، كتابة الإعلانات، والتكامل المباشر مع Meta Ads — محققة زيادة 47%+ في عدد العملاء.',
        tags: ['LangGraph', 'AWS Bedrock (Claude)', 'Meta Ads MCP', 'FastAPI', 'PostgreSQL'],
        story: {
          projectOverview:
            'منصة تم تطويرها في Transformix Digital Solutions تبدأ مباشرة من الـ Brief الخاص بالعميل لتوليد دراسة السوق والمنافسين، تحليل الأداء، ابتكار أفكار الإعلانات وكتابة نصوصها الجاهزة، وإدارة الحملات مباشرة عبر Meta Ads من مكان واحد بنظام Multi-Agent مبني على LangGraph و AWS Bedrock (Claude).',
          businessContext:
            'قبل أي حملة إعلانية، كانت الوكالة تصرف أسابيع من الشغل اليدوي في دراسة السوق والمنافسين وتحليل الأداء وكتابة أفكار الإعلانات والنصوص. كل عميل جديد كان يعني ساعات عمل إضافية كبيرة، مما ربط نمو الوكالة مباشرة بزيادة عدد الموظفين.',
          challenge:
            'استبدال أسابيع التحضير اليدوي يتطلب تنسيق أربع مراحل متداخلة من الـ Brief الأولي: ذكاء السوق والمنافسين، تحليل الأرقام، صياغة الإعلانات والـ Hooks، وإدارة Meta Ads المباشرة. حشر كل ذلك في Prompt واحد يجعل النظام هشاً ويخلط السياق ويمنع متابعة التنفيذ لحظياً.',
          myRole:
            'قمت بتصميم وبناء طبقة تنسيق الوكلاء باستخدام LangGraph، وربط AWS Bedrock (Claude) مع Function Calling وأدوات Meta Ads MCP والبحث على الويب، وتطوير الـ FastAPI Backend مع بث التقدم لحظياً عبر SSE وحفظ البيانات في PostgreSQL مع Alembic، وربطه بواجهة React و Vite و Tailwind CSS.',
          solutionDesign:
            'بدلاً من الاعتماد على وكيل واحد عام، تم تقسيم دورة العمل على أربعة وكلاء متخصصين: Research و Analysis و Creative و Copywriter. تبدأ المنصة من الـ Brief وتنفذ أربع مراحل متصلة في مساحة عمل متكاملة مع Meta Ads: (1) Market Intelligence (فرز مكتبة الإعلانات وتحليل لقطات الأداء)، (2) Creative Strategy (أفكار إعلانية ونصوص جاهزة للاستخدام)، (3) Campaign Launch & Budget (إعداد ABO/CBO ومراجعة QA وقواعد أول 72 ساعة عبر Meta Ads MCP)، و (4) Own Ads Analysis (تصنيف الأداء إلى KILL/KEEP/SCALE/ITERATE/HOLD) مع حلقات راجعة لتحسين الإعلانات والميزانيات.',
          solutionArchitecture: {
            overview:
              'Backend مبني بـ FastAPI يدير الـ LangGraph Multi-Agent Workflow ويبث تحديثات حالة كل مرحلة لحظياً إلى واجهة React/Vite/Tailwind عبر Server-Sent Events (SSE)، مع تكامل Meta Ads MCP و Higgsfield وحفظ حالة الحملات في PostgreSQL.',
            diagrams: [
              {
                id: 'media-buying-skill-chain',
                tabLabel: '01. سلسلة المهارات',
                title: '01. AI Media Buyer Agent — سلسلة المهارات وحلقات التحسين',
                caption:
                  'Claude agent يوجّه التنفيذ حسب النية عبر Meta Ads MCP و Higgsfield خلال 4 مراحل: (1) Market intelligence (قائمة Ad Library + تحليل معمق)، (2) Creative strategy، (3) Campaign launch + budget (ABO/CBO، مراجعة QA، قواعد أول 72 ساعة ← الإطلاق عبر Meta Ads MCP)، و (4) Own ads analysis (تشخيص CPA/ROAS ← KILL/KEEP/SCALE/ITERATE/HOLD) مع حلقات راجعة لتحسين الـ Creatives وتعديل الميزانية.',
                imageSrc: '/assets/aistudio/image_b56364b6.png',
                imageAlt:
                  'مخطط سلسلة مهارات وكيل الميديا باينج يوضح اتصال Meta Ads MCP و Higgsfield بـ Claude agent وتمرير المراحل الأربعة مع حلقات Iterate creatives و Adjust budget.',
                surfaceTone: 'light',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. وكلاء البحث والتحليل (Research & Analysis)',
                detail:
                  'جمع سياق السوق عبر Web Search وسحب بيانات الأداء عبر Meta Ads MCP Tools.',
              },
              {
                stage: '02. وكلاء الإبداع والكتابة (Creative & Copywriter)',
                detail:
                  'تحويل نتائج البحث والتحليل لمحتوى إعلاني وتصورات إبداعية مهيكلة.',
              },
              {
                stage: '03. بث التقدم لحظياً عبر SSE',
                detail:
                  'إرسال تحديثات كل خطوة من FastAPI إلى واجهة React في الوقت الحقيقي.',
              },
              {
                stage: '04. حفظ الحالة في PostgreSQL',
                detail:
                  'تخزين إعدادات الحملات ومخرجات الأدوات والتكرارات باستخدام Alembic migrations.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'تنسيق الوكلاء والنماذج',
              items: 'LangGraph, AWS Bedrock (Claude), Structured Function Calling',
            },
            {
              category: 'التكاملات والأدوات الخارجية',
              items: 'Meta Ads MCP, Higgsfield, Web Search',
            },
            {
              category: 'الواجهة الخلفية وقاعدة البيانات',
              items: 'FastAPI, Server-Sent Events (SSE), PostgreSQL, Alembic',
            },
            {
              category: 'واجهة المستخدم',
              items: 'React, Vite, Tailwind CSS',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'تقسيم الأدوار إلى Multi-Agent بدلاً من Prompt واحد شامل',
              rationale:
                'فصل مهام البحث والتحليل والإبداع والكتابة يحافظ على نظافة السياق لكل وكيل، ويمنع تداخل التعليمات، ويسهّل اختبار وتطوير كل مرحلة بشكل مستقل.',
            },
            {
              decision: 'استخدام Server-Sent Events (SSE) لبث تقدم المهام الطويلة',
              rationale:
                'تنفيذ سلاسل البحث وتشغيل الأدوات يستغرق عدة ثوانٍ؛ استخدام SSE يوفر تحديثات لحظية فوق HTTP قياسي بدون تعقيد WebSockets.',
            },
            {
              decision: 'توحيد التعامل مع منصة الإعلانات عبر Meta Ads MCP',
              rationale:
                'عزل استدعاءات منصة الإعلانات خلف طبقة MCP يضمن حدوداً واضحة وآمنة لتنفيذ الحملات وفصل منطق الـ API عن منطق التوجيه اللغوي.',
            },
          ],
          resultsAndImpact:
            'تحقيق زيادة +47% في عدد العملاء المخدومين مع وقت ومجهود أقل لكل حملة — مما مكّن الوكالة من إطلاق حملات أسرع وبعدد أكبر، واستيعاب عملاء وميزانيات إعلانية أكبر بنفس الفريق دون الحاجة لتوظيف إضافي مماثل.',
          confidentialityNote:
            'تبقى حسابات الإعلانات الخاصة بالعملاء وقواعد العطاءات الداخلية والـ Prompts التفصيلية سرية لشركة Transformix Digital Solutions، وتم عرض المعمارية على مستوى تصميم النظام وسلسلة المهارات.',
        },
      },
      {
        id: 'omnichannel-lead-agent',
        title: 'Omnichannel Lead Agent',
        subtitle: 'مساعد ذكي لالتقاط وتأهيل العملاء عبر السوشيال ميديا و Odoo CRM',
        company: 'حل ذكاء اصطناعي للمبيعات والتسويق',
        period: '2026',
        categoryId: 'agentic',
        categoryLabel: 'Agentic AI',
        highlightMetric: 'زيادة 40%+ في العملاء المحتملين',
        summary:
          'مساعد ذكي موحد يرد على استفسارات Facebook و WhatsApp و Instagram، يصفّي العملاء المحتملين، يسجلهم تلقائياً في Odoo CRM، ويجهّز عرض سعر للمراجعة البشرية قبل الإرسال.',
        tags: ['Facebook', 'WhatsApp', 'Instagram', 'Odoo CRM', 'Lead Qualification', 'Human-in-the-Loop Pricing'],
        story: {
          projectOverview:
            'Omnichannel Lead Agent يلتقط ويؤهل استفسارات العملاء من Facebook و WhatsApp و Instagram في مسار واحد؛ يرد على الأسئلة الشائعة، يفرز العميل المهتم فعلاً عن السائل العادي، يسجل ويحدث بيانات العملاء المؤهلين تلقائياً في Odoo CRM، ويجهّز عرض سعر يتوقف عند الموظف لتحديد السعر والمراجعة قبل الإرسال.',
          businessContext:
            'العملاء يراسلون الشركة يومياً عبر Facebook و WhatsApp و Instagram في وقت واحد. سابقاً، كان الفريق يضطر لفتح كل منصة على حدة وقراءة الرسائل وفرز المهتمين فعلاً يدوياً — ما يهدر وقتاً كبيراً ويؤدي لضياع عملاء مهتمين وسط الزحمة دون رد سريع.',
          challenge:
            'تشتت القنوات أدى لتأخر الردود وضياع فرص بيع جاهزة في طوابير الانتظار، بينما استغرق تحضير عروض الأسعار يدوياً وقتاً إضافياً أبطأ المتابعة. في الوقت نفسه، تتطلب المبيعات إبقاء القرار السعري والمراجعة النهائية في يد الموظف قبل وصول أي عرض للعميل.',
          myRole:
            'انطلاقاً من منهجية البدء من مكان ضياع الوقت والعملاء وبناء أبسط حل عملي بأثر واضح، صممت ونفذت المساعد متعدد القنوات لربط الرد الآلي على الاستفسارات، وتأهيل المحادثات، والمزامنة مع Odoo CRM، وتجهيز مسودات عروض الأسعار مع نقطة مراجعة بشرية.',
          solutionDesign:
            'يرتبط المساعد بالمنصات الثلاث (Facebook و WhatsApp و Instagram) للرد على الأسئلة والاستفسارات الشائعة وتصفية كل محادثة لتحديد هل صاحبها عميل محتمل مؤهل أم لا. يسجّل المساعد كل عميل مؤهل ويحدّث بياناته تلقائياً داخل Odoo CRM ليرى الفريق جميع القنوات في مكان واحد، ثم يجهز عرض سعر جاهزاً لكل عميل مؤهل ويتوقف عند الموظف ليحدد الأسعار ويراجع العرض قبل الإرسال.',
          solutionArchitecture: {
            overview:
              'تستقبل المنظومة الرسائل من Facebook و WhatsApp و Instagram، تنفذ الرد التلقائي وتصفية العملاء المحتملين، ثم تسجل العملاء المؤهلين وتحدثهم تلقائياً في Odoo CRM مع تجهيز مسودة عرض السعر للمراجعة البشرية.',
            illustrativeFlow: [
              {
                stage: '01. استقبال والرد على المنصات الثلاث',
                detail:
                  'الرد التلقائي على الأسئلة والاستفسارات الشائعة عبر Facebook و WhatsApp و Instagram.',
              },
              {
                stage: '02. تصفية وتأهيل المحادثات',
                detail:
                  'تحليل كل محادثة لتحديد هل المرسل عميل محتمل مهتم أم استفسار عابر.',
              },
              {
                stage: '03. تسجيل وتحديث تلقائي في Odoo CRM',
                detail:
                  'تسجيل العميل المؤهل وتحديث بياناته تلقائياً في Odoo CRM لرؤية موحدة عبر كل القنوات.',
              },
              {
                stage: '04. تجهيز عرض السعر ومراجعة الموظف',
                detail:
                  'إعداد مسودة عرض السعر لكل عميل مؤهل والتوقف عند الموظف لتحديد الأسعار والمراجعة قبل الإرسال.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'قنوات التواصل',
              items: 'Facebook, WhatsApp, Instagram',
            },
            {
              category: 'إدارة علاقات العملاء',
              items: 'Odoo CRM (تسجيل وتحديث العملاء المحتملين تلقائياً)',
            },
            {
              category: 'أتمتة المبيعات والتحكم البشري',
              items: 'Automated FAQ Replies, Lead Qualification, Draft Price Quotations, Human-in-the-Loop Review',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'توحيد الفرز من 3 منصات داخل Odoo CRM',
              rationale:
                'جمع رسائل Facebook و WhatsApp و Instagram وتصفيتها تلقائياً في Odoo CRM يلغي الفرز اليدوي عبر تطبيقات متفرقة ويمنع ضياع أي عميل محتمل.',
            },
            {
              decision: 'إبقاء نقطة مراجعة بشرية (Human-in-the-Loop) للأسعار',
              rationale:
                'تجهيز عرض السعر وتوقفه عند الموظف لتحديد السعر والمراجعة يسرّع المتابعة مع الحفاظ على التحكم الكامل في التسعير وما يصل لكل عميل.',
            },
          ],
          resultsAndImpact:
            'تحقيق زيادة +40% في العملاء المحتملين، القضاء على الفرز اليدوي عبر المنصات الثلاث دون ضياع أي عميل مهتم، وتسريع إصدار عروض الأسعار مع تحكم كامل في التسعير — مما رفع فرص تحويل المحادثات إلى صفقات.',
          confidentialityNote:
            'بيانات حسابات الشركة وقواعد التسعير الداخلية وسجلات محادثات العملاء خاصة؛ تم عرض تدفق العمل وتكامل Odoo CRM والأثر التجاري الموثق على المستوى العام.',
        },
      },
      {
        id: 'lawagent-arabic-rag',
        title: 'LawAgent — مساعد قانوني عربي',
        subtitle: 'نظام Hybrid RAG متخصص في نظام العمل السعودي',
        company: 'Transformix Digital Solutions',
        period: 'مايو 2026 – الآن',
        categoryId: 'rag',
        categoryLabel: 'RAG & LLMs',
        highlightMetric: '100% P@1 · 71% Scenario Recall · +25% عملاء',
        liveUrl: 'https://tafahom.thetransformix.com/',
        summary:
          'مساعد قانوني عربي عالي الدقة يفهرس 171 وثيقة رسمية لنظام العمل السعودي (~3,900 صفحة) عبر 5 مسارات استرجاع هجينة وتوجيه الحالات المعقدة لحجز استشارة عبر Paymob — بزيادة 25%+ في العملاء.',
        tags: ['Azure OpenAI', 'ChromaDB', 'BM25 + RRF', 'Paymob Booking', 'FastAPI', 'PostgreSQL'],
        story: {
          projectOverview:
            'LawAgent هو مساعد قانوني عربي مبني بنظام Hybrid RAG فوق 171 وثيقة رسمية لنظام العمل السعودي (~3,900 صفحة)، مصمم لتقديم إجابات دقيقة من النص الرسمي واستبعاد المواد الملغاة، مع توجيه الحالات المعقدة لحجز استشارة أو قضية عبر رابط Paymob.',
          businessContext:
            'أسئلة العمال وأصحاب الأعمال عن نظام العمل السعودي تحتاج إجابات دقيقة وموثقة من النص الرسمي. وسابقاً، عندما كانت القضية تصبح معقدة، كان الزائر يغادر الموقع دون التواصل مع محامٍ — ما كان يُفقد المكتب عملاء محتملين فعليين.',
          challenge:
            'أنظمة الـ RAG التقليدية تفشل في النصوص القانونية العربية: التقسيم الثابت يقطع المادة القانونية من المنتصف، الفهرسة العامة تبقي الأحكام الملغاة، رموز التحكم بالاتجاه تشوه المطابقة، والبحث الدلالي وحده لا يضمن دقة أرقام المواد أو الربط باللائحة التنفيذية (38% Scenario Recall مبدئياً). كما كان التحدي تحويل الزوار ذوي الحالات المعقدة إلى عملاء محجوزين بدلاً من مغادرة الموقع.',
          myRole:
            'قمت بتصميم وبناء الـ Arabic Legal Chunker المراعي للبنية القانونية مع استبعاد الأحكام الملغاة، وهندسة محرك الاسترجاع الهجين ذي الخمسة مسارات، وربط توجيه الحالات المعقدة بحجز الاستشارات عبر رابط Paymob، وتطوير الخدمة بـ FastAPI و PostgreSQL و Gradio مع بناء حزمة تقييم من أسئلة فاشلة حقيقية.',
          solutionDesign:
            'تعاملت مع الدقة القانونية كهندسة بيانات قبل هندسة الـ Prompts. عند الفهرسة، يتم استخراج بنية 170 ملف PDF عبر Azure DI ثم تمريرها على Core Document Chunker (448 مادة كاملة عبر Regex بحيث تمثل كل قطعة وحدة قانونية واحدة بدون تقطيع منتصف المادة) و Corpus Chunker (3,563 قطعة) مع استبعاد الأحكام الملغاة وتوليد عنوان موضوع لكل مادة (4,011 قطعة). عند الاستعلام، يدمج النظام البحث المباشر برقم المادة مع Query Planner و 3 أذرع هجينة عبر RRF وإعادة الترتيب المرجحة والربط باللائحة — وعند اكتشاف قضية معقدة، يوجّه العميل مباشرة لحجز استشارة أو قضية عبر رابط Paymob.',
          solutionArchitecture: {
            overview:
              'خط Ingestion مخصص يفهرس 4,011 قطعة كاملة على مستوى المادة في ChromaDB و BM25 ويغذي 5 مسارات استرجاع هجينة وإعادة ترتيب وربطاً حتمياً مع اللائحة، مع ربط الحالات الصعبة ببوابة حجز Paymob عبر FastAPI و PostgreSQL و Azure OpenAI و Gradio.',
            diagrams: [
              {
                id: 'lawagent-chunking',
                tabLabel: '01. خط التقطيع والفهرسة',
                title: '01. معمارية التقطيع المراعي للبنية القانونية (Structure-Aware Chunking)',
                caption:
                  '170 ملف PDF عربي ← Azure DI لاستخراج البنية إلى Markdown ← Core document chunker (448 مادة كاملة بدون تقطيع منتصف المادة) + Corpus chunker (3,563 قطعة عبر 4 مسارات) ← توليد عنوان موضوع لكل مادة ← فهرسة 4,011 قطعة في Chroma.',
                imageSrc: '/assets/aistudio/image_8c7cf0ae.png',
                imageAlt:
                  'مخطط التقطيع المراعي للبنية من 170 ملف PDF عربي عبر Azure DI و Core document chunker و Corpus chunker وصولاً إلى 4,011 قطعة في Chroma index.',
                surfaceTone: 'light',
              },
              {
                id: 'lawagent-retrieval',
                tabLabel: '02. مسارات الاسترجاع',
                title: '02. مسارات الاسترجاع الهجين، الدمج، وإعادة الترتيب',
                caption:
                  'رسالة المستخدم ← تنظيف النصوص ← بحث مباشر برقم المادة (Regex) + Query planner (حتى 4 استعلامات فصحى) ← بحث هجين (Dense Chroma + BM25 + Expanded) ← دمج RRF K=10 و Round-robin ← Re-rank weight() مع سقف 3 لكل مصدر ← ربط النظام باللائحة التنفيذية.',
                imageSrc: '/assets/aistudio/image_26762c63.png',
                imageAlt:
                  'مخطط الاسترجاع الهجين في LawAgent من تنظيف الرسالة والبحث المباشر و Query planner إلى Dense و BM25 و Expanded و RRF و Re-rank و Law-to-regulation join.',
                surfaceTone: 'light',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. تقسيم قانوني على مستوى المادة',
                detail:
                  'فهرسة 4,011 مادة كاملة من 171 وثيقة بدون تقطيع الأحكام مع استبعاد النصوص الملغاة.',
              },
              {
                stage: '02. استرجاع هجين من 5 مسارات',
                detail:
                  'بحث مباشر برقم المادة + ChromaDB + BM25 بدمج RRF + LLM Query Planning + ربط حتمي بين القانون واللائحة.',
              },
              {
                stage: '03. إعادة ترتيب متوازنة (Source-Capped)',
                detail:
                  'توزيع النتائج المرجحة عبر المصادر لمنع سيطرة وثيقة واحدة على الـ Context.',
              },
              {
                stage: '04. التقييم وحجز الاستشارات عبر Paymob',
                detail:
                  'القياس على سيناريوهات فشل واقعية وتوجيه القضايا الصعبة لحجز استشارة أو قضية عبر رابط Paymob.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'النماذج وفهم المستندات',
              items: 'Azure OpenAI, AWS Bedrock Embeddings, Azure Document Intelligence',
            },
            {
              category: 'الاسترجاع والفهرسة',
              items: 'ChromaDB, BM25 (light10, b=0.4), RRF (K=10), Custom Regex Legal Parsers',
            },
            {
              category: 'الخلفية والحجز والواجهة',
              items: 'Python, FastAPI, PostgreSQL, Gradio, Paymob Booking Link',
            },
            {
              category: 'التقييم والقياس',
              items: 'Scenario Evaluation Suite مبنية من أسئلة واقعية فاشلة',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'تقسيم الوثائق على حدود المادة القانونية بدلاً من عدد كلمات ثابت',
              rationale:
                'جعل كل Chunk وحدة قانونية مستقلة يضمن اكتمال الشروط والاستثناءات داخل كل نتيجة مسترجعة، مع استبعاد الأحكام الملغاة أثناء البناء.',
            },
            {
              decision: 'الجمع بين 5 مسارات استرجاع والربط الحتمي بين القانون واللائحة',
              rationale:
                'دمج البحث بالـ Regex لأرقام المواد، والمتجهات الكثيفة، و BM25 المخصص للعربية، وتفكيك الاستعلام، والربط المباشر باللائحة يغطي الاستعلامات الصريحة والمركبة معاً.',
            },
            {
              decision: 'إعادة ترتيب مرجحة بسقف أقصى لكل مصدر (3/Source Cap)',
              rationale:
                'تطبيق أوزان الترتيب وتحديد حد أقصى 3 قطع من المصدر الواحد يمنع الوثائق الطويلة الثانوية من حجب نصوص النظام الأساسي.',
            },
            {
              decision: 'تقييم من أسئلة فاشلة حقيقية + مسار حجز Paymob للقضايا المعقدة',
              rationale:
                'الاختبار ضد أسئلة فشل فيها النظام فعلاً عالج الفجوات الهندسية، بينما توجيه الحالات الصعبة لرابط حجز Paymob يحول الزائر المغادر إلى عميل فعلي للمكتب.',
            },
          ],
          resultsAndImpact:
            'تحقيق دقة 100% precision@1 في البحث المباشر (و 90% دقة الوصول للمادة في التشغيل)، و 97.5% في استرجاع Top-6، ورفع الـ Scenario Recall من 38% إلى 71%، مع زيادة +25% في العملاء عبر تحويل الزوار لحجز استشارة أو قضية في Paymob دون تكلفة تسويق إضافية.',
          confidentialityNote:
            'تم بناء النظام فوق وثائق نظام العمل السعودي الرسمية؛ وتظل صياغات الـ Prompts الداخلية وبيانات المكتب وسجلات الاختبار الخاصة سرية.',
        },
      },
      {
        id: 'diomedia-german-rag',
        title: 'منصة Diomedia AI Assistant',
        subtitle: 'منصة Full-Stack RAG لتعلم اللغة الألمانية',
        company: 'Transformix Digital Solutions',
        period: 'مايو 2026 – الآن',
        categoryId: 'rag',
        categoryLabel: 'RAG & LLMs',
        summary:
          'منصة تعليمية متكاملة تجمع بين Hybrid RAG مرتبط بالكتب المدرسية ونصوص الفيديو، ومعلم متعدد اللغات (ألماني/عربي/إنجليزي)، وتوليد اختبارات، ولوحة تحكم للإدارة.',
        tags: ['LangChain', 'PostgreSQL + pgvector', 'React / TypeScript', 'FastAPI', 'Docker / Nginx'],
        story: {
          projectOverview:
            'Diomedia AI Assistant هي منصة متكاملة (Full-Stack) لتعلم اللغة الألمانية مدعومة بالذكاء الاصطناعي، تدمج معلماً ذكياً مرتبطاً بالمنهج عبر Hybrid RAG، ومولداً آلياً للاختبارات، ولوحة إدارة وتحكم في الصلاحيات واستهلاك الـ Tokens.',
          businessContext:
            'الدارسون للغة الألمانية من خلفيات عربية وإنجليزية يحتاجون معلماً تفاعلياً يلتزم تماماً بمحتوى الكتب الدراسية وحوارات الفيديو في الكورس، بينما يحتاج مسؤولو المنصة إلى إدارة أدوار المستخدمين والتحليلات وحدود تكلفة الـ API لتشغيل مستدام.',
          challenge:
            'مساعدات المحادثة العامة تخرج عن سياق المنهج الدراسي ولا تلتزم بالترتيب النحوي الموجود في الكتب، كما تفتقر إلى أنظمة الحوكمة مثل JWT RBAC ومراقبة استهلاك الـ Tokens وقياس أداء المتعلمين.',
          myRole:
            'قمت بتصميم وبناء المنظومة كاملة عبر طبقات الاسترجاع الذكي، والواجهة الخلفية بـ FastAPI و LangChain، وقاعدة بيانات PostgreSQL + pgvector، ومزايا لوحة الإدارة، والنشر الإنتاجي عبر Docker Compose و Nginx و Let’s Encrypt SSL.',
          solutionDesign:
            'تم بناء محرك Hybrid RAG بثلاث إشارات داخل PostgreSQL + pgvector يجمع بين Azure OpenAI Semantic Embeddings وتطابق الكلمات المفتاحية والقواعد النحوية فوق كتب PDF ونصوص حوارات الفيديو. وفوق هذا الاسترجاع يعمل المعلم متعدد اللغات (ألماني/عربي/إنجليزي مع Code-Switching طبيعي) ومولد الاختبارات الآلي، تحت تحكم JWT RBAC وميزانيات API Tokens وتحليلات الاختبارات في لوحة الإدارة.',
          solutionArchitecture: {
            overview:
              'واجهة React/TypeScript و Admin Dashboard متصلتان بـ FastAPI + LangChain Backend فوق PostgreSQL/pgvector و Azure OpenAI، ومنشورة عبر Docker Compose خلف Nginx Reverse Proxy بشهادة Let’s Encrypt SSL مؤتمتة.',
            diagrams: [
              {
                id: 'diomedia-fullstack-arch',
                tabLabel: '01. المعمارية الكاملة',
                title: '01. المعمارية الكاملة للمنصة والاسترجاع والنشر',
                caption:
                  'طبقة الواجهة (React/TypeScript UI و Admin Dashboard) ← FastAPI Backend (مولد الاختبارات، المعلم متعدد اللغات، ميزانيات الـ Tokens، صلاحيات JWT RBAC، تحليلات الاختبارات) ← طبقة الذكاء والاسترجاع (Hybrid Retrieval يجمع Azure OpenAI Semantic Embeddings والتطابق المعجمي والقواعد النحوية) ← PostgreSQL + pgvector، والنشر عبر Docker Compose و Nginx و Let’s Encrypt SSL.',
                imageSrc: '/assets/aistudio/mermaid-diagram_ec94960b.png',
                imageAlt:
                  'مخطط المعمارية الكاملة لمنصة Diomedia يوضح Frontend Layer و FastAPI Backend و Hybrid Retrieval و PostgreSQL pgvector و Docker Compose مع Nginx و SSL.',
                surfaceTone: 'light',
              },
              {
                id: 'diomedia-hybrid-rag',
                tabLabel: '02. مسار Hybrid RAG',
                title: '02. مسار الاسترجاع الهجين (الدلالي والمعجمي والنحوي)',
                caption:
                  'استفسار المستخدم ← معالجة الاستعلام ← 3 مسارات متوازية (Azure OpenAI Embeddings في PostgreSQL pgvector، تطابق الكلمات المفتاحية، والقواعد النحوية) ← نتائج الاسترجاع الهجين ← المحتوى التعليمي المناسب ← Azure OpenAI ← رد المعلم متعدد اللغات.',
                imageSrc: '/assets/aistudio/mermaid-diagram_1__922803ea.png',
                imageAlt:
                  'مخطط مسار Hybrid RAG في Diomedia يوضح المسارات الثلاثة المتوازية للاسترجاع الدلالي والمعجمي والنحوي وصولاً إلى رد المعلم متعدد اللغات.',
                surfaceTone: 'light',
              },
              {
                id: 'diomedia-platform-flow',
                tabLabel: '03. تدفق المنصة',
                title: '03. تدفق رحلة المتعلم ولوحة الإدارة',
                caption:
                  'تسجيل الدخول يفتح مساري التعلم: المعلم الذكي متعدد اللغات (ألماني/عربي/إنجليزي عبر Hybrid RAG على الكتب ونصوص الفيديو) وتوليد وحل الاختبارات الآلية، بينما تتحكم لوحة الإدارة في تحليلات الاختبارات وميزانيات API Token.',
                imageSrc: '/assets/aistudio/mermaid-diagram_2__2ab21f79.png',
                imageAlt:
                  'مخطط تدفق منصة Diomedia للمتعلم والإدارة بين AI Tutor و Automated Quiz Generation و Admin Dashboard.',
                surfaceTone: 'light',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. فهرسة الكتب وحوارات الفيديو',
                detail:
                  'تخزين ملفات الـ PDF التعليمية ونصوص الفيديوهات داخل PostgreSQL pgvector.',
              },
              {
                stage: '02. استرجاع لغوي هجين',
                detail:
                  'دمج Azure OpenAI Embeddings مع تطابق الكلمات المفتاحية والقواعد النحوية.',
              },
              {
                stage: '03. المعلم متعدد اللغات والاختبارات',
                detail:
                  'تقديم شروحات مع Code-Switching (ألماني/عربي/إنجليزي) وتوليد اختبارات مرتبطة بالمنهج.',
              },
              {
                stage: '04. لوحة الإدارة والأمان',
                detail:
                  'إدارة الصلاحيات بـ JWT RBAC، حدود استهلاك الـ API Tokens، وتحليلات الاختبارات عبر Nginx و Let’s Encrypt SSL.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'الذكاء الاصطناعي والاسترجاع',
              items: 'Azure OpenAI, LangChain, PostgreSQL + pgvector (استرجاع دلالي + معجمي + نحوي)',
            },
            {
              category: 'الخلفية والأمان',
              items: 'FastAPI, JWT Role-Based Authentication (RBAC), API Token Budgets',
            },
            {
              category: 'الواجهة الأمامية',
              items: 'React, TypeScript, واجهة المتعلم ولوحة تحكم الإدارة',
            },
            {
              category: 'البنية التحتية والنشر',
              items: 'Docker Compose, Nginx Reverse Proxy, Let’s Encrypt SSL',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'استرجاع هجين ثلاثي الإشارات (دلالي + معجمي + قواعد نحوية)',
              rationale:
                'الدمج يضمن الإجابة الدقيقة سواءً عن استفسارات الفهم العام أو عن تراكيب نحوية ومفردات محددة وردت داخل الكتب الدراسية.',
            },
            {
              decision: 'توحيد البيانات المهيكلة والمتجهات في PostgreSQL + pgvector',
              rationale:
                'وجود النصوص التعليمية والاختبارات وصلاحيات المستخدمين وميزانيات الـ Tokens في قاعدة واحدة يبسط التشغيل ويحفظ الاتساق الكامل للبيانات.',
            },
            {
              decision: 'إدماج حوكمة الـ Tokens وحماية SSL في البنية الأساسية',
              rationale:
                'فرض قيود الاستخدام عبر FastAPI خلف Nginx و Let’s Encrypt يجعل المنصة جاهزة للإطلاق الإنتاجي الآمن والمحكوم التكلفة.',
            },
          ],
          resultsAndImpact:
            'إطلاق منصة تعليمية متكاملة وآمنة بشهادة SSL تجمع بين الشرح المرتبط بالمنهج (ألماني/عربي/إنجليزي)، التقييم الآلي، والتحكم الدقيق في استهلاك الـ Tokens.',
          confidentialityNote:
            'تظل الكتب الدراسية ونصوص الفيديوهات التعليمية وإعدادات الـ Prompts المخصصة ملكية خاصة، بينما تُعرض معمارية النظام وتدفق البيانات على المستوى الهندسي.',
        },
      },
      {
        id: 'session-based-recsys',
        title: 'نظام توصيات لحظي عالي التزامن (Session-Based RecSys)',
        subtitle: 'نمذجة تسلسل الجلسات بمعدل 10K+ QPS',
        company: 'Numinix',
        period: 'يناير 2025 – أبريل 2026',
        categoryId: 'recsys',
        categoryLabel: 'RecSys & Search',
        highlightMetric: 'زيادة 40%+ في المبيعات · 10K+ QPS',
        summary:
          'محرك توصيات لحظي يدمج RNNs و Transformers و GNNs عبر Stateful Streaming و Redis ليفهم اهتمام الزائر من أول جلسة — محققاَ زيادة 40%+ في المبيعات بمعدل 10K+ QPS (<100ms).',
        tags: ['PyTorch (RNN / Transformer / GNN)', 'FastAPI', 'Redis Feature Store', 'Stream Processing'],
        story: {
          projectOverview:
            'تم تطوير نظام التوصيات اللحظي في Numinix لفهم اهتمام الزائر من تصفحه في الجلسة الحالية (المنتجات التي شاهدها وتفاعله معها وترتيب خطواته) وعرض المنتجات الأقرب لاهتمامه فوراً — حتى لو كانت أول زيارة له للموقع — بأكثر من 10,000 طلب/ثانية وزمن استجابة تحت 100ms.',
          businessContext:
            'أغلب زوار المتاجر الإلكترونية جدد أو مجهولون بدون تاريخ شراء سابق. كانت المواقع تعرض لهم منتجات عامة فيخرجون دون العثور على ما يناسبهم رغم وجود آلاف المنتجات في الكتالوج.',
          challenge:
            'التخصيص للزائر المجهول من أول زيارة يتطلب استنتاج نيته مباشرة من تسلسل حركات الجلسة الحالية، مع الحفاظ على زمن استجابة تحت 100ms تحت ضغط تزامن يتجاوز 10K+ QPS ومنع فقدان حالة الجلسة عبر الـ Clusters.',
          myRole:
            'قمت بتصميم معمارية الدمج متعدد النماذج (RNNs و Transformers with Attention و GNNs)، وإدارة Stateful Stream Processing للحفاظ على استمرارية الجلسات عبر العناقيد الموزعة، وبناء طبقة Model Serving قابلة للتوسع بـ FastAPI مدعومة بـ Redis Feature Store.',
          solutionDesign:
            'يدمج النظام ثلاث معماريات عصبية تكمل بعضها: RNN لنمذجة الترتيب الزمني، و GNN لتمثيل علاقات الانتقال بين العناصر، و Transformer لالتقاط الاعتماديات البعيدة في الجلسة. تمر مخرجات النماذج عبر طبقات Projection ثم WeightedSum و FusionLayer لإصدار FinalPrediction، بينما يحفظ التدفق اللحظي حالة الجلسة في Redis لقراءتها فورياً عبر FastAPI.',
          solutionArchitecture: {
            overview:
              'معالجة تدفقات البيانات تحافظ على استمرارية حالة الجلسة عبر الـ Clusters داخل Redis Feature Store يغذي محرك دمج RNN + GNN + Transformer خلف طبقة خدمة FastAPI عالية التزامن.',
            diagrams: [
              {
                id: 'recsys-fusion',
                tabLabel: '01. دمج النماذج',
                title: '01. معمارية دمج النماذج العصبية (Hybrid Recommender Fusion)',
                caption:
                  'دمج مخرجات نماذج RNN و GNN و Transformer عبر طبقة Projection ثم WeightedSum و FusionLayer لإنتاج التوقع النهائي (FinalPrediction).',
                imageSrc: '/assets/aistudio/image_9a8c543b.png',
                imageAlt:
                  'مخطط دمج الشبكات العصبية RNN و GNN و Transformer عبر Projection و WeightedSum و FusionLayer وصولاً إلى FinalPrediction.',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. تتبع الجلسة لحظياً (Stateful Streaming)',
                detail:
                  'الحفاظ على استمرارية بيانات الجلسة عبر الـ Distributed Clusters.',
              },
              {
                stage: '02. Redis Feature Store',
                detail:
                  'توفير خصائص الجلسة وتمثيلات العناصر بأقل زمن استجابة ممكن.',
              },
              {
                stage: '03. استدلال متعدد النماذج',
                detail:
                  'دمج مخرجات RNN و Transformer Attention و GNN لتوقع العنصر الأنسب في الجلسة.',
              },
              {
                stage: '04. تشغيل FastAPI تحت SLA صارم',
                detail:
                  'تقديم التوصيات المرتبة بمعدل يتجاوز 10K+ QPS وزمن استجابة أقل من 100ms.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'الشبكات العصبية',
              items: 'PyTorch — RNNs, Transformers with Attention, Graph Neural Networks (GNNs)',
            },
            {
              category: 'تخزين الخصائص والتدفقات',
              items: 'Redis Feature Store, Stateful Stream Processing',
            },
            {
              category: 'طبقة التشغيل',
              items: 'FastAPI Scalable Model Serving Layer',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'معمارية الدمج عبر Projection ثم WeightedSum و FusionLayer',
              rationale:
                'توحيد تمثيلات RNN و GNN و Transformer في فضاء مشترك يجمع بين التسلسل الزمني والعلاقات الشبكية والانتباه دون زيادة زمن الاستجابة.',
            },
            {
              decision: 'فصل حالة الجلسة في Redis Feature Store',
              rationale:
                'تخزين وتحديث حالة الجلسات في Redis عبر التدفق اللحظي يجعل خوادم FastAPI عديمة الحالة (Stateless) وقادرة على التوسع بثبات عند 10K+ QPS.',
            },
          ],
          resultsAndImpact:
            'تحقيق زيادة +40% في المبيعات في المواقع التي طُبق عليها النظام مع خدمة أكثر من 10,000 طلب في الثانية (QPS) بزمن استجابة تحت 100ms — لأن الزائر يجد المنتج المناسب من أول زيارة بدلاً من مغادرة الموقع.',
          confidentialityNote:
            'هوية العميل وهيكل الكتالوج وأوزان الخصائص وتكوين الخوادم الإنتاجية تخضع لاتفاقية السرية (NDA)؛ المعمارية معروضة على المستوى المفاهيمي.',
        },
      },
      {
        id: 'streaming-analytics-personalization',
        title: 'منصة التحليلات اللحظية والتخصيص (Real-Time Streaming Analytics)',
        subtitle: 'معالجة التدفقات الموزعة وخوارزميات Multi-Armed Bandits',
        company: 'Numinix',
        period: 'يناير 2025 – أبريل 2026',
        categoryId: 'recsys',
        categoryLabel: 'RecSys & Search',
        highlightMetric: '100K+ حدث/دقيقة · <200ms Latency',
        summary:
          'منصة streaming موزعة عالية الإتاحة تعالج أكثر من 100K+ حدث في الدقيقة بزمن استجابة تحت 200ms باستخدام Apache Spark Streaming و Kafka و Multi-Armed Bandits مع مراقبة عبر Prometheus و Grafana و MLflow.',
        tags: [
          'Apache Spark Streaming',
          'Apache Kafka',
          'Multi-Armed Bandits',
          'Prometheus & Grafana',
          'MLflow',
        ],
        story: {
          projectOverview:
            'منصة تحليل وتخصيص لحظي موزعة عالية الإتاحة تم هندستها في Numinix لمعالجة أكثر من 100,000 حدث في الدقيقة بزمن استجابة أقل من 200ms، مدعومة بخوارزميات Multi-Armed Bandits ومنظومة مراقبة متكاملة.',
          businessContext:
            'المنصات الرقمية ذات الضغط الكثيف تولد تدفقات مستمرة من تفاعلات المستخدمين وتحتاج نظام تخصيص يتكيف لحظياً مع التغيرات، مع رؤية تشغيلية واضحة لزمن الاستجابة وسلامة النماذج.',
          challenge:
            'الاعتماد على الـ Batch ETL يؤخر التخصيص عن السلوك الفعلي للمستخدم، بينما المعالجة اللحظية بمعدل 100K+ حدث/دقيقة تتطلب تجنب الاختناقات وقياس انحراف النماذج (Model Drift) لحظة بلحظة.',
          myRole:
            'قمت بهندسة خط البيانات الموزع باستخدام Apache Kafka و Apache Spark Streaming، ونشر خوارزميات Multi-Armed Bandit للتخصيص الديناميكي، وتأسيس مراقبة النظام والنماذج عبر Prometheus و Grafana و MLflow.',
          solutionDesign:
            'تم فصل استقبال الأحداث عبر Kafka Producers & Topics عن معالجتها في Spark Streaming (تجهيز التدفق، بناء الرسوم، واستخراج الخصائص) وتوجيهها لخدمة التوقع و Multi-Armed Bandits التي توازن بين الاستكشاف والاستغلال، مع ربط Metrics Collector و Model Monitor مباشرة بلوحات Prometheus و Grafana و MLflow.',
          solutionArchitecture: {
            overview:
              'بيانات الأحداث تمر عبر Kafka و Spark Streaming إلى طبقة التجهيز وبناء الرسوم وخدمة التوقع و Multi-Armed Bandits، مع إرسال مقاييس الأداء وصحة النماذج لحظياً إلى Prometheus و Grafana و MLflow.',
            diagrams: [
              {
                id: 'streaming-lifecycle',
                tabLabel: '01. دورة التشغيل',
                title: '01. دورة حياة محرك الـ Streaming وخدمة التوقع والمراقبة',
                caption:
                  'تحميل الإعدادات والتهيئة ← تشغيل Spark Streaming و Prediction Service و Stream Handler ← معالجة الأحداث اللحظية وتحديث المقاييس ومراقبة صحة النظام حتى الإغلاق الآمن.',
                imageSrc: '/assets/aistudio/image_263aa0dc.png',
                imageAlt:
                  'مخطط دورة تشغيل النظام من Initialization إلى تشغيل Spark Streaming و Prediction Service ومعالجة الأحداث ومراقبة صحة النظام.',
              },
              {
                id: 'streaming-pipeline',
                tabLabel: '02. خط التدفق والمراقبة',
                title: '02. معمارية تدفق Kafka و Spark Streaming وطبقة المراقبة',
                caption:
                  'Kafka Producer و Topic ← Spark Streaming ← تجهيز البيانات وبناء الرسوم و Feature Engineering ← طبقة التقديم (Serving Layer) والمراقبة (Metrics Collector و Model Monitor).',
                imageSrc: '/assets/aistudio/image_d93d0197.png',
                imageAlt:
                  'مخطط المعمارية الموزعة يوضح Kafka Producer و Spark Streaming و Stream Preprocessor و Serving Layer و Monitoring.',
              },
            ],
            illustrativeFlow: [
              {
                stage: '01. استقبال التدفقات (Kafka)',
                detail:
                  'استقبال تدفقات الأحداث عالية الكثافة عبر Kafka Topics عالية الإتاحة.',
              },
              {
                stage: '02. المعالجة اللحظية (Spark Streaming)',
                detail:
                  'معالجة أكثر من 100K+ حدث في الدقيقة بزمن استجابة أقل من 200ms.',
              },
              {
                stage: '03. التخصيص الديناميكي (Multi-Armed Bandits)',
                detail:
                  'تكييف التوصيات لحظياً بناءً على التفاعل الفعلي للمستخدمين.',
              },
              {
                stage: '04. المراقبة وتتبع النماذج',
                detail:
                  'مراقبة الأداء والصحة وتجارب النماذج عبر Prometheus و Grafana و MLflow.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'معالجة التدفقات الموزعة',
              items: 'Apache Kafka, Apache Spark Streaming',
            },
            {
              category: 'التخصيص الديناميكي',
              items: 'Multi-Armed Bandit Algorithms, Stream Feature Engineering',
            },
            {
              category: 'المراقبة و MLOps',
              items: 'Prometheus, Grafana, MLflow',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'استخدام Multi-Armed Bandits للتكيف اللحظي المستمر',
              rationale:
                'موازنة الاستكشاف والاستغلال مباشرة من تفاعلات البث الحي تلغي التأخير الناتج عن انتظار دورات إعادة التدريب المجمعة.',
            },
            {
              decision: 'دمج مراقبة البنية والنماذج داخل دورة التشغيل',
              rationale:
                'تجميع مقاييس الأداء وسلامة النموذج في الزمن الحقيقي يربط بين اختناقات الخدمة وجودة التوقعات فوراً.',
            },
          ],
          resultsAndImpact:
            'معالجة مستقرة لأكثر من 100,000 حدث في الدقيقة بزمن استجابة أقل من 200ms في بيئة الـ Production مع مراقبة مستمرة لصحة النظام وأداء النماذج.',
          confidentialityNote:
            'مصادر حركة المرور الفعلية وصياغات المكافأة الداخلية وقواعد التنبيه تخضع لاتفاقية السرية؛ تم عرض دورة التشغيل والمراقبة على مستوى معماري عام.',
        },
      },
      {
        id: 'product-discovery-hybrid-search',
        title: 'تحسين اكتشاف المنتجات والبحث الهجين (Hybrid Search)',
        subtitle: 'Domain NER + استرجاع دلالي ومعجمي',
        company: 'Numinix',
        period: 'يناير 2025 – أبريل 2026',
        categoryId: 'recsys',
        categoryLabel: 'RecSys & Search',
        highlightMetric: 'تقليل ~70% من نتائج البحث الصفرية',
        summary:
          'نظام فهم المنتجات والبحث الهجين يدمج Fine-Tuned BERT للـ NER مع FAISS و BM25 لتحويل فرص البحث الضائعة إلى مبيعات.',
        tags: ['Fine-Tuned BERT (NER)', 'FAISS', 'BM25', 'Hybrid Search'],
        story: {
          projectOverview:
            'منظومة متكاملة لفهم المنتجات والبحث الهجين تم تطويرها في Numinix بالجمع بين نموذج BERT مخصص لاستخراج الكيانات (NER) والبحث الدلالي بـ FAISS والبحث المعجمي بـ BM25، مما خفض عمليات البحث بدون نتائج بنحو 70%.',
          businessContext:
            'كان المتسوق يبحث داخل المتجر عن منتج موجود فعلاً في المخزون ولا يجده بسبب اختلاف الصياغة، فيغادر المتجر وتضيع فرصة بيع مؤكدة.',
          challenge:
            'البحث بالكلمات المفتاحية فقط (BM25) يفشل عند اختلاف المرادفات، بينما البحث المتجهي الصرف قد يخلط بين المواصفات الدقيقة والأكواد — مما يؤدي لنتائج صفرية متكررة وضعف في الدقة والاسترجاع.',
          myRole:
            'قمت بعمل Fine-Tuning لنموذج BERT لمهام Named Entity Recognition (NER) المتخصصة، وتصميم وتحسين معمارية Hybrid Search التي تدمج FAISS Dense Vectors مع BM25 Sparse Retrieval.',
          solutionDesign:
            'تمر استعلامات البحث وبيانات المنتجات أولاً عبر نموذج BERT NER المدرب على المجال لاستخراج الكيانات والمواصفات الأساسية، ثم تُنفذ عملية بحث هجينة متوازية بين FAISS للمعنى الدلالي و BM25 للتطابق اللفظي الدقيق.',
          solutionArchitecture: {
            overview:
              'النصوص والاستعلامات تمر عبر Fine-Tuned BERT NER لاستخراج الكيانات المهيكلة قبل تنفيذ البحث الهجين المتوازي عبر FAISS و BM25.',
            illustrativeFlow: [
              {
                stage: '01. استخراج الكيانات (BERT NER)',
                detail:
                  'تحديد أسماء المنتجات والمواصفات من نصوص البحث والكتالوج غير المهيكلة.',
              },
              {
                stage: '02. بحث متجهي ومعجمي متوازي',
                detail:
                  'تشغيل التشابه الدلالي عبر FAISS بالتوازي مع التطابق اللفظي عبر BM25.',
              },
              {
                stage: '03. ترتيب النتائج الهجين',
                detail:
                  'توحيد الدقة اللفظية والاسترجاع الدلالي لتقليل صفحات البحث الفارغة.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'فهم النصوص والكيانات',
              items: 'Fine-Tuned BERT (Domain-Specific Named Entity Recognition)',
            },
            {
              category: 'محرك البحث الهجين',
              items: 'FAISS Dense Vector Search, BM25 Sparse Retrieval',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'إدخال BERT NER قبل مرحلة الاسترجاع',
              rationale:
                'تحويل الاستعلام الحر إلى كيانات ومواصفات واضحة يمنع تشتت البحث بين الوصف العام والخصائص الإلزامية للمنتج.',
            },
            {
              decision: 'دمج FAISS الدلالي مع BM25 المعجمي',
              rationale:
                'يغطي FAISS اختلاف الصياغات والمرادفات بينما يحافظ BM25 على تطابق الأرقام والأسماء والموديلات الدقيقة.',
            },
          ],
          resultsAndImpact:
            'خفض عمليات البحث التي تعود بدون نتائج بحوالي 70% مع تحسن ملموس في الدقة والاسترجاع — مما حوّل فرص بيع كانت تضيع إلى مبيعات فعلية.',
          confidentialityNote:
            'تصنيفات الكتالوج الخاصة بالعميل وبيانات تدريب الـ NER وأوزان الترتيب النهائية محمية باتفاقية سرية (NDA)؛ المعمارية معروضة على المستوى العام.',
        },
      },
      {
        id: 'enterprise-agentic-orchestration',
        title: 'منصة Agentic AI و LLM Orchestration للمؤسسات',
        subtitle: 'نظام دعم عملاء متعدد الوكلاء مع حفظ الحالة',
        company: 'Numinix',
        period: 'يناير 2025 – أبريل 2026',
        categoryId: 'agentic',
        categoryLabel: 'Agentic AI',
        highlightMetric: 'تقليل التصعيد للبشر بأكثر من 60%',
        summary:
          'منصة دعم عملاء متعددة الوكلاء مبنية بـ LangGraph و LangChain تتعامل مع الطلبات الروتينية تلقائياً — مما قلل التحويل للبشر بأكثر من 60% وخفض تكلفة الدعم.',
        tags: ['LangGraph', 'LangChain', 'Tool Calling', 'Dynamic Memory', 'Hybrid Search'],
        story: {
          projectOverview:
            'منصة دعم عملاء متعددة الوكلاء للمؤسسات تم تطويرها وإطلاقها في Numinix باستخدام LangGraph و LangChain؛ تتعامل مع الطلبات الروتينية بمفردها وخفضت تحويل العملاء لموظفي الدعم بأكثر من 60% ليركز الفريق على الحالات الأصعب.',
          businessContext:
            'فرق الدعم الفني كانت تستهلك طاقتها في التعامل مع طلبات روتينية متكررة إلى جانب استفسارات معقدة، ما رفع تكلفة الدعم وأبطأ الخدمة أمام العملاء.',
          challenge:
            'روبوتات الدردشة عديمة الحالة (Stateless) تنسى تطورات المحادثة متعددة الأدوار ولا تستطيع تنفيذ أدوات خلفية مهيكلة أو موازنة تكلفة وزمن الاستدلال في بيئة التشغيل الفعلي.',
          myRole:
            'قمت بتصميم وإطلاق منصة الدعم متعددة الوكلاء بـ LangGraph و LangChain، وتنفيذ Structured Tool Calling و Dynamic Memory Management و Hybrid Search عبر قواعد البيانات المتجهية، وتحسين خطوط استدلال الـ LLM للإنتاج.',
          solutionDesign:
            'بدلاً من سلاسل Prompt خطية، تم تمثيل مسار الدعم كرسم حالة (State Graph) في LangGraph يحتفظ بذاكرة ديناميكية للمحادثة، ويسترجع السياسات الموثقة عبر Hybrid Search، وينفذ عمليات النظام عبر Structured Tool Calling مع مسار تصعيد منظم للحالات التي تستدعي تدخلاً بشرياً فقط.',
          solutionArchitecture: {
            overview:
              'رسوم الحالة في LangGraph تنسق مراحل التفكير والتنفيذ بين الوكلاء، مستندةً إلى الذاكرة الديناميكية والبحث الهجين وتنفيذ الأدوات المهيكلة مع تحسين كفاءة الاستدلال.',
            illustrativeFlow: [
              {
                stage: '01. مسار تفكير حافظ للحالة (LangGraph)',
                detail:
                  'توجيه نية العميل عبر عقد المعالجة مع إدارة ذاكرة ديناميكية للمحادثة.',
              },
              {
                stage: '02. استرجاع معرفي هجين',
                detail:
                  'البحث في قواعد البيانات المتجهية بـ Hybrid Search لضمان مطابقة السياسات.',
              },
              {
                stage: '03. تنفيذ الأدوات والتحويل الذكي',
                detail:
                  'استدعاء أدوات النظام المهيكلة وتحويل التذكرة للدعم البشري عند الحاجة الفعلية فقط.',
              },
            ],
          },
          technicalStack: [
            {
              category: 'إطار عمل الوكلاء',
              items: 'LangGraph, LangChain (Stateful Reasoning Workflows)',
            },
            {
              category: 'القدرات والاسترجاع',
              items: 'Structured Tool Calling, Dynamic Memory Management, Hybrid Vector Search',
            },
            {
              category: 'الأداء والإنتاج',
              items: 'LLM Inference Pipeline Optimization',
            },
          ],
          keyEngineeringDecisions: [
            {
              decision: 'اعتماد LangGraph و Stateful Reasoning Workflows',
              rationale:
                'إدارة الحالة والانتقالات بشكل صريح يمنع فقدان السياق في المحادثات الطويلة ويجعل مسارات التحويل للدعم البشري منضبطة.',
            },
            {
              decision: 'الفصل بين Hybrid Search للسياسات و Tool Calling للعمليات',
              rationale:
                'استرجاع اللوائح عبر البحث الهجين وتنفيذ الإجراءات عبر Tool Schemas مهيكلة يقلل الهلوسة ويرفع اعتمادية التنفيذ.',
            },
          ],
          resultsAndImpact:
            'تقليل تحويل العملاء لموظفي الدعم بأكثر من 60% ليركز الموظفون على الحالات الأصعب، مع تكلفة دعم أقل وخدمة أسرع تعزز استمرار العملاء.',
          confidentialityNote:
            'هوية المؤسسة المستفيدة، السياسات الداخلية، تكاملات الـ API الخاصة، ومحادثات الدعم تخضع للسرية بموجب NDA؛ تم عرض أنماط التنسيق المعمارية على المستوى العام.',
        },
      },
    ],
    expertise: [
      {
        id: 'agentic-ai',
        domain: 'الذكاء الاصطناعي التوليدي وهندسة الوكلاء (Agents)',
        summary:
          'بناء Multi-Agent Workflows حافظة للحالة بأدوار محددة، Tool Calling، وذاكرة ديناميكية.',
        capabilities: [
          'LangGraph, LangChain, LlamaIndex, CrewAI, Deep Agents',
          'OpenAI, Anthropic (Claude / AWS Bedrock), Azure OpenAI',
          'Tool / Function Calling وتكاملات MCP (مثل Meta Ads MCP)',
          'Stateful Memory Management وبث التقدم عبر SSE',
        ],
      },
      {
        id: 'rag-search',
        domain: 'أنظمة Hybrid RAG والبحث الذكي',
        summary:
          'معماريات استرجاع مصممة للدقة العالية، فهم بنية المستندات، ودعم اللغة العربية.',
        capabilities: [
          'Hybrid Search (Dense Vectors + BM25 + RRF Fusion)',
          'Cross-Encoders، إعادة الترتيب محددة المصدر، و Query Planning',
          'قواعد البيانات المتجهية: PostgreSQL pgvector, ChromaDB, FAISS, Supabase',
          'Custom Document Chunking ومعالجة اللغة العربية (Arabic NLP)',
        ],
      },
      {
        id: 'dl-recsys',
        domain: 'التعلم العميق، الـ Fine-Tuning وأنظمة التوصيات',
        summary:
          'تدريب وتكييف وتشغيل الشبكات العصبية للتوصيات واستخراج الكيانات والتنبؤ.',
        capabilities: [
          'PyTorch, TensorFlow, Hugging Face Transformers, scikit-learn',
          'ضبط النماذج: BERT, LLaMA, PEFT, QLoRA Fine-Tuning',
          'Session-Based RecSys (RNN, Transformer Attention, GNN)',
          'Multi-Armed Bandits, Collaborative Filtering و ARIMA',
        ],
      },
      {
        id: 'distributed-data',
        domain: 'الأنظمة الموزعة وهندسة البيانات',
        summary:
          'بناء خطوط تدفق بيانات لحظية و Feature Stores وبنية ETL لدعم تعلم الآلة.',
        capabilities: [
          'Apache Kafka و Apache Spark (Streaming & SQL)',
          'Redis Feature Stores و Stateful Stream Processing',
          'Apache Airflow, SQLAlchemy, MySQL, PostgreSQL, Alembic',
          'Microservices Architecture وبناء ETL Pipelines',
        ],
      },
      {
        id: 'mlops-cloud',
        domain: 'بنية الـ LLM التحتية، السحابة و MLOps',
        summary:
          'تشغيل، تعبئة، مراقبة، وتأمين أحمال الذكاء الاصطناعي في بيئة الـ Production.',
        capabilities: [
          'vLLM, TensorRT, Inference Optimization و FastAPI Serving',
          'Docker, Docker Compose, Kubernetes, Nginx و SSL',
          'AWS, Google Cloud Platform (GCP), Azure و CI/CD',
          'المراقبة والتتبع: MLflow, Prometheus, Grafana',
        ],
      },
      {
        id: 'core-swe',
        domain: 'أساسيات هندسة البرمجيات وفهم البيزنس',
        summary:
          'أساس خوارزمي قوي مع قدرة واضحة على تحليل مشاكل العملاء وترجمتها تقنياً.',
        capabilities: [
          'Python, C++, SQL, TypeScript/React (تكامل Full-Stack)',
          'Object-Oriented Design (OOP), Data Structures & Algorithms',
          'بناء Evaluation Suites من حالات فشل حقيقية',
          'ربط القرارات المعمارية بنقاط اختناق البيزنس',
        ],
      },
    ],
    experience: [
      {
        id: 'transformix',
        role: 'AI Engineer',
        company: 'Transformix Digital Solutions',
        period: 'مايو 2026 – الآن',
        location: 'مصر',
        context:
          'بناء منصات Multi-Agent، وأنظمة Arabic Legal RAG، ومنتجات تعليمية متكاملة بالذكاء الاصطناعي.',
        highlights: [
          'تطوير منصة AI-Powered Media Buying تضم وكلاء Research و Analysis و Creative و Copywriter باستخدام LangGraph و FastAPI مع بث التقدم عبر SSE و AWS Bedrock (Claude) و Meta Ads MCP و PostgreSQL/Alembic.',
          'بناء LawAgent كمساعد عربي لنظام العمل السعودي يفهرس 171 وثيقة (~3,900 صفحة / 4,011 مادة كاملة) بـ 5 مسارات استرجاع هجينة، محققاً 100% precision@1، و 97.5% Top-6 recall، ورفع الـ Scenario Recall من 38% إلى 71%.',
          'تصميم ونشر منصة Diomedia AI Assistant لتعلم الألمانية بـ LangChain و PostgreSQL pgvector و Azure OpenAI و React/TypeScript ولوحة إدارة بصلاحيات JWT RBAC عبر Docker Compose و Nginx مع SSL مؤتمت.',
        ],
      },
      {
        id: 'numinix',
        role: 'AI Engineer',
        company: 'Numinix',
        period: 'يناير 2025 – أبريل 2026',
        location: 'مصر',
        context:
          'تصميم أنظمة توصيات عالية التزامن، تحسين البحث الهجين، دعم العملاء بـ Agentic AI، والتحليلات اللحظية.',
        highlights: [
          'بناء نظام Session-Based Recommendation عالي التزامن (RNNs, Transformers with Attention, GNNs) مع Stateful Stream Processing و FastAPI و Redis Feature Store لخدمة 10K+ QPS بزمن استجابة تحت 100ms.',
          'عمل Fine-Tuning لنموذج BERT لمهام الـ NER وبناء Hybrid Search (FAISS + BM25)، مما قلل نتائج البحث الصفرية بنسبة 70%.',
          'إطلاق منصة دعم عملاء Enterprise Agentic AI بـ LangGraph و LangChain و Tool Calling وذاكرة ديناميكية و Hybrid Search — مما قلل التصعيد للدعم البشري بأكثر من 60%.',
          'هندسة نظام تحليلات وتخصيص لحظي يعالج 100K+ حدث/دقيقة بزمن استجابة أقل من 200ms (Apache Spark Streaming, Kafka, Multi-Armed Bandits, Prometheus, Grafana, MLflow)، بجانب نماذج التنبؤ بالطلب والتوصيات (Collaborative Filtering, Content-Based, MySQL/SQLAlchemy ETL, ARIMA).',
        ],
      },
      {
        id: 'sprints',
        role: 'AI & ML Intern',
        company: 'Sprints',
        period: 'ديسمبر 2024 – أبريل 2025',
        location: 'القاهرة، مصر',
        context:
          'تطوير أنظمة NLP و Deep Learning جاهزة للإطلاق ضمن فريق هندسي Agile.',
        highlights: [
          'تطوير منصة تعليم تكيفي (Adaptive AI Learning) تضم معلم محادثي يعتمد على LangGraph Workflows للتفكير متعدد الخطوات وتوليد المناهج ديناميكياً.',
          'بناء NLP Pipelines قابلة للتوسع لتصنيف النوايا واستخراج الكيانات لحظياً، مع تعبئتها عبر Docker وربطها بـ Supabase Vector للاسترجاع.',
        ],
      },
    ],
    achievements: [
      {
        id: 'ach-media-buying',
        metric: '+47%',
        label: 'زيادة في عدد العملاء المخدومين',
        context:
          'منصة AI Media Buying استبدلت أسابيع التحضير اليدوي بمسار مؤتمت من الـ Brief حتى Meta Ads — لتخدم الوكالة عملاء أكثر بنفس الفريق.',
      },
      {
        id: 'ach-omnichannel',
        metric: '+40%',
        label: 'زيادة في العملاء المحتملين المؤهلين',
        context:
          'Omnichannel Lead Agent وحّد فرز رسائل Facebook و WhatsApp و Instagram تلقائياً في Odoo CRM مع تجهيز عروض الأسعار للمراجعة البشرية.',
      },
      {
        id: 'ach-recsys-sales',
        metric: '+40%',
        label: 'زيادة في مبيعات المتاجر (10K+ QPS · <100ms)',
        context:
          'نظام Session-Based RecSys التقط نية الزائر الجديد والمجهول من أول زيارة عبر الشبكات العصبية و Redis Feature Store.',
      },
      {
        id: 'ach-lawagent',
        metric: '+25%',
        label: 'زيادة في العملاء · 100% P@1 قانوني',
        context:
          'LawAgent فهرس 4,011 مادة لنظام العمل السعودي (97.5% Recall@6 ورفع الـ Scenario Recall من 38% إلى 71%) وحوّل الحالات المعقدة لحجز Paymob.',
      },
      {
        id: 'ach-search',
        metric: '~70%',
        label: 'تقليل عمليات البحث بدون نتائج',
        context:
          'تحقق في Numinix عبر Fine-Tuning لـ BERT NER مع Hybrid Search (FAISS + BM25) — لتحويل فرص البحث الضائعة إلى مبيعات.',
      },
      {
        id: 'ach-escalation',
        metric: '>60%',
        label: 'تقليل التحويل لموظفي الدعم',
        context:
          'منصة Enterprise Agentic AI تعاملت مع الطلبات الروتينية بـ LangGraph و Hybrid Search، لتقليل تكلفة الدعم وتسريع خدمة العميل.',
      },
      {
        id: 'ach-recsys',
        metric: '10K+ QPS',
        label: 'قدرة استيعاب نظام التوصيات اللحظي (<100ms)',
        context:
          'محرك توصيات موزع متعدد النماذج (RNN, Transformer, GNN) يعمل عبر FastAPI و Redis Feature Store.',
      },
      {
        id: 'ach-streaming',
        metric: '100K+/min',
        label: 'معالجة تدفق بيانات لحظية بزمن استجابة <200ms',
        context:
          'منصة تحليلات وتخصيص بـ Apache Spark Streaming و Kafka مراقبة عبر Prometheus و Grafana و MLflow.',
      },
      {
        id: 'ach-ecpc',
        metric: 'ECPC / ACPC',
        label: 'المسابقة المصرية للبرمجة التنافسية (2021–2022)',
        context:
          'خبرة في البرمجة التنافسية تركز على تحسين الخوارزميات وهياكل البيانات المتقدمة.',
        link: 'https://drive.google.com/file/d/1HNHTNU87ZlWn6nbnM1JVjqV3ZaGieCp0/view?usp=drivesdk',
      },
    ],
    education: [
      {
        id: 'damanhour-cs',
        degreeOrCert: 'بكالوريوس علوم الحاسب (Computer Science)',
        institution: 'جامعة دمنهور — كلية الحاسبات والمعلومات',
        period: '2020 – يونيو 2024',
        notes: 'التقدير التراكمي (GPA): 3.4 / 4.0',
      },
    ],
    certifications: [
      {
        id: 'cert-sprints-genai',
        degreeOrCert: 'تخصص تقنيات الذكاء الاصطناعي التوليدي (Generative AI Techniques)',
        institution: 'Sprints AI Academy & American Center Cairo',
        period: '2025',
        notes: 'نماذج اللغة المتقدمة، Agentic Frameworks، QLoRA، و Production ML.',
      },
      {
        id: 'cert-dlai',
        degreeOrCert: 'Supervised Machine Learning',
        institution: 'DeepLearning.AI (Coursera)',
        period: '2024',
        notes: 'الأساسيات العملية للتعلم الموجه وتقييم النماذج.',
      },
      {
        id: 'cert-google-data',
        degreeOrCert: 'Data, Data Everywhere',
        institution: 'Google (Google Cloud Skills Boost)',
        period: '2024',
        notes: 'منهجيات تحليل البيانات وأساسيات البيانات المهيكلة.',
      },
    ],
    community: [
      {
        id: 'gdg-damanhur',
        role: 'مساهمة فعالة وعضوة',
        organization: 'Google Developer Groups (GDG) Damanhur',
      },
      {
        id: 'students-union',
        role: 'ممثلة في اتحاد الطلاب',
        organization: 'كلية الحاسبات والمعلومات، جامعة دمنهور',
      },
    ],
    contact: {
      heading: 'خلينا نتكلم عن المشكلة اللي محتاج تحلها.',
      subtext:
        'متاحة لمناقشة فرص عمل هندسة الذكاء الاصطناعي، بناء أنظمة Agentic AI و Hybrid RAG للـ Production، وتصميم معماريات تعلم آلي قابلة للتوسع.',
      email: 'salmawaheed8421@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/in/salma-waheed-148a50226',
      linkedinLabel: 'LinkedIn',
      githubUrl: 'https://github.com/Salmawaheed3',
      githubLabel: 'GitHub',
    },
  },
};
