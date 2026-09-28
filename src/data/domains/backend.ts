import type { DomainConfig } from '../../types';

export const backendDomain: DomainConfig = {
  id: 'backend',
  slug: 'backend',
  name: 'Backend & Distributed Systems',
  shortName: 'Backend',
  badge: 'Active Track',
  iconName: 'Server',
  heroHeadline: 'The invisible foundation powering the world’s most resilient systems',
  heroTagline: 'scalable concurrency · distributed data stores, low-latency protocols, and fault-tolerant architecture',
  heroCtaText: 'Explore Backend Roadmap',
  roadmapData: [
    {
      id: 'be-phase-1',
      phaseNumber: 1,
      title: 'Operating Systems, Networking & Protocol Internals',
      tagline: 'TCP/UDP, Sockets, HTTP/2, HTTP/3, and Linux Process Concurrency',
      duration: '4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Network',
      overview:
        'Understand what happens beneath your application code: socket multiplexing (epoll/kqueue), connection handshakes, TLS 1.3 encryption, and system call boundaries.',
      topics: [
        {
          id: 'be-p1-t1',
          name: 'Network Protocols & Sockets: TCP vs UDP vs QUIC',
          summary: 'Transport layers, packet segmentation, congestion control, and raw socket programming in Python or Go.',
          keySkills: ['TCP 3-Way Handshake', 'Socket API', 'HTTP/2 Multiplexing', 'QUIC & HTTP/3'],
          recommendedResources: [
            { title: 'Beej’s Guide to Network Programming', url: 'https://beej.us/guide/bgnet/', type: 'Book' },
            { title: 'Computer Networking: A Top-Down Approach', url: 'https://gaia.cs.umass.edu/kurose_ross/', type: 'Book' },
          ],
        },
        {
          id: 'be-p1-t2',
          name: 'Linux System Architecture & Process Concurrency',
          summary: 'Processes, threads, file descriptors, virtual memory, and inter-process communication (IPC).',
          keySkills: ['File Descriptors', 'Signals & IPC', 'Fork & Exec', 'Concurrency vs Parallelism'],
          recommendedResources: [
            { title: 'Operating Systems: Three Easy Pieces (OSTEP)', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', type: 'Book' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Multi-threaded HTTP/1.1 Web Server from Raw Sockets',
        description: 'Build a concurrent web server in C, Go, or Python without external HTTP frameworks, handling keep-alive connections and static file streaming.',
        deliverables: [
          'Raw socket listening, non-blocking polling with epoll/select',
          'HTTP request parsing and response header generation',
          'Thread pool or goroutine worker pool for high concurrency',
        ],
      },
    },
    {
      id: 'be-phase-2',
      phaseNumber: 2,
      title: 'Database Engineering: Relational & NoSQL Internals',
      tagline: 'ACID Transactions, B-Tree Indexes, Query Planners & Data Modeling',
      duration: '4 - 5 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Database',
      overview:
        'Stop guessing query performance: study B-Trees, LSM trees, write-ahead logs (WAL), isolation levels, foreign key indexing, and schema migrations with PostgreSQL.',
      topics: [
        {
          id: 'be-p2-t1',
          name: 'PostgreSQL Internals, Indexing & EXPLAIN ANALYZE',
          summary: 'B-Tree vs Hash vs GIN indexes, MVCC mechanics, and diagnosing sequential scans.',
          keySkills: ['B-Tree Indexes', 'EXPLAIN ANALYZE', 'MVCC & Vacuuming', 'Composite Index Design'],
          recommendedResources: [
            { title: 'Use The Index, Luke!', url: 'https://use-the-index-luke.com', type: 'Book' },
            { title: 'PostgreSQL Official Documentation', url: 'https://www.postgresql.org/docs/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p2-t2',
          name: 'Transactions, Locks & ACID Isolation Levels',
          summary: 'Dirty reads, phantom reads, row-level locking, and deadlocks in transactional systems.',
          keySkills: ['Read Committed vs Serializable', 'Row Locks (FOR UPDATE)', 'Optimistic vs Pessimistic', 'Deadlock Detection'],
          recommendedResources: [
            { title: 'Designing Data-Intensive Applications (DDIA)', url: 'https://dataintensive.net', type: 'Book' },
          ],
        },
      ],
      milestoneProject: {
        title: 'High-Concurrency E-Commerce Inventory & Checkout Engine',
        description: 'Build a race-condition-proof inventory booking API with PostgreSQL transactions, row-level locking, and zero overselling.',
        deliverables: [
          'Zero-oversell guarantee tested with 1,000 concurrent checkout requests',
          'Database migration pipeline with Prisma / Drizzle / Goose',
          'Benchmark report comparing READ COMMITTED vs SERIALIZABLE throughput',
        ],
      },
    },
    {
      id: 'be-phase-3',
      phaseNumber: 3,
      title: 'Modern API Architecture & Low-Latency Services',
      tagline: 'REST, gRPC with Protocol Buffers, GraphQL & Auth Systems',
      duration: '4 - 5 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Cpu',
      overview:
        'Engineer high-throughput microservices using Go, Node.js, or Rust. Compare REST ergonomics against ultra-fast binary serialization with gRPC.',
      topics: [
        {
          id: 'be-p3-t1',
          name: 'gRPC, Protocol Buffers & Binary Serialization',
          summary: 'Generating type-safe client-server stubs and streaming RPCs over HTTP/2.',
          keySkills: ['Protobuf Schemas', 'Unary vs Streaming gRPC', 'HTTP/2 Framing', 'Code Generation'],
          recommendedResources: [
            { title: 'gRPC Official Documentation & Guides', url: 'https://grpc.io/docs/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p3-t2',
          name: 'Production Auth, JWTs & Rate Limiting Algorithms',
          summary: 'Token-based auth, asymmetric key signing (RS256), and Token Bucket / Leaky Bucket rate limiting.',
          keySkills: ['RS256 JWTs', 'OAuth2 / OIDC', 'Token Bucket Algorithm', 'Middleware Architecture'],
          recommendedResources: [
            { title: 'RFC 7519: JSON Web Token Standard', url: 'https://datatracker.ietf.org/doc/html/rfc7519', type: 'Paper' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Distributed Rate-Limited API Gateway in Go',
        description: 'Construct a reverse-proxy gateway that terminates TLS, enforces token-bucket rate limiting via Redis, and proxies gRPC & REST requests.',
        deliverables: [
          'Sub-2ms proxy latency overhead at 10,000 req/sec',
          'Token-bucket sliding window algorithm implemented with Redis Lua scripts',
          'RS256 public key verification middleware',
        ],
      },
    },
    {
      id: 'be-phase-4',
      phaseNumber: 4,
      title: 'Distributed Caching, Message Queues & Event-Driven Systems',
      tagline: 'Redis Caching Strategies, Apache Kafka, RabbitMQ & Eventual Consistency',
      duration: '5 - 6 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Workflow',
      overview:
        'Scale systems horizontally: design cache-aside and write-through patterns in Redis, decouple services using Kafka topics, and handle message deduplication.',
      topics: [
        {
          id: 'be-p4-t1',
          name: 'Redis Caching Patterns & Invalidation Strategies',
          summary: 'Cache stampede prevention, probabilistic early expiration, and Redis data structures (Sorted Sets, HyperLogLogs).',
          keySkills: ['Cache Aside', 'Stampede Prevention', 'Redis Sorted Sets', 'Distributed Locks (Redlock)'],
          recommendedResources: [
            { title: 'Redis University Courses', url: 'https://university.redis.com', type: 'Course' },
          ],
        },
        {
          id: 'be-p4-t2',
          name: 'Apache Kafka & Event-Driven Streaming',
          summary: 'Partitions, consumer groups, offset commits, idempotency, and transactional outbox patterns.',
          keySkills: ['Kafka Partitions', 'Consumer Groups', 'Transactional Outbox', 'Idempotent Consumers'],
          recommendedResources: [
            { title: 'Kafka: The Definitive Guide by Neha Narkhede', url: 'https://www.confluent.io/resources/kafka-the-definitive-guide/', type: 'Book' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Event-Driven Financial Transaction Ledger',
        description: 'Build a distributed double-entry accounting ledger with Kafka event streams, idempotent consumer handlers, and Redis read-caches.',
        deliverables: [
          'Transactional outbox pattern guaranteeing at-least-once delivery',
          'Idempotent processing using deduplication keys in PostgreSQL',
          'Real-time balance updates streamed via WebSockets',
        ],
      },
    },
    {
      id: 'be-phase-5',
      phaseNumber: 5,
      title: 'Distributed Systems & High Availability',
      tagline: 'CAP Theorem, Consensus (Raft/Paxos), Sharding & Resiliency',
      duration: '4 - 5 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Server',
      overview:
        'Conquer distributed computing challenges: database horizontal sharding, consistent hashing, Raft leader election, circuit breakers, and fault tolerance.',
      topics: [
        {
          id: 'be-p5-t1',
          name: 'Consensus Protocols & Consistent Hashing',
          summary: 'Raft protocol states (Leader, Follower, Candidate), log replication, and consistent hashing rings.',
          keySkills: ['Raft Consensus', 'Consistent Hashing', 'Split-Brain Prevention', 'Gossip Protocols'],
          recommendedResources: [
            { title: 'The Raft Paper (Ongaro & Ousterhout)', url: 'https://raft.github.io/raft.pdf', type: 'Paper' },
          ],
        },
        {
          id: 'be-p5-t2',
          name: 'System Resilience: Circuit Breakers & Graceful Degradation',
          summary: 'Handling cascade failures, timeout budgets, retries with exponential backoff and jitter.',
          keySkills: ['Circuit Breakers', 'Exponential Backoff', 'Bulkheading', 'Chaos Engineering'],
          recommendedResources: [
            { title: 'Release It! Design and Deploy Production-Ready Software', url: 'https://pragprog.com/titles/mnee2/', type: 'Book' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Distributed Key-Value Store with Raft Consensus',
        description: 'Build a distributed key-value cluster in Go implementing Raft leader election, heartbeats, and replicated log state machines.',
        deliverables: [
          'Leader election and log replication passing 100% split-network tests',
          'Client redirection to the current elected cluster leader',
          'Snapshotting and log compaction support for persistent disks',
        ],
      },
    },
  ],
  hostsData: [
    {
      id: 'be-host-1',
      name: 'Vikram Roy',
      role: 'Lead Backend Architect',
      headline: 'Distributed Systems Engineer • Go, Rust & High-Concurrency APIs',
      topicOrFocus: 'Distributed Systems, Consensus Protocols & Low-Latency Engines',
      bio: 'Architecting fault-tolerant microservices, high-volume transactional databases, and mentoring on systems engineering.',
      avatarUrl: '/avatar-backend.jpg',
      initials: 'VR',
      socials: {
        github: 'https://github.com/vikramroy-be',
        linkedin: 'https://linkedin.com/in/vikramroy',
        portfolio: 'https://vikramroy.io',
        email: 'vikram@p2pdevs.ai',
      },
    },
    {
      id: 'be-host-2',
      name: 'Sneha Rao',
      role: 'Database & Infrastructure Lead',
      headline: 'PostgreSQL Specialist • Kafka & Event-Driven Architecture',
      topicOrFocus: 'ACID Internals, Query Optimization & Streaming Systems',
      bio: 'Obsessed with database execution plans, write-ahead logs, and resilient event pipelines handling millions of events per second.',
      avatarUrl: '/host-anime-5.jpg',
      initials: 'SR',
      socials: {
        github: 'https://github.com/sneharao-db',
        linkedin: 'https://linkedin.com/in/sneharao-data',
        portfolio: 'https://sneharao.dev',
        email: 'sneha@p2pdevs.ai',
      },
    },
    {
      id: 'be-host-3',
      name: 'Anirudh Kumar',
      role: 'Cloud & Systems Engineer',
      headline: 'API Gateway Architect • gRPC & Redis Ecosystems',
      topicOrFocus: 'Zero-Allocation Go Services, Rate Limiting & Networking',
      bio: 'Building low-latency reverse proxies, distributed caching layers, and high-throughput network services.',
      avatarUrl: '/host-anime-4.jpg',
      initials: 'AK',
      socials: {
        github: 'https://github.com/anirudhkumar-be',
        linkedin: 'https://linkedin.com/in/anirudhkumar',
        portfolio: 'https://anirudh.dev',
        email: 'anirudh@p2pdevs.ai',
      },
    },
  ],
  resourcesData: [
    {
      id: 'be-res-1',
      title: 'Designing Data-Intensive Applications (DDIA)',
      description: 'The bible of backend and distributed systems by Martin Kleppmann covering replication, partitioning, and consistency.',
      url: 'https://dataintensive.net',
      type: 'Book',
      level: 'Intermediate',
      cost: 'Paid',
      authorOrProvider: 'Martin Kleppmann',
      tags: ['Distributed Systems', 'Architecture', 'Databases'],
      featured: true,
    },
    {
      id: 'be-res-2',
      title: 'Beej’s Guide to Network Programming',
      description: 'The legendary tutorial for understanding socket programming, TCP, UDP, and network system calls.',
      url: 'https://beej.us/guide/bgnet/',
      type: 'Book',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'Brian "Beej" Hall',
      tags: ['Networking', 'Sockets', 'C'],
    },
    {
      id: 'be-res-3',
      title: 'Operating Systems: Three Easy Pieces (OSTEP)',
      description: 'Free comprehensive textbook explaining virtualization, concurrency, and persistence in operating systems.',
      url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
      type: 'Book',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'Remzi & Andrea Arpaci-Dusseau',
      tags: ['OS', 'Concurrency', 'Linux'],
    },
  ],
  projectsData: [
    {
      id: 'be-proj-1',
      title: 'Distributed Log-Structured Append Engine in Go',
      phase: 'Phase 1: Operating Systems & Networking',
      difficulty: 'Intermediate',
      description:
        'Construct an append-only commit log engine with segment file rolling, binary indexing, and binary search lookups inspired by Kafka storage internals.',
      techStack: ['Go', 'File I/O', 'Mmap', 'Binary Protocol'],
      learningOutcomes: [
        'Utilize memory-mapped files (mmap) for zero-copy file reads',
        'Design fixed-width binary index headers for O(log N) record lookups',
        'Handle corrupted records using CRC32 checksum verification',
      ],
    },
    {
      id: 'be-proj-2',
      title: 'Distributed Task Queue with Redis & Exponential Backoff',
      phase: 'Phase 4: Caching & Message Queues',
      difficulty: 'Intermediate',
      description:
        'Build a multi-worker job scheduling system with delayed task execution, dead-letter queues, and atomic task claiming using Redis Lua scripts.',
      techStack: ['Node.js', 'TypeScript', 'Redis', 'Docker'],
      learningOutcomes: [
        'Write atomic Redis Lua scripts to prevent double task pickup',
        'Implement delayed job dispatch via Redis Sorted Sets timestamps',
        'Graceful worker shutdown ensuring running jobs complete or re-queue',
      ],
    },
  ],
};
