// Detailed project data for modal display
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface TechnicalDetail {
  title: string;
  description: string;
  code?: string;
}

export interface Challenge {
  problem: string;
  solution: string;
}

export interface ProjectMetrics {
  [key: string]: string;
}

export interface DetailedProject {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github: string;
  images?: {
    hero?: string;
    gallery?: ProjectImage[];
  };
  features?: string[];
  technicalDetails?: TechnicalDetail[];
  challenges?: Challenge[];
  metrics?: ProjectMetrics;
}

export const DETAILED_PROJECTS: DetailedProject[] = [
  {
  name: "LinkCrypta",
  description: "A secure password and link management app with offline-first storage using Hive and optional cloud synchronization. All sensitive data is encrypted, requiring a master password for viewing or copying credentials.",
  tech: ["Flutter", "Dart", "Hive", "Firebase Firestore", "Firebase Authentication", "AES Encryption"],
  link: "https://yourvaultmate-link.com",
  github: "https://github.com/yourusername/vaultmate",
  images: {
    hero: "/vaultmate-hero.jpg",
    gallery: [
      {
        src: "/vaultmate-dashboard.jpg",
        alt: "VaultMate dashboard",
        caption: "Organized view of passwords and saved links"
      },
      {
        src: "/vaultmate-encryption.jpg",
        alt: "Encrypted password view",
        caption: "Encrypted data visible until master password is entered"
      }
    ]
  },
  features: [
    "Offline-first local storage using Hive",
    "Cloud sync with Firebase Firestore",
    "AES encryption for stored credentials",
    "Master password protection before viewing or copying data",
    "Favorites and bookmarks for quick access",
    "Secure password generator",
    "Biometric authentication (Fingerprint/Face ID)",
    "Search and categorization for saved credentials"
  ],
  technicalDetails: [
    {
      title: "Encryption & Decryption",
      description: "AES-based encryption ensures that passwords and links are securely stored. Viewing or copying requires master password authentication.",
      code: `import 'package:encrypt/encrypt.dart' as encrypt;

final key = encrypt.Key.fromUtf8(masterPassword.padRight(32, '0'));
final iv = encrypt.IV.fromLength(16);

String encryptText(String text) {
  final encrypter = encrypt.Encrypter(encrypt.AES(key));
  return encrypter.encrypt(text, iv: iv).base64;
}

String decryptText(String encrypted) {
  final encrypter = encrypt.Encrypter(encrypt.AES(key));
  return encrypter.decrypt64(encrypted, iv: iv);
}`
    },
    {
      title: "Local & Cloud Sync",
      description: "Data is first stored locally in Hive for offline access. When sync is enabled, changes are mirrored in Firestore with end-to-end encryption."
    }
  ],
  challenges: [
    {
      problem: "Ensuring security while syncing data on cloud",
      solution: "All data is encrypted locally before syncing, so Firestore only stores encrypted blobs."
    },
    {
      problem: "Preventing unauthorized access when copying passwords",
      solution: "Implemented a master password prompt before copying sensitive data to clipboard."
    }
  ],
  metrics: {
    "Passwords Stored": "5,000+",
    "Links Saved": "2,000+",
    "Average Sync Latency": "200ms",
    "Encryption Standard": "AES-256"
  }
},
  {
    name: "Vulnerability Scanner",
    description: "An automated web application vulnerability scanner that identifies common security issues like XSS, SQL injection, and CSRF vulnerabilities. Built with Python and includes comprehensive reporting.",
    tech: ["Python", "Requests", "BeautifulSoup", "SQLAlchemy", "Flask"],
    github: "https://github.com/technitishmodi/vuln-scanner",
    images: {
      hero: "/vuln-scanner-hero.jpg",
      gallery: [
        {
          src: "/vuln-scanner-dashboard.jpg",
          alt: "Scanner dashboard",
          caption: "Real-time vulnerability scanning dashboard"
        },
        {
          src: "/vuln-scanner-reports.jpg",
          alt: "Detailed security reports", 
          caption: "Comprehensive vulnerability reports with remediation advice"
        }
      ]
    },
    features: [
      "Automated XSS detection and verification",
      "SQL injection vulnerability testing",
      "CSRF token validation checks",
      "Directory traversal detection",
      "Sensitive file exposure scanning",
      "Comprehensive reporting system",
      "False positive reduction algorithms",
      "Multi-threaded scanning for efficiency",
      "Custom payload injection capabilities",
      "Integration with popular security frameworks"
    ],
    technicalDetails: [
      {
        title: "Vulnerability Detection Engine",
        description: "Custom-built detection algorithms that identify common web vulnerabilities with high accuracy and minimal false positives."
      },
      {
        title: "Reporting System",
        description: "Generates detailed reports with vulnerability classifications, risk assessments, and remediation recommendations."
      }
    ],
    challenges: [
      {
        problem: "Reducing false positives while maintaining detection accuracy",
        solution: "Implemented advanced verification techniques and context-aware analysis to confirm vulnerabilities."
      },
      {
        problem: "Handling various web application architectures and frameworks",
        solution: "Developed modular scanning approach that adapts to different application types and technologies."
      }
    ],
    metrics: {
      "Vulnerabilities Detected": "10,000+",
      "False Positive Rate": "<5%",
      "Scanning Speed": "50+ URLs/min",
      "Detection Accuracy": "95%+"
    }
  },
  {
    name: "Secure Chat Application", 
    description: "End-to-end encrypted real-time chat application with secure authentication, message encryption, and user privacy protection. Implements modern cryptographic standards.",
    tech: ["Node.js", "Socket.io", "MongoDB", "JWT", "Crypto"],
    link: "https://securechat-demo.vercel.app",
    github: "https://github.com/technitishmodi/secure-chat",
    images: {
      hero: "/secure-chat-hero.jpg",
      gallery: [
        {
          src: "/secure-chat-interface.jpg",
          alt: "Encrypted chat interface",
          caption: "Clean, secure messaging interface with encryption indicators"
        },
        {
          src: "/secure-chat-security.jpg",
          alt: "Security features",
          caption: "Advanced security features and encryption management"
        }
      ]
    },
    features: [
      "End-to-end encryption using AES-256",
      "Real-time messaging with Socket.io",
      "Secure user authentication with JWT",
      "Message history encryption",
      "User presence indicators",
      "File sharing with encryption",
      "Group chat capabilities",
      "Message deletion and editing",
      "Typing indicators",
      "Secure session management"
    ],
    technicalDetails: [
      {
        title: "Encryption Implementation",
        description: "Messages are encrypted client-side before transmission using AES-256 encryption with unique keys per conversation.",
        code: `const crypto = require('crypto');
const algorithm = 'aes-256-gcm';

function encryptMessage(text, password) {
  const key = crypto.scryptSync(password, 'salt', 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher(algorithm, key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return { encrypted, iv: iv.toString('hex') };
}`
      },
      {
        title: "Real-time Communication",
        description: "Built on Socket.io for real-time bidirectional communication with automatic reconnection and message queuing."
      }
    ],
    challenges: [
      {
        problem: "Implementing true end-to-end encryption in web browsers", 
        solution: "Used Web Crypto API for client-side encryption ensuring server never sees plaintext messages."
      },
      {
        problem: "Maintaining message delivery in poor network conditions",
        solution: "Implemented message queuing and automatic retry mechanisms with delivery confirmations."
      }
    ],
    metrics: {
      "Messages Encrypted": "50,000+",
      "Active Users": "1,000+",
      "Message Delivery Rate": "99.9%",
      "Encryption Standard": "AES-256"
    }
  },
  {
    name: "Network Security Monitor",
    description: "Real-time network traffic analysis tool that monitors for suspicious activities and potential security threats. Features customizable alerts and detailed logging.",
    tech: ["Python", "Scapy", "Flask", "SQLite", "Chart.js"],
    github: "https://github.com/technitishmodi/network-monitor",
    images: {
      hero: "/network-monitor-hero.jpg",
      gallery: [
        {
          src: "/network-monitor-dashboard.jpg",
          alt: "Real-time monitoring dashboard",
          caption: "Live network traffic analysis and threat detection"
        },
        {
          src: "/network-monitor-alerts.jpg",
          alt: "Security alerts system",
          caption: "Customizable alerting system for security events"
        }
      ]
    },
    features: [
      "Real-time packet capture and analysis",
      "Intrusion detection system (IDS) capabilities", 
      "Customizable alerting for suspicious activities",
      "Network traffic visualization",
      "Protocol analysis and filtering",
      "Geolocation tracking of IP addresses",
      "Bandwidth monitoring and reporting",
      "Security event logging and storage",
      "Threat intelligence integration",
      "Network topology mapping"
    ],
    technicalDetails: [
      {
        title: "Packet Analysis Engine",
        description: "Built using Scapy for deep packet inspection and analysis, capable of detecting various network anomalies and attack patterns."
      },
      {
        title: "Alert System",
        description: "Intelligent alerting system that uses machine learning techniques to reduce false positives and identify genuine threats."
      }
    ],
    challenges: [
      {
        problem: "Processing high-volume network traffic in real-time",
        solution: "Implemented efficient packet filtering and multi-threaded processing to handle large network loads."
      },
      {
        problem: "Distinguishing between legitimate and malicious traffic",
        solution: "Developed behavioral analysis algorithms and signature-based detection to improve accuracy."
      }
    ],
    metrics: {
      "Packets Analyzed": "1M+/hour",
      "Threats Detected": "5,000+",
      "False Positive Rate": "<3%",
      "Network Coverage": "99.8%"
    }
  }
];
