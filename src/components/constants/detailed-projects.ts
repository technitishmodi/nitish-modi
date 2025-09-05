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
    name: "SecureWeb Portfolio",
    description: "A secure, mobile-responsive portfolio website built with Next.js 15 and modern security practices. Features comprehensive mobile optimization, professional design, and robust security implementations.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Security Headers"],
    link: "https://nitishmodi.vercel.app",
    github: "https://github.com/technitishmodi/Portfolio",
    images: {
      hero: "/portfolio-hero.jpg",
      gallery: [
        {
          src: "/portfolio-mobile.jpg",
          alt: "Mobile responsive design",
          caption: "Fully responsive design optimized for all devices"
        },
        {
          src: "/portfolio-security.jpg",
          alt: "Security implementation",
          caption: "Modern security practices and headers"
        }
      ]
    },
    features: [
      "Mobile-first responsive design",
      "Professional cybersecurity-focused portfolio",
      "Touch-friendly navigation with hamburger menu",
      "Optimized performance with Next.js 15",
      "Modern security implementations",
      "SEO optimized with structured data",
      "Dark/Light theme support",
      "Contact form with validation",
      "GitHub activity integration",
      "Professional project showcases"
    ],
    technicalDetails: [
      {
        title: "Mobile Responsiveness",
        description: "Implemented comprehensive mobile optimization with touch targets meeting accessibility standards (44px minimum), responsive grids, and mobile-first design approach."
      },
      {
        title: "Security Implementation", 
        description: "Built with modern security practices including proper headers, secure form handling, and protection against common web vulnerabilities."
      },
      {
        title: "Performance Optimization",
        description: "Leveraged Next.js 15 with Turbopack for fast development builds and optimized production performance."
      }
    ],
    challenges: [
      {
        problem: "Creating a professional portfolio that stands out in cybersecurity field",
        solution: "Focused on clean design with security-oriented project showcases and professional presentation of technical skills."
      },
      {
        problem: "Ensuring perfect mobile experience across all devices",
        solution: "Implemented mobile-first design with comprehensive touch target optimization and responsive navigation."
      }
    ],
    metrics: {
      "Mobile Performance Score": "95+",
      "Security Headers": "A+ Grade", 
      "Load Time": "<2 seconds",
      "Responsive Breakpoints": "5+"
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
