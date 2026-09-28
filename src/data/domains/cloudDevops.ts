import type { DomainConfig } from '../../types';

export const cloudDevopsDomain: DomainConfig = {
  id: 'cloud',
  slug: 'cloud',
  name: 'Cloud & DevOps Engineering',
  shortName: 'Cloud',
  badge: 'Active Track',
  iconName: 'Cloud',
  heroHeadline: 'Automating scale, reliability, and continuous deployment across the globe',
  heroTagline: 'infrastructure as code · container orchestration, declarative pipelines, and enterprise site reliability',
  heroCtaText: 'Explore Cloud & DevOps Roadmap',
  roadmapData: [
    {
      id: 'cd-phase-1',
      phaseNumber: 1,
      title: 'Linux Systems Administration, Bash & Networking',
      tagline: 'Systemd, SSH Keys, Shell Automation, DNS, and Kernel Tuning',
      duration: '3 - 4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Terminal',
      overview:
        'Become comfortable managing headless remote Linux servers: master systemd service management, SSH key management, cron automation, file system permissions, and DNS resolution diagnostics.',
      topics: [
        {
          id: 'cd-p1-t1',
          name: 'Linux System Administration & Shell Scripting',
          summary: 'Automating server provisioning, log rotation, cron jobs, and robust error-handled Bash scripts.',
          keySkills: ['Systemd Units', 'Bash Automation', 'Logrotate', 'File Permissions & ACLs'],
          recommendedResources: [
            { title: 'The Linux Command Line by William Shotts', url: 'https://linuxcommand.org/tlcl.php', type: 'Book' },
          ],
        },
        {
          id: 'cd-p1-t2',
          name: 'Server Networking, DNS & Firewalls',
          summary: 'Configuring UFW/iptables, troubleshooting DNS with dig and nslookup, and SSL/TLS certificate automation with Let’s Encrypt.',
          keySkills: ['DNS Records (A, CNAME, TXT)', 'UFW Firewalls', 'Certbot / Let’s Encrypt', 'Reverse Proxies with Nginx'],
          recommendedResources: [
            { title: 'DigitalOcean Community: Linux Server Guides', url: 'https://www.digitalocean.com/community/tutorials', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Hardened Production Nginx Reverse Proxy Server',
        description: 'Provision a cloud Linux instance from scratch, configure automated Let’s Encrypt SSL renewal, rate-limiting, and basic fail2ban intrusion prevention.',
        deliverables: [
          'Modular Nginx configuration with TLS 1.3 and HSTS security headers',
          'Automated cron job for Certbot certificate renewal',
          'Fail2ban integration banning repetitive brute-force SSH attacks',
        ],
      },
    },
    {
      id: 'cd-phase-2',
      phaseNumber: 2,
      title: 'Containerization & Docker Architecture',
      tagline: 'Namespaces, Cgroups, Multi-Stage Builds, Docker Compose & Registry Security',
      duration: '4 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Box',
      overview:
        'Deep dive into container virtualization: understand Linux namespaces and cgroups, write ultra-lightweight multi-stage Dockerfiles, orchestrate local multi-container stacks with Compose, and scan images with Trivy.',
      topics: [
        {
          id: 'cd-p1-t3',
          name: 'Docker Engine Internals & Multi-Stage Builds',
          summary: 'Minimizing image sizes using Alpine/Distroless, layer caching optimization, and non-root user execution.',
          keySkills: ['Multi-Stage Dockerfiles', 'Layer Caching', 'Distroless Images', 'Trivy Vulnerability Scanning'],
          recommendedResources: [
            { title: 'Docker Official Documentation & Best Practices', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', type: 'Documentation' },
          ],
        },
        {
          id: 'cd-p1-t4',
          name: 'Multi-Service Orchestration with Docker Compose',
          summary: 'Bridged networking, persistent volume mounts, environment segregation, and service health checks.',
          keySkills: ['Docker Compose', 'Bridge Networks', 'Volume Persistence', 'Healthchecks'],
          recommendedResources: [
            { title: 'Docker Compose in Practice', url: 'https://docs.docker.com/compose/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Production-Ready Microservice Local Stack',
        description: 'Package a full application stack (React frontend, Node/Go backend, PostgreSQL, Redis, and PgAdmin) with unified healthchecks and volume backups.',
        deliverables: [
          'Optimized Dockerfiles reducing final image size under 50MB',
          'Docker Compose specification with automated startup dependency ordering',
          'Automated database backup script running via container volume',
        ],
      },
    },
    {
      id: 'cd-phase-3',
      phaseNumber: 3,
      title: 'Infrastructure as Code (IaC) with Terraform & AWS/GCP',
      tagline: 'HCL Declarative Code, State Management, VPCs, and Cloud Architecture',
      duration: '4 - 5 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Cpu',
      overview:
        'Manage cloud infrastructure through code: write modular Terraform (HCL), maintain remote state with S3 and DynamoDB locking, and provision secure VPC networks, subnets, and compute instances.',
      topics: [
        {
          id: 'cd-p3-t1',
          name: 'Terraform Fundamentals, HCL & Remote State',
          summary: 'Providers, resources, variables, outputs, and remote state locking with S3/DynamoDB.',
          keySkills: ['HCL Syntax', 'Terraform State Management', 'S3 Remote Backend', 'State Drift Detection'],
          recommendedResources: [
            { title: 'Terraform: Up & Running by Yevgeniy Brikman', url: 'https://www.terraformupandrunning.com', type: 'Book' },
          ],
        },
        {
          id: 'cd-p3-t2',
          name: 'Cloud Networking: VPCs, Subnets & Security Groups',
          summary: 'Public vs private subnets, NAT gateways, route tables, and least-privilege cloud IAM roles.',
          keySkills: ['VPC Architecture', 'NAT Gateways', 'Security Groups', 'Cloud IAM Roles'],
          recommendedResources: [
            { title: 'AWS Well-Architected Framework', url: 'https://aws.amazon.com/architecture/well-architected/', type: 'Paper' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Complete Multi-Tier AWS/GCP VPC Infrastructure in Terraform',
        description: 'Author reusable Terraform modules provisioning a multi-AZ VPC, public/private subnets, load balancers, and autoscaling compute groups.',
        deliverables: [
          'Modular Terraform codebase with environment configs (staging vs prod)',
          'Remote backend with state locking and zero secrets committed',
          'Automated terraform plan & terraform apply pipeline',
        ],
      },
    },
    {
      id: 'cd-phase-4',
      phaseNumber: 4,
      title: 'Kubernetes (K8s) Cluster Orchestration',
      tagline: 'Pods, Deployments, Services, Ingress, Helm & GitOps',
      duration: '5 - 6 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Boxes',
      overview:
        'Operate containerized workloads at planetary scale: study the Kubernetes control plane, author Pod/Deployment/Service manifests, configure Ingress controllers, and manage packages with Helm.',
      topics: [
        {
          id: 'cd-p4-t1',
          name: 'Kubernetes Architecture & Core Workloads',
          summary: 'API Server, Kubelet, etcd, ReplicaSets, Rolling Updates, and ConfigMaps/Secrets.',
          keySkills: ['Control Plane', 'Deployments & Pods', 'Services (ClusterIP, NodePort, LoadBalancer)', 'Resource Limits (CPU/Memory)'],
          recommendedResources: [
            { title: 'Kubernetes Official Documentation', url: 'https://kubernetes.io/docs/', type: 'Documentation' },
            { title: 'Mumshad Mannambeth: CKA Certification Path', url: 'https://kodekloud.com', type: 'Course' },
          ],
        },
        {
          id: 'cd-p4-t2',
          name: 'Helm Packaging & GitOps with ArgoCD',
          summary: 'Templating manifests with Helm charts, value overrides, and declarative continuous reconciliation via ArgoCD.',
          keySkills: ['Helm Charts', 'ArgoCD GitOps', 'Custom Resource Definitions (CRDs)', 'Secret Management with SealedSecrets'],
          recommendedResources: [
            { title: 'ArgoCD Official GitOps Documentation', url: 'https://argo-cd.readthedocs.io/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Production Kubernetes Cluster with Helm & ArgoCD GitOps',
        description: 'Deploy a multi-node K8s cluster (kind or cloud managed) running microservices continuously synchronized from a Git repository.',
        deliverables: [
          'Custom Helm chart with parameterized replicas, ports, and ingress annotations',
          'ArgoCD application tracking Git commits with automated deployment rollouts',
          'Horizontal Pod Autoscaler (HPA) dynamically scaling under synthetic load',
        ],
      },
    },
    {
      id: 'cd-phase-5',
      phaseNumber: 5,
      title: 'Continuous Integration / Delivery & Observability',
      tagline: 'GitHub Actions, Prometheus, Grafana, OpenTelemetry & Distributed Tracing',
      duration: '4 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Activity',
      overview:
        'Close the feedback loop: build automated GitHub Actions CI/CD pipelines with test gates and Docker pushes, instrument applications with OpenTelemetry, and monitor latency in Grafana.',
      topics: [
        {
          id: 'cd-p5-t1',
          name: 'Automated CI/CD Pipelines with GitHub Actions',
          summary: 'Parallel test matrices, Docker image building and pushing to GitHub Container Registry (GHCR), and canary deployments.',
          keySkills: ['GitHub Actions', 'Matrix Builds', 'Container Registry Push', 'Canary Rollouts'],
          recommendedResources: [
            { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions', type: 'Documentation' },
          ],
        },
        {
          id: 'cd-p5-t2',
          name: 'Observability: Metrics, Logs & Traces (LGTM Stack)',
          summary: 'Prometheus metrics scrapers, Grafana dashboards, Loki log aggregators, and distributed trace propagation with OpenTelemetry.',
          keySkills: ['Prometheus PromQL', 'Grafana Dashboards', 'Loki Log Aggregation', 'OpenTelemetry Traces'],
          recommendedResources: [
            { title: 'Google Site Reliability Engineering (SRE) Book', url: 'https://sre.google/sre-book/table-of-contents/', type: 'Book' },
          ],
        },
      ],
      milestoneProject: {
        title: 'End-to-End GitOps CI/CD & Observability Pipeline',
        description: 'Complete pipeline that tests code on PR, builds and scans Docker images, triggers ArgoCD deployment, and alerts on P99 latency spikes via Prometheus/Grafana.',
        deliverables: [
          'GitHub Actions workflow with security linting, tests, and GHCR publishing',
          'Grafana dashboard visualizing HTTP throughput, error rates, and P95/P99 latency',
          'Prometheus Alertmanager rules notifying Slack/Discord on SLO degradation',
        ],
      },
    },
  ],
  hostsData: [
    {
      id: 'cd-host-1',
      name: 'Rohan Deshmukh',
      role: 'Lead Cloud & DevOps Architect',
      headline: 'Kubernetes & GitOps Specialist • AWS & Terraform',
      topicOrFocus: 'Cluster Orchestration, Infrastructure as Code & Reliability',
      bio: 'Leading multi-region cloud infrastructure, container orchestration, and mentoring on automated GitOps continuous deployment workflows.',
      avatarUrl: '/avatar-cloud.jpg',
      initials: 'RD',
      socials: {
        github: 'https://github.com/rohandeshmukh-ops',
        linkedin: 'https://linkedin.com/in/rohandeshmukh',
        portfolio: 'https://rohan.cloud',
        email: 'rohan@p2pdevs.ai',
      },
    },
    {
      id: 'cd-host-2',
      name: 'Ananya Sen',
      role: 'Site Reliability & Observability Lead',
      headline: 'SRE Specialist • Prometheus, Grafana & OpenTelemetry',
      topicOrFocus: 'Distributed Tracing, SLO Engineering & Incident Response',
      bio: 'Designing high-availability metrics pipelines, automated canary rollouts, and zero-downtime database failovers.',
      avatarUrl: '/host-anime-5.jpg',
      initials: 'AS',
      socials: {
        github: 'https://github.com/ananyasen-sre',
        linkedin: 'https://linkedin.com/in/ananyasen',
        portfolio: 'https://ananya.systems',
        email: 'ananya@p2pdevs.ai',
      },
    },
  ],
  resourcesData: [
    {
      id: 'cd-res-1',
      title: 'Google Site Reliability Engineering (SRE) Book',
      description: 'The defining textbook on operating planet-scale software systems, SLOs, error budgets, and post-mortems.',
      url: 'https://sre.google/sre-book/table-of-contents/',
      type: 'Book',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'Google SRE Team',
      tags: ['SRE', 'Reliability', 'Observability'],
      featured: true,
    },
    {
      id: 'cd-res-2',
      title: 'Terraform Up & Running (3rd Edition)',
      description: 'Comprehensive guide to writing production-grade Infrastructure as Code with reusable modules and safe deployments.',
      url: 'https://www.terraformupandrunning.com',
      type: 'Book',
      level: 'Intermediate',
      cost: 'Paid',
      authorOrProvider: 'Yevgeniy Brikman',
      tags: ['Terraform', 'IaC', 'Cloud'],
    },
  ],
  projectsData: [
    {
      id: 'cd-proj-1',
      title: 'Multi-Arch Automated Docker CI/CD with GitHub Actions',
      phase: 'Phase 2: Containerization & Docker Architecture',
      difficulty: 'Beginner',
      description:
        'Configure a GitHub Actions workflow building multi-architecture (amd64/arm64) container images with Docker Buildx, vulnerability scanning with Trivy, and image signing with Cosign.',
      techStack: ['Docker', 'GitHub Actions', 'Buildx', 'Trivy', 'Cosign'],
      learningOutcomes: [
        'Leverage GitHub Actions cache backend to achieve sub-60s Docker builds',
        'Cryptographically sign container images using Cosign keyless signatures',
        'Halt build pipelines automatically when critical CVEs are detected',
      ],
    },
  ],
};
