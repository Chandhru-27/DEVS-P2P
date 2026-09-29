import type { DomainConfig } from '../../types';

export const frontendDomain: DomainConfig = {
  id: 'frontend',
  slug: 'frontend',
  name: 'Frontend Engineering',
  shortName: 'Frontend',
  badge: 'Active Track',
  iconName: 'Layout',
  heroHeadline: 'Build interfaces. Understand browsers. Engineer better experiences.',
  heroTagline:
    'From HTML, CSS & JavaScript fundamentals to modern frontend applications, accessibility, performance, and real-world engineering.',
  heroCtaText: 'Explore Frontend Roadmap',
  roadmapData: [
    {
      id: 'fe-phase-1',
      phaseNumber: 1,
      title: 'Web & UI Foundations',
      tagline: 'Understand how the web works and build clean, semantic, responsive interfaces.',
      duration: '3 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Layout',
      overview:
        'Understand how the web works from DNS and HTTP requests to building clean, accessible, semantic document structures and flexible responsive layouts with Flexbox and CSS Grid.',
      topics: [
        {
          id: 'fe-p1-t1',
          name: 'How the Web Works',
          summary:
            'Understand browsers, clients and servers, URLs, DNS, HTTP/HTTPS and requests/responses. Learn what happens when a user enters a URL and how the browser receives the resources required to construct a webpage.',
          keySkills: ['DNS & IP', 'HTTP/HTTPS', 'Client-Server Model', 'Browser Parsing', 'Request-Response Cycle'],
          recommendedResources: [
            {
              title: 'MDN — How the Web Works',
              url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'fe-p1-t2',
          name: 'HTML & Semantic Structure',
          summary:
            'Learn semantic HTML, document structure, links, images, forms and accessible markup. Understand how HTML provides the structure and meaning of web content.',
          keySkills: ['Semantic HTML5', 'Document Outline', 'Accessible Forms', 'WAI-ARIA Basics'],
          recommendedResources: [
            {
              title: 'MDN — HTML Structuring',
              url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'fe-p1-t3',
          name: 'CSS & Responsive Design',
          summary:
            'Learn selectors, box model, typography, Flexbox, Grid, positioning and responsive layouts. Learn how to translate visual designs into flexible browser layouts.',
          keySkills: ['Box Model', 'Flexbox', 'CSS Grid', 'Media Queries', 'Responsive Units'],
          recommendedResources: [
            {
              title: 'MDN — CSS Styling Basics',
              url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics',
              type: 'Documentation',
            },
          ],
        },
      ],
      milestoneProject: {
        title: 'Responsive Personal Portfolio',
        description:
          'Build a responsive personal portfolio using semantic HTML and modern CSS. Support desktop, tablet and mobile layouts, and deploy the website publicly.',
        deliverables: [
          'Build a responsive personal portfolio using semantic HTML and modern CSS',
          'Support desktop, tablet and mobile layouts with clean responsive design',
          'Deploy the website publicly on Vercel or GitHub Pages',
        ],
      },
    },
    {
      id: 'fe-phase-2',
      phaseNumber: 2,
      title: 'JavaScript & Browser Interaction',
      tagline: 'Move from static pages to interactive experiences using JavaScript and browser APIs.',
      duration: '4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Code',
      overview:
        'Move beyond static pages by mastering core JavaScript fundamentals, dynamic DOM manipulation, browser event handling, and asynchronous data fetching with promises and async/await.',
      topics: [
        {
          id: 'fe-p2-t1',
          name: 'JavaScript Fundamentals',
          summary:
            'Learn variables, data types, conditions, loops, functions, arrays, objects, scope and modules. Build a strong foundation in the language before moving into frameworks.',
          keySkills: ['ES6+ Syntax', 'Functions & Scope', 'Arrays & Objects', 'Modules', 'Closures'],
          recommendedResources: [
            {
              title: 'MDN — JavaScript Core Scripting',
              url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'fe-p2-t2',
          name: 'DOM & Events',
          summary:
            'Understand the DOM and how JavaScript interacts with HTML. Handle user interactions such as clicks, forms, inputs and dynamic UI updates.',
          keySkills: ['DOM Manipulation', 'Event Listeners', 'Event Delegation', 'Dynamic UI Updates'],
          recommendedResources: [
            {
              title: 'MDN — Adding Interactivity with Events',
              url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'fe-p2-t3',
          name: 'Asynchronous JavaScript & APIs',
          summary:
            'Learn promises, async/await, fetch and API responses. Handle loading, empty, success and error states when working with external data.',
          keySkills: ['Promises', 'Async/Await', 'Fetch API', 'HTTP Status Codes', 'Error Handling'],
          recommendedResources: [
            {
              title: 'JavaScript.info — The Modern JavaScript Tutorial',
              url: 'https://javascript.info',
              type: 'Course',
            },
          ],
        },
      ],
      milestoneProject: {
        title: 'Interactive API Dashboard',
        description:
          'Build a dashboard that consumes data from a public API, implementing real-time search, filtering, and robust state handling.',
        deliverables: [
          'Build a dashboard that consumes data from a public REST API',
          'Implement search, filtering, and interactive UI behaviour',
          'Handle loading, empty, and error states properly',
        ],
      },
    },
    {
      id: 'fe-phase-3',
      phaseNumber: 3,
      title: 'Modern Frontend Applications',
      tagline: 'Learn how modern frontend applications are structured, composed and maintained.',
      duration: '4 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Layers',
      overview:
        'Understand component-based architecture and learn how modern web applications manage complex UI states, client-side routing, and external data feeds.',
      topics: [
        {
          id: 'fe-p3-t1',
          name: 'React Fundamentals',
          summary:
            'Learn components, props, state, events, conditional rendering and lists. Understand component-based architecture and reusable UI.',
          keySkills: ['JSX', 'Props & State', 'useState / useEffect', 'Component Composition', 'Reusable UI'],
          recommendedResources: [
            {
              title: 'React Learn — Official Interactive Guide',
              url: 'https://react.dev/learn',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'fe-p3-t2',
          name: 'Application State & Data',
          summary:
            'Understand state, data flow and communication between components. Work with asynchronous data and frontend APIs to manage real-world UI states.',
          keySkills: ['Unidirectional Data Flow', 'Lifting State Up', 'Custom Hooks', 'UI States Management'],
          recommendedResources: [
            {
              title: 'React Learn — Managing State',
              url: 'https://react.dev/learn/managing-state',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'fe-p3-t3',
          name: 'Routing & Application Architecture',
          summary:
            'Build multi-page experiences within a frontend application. Organize pages, components, utilities and features in a maintainable structure.',
          keySkills: ['Client-Side Routing', 'Feature-Based Architecture', 'Reusable Layouts', 'Code Organization'],
          recommendedResources: [
            {
              title: 'React Router Documentation',
              url: 'https://reactrouter.com',
              type: 'Documentation',
            },
          ],
        },
      ],
      milestoneProject: {
        title: 'Full Frontend Product',
        description:
          'Build a multi-page React application integrated with a backend service or API, featuring reusable components, routing, and responsive design.',
        deliverables: [
          'Build a multi-page React application with client-side routing',
          'Integrate an external API or backend service',
          'Implement reusable components, routing, and responsive design',
        ],
      },
    },
    {
      id: 'fe-phase-4',
      phaseNumber: 4,
      title: 'Frontend Engineering',
      tagline: 'Go beyond “it works” and engineer interfaces that are accessible, reliable, maintainable and fast.',
      duration: '4 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Cpu',
      overview:
        'Go beyond basic functional code: engineer interfaces with strict accessibility standards, performance measurement via browser DevTools, and professional engineering workflows.',
      topics: [
        {
          id: 'fe-p4-t1',
          name: 'Accessibility & Browser Fundamentals',
          summary:
            'Learn semantic UI, keyboard navigation, focus management and accessible forms. Understand browser behaviour, browser policies and common frontend constraints.',
          keySkills: ['Semantic UI', 'Keyboard Navigation', 'Focus Management', 'WCAG Standards', 'Browser Constraints'],
          recommendedResources: [
            {
              title: 'web.dev — Learn Accessibility',
              url: 'https://web.dev/learn/accessibility/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'fe-p4-t2',
          name: 'Performance Engineering',
          summary:
            'Understand network requests, rendering, bundle size, lazy loading and caching. Learn to identify performance bottlenecks using measurement and browser DevTools.',
          keySkills: ['Network Requests', 'Rendering Bottlenecks', 'Lazy Loading', 'Caching', 'DevTools Profiler'],
          recommendedResources: [
            {
              title: 'web.dev — Learn Performance',
              url: 'https://web.dev/learn/performance/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'fe-p4-t3',
          name: 'Engineering Practices',
          summary:
            'Learn Git/GitHub workflows, debugging, reusable architecture and testing fundamentals. Understand how to write frontend code that can be changed and maintained as a project grows.',
          keySkills: ['Git & GitHub Workflows', 'Debugging Strategies', 'Maintainable Code', 'Testing Fundamentals'],
          recommendedResources: [
            {
              title: 'Testing JavaScript by Kent C. Dodds',
              url: 'https://testingjavascript.com',
              type: 'Course',
            },
          ],
        },
      ],
      milestoneProject: {
        title: 'Production-Ready Web Application',
        description:
          'Take an existing frontend application and improve its accessibility, performance and architecture with measurable DevTools improvements.',
        deliverables: [
          'Improve accessibility, keyboard navigation, and semantic structure of an existing web app',
          'Analyse the application using browser DevTools and identify measurable performance improvements',
          'Document engineering decisions, architecture improvements, and benchmarks in a technical write-up',
        ],
      },
    },
    {
      id: 'fe-phase-5',
      phaseNumber: 5,
      title: 'Product & Portfolio Engineering',
      tagline: 'Take a real product from design and architecture to deployment and presentation.',
      duration: '4 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Sparkles',
      overview:
        'Deliver end-to-end software: translate designs into reusable frontend components, make architectural decisions around features and responsibilities, and deploy to real production environments.',
      topics: [
        {
          id: 'fe-p5-t1',
          name: 'Design → Code',
          summary:
            'Learn how to translate designs into reusable frontend components. Understand typography, spacing, hierarchy, responsive behaviour and interaction. Develop the ability to make design decisions rather than simply copying a design.',
          keySkills: ['Design Tokens', 'Typography Systems', 'Spacing Scales', 'Micro-interactions', 'Hierarchy'],
          recommendedResources: [
            {
              title: 'Refactoring UI by Adam Wathan & Steve Schoger',
              url: 'https://www.refactoringui.com',
              type: 'Book',
            },
          ],
        },
        {
          id: 'fe-p5-t2',
          name: 'Real-World Frontend Architecture',
          summary:
            'Structure larger applications around features and responsibilities. Handle API states, authentication flows, errors and edge cases. Make architectural decisions with maintainability and future requirements in mind.',
          keySkills: ['Feature-Based Architecture', 'Auth Flows', 'Edge Cases', 'Error Boundaries', 'Maintainability'],
          recommendedResources: [
            {
              title: 'Bulletproof React — Architecture Guide',
              url: 'https://github.com/alan2207/bulletproof-react',
              type: 'GitHub',
            },
          ],
        },
        {
          id: 'fe-p5-t3',
          name: 'Production & Deployment',
          summary:
            'Learn production builds, environment variables, deployment and basic monitoring. Understand the differences between local development and a real production environment.',
          keySkills: ['Production Builds', 'Environment Variables', 'CI/CD Deployment', 'Monitoring & Analytics'],
          recommendedResources: [
            {
              title: 'Vercel Deployment & Build Documentation',
              url: 'https://vercel.com/docs',
              type: 'Documentation',
            },
          ],
        },
      ],
      milestoneProject: {
        title: 'Launch a Real Product',
        description:
          'Design and build a complete frontend product around a real problem, deploy it publicly with a polished responsive experience, and document key technical decisions.',
        deliverables: [
          'Design and build a complete frontend product solving a real problem',
          'Deploy the product publicly with a polished, accessible, responsive experience',
          'Submit the GitHub repository, live URL, and a short engineering case study explaining key technical decisions',
        ],
      },
    },
  ],
  hostsData: [
    {
      id: 'fe-host-1',
      name: 'ASVAND K',
      role: 'Frontend Engineer',
      headline: 'Frontend Engineering, UI Development & Modern Web Applications',
      topicOrFocus: 'Web Fundamentals, JavaScript, Modern Frontend Development & Engineering',
      bio: 'Frontend Engineer focused on building modern, responsive web experiences and turning ideas and designs into functional products. Guides students through web fundamentals, JavaScript, modern frontend development, and practical engineering.',
      avatarUrl: '/avatar-frontend.jpg',
      initials: 'AK',
      socials: {
        github: 'https://github.com/asvandkanakaraj',
        linkedin: 'https://www.linkedin.com/in/asvandkanakaraj',
        instagram: 'https://www.instagram.com/asvandkanakaraj',
        portfolio: 'https://asvand.com',
        email: 'asvandkanakaraj@gmail.com',
      },
    },
    {
      id: 'fe-host-2',
      name: 'Chandhru L',
      role: 'Head of Operations',
      headline: 'Operational Execution, Student Workflows & Community Infrastructure',
      topicOrFocus: 'Operations, Workflow Scaling & Community Mentorship Execution',
      bio: 'Leading operations, student workflows, and community infrastructure to scale peer-to-peer technical engineering across all domains.',
      avatarUrl: '/host-anime-4.jpg',
      initials: 'CL',
      socials: {
        github: 'https://github.com/Chandhru-27',
        linkedin: 'https://www.linkedin.com/in/chandhrul27/',
        instagram: 'https://www.instagram.com/chandhru_27/',
        email: 'chandhru.l2007@gmail.com',
      },
    },
  ],
  resourcesData: [
    {
      id: 'fe-res-1',
      title: 'Learn Web Development (MDN Web Docs)',
      description:
        'A structured learning path covering the essential foundations of modern frontend development, from web standards and HTML/CSS to JavaScript, accessibility and tooling.',
      url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development',
      type: 'Course',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'MDN Web Docs',
      tags: ['HTML', 'CSS', 'JavaScript', 'Standards'],
      featured: true,
    },
    {
      id: 'fe-res-2',
      title: 'React Learn (Official Documentation)',
      description:
        'Official React learning material covering components, state, events, rendering and application-level UI development.',
      url: 'https://react.dev/learn',
      type: 'Documentation',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'React Core Team',
      tags: ['React', 'Hooks', 'Components', 'State'],
    },
    {
      id: 'fe-res-3',
      title: 'The Modern JavaScript Tutorial',
      description:
        'A structured JavaScript resource progressing from fundamentals to browser APIs and advanced language concepts.',
      url: 'https://javascript.info',
      type: 'Course',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'Ilya Kantor (JavaScript.info)',
      tags: ['JavaScript', 'DOM', 'Async', 'ES6+'],
    },
    {
      id: 'fe-res-4',
      title: 'Learn Performance (web.dev)',
      description:
        'Introduces the fundamentals of web performance and practical techniques for understanding and improving frontend performance.',
      url: 'https://web.dev/learn/performance/',
      type: 'Documentation',
      level: 'Advanced',
      cost: 'Free',
      authorOrProvider: 'Google Chrome Team (web.dev)',
      tags: ['Performance', 'Core Web Vitals', 'Optimization'],
    },
    {
      id: 'fe-res-5',
      title: 'Frontend Mentor (Design-to-Code Challenges)',
      description:
        'Provides realistic design-to-code challenges that help students practice responsive UI development and gradually build a frontend portfolio.',
      url: 'https://www.frontendmentor.io',
      type: 'Interactive',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'Frontend Mentor',
      tags: ['UI Challenges', 'Design-to-Code', 'Portfolio'],
    },
  ],
  projectsData: [
    {
      id: 'fe-proj-1',
      title: 'Responsive Personal Portfolio',
      phase: 'Phase 1: Web & UI Foundations',
      difficulty: 'Beginner',
      description:
        'Build and deploy a professional personal portfolio that communicates your identity, skills, projects and learning journey through a polished responsive interface.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      learningOutcomes: [
        'Responsive UI development and design-to-code implementation',
        'Cross-device fluid layouts with zero overflow',
        'Deployment and basic web engineering practices',
      ],
    },
    {
      id: 'fe-proj-2',
      title: 'Interactive Product Dashboard',
      phase: 'Phase 2: JavaScript & Browser Interaction',
      difficulty: 'Intermediate',
      description:
        'Build an interactive dashboard that consumes real API data and provides search, filtering, loading states and meaningful data presentation.',
      techStack: ['React', 'JavaScript/TypeScript', 'REST API', 'CSS'],
      learningOutcomes: [
        'Component architecture and external REST API integration',
        'State management and real-world loading, empty, and error UI states',
        'Client-side search, filtering, and responsive data visualization',
      ],
    },
    {
      id: 'fe-proj-3',
      title: 'Production-Ready Web Product',
      phase: 'Phase 5: Product & Portfolio Engineering',
      difficulty: 'Advanced',
      description:
        'Design, build and deploy a complete web product around a real-world problem. The project should demonstrate thoughtful UI, frontend architecture, accessibility, performance and production deployment.',
      techStack: ['React', 'TypeScript', 'REST API / Backend', 'Git / GitHub', 'Vercel / Netlify'],
      learningOutcomes: [
        'Real-world frontend architecture, performance profiling, and accessibility',
        'End-to-end product development, automated CI/CD deployment, and case study authoring',
        'Technical decision-making, maintainability, and clean code organization',
      ],
    },
  ],
};
