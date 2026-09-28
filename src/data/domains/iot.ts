import type { DomainConfig } from '../../types';

export const iotDomain: DomainConfig = {
  id: 'iot',
  slug: 'iot',
  name: 'IoT & Embedded Systems',
  shortName: 'IoT',
  badge: 'Active Track',
  iconName: 'Cpu',
  heroHeadline: 'Bridging the physical and digital world through silicon, sensors & firmware',
  heroTagline: 'microcontroller architecture · RTOS scheduling, edge telemetry, and low-power IoT networks',
  heroCtaText: 'Explore IoT Roadmap',
  roadmapData: [
    {
      id: 'iot-phase-1',
      phaseNumber: 1,
      title: 'Low-Level C, Memory Architecture & Hardware Fundamentals',
      tagline: 'Pointers, Bitwise Math, Registers, Memory-Mapped I/O & Microcontroller Arch',
      duration: '4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Cpu',
      overview:
        'Understand computing at the silicon level: master low-level C memory pointers, bitwise register manipulation, volatile variables, hardware interrupts, and circuit basics with oscilloscopes.',
      topics: [
        {
          id: 'iot-p1-t1',
          name: 'Embedded C & Register Manipulation',
          summary: 'Direct register writes, bit masks, pointer arithmetic, and struct packing for memory efficiency.',
          keySkills: ['Embedded C', 'Bitwise Operators', 'Volatile Keyword', 'Memory-Mapped I/O'],
          recommendedResources: [
            { title: 'Making Embedded Systems by Elecia White', url: 'https://www.oreilly.com/library/view/making-embedded-systems/9781449308292/', type: 'Book' },
          ],
        },
        {
          id: 'iot-p1-t2',
          name: 'Hardware Peripherals & Bus Protocols',
          summary: 'GPIO timing, hardware interrupts (ISR), I2C, SPI, and UART serial communication.',
          keySkills: ['I2C Protocol', 'SPI Bus', 'UART Serial', 'Interrupt Service Routines (ISRs)'],
          recommendedResources: [
            { title: 'SparkFun Embedded Hardware & Protocol Tutorials', url: 'https://learn.sparkfun.com', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Multi-Sensor Hardware Telemetry Station (ESP32 / STM32)',
        description: 'Build an environmental sensor node sampling temperature, humidity, and barometric pressure via I2C with hardware timer interrupts.',
        deliverables: [
          'Bare-metal C peripheral drivers for I2C and SPI sensors',
          'Interrupt-driven push button with debouncing state machine',
          'Low-power deep-sleep cycle consuming under 15 microamps',
        ],
      },
    },
    {
      id: 'iot-phase-2',
      phaseNumber: 2,
      title: 'Real-Time Operating Systems (FreeRTOS)',
      tagline: 'Preemptive Scheduling, Mutexes, Semaphores, Queues & Determinism',
      duration: '5 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Activity',
      overview:
        'Design deterministic embedded applications: multitask concurrent sensor readings and wireless transmissions using FreeRTOS tasks, priority queues, and deadlock prevention.',
      topics: [
        {
          id: 'iot-p2-t1',
          name: 'FreeRTOS Task Scheduling & Prioritization',
          summary: 'Task control blocks, context switching mechanics, preemptive round-robin scheduling, and idle hooks.',
          keySkills: ['FreeRTOS Tasks', 'Task Priorities', 'Context Switching', 'Stack Overflow Hooks'],
          recommendedResources: [
            { title: 'FreeRTOS Official Reference Manual', url: 'https://www.freertos.org/Documentation/RTOS_book.html', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p2-t2',
          name: 'Inter-Task Communication & Synchronization',
          summary: 'Message queues, binary & counting semaphores, mutexes with priority inheritance, and event groups.',
          keySkills: ['FreeRTOS Queues', 'Mutexes & Semaphores', 'Priority Inversion Prevention', 'Event Groups'],
          recommendedResources: [
            { title: 'Mastering the FreeRTOS Real Time Kernel', url: 'https://www.freertos.org', type: 'Book' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Deterministic Real-Time Quadcopter Flight Controller Kernel',
        description: 'Implement a FreeRTOS flight stabilization loop reading 1kHz IMU gyro data, executing PID stabilization, and driving motor PWM outputs without jitter.',
        deliverables: [
          'Deterministic 1000Hz sensor sampling task with zero deadline misses',
          'Queue-based telemetry dispatch task to wireless transceiver',
          'CPU usage and stack watermark monitor task',
        ],
      },
    },
    {
      id: 'iot-phase-3',
      phaseNumber: 3,
      title: 'IoT Connectivity & Wireless Protocols',
      tagline: 'MQTT with TLS, CoAP, Bluetooth Low Energy (BLE), LoRaWAN & Wi-Fi',
      duration: '4 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Radio',
      overview:
        'Connect edge devices to the cloud: publish telemetry over lightweight MQTT with TLS 1.3 encryption, broadcast BLE advertising packets, and transmit long-range LoRaWAN packets.',
      topics: [
        {
          id: 'iot-p3-t1',
          name: 'MQTT Protocol, QoS & TLS Edge Security',
          summary: 'Publish/subscribe patterns, QoS levels (0, 1, 2), retain flags, and mTLS device certificates.',
          keySkills: ['MQTT & Mosquitto', 'QoS Delivery Guarantees', 'mTLS Device Identity', 'JSON / CBOR Payloads'],
          recommendedResources: [
            { title: 'HiveMQ MQTT Essentials Guide', url: 'https://www.hivemq.com/mqtt-essentials/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p3-t2',
          name: 'Low-Power Wireless: BLE & LoRaWAN',
          summary: 'GATT profiles, BLE advertising beacons, and chirp spread spectrum modulation in LoRaWAN networks.',
          keySkills: ['BLE GATT Services', 'Advertising Packets', 'LoRaWAN OTAA Activation', 'Power Budgets'],
          recommendedResources: [
            { title: 'The Things Network LoRaWAN Academy', url: 'https://www.thethingsnetwork.org', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Long-Range Agricultural Monitoring Fleet with LoRa & MQTT',
        description: 'Deploy battery-operated LoRa sensor nodes transmitting soil telemetry over 3km to an edge gateway bridging data to cloud MQTT dashboards.',
        deliverables: [
          'LoRaWAN sensor payload compression using Protocol Buffers / CBOR',
          'Edge gateway forwarding packets to Mosquitto MQTT broker',
          'Low-power energy profile extending coin cell lifespan past 12 months',
        ],
      },
    },
    {
      id: 'iot-phase-4',
      phaseNumber: 4,
      title: 'Edge AI (TinyML) & Sensor Fusion',
      tagline: 'TensorFlow Lite for Microcontrollers (TFLite Micro), Kalman Filters & On-Device Inference',
      duration: '5 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Cpu',
      overview:
        'Run machine learning directly on battery-powered microcontrollers: quantize neural networks to INT8, deploy TFLite Micro on ARM Cortex-M, and fuse sensor data with Extended Kalman Filters.',
      topics: [
        {
          id: 'iot-p4-t1',
          name: 'TinyML Model Quantization & TFLite Micro Runtime',
          summary: 'Post-training INT8 quantization, arena memory allocation, and executing inference in under 100KB of RAM.',
          keySkills: ['TFLite Micro', 'INT8 Quantization', 'Memory Arenas', 'CMSIS-NN Acceleration'],
          recommendedResources: [
            { title: 'TinyML by Pete Warden & Daniel Situnayake', url: 'https://tinymlbook.com', type: 'Book' },
          ],
        },
        {
          id: 'iot-p4-t2',
          name: 'Sensor Fusion & Kalman Filtering',
          summary: 'Combining noisy accelerometer and gyroscope data to accurately determine spatial orientation.',
          keySkills: ['Kalman Filter', 'Quaternion Math', 'IMU Calibration', 'Drift Elimination'],
          recommendedResources: [
            { title: 'Understanding Kalman Filters (MathWorks)', url: 'https://www.mathworks.com/videos/series/understanding-kalman-filters.html', type: 'Video' },
          ],
        },
      ],
      milestoneProject: {
        title: 'On-Device Predictive Industrial Vibration Anomaly Detector',
        description: 'Deploy an INT8 autoencoder on an ESP32/Cortex-M4 sampling high-frequency accelerometer vibrations to predict mechanical motor failures locally.',
        deliverables: [
          'TFLite Micro anomaly detection model running in 48KB RAM',
          'Inference latency under 12ms per sample batch',
          'Audible alert and wireless MQTT incident broadcast on anomaly detection',
        ],
      },
    },
    {
      id: 'iot-phase-5',
      phaseNumber: 5,
      title: 'Embedded Security, Secure Boot & Firmware Over-the-Air (FOTA)',
      tagline: 'Cryptographic Bootloaders, Hardware Root of Trust, Secure Storage & FOTA',
      duration: '4 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Shield',
      overview:
        'Harden connected devices against physical and remote threats: implement secure boot chains with RSA/ECDSA signature verification, flash encryption, and dual-bank failsafe FOTA updates.',
      topics: [
        {
          id: 'iot-p5-t1',
          name: 'Hardware Root of Trust & Secure Boot Chains',
          summary: 'eFuses, one-time programmable (OTP) keys, flash encryption, and verifying cryptographically signed firmware images.',
          keySkills: ['Secure Boot v2', 'Flash Encryption', 'eFuses', 'ECDSA Image Signing'],
          recommendedResources: [
            { title: 'Espressif ESP32 Security Architecture Guide', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/security/index.html', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p5-t2',
          name: 'Failsafe Firmware Over-The-Air (FOTA) Updates',
          summary: 'A/B dual-partition flash layouts, automatic rollback on boot failure, and differential delta updates.',
          keySkills: ['A/B Partitioning', 'FOTA Rollback', 'Delta Compression', 'OTA Protocol Verification'],
          recommendedResources: [
            { title: 'Memfault: Embedded Firmware Updates Guide', url: 'https://memfault.com', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Cryptographically Verified Dual-Bank FOTA Bootloader',
        description: 'Develop a production-grade FOTA client for ESP32/STM32 that downloads encrypted firmware over HTTPS, validates SHA256 signatures, and safely boots.',
        deliverables: [
          'Automatic rollback to Partition A if Partition B fails watchdog validation',
          'Cryptographic signature check rejecting modified or corrupted binaries',
          'Remote telemetry dashboard reporting firmware fleet versions',
        ],
      },
    },
  ],
  hostsData: [
    {
      id: 'iot-host-1',
      name: 'Adithya Ram',
      role: 'Lead Embedded & IoT Architect',
      headline: 'RTOS Systems Engineer • FreeRTOS, ESP32 & Industrial Automation',
      topicOrFocus: 'Firmware Architecture, Wireless Protocols & Low-Power Hardware',
      bio: 'Designing industrial microcontroller firmware, real-time operating system kernels, and mentoring on bare-metal C programming and IoT hardware integration.',
      avatarUrl: '/avatar-iot.jpg',
      initials: 'AR',
      socials: {
        github: 'https://github.com/adithyaram-iot',
        linkedin: 'https://linkedin.com/in/adithyaram',
        portfolio: 'https://adithya.firmware',
        email: 'adithya@p2pdevs.ai',
      },
    },
  ],
  resourcesData: [
    {
      id: 'iot-res-1',
      title: 'Making Embedded Systems by Elecia White',
      description: 'The industry-standard guide to patterns, architecture, and design for embedded software engineers.',
      url: 'https://www.oreilly.com/library/view/making-embedded-systems/9781449308292/',
      type: 'Book',
      level: 'Beginner',
      cost: 'Paid',
      authorOrProvider: 'Elecia White',
      tags: ['Embedded C', 'Hardware', 'Architecture'],
      featured: true,
    },
    {
      id: 'iot-res-2',
      title: 'FreeRTOS Official Reference Manual',
      description: 'The authoritative reference manual for FreeRTOS task primitives, queues, and real-time scheduling.',
      url: 'https://www.freertos.org/Documentation/RTOS_book.html',
      type: 'Documentation',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'Amazon Web Services / FreeRTOS',
      tags: ['FreeRTOS', 'RTOS', 'Concurrency'],
    },
  ],
  projectsData: [
    {
      id: 'iot-proj-1',
      title: 'Autonomous Low-Power LoRa Mesh Sensor Fleet',
      phase: 'Phase 3: IoT Connectivity & Wireless Protocols',
      difficulty: 'Intermediate',
      description:
        'Build a peer-to-peer LoRa mesh network of ESP32 devices that relay packets across long distances without central cellular coverage.',
      techStack: ['C++', 'ESP32', 'LoRa SX1276', 'FreeRTOS', 'MQTT'],
      learningOutcomes: [
        'Implement packet routing algorithms across ad-hoc mesh topologies',
        'Minimize radio sleep power draw below 20uA',
        'Construct binary payload decoders for Web dashboard visualization',
      ],
    },
  ],
};
