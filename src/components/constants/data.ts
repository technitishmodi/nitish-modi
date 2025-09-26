// Personal Information
export const ABOUT_ME = {
  name: "Nitish Modi",
  title: "Cybersecurity Enthusiast & Full Stack Developer",
  location: "Mumbai, India",
  profileImage: "/profile-image.png",
  profileGif: "/profile-gif.gif",
  description: [
    "Hey 👋, I’m Nitish, a developer who codes with curiosity and hacks with responsibility. I love building sleek mobile apps with Flutter, Android, and iOS — and making sure they’re as secure as they are functional.",
    "When I’m not coding, you’ll probably find me exploring cybersecurity challenges, running scans with Nmap, analyzing traffic with Wireshark, diving into ethical hacking labs, or exploring and researching the dark web to understand emerging security threats."
  ],
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com/technitishmodi",
  linkedin: "https://linkedin.com/in/nitishmodi",
  twitter: "https://twitter.com/nitishmodi",
  instagram: "https://instagram.com/nitishmodi21",
  email: "mailto:nubhawbarnwal@gmail.com",
  resume: "/resume.pdf",
  leetcode: "https://leetcode.com/nitishmodi"
};

// User Names
export const USER_NAMES = {
  githubUsername: "technitishmodi",
  leetcodeUsername: "nitishmodi"
};

// Skills organized by category
export const SKILLS = {
  "Mobile Development": [
    "flutter", "dart", "android", "ios"
  ],
  "Programming Languages": [
    "javascript", "typescript", "python", "java", "cpp", "c"
  ],
  "Frontend Development": [
    "react", "nextjs", "html", "css", "tailwind", "sass"
  ],
  "Backend Development": [
    "nodejs", "express", "django", "flask", "fastapi"
  ],
  "Databases": [
    "mongodb", "mysql", "postgresql", "redis"
  ],
  "Cloud & DevOps": [
    "aws", "gcp", "docker", "kubernetes", "nginx"
  ],
  "Cybersecurity": [
    "Kali Linux",
    "Network Security",
    "Nmap",
    "Wireshark",
    "Dark Web Research",
    "TOR",
    "Anonymity & Privacy Tools",
    "Penetration Testing",
    "Metasploit",
    "Burp Suite",
    "OWASP",
    "Ethical Hacking",
  ],
  "Tools & Technologies": [
    "git", "linux", "bash", "powershell", "vscode"
  ]
};

// Projects
export const PROJECTS = [
  {
    name: "LinkCrypta",
    description: "A secure password and link management app with offline-first storage using Hive and optional cloud synchronization. All sensitive data is encrypted, requiring a master password for viewing or copying credentials.",
    tech: ["Flutter", "Dart", "Hive", "Firebase Firestore", "Firebase Authentication", "AES Encryption"],
    github: "https://github.com/technitishmodi/LinkCrypta",
    screenshot: "/linkcrypta.jpeg",
    // link: "https://linkcrypta.vercel.app"
  },
  {
    name: "Vulnerability Scanner",
    description: "An automated web application vulnerability scanner that identifies common security issues like XSS, SQL injection, and CSRF vulnerabilities. Built with Python and includes comprehensive reporting.",
    tech: ["Python", "Requests", "BeautifulSoup", "SQLAlchemy", "Flask"],
    github: "https://github.com/technitishmodi/vuln-scanner",
    screenshot: "/vuln-scanner-hero.jpg",
    link: null
  },
  {
    name: "Secure Chat Application",
    description: "End-to-end encrypted real-time chat application with secure authentication, message encryption, and user privacy protection. Implements modern cryptographic standards.",
    tech: ["Node.js", "Socket.io", "MongoDB", "JWT", "Crypto"],
    github: "https://github.com/technitishmodi/secure-chat",
    screenshot: "/secure-chat-hero.jpg",
    link: "https://securechat-demo.vercel.app"
  },
  {
    name: "Network Security Monitor",
    description: "Real-time network traffic analysis tool that monitors for suspicious activities and potential security threats. Features customizable alerts and detailed logging.",
    tech: ["Python", "Scapy", "Flask", "SQLite", "Chart.js"],
    github: "https://github.com/technitishmodi/network-monitor",
    screenshot: "/network-monitor-hero.jpg",
    link: null
  },

]

// Form endpoint for contact form
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export const EXPERIENCE = [
  {
    company: "Company Name",
    companyLink: "https://companyname.com/",
    role: "Software Developer",
    period: "Jan 2025 - Present",
    location: "Remote/Location",
    description: "Describe your responsibilities and achievements.",
    skills: ["React", "Node.js", "XXXX"],
  },
  // Add more experience as needed
];
