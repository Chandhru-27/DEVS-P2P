<p align="center">
  <img src="public/devs-logo.png" alt="DEVS Logo" width="220" />
</p>

<h1 align="center">DEVs P2P · Multi-Domain Technical Curriculum Platform</h1>

<p align="center">
  <strong>An open-source, peer-to-peer engineering roadmap, mentor directory, and project incubator.</strong><br />
  A unified platform template supporting multiple engineering tracks with dynamic URL routing, procedural ASCII art, and 3D rotatory Linktrees.
</p>

<p align="center">
  <a href="https://github.com/Saisrikar20/DEVs-P2P-AI-ML"><img src="https://img.shields.io/badge/DEVs-P2P%20Engineering-black?style=for-the-badge&logo=github" alt="DEVs P2P" /></a>
  <img src="https://img.shields.io/badge/Architecture-Multi--Domain%20Template-white?style=for-the-badge" alt="Template" />
  <img src="https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20v4-black?style=for-the-badge" alt="Stack" />
  <img src="https://img.shields.io/badge/License-MIT-white?style=for-the-badge" alt="License" />
</p>

---

## 🌟 Overview

**DEVs P2P** is built as a luxury monochrome, zero-bloat engineering education template. Originally crafted by the **AI/ML Track**, it has been engineered into a **dynamic, multi-track platform** where individual domain teams across your organization or college can plug in their own roadmap, mentors, curated resources, and portfolio projects.

### 🌐 Live Technical Tracks
Navigate directly to any domain via URL path or the in-app track switcher:

| Route | Domain Track | Lead Mentors | Focus Area |
| :--- | :--- | :--- | :--- |
| **[`/aiml`](http://localhost:5173/aiml)** | **AI & Machine Learning** *(Core Flagship)* | **Sai Srikar B**, Sabhari Sainath, Padma Sree | Neural Architectures, PyTorch, Local RAG, Model Serving |
| **[`/frontend`](http://localhost:5173/frontend)** | **Frontend Engineering** | **ASVAND K**, **Chandhru L** | UI Architecture, JavaScript, React, Performance, Accessibility |
| **[`/backend`](http://localhost:5173/backend)** | **Backend Systems** | Vikram Roy, Sneha Rao, Anirudh Kumar | Go, PostgreSQL Internals, Redis, Kafka, Raft Consensus |
| **[`/cloud`](http://localhost:5173/cloud)** | **Cloud & DevOps** | Rohan Deshmukh, Ananya Sen | Linux, Docker, Terraform, Kubernetes GitOps, Prometheus |
| **[`/iot`](http://localhost:5173/iot)** | **IoT & Embedded Systems** | Adithya Ram | Bare-Metal C, FreeRTOS, MQTT, TinyML, Hardware Security |
| **[`/video-editing`](http://localhost:5173/video-editing)** | **Video Editing & Post-Production** | Nikhita Menon | Montage Pacing, Sound Foley, DaVinci Resolve Color, Speed Ramps |

---

## 🧠 Preserved Core Track: AI & Machine Learning (`/aiml`)

The foundational AI/ML track created by **Sai Srikar B** and team remains the flagship curriculum:

### Track Mentors & Organizers
- **Sai Srikar B** (`Lead Organizer & AI Systems Architect`)
  - Portfolio: [saisrikar20.github.io](https://saisrikar20.github.io) • GitHub: [@Saisrikar20](https://github.com/Saisrikar20) • LinkedIn: [saisrikarb](https://www.linkedin.com/in/saisrikarb/) • Instagram: [@\_\_saisrikar\_\_](https://www.instagram.com/__saisrikar__/)
- **Sabhari Sainath** (`Co-Organizer & MLOps Lead`):
  - FastAPI Model Serving, Docker Containerization & Production ML
- **Padma Sree** (`Co-Organizer & GenAI Architect`):
  - LLM Systems, Multi-Agent Workflows, Vector Databases & RAG

### 5-Phase AI/ML Curriculum
1. **Phase 1: Mathematical Foundations & Python for AI** (Vector spaces, linear transformations, multivariable autograd, clean Python)
2. **Phase 2: Data Engineering, Analytics & Scientific Computing** (NumPy array operations, Pandas/Polars vectorized pipelines, SQL queries)
3. **Phase 3: Classical Machine Learning & Statistical Modeling** (Scikit-Learn pipelines, XGBoost/LightGBM, Optuna tuning, SHAP explainability)
4. **Phase 4: Deep Learning & Neural Network Architectures** (PyTorch tensors, backprop from scratch, CNNs, Transformers, Attention mechanisms)
5. **Phase 5: Generative AI, Autonomous Agents & Production Serving** (Local RAG architectures, LangGraph multi-agent systems, vLLM, FastAPI endpoints)

---

## 🛠️ Quick Start for Fellow Team Members: Adding Your Track Content

The codebase is built on an isolated, modular data architecture. **You never need to touch any React or UI components** to update or create a track. Everything is powered by TypeScript data files.

### Directory Structure
All domain content files live in [`src/data/domains/`](src/data/domains/):

```text
src/data/domains/
├── index.ts              # Master registry mapping slugs to domain configs
├── aiml.ts               # AI & ML Track (Preserved Flagship)
├── frontend.ts           # Frontend Engineering Track (slug: "frontend")
├── backend.ts            # Backend Systems Track (slug: "backend")
├── cloudDevops.ts        # Cloud & DevOps Track (slug: "cloud")
├── iot.ts                # IoT & Embedded Systems Track (slug: "iot")
└── videoEditing.ts       # Video Editing Track (slug: "video-editing")
```

---

### Step-by-Step Guide for Domain Leads

#### 1. Editing an Existing Track (e.g. `frontend.ts`, `backend.ts`, `cloudDevops.ts`, `iot.ts`, `videoEditing.ts`)
1. Open your domain file (e.g., [`src/data/domains/frontend.ts`](src/data/domains/frontend.ts)).
2. Update the fields:
   - **`heroHeadline`**: The main punchy editorial title for your track.
   - **`heroTagline`**: Subtitle explaining the track's core philosophy.
   - **`roadmapData`**: Array of phases with topics, skills, and milestone projects.
   - **`hostsData`**: Array of your track's mentors (names, roles, bios, and socials).
   - **`resourcesData`**: Curated list of books, courses, docs, and cheat sheets.
   - **`projectsData`**: Capstone projects showcasing real-world proof of work.
3. Save the file. Vite hot-reloads your changes in the browser instantly!

#### 2. Adding Your Mentor Avatar Photo
1. Put your 1:1 square profile photo or avatar in the [`public/`](public/) directory:
   - Example: `public/avatar-frontend.jpg` or `public/john-doe.png`.
2. In your domain file under `hostsData`:
   ```typescript
   avatarUrl: '/avatar-frontend.jpg', // Always use a leading slash
   ```
3. Add your social links:
   ```typescript
   socials: {
     github: 'https://github.com/yourhandle',
     linkedin: 'https://www.linkedin.com/in/yourhandle/',
     instagram: 'https://www.instagram.com/yourhandle/',
     portfolio: 'https://yourwebsite.dev',
     email: 'yourname@organization.com', // Triggers one-click copy to clipboard
   }
   ```

#### 3. Creating a Brand New Domain Track (e.g. `cybersecurity.ts` or `gamedev.ts`)

##### Step A: Create `src/data/domains/gameDev.ts`:
```typescript
import type { DomainConfig } from '../../types';

export const gameDevDomain: DomainConfig = {
  id: 'game-dev',
  slug: 'gamedev', // The URL path: http://localhost:5173/gamedev
  name: 'Game Development & Graphics',
  shortName: 'Game Dev',
  badge: 'Active Track',
  iconName: 'Gamepad', // Lucide icon name
  heroHeadline: 'Simulating virtual physics, real-time rendering, and interactive worlds',
  heroTagline: 'C++ & Unreal Engine · custom shaders, spatial math, and multiplayer networking',
  heroCtaText: 'Explore Game Dev Roadmap',
  roadmapData: [
    {
      id: 'gd-phase-1',
      phaseNumber: 1,
      title: 'Game Math, Physics & C++ Foundations',
      tagline: 'Linear Algebra, Collision Detection & Game Loops',
      duration: '4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Code',
      overview: 'Understand the core game loop, vectors, matrices, and framerate management.',
      topics: [
        {
          id: 'gd-p1-t1',
          name: 'Vector Math & 2D/3D Transformations',
          summary: 'Dot products, cross products, and coordinate spaces.',
          keySkills: ['Vectors', 'Quaternions', 'Trigonometry'],
          recommendedResources: [
            { title: 'Essential Mathematics for Games', url: 'https://example.com', type: 'Book' }
          ],
        },
      ],
      milestoneProject: {
        title: 'Custom 2D Physics Engine in C++',
        description: 'Build an impulse-based collision resolution engine from scratch.',
        deliverables: ['AABB & Circle collision detection', 'Restitution physics', '60fps render loop'],
      },
    },
  ],
  hostsData: [
    {
      id: 'gd-host-1',
      name: 'Your Name',
      role: 'Lead Game Dev Mentor',
      headline: 'Unreal Engine 5 Specialist',
      topicOrFocus: 'Gameplay Architecture & Shaders',
      bio: 'Mentoring on C++, shaders, and multiplayer netcode.',
      avatarUrl: '/avatar-gamedev.jpg',
      initials: 'YN',
      socials: {
        github: 'https://github.com/yourhandle',
        linkedin: 'https://www.linkedin.com/in/yourhandle/',
        instagram: 'https://www.instagram.com/yourhandle/',
        portfolio: 'https://yourportfolio.dev',
        email: 'you@organization.com',
      },
    },
  ],
  resourcesData: [
    {
      id: 'gd-res-1',
      title: 'Game Programming Patterns by Robert Nystrom',
      description: 'The definitive architectural pattern guide for game programmers.',
      url: 'https://gameprogrammingpatterns.com',
      type: 'Book',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'Robert Nystrom',
      tags: ['Architecture', 'C++', 'Patterns'],
      featured: true,
    },
  ],
  projectsData: [
    {
      id: 'gd-proj-1',
      title: 'Retro Raycaster 3D Engine',
      phase: 'Phase 1: Game Math & Physics',
      difficulty: 'Intermediate',
      description: 'Implement a Wolfenstein 3D style DDA raycaster in C++ with SDL2.',
      techStack: ['C++', 'SDL2', 'Linear Algebra'],
      learningOutcomes: ['DDA Raycasting algorithm', 'Texture mapping', 'Spatial collision'],
    },
  ],
};
```

##### Step B: Register the Track in `src/data/domains/index.ts`:
```typescript
import { gameDevDomain } from './gameDev';

export const domainsRegistry: DomainConfig[] = [
  aimlDomain,
  frontendDomain,
  backendDomain,
  cloudDevopsDomain,
  iotDomain,
  videoEditingDomain,
  gameDevDomain, // <--- Add here
];

export const domainsMap: Record<string, DomainConfig> = {
  ...
  gamedev: gameDevDomain,
  'game-dev': gameDevDomain, // URL alias
};
```

---

## 📋 DomainConfig Field Reference

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Unique identifier for track | `'backend'` |
| `slug` | `string` | URL path without slash | `'backend'` (renders at `/backend`) |
| `name` | `string` | Full domain display title | `'Backend Systems'` |
| `shortName` | `string` | Short title for pills and mobile tabs | `'Backend'` |
| `badge` | `string` | Pill label in track switcher | `'Core Flagship'`, `'Active Track'` |
| `iconName` | `string` | Lucide icon name | `'Server'`, `'Code'`, `'Cloud'`, `'Film'` |
| `heroHeadline` | `string` | Hero title rendered above 3D rotatory dial | `'High-concurrency distributed systems...'` |
| `heroTagline` | `string` | Editorial subtitle | `'Go, Rust & PostgreSQL internals...'` |
| `heroCtaText` | `string` | Primary CTA button label | `'Explore Backend Roadmap'` |
| `roadmapData` | `RoadmapPhase[]` | Array of learning phases with topics & deliverables | See template above |
| `hostsData` | `EventHost[]` | Mentors shown in 3D Rotatory Linktree & team cards | See template above |
| `resourcesData`| `Resource[]` | Curated books, courses, docs & repos | See template above |
| `projectsData` | `ProjectIdea[]` | Real-world capstone projects with outcomes | See template above |

---

## 💻 Tech Stack & Architectural Decisions

- **Framework**: React 19 + TypeScript + Vite 8.
- **Styling**: Tailwind CSS v4 (pure `#000000` pitch black, high-contrast monochrome design system, zero purple gradient slop).
- **Procedural Canvas**: Live HTML5 Canvas rendering **1,104 non-overlapping colored ASCII glyphs** for the "Creation of Adam" hero composition with zero external background images.
- **3D Rotatory Linktree**: Pure CSS 3D cylinder transform engine (`perspective: 1200px`, `transform: rotateY(...) translateZ(380px)`) with pointer touch/mouse drag, side arrows, and dial selectors.
- **Client-Side Routing**: Custom `useDomainRouter` utilizing `window.history.pushState` with full backward/forward browser history and deep-linking support.
- **State Isolation**: User topic completions and bookmarks are namespaced per-track in `localStorage` (`devs_p2p_completed_aiml`, `devs_p2p_completed_frontend`, etc.).
- **Cloud Deployment**: Pre-configured with `vercel.json` SPA rewrites (`/(.*) -> /`) so direct deep-links (e.g. `/video-editing`) work on Vercel without 404s.

---

## 🚀 Local Development

### 1. Prerequisites
- **Node.js**: v18+ (tested on Node v20/v22/v24)
- **Package Manager**: `npm` or `pnpm`

### 2. Setup & Run
```bash
# Clone the repository
git clone https://github.com/Saisrikar20/DEVs-P2P-AI-ML.git
cd DEVs-P2P-AI-ML

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **`http://localhost:5173/`** or test any direct route:
- `http://localhost:5173/aiml`
- `http://localhost:5173/frontend`
- `http://localhost:5173/backend`
- `http://localhost:5173/cloud`
- `http://localhost:5173/iot`
- `http://localhost:5173/video-editing`

### 3. Production Build
```bash
npm run build
```
Generates an optimized static production bundle in `dist/` (builds in ~250ms).

---

## ❓ Frequently Asked Questions (FAQ)

### Q: Why didn't my avatar load?
> Ensure your avatar file is placed inside the `public/` directory (e.g., `public/my-avatar.jpg`) and your `avatarUrl` string starts with a leading slash: `avatarUrl: '/my-avatar.jpg'`.

### Q: Can my track have more or fewer than 5 phases?
> Yes! The timeline and progress tracker automatically adjust to any number of phases specified in `roadmapData`.

### Q: Are user checkmarks and progress saved across tracks?
> Yes, each track stores its completed topics independently in the user's browser `localStorage` under `devs_p2p_completed_<track_slug>`. Completing a topic in AI/ML will not affect a user's progress in Frontend or Backend.

---

## 🤝 Contribution Guidelines

1. **Keep it Monochrome**: All new components must adhere to the high-contrast luxury dark theme (pure black `#000000`, zinc/white strokes, zero colored glow cards).
2. **Type Safety**: Ensure `npm run build` exits with code 0 (all TypeScript interfaces must be strictly adhered to).
3. **Open Pull Requests**:
   - `feat(frontend): update phase 3 state management resources`
   - `feat(cloud): add kubernetes gitops capstone project`
   - `feat(iot): add embedded security module`
   - `feat(video-editing): add foley sound design project`

---

## 📄 License

Distributed under the **MIT License**. Maintained with ❤️ by **DEVs P2P Community**.
