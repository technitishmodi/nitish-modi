// Add icons for cybersecurity skills
const CYBERSECURITY_ICONS: Record<string, string> = {
  "penetration-testing": "security",
  "vulnerability-assessment": "security",
  "network-security": "security",
  "web-security": "security"
};

import { SKILLS } from "@/components/constants/data";
import Image from "next/image";
import React, { JSX } from "react";

const SKILL_ICONS: Record<string, string> = {
  ...CYBERSECURITY_ICONS,
  // Mobile Development
  flutter: "flutter",
  dart: "dart",
  android: "androidstudio",
  ios: "swift",
  html: "html",
  css: "css",
  javascript: "js",
  typescript: "ts",
  react: "react",
  nextjs: "nextjs",
  vue: "vue",
  angular: "angular",
  redux: "redux",
  tailwind: "tailwind",
  bootstrap: "bootstrap",
  sass: "sass",
  less: "less",
  jquery: "jquery",
  nodejs: "nodejs",
  express: "express",
  nestjs: "nestjs",
  django: "django",
  flask: "flask",
  spring: "spring",
  rails: "rails",
  laravel: "laravel",
  dotnet: "dotnet",
  fastapi: "fastapi",
  mongodb: "mongodb",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  redis: "redis",
  firebase: "firebase",
  supabase: "supabase",
  c: "c",
  cpp: "cpp",
  cs: "cs",
  java: "java",
  python: "py",
  go: "go",
  rust: "rust",
  ruby: "ruby",
  php: "php",
  kotlin: "kotlin",
  swift: "swift",
  scala: "scala",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  docker: "docker",
  kubernetes: "kubernetes",
  vercel: "vercel",
  netlify: "netlify",
  heroku: "heroku",
  githubactions: "githubactions",
  jenkins: "jenkins",
  vscode: "vscode",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  postman: "postman",
  figma: "figma",
  vite: "vite",
  webpack: "webpack",
  babel: "babel",
  jest: "jest",
  cypress: "cypress",
  linux: "linux",
  windows: "windows",
  apple: "apple",
  androidstudio: "androidstudio",
  kali: "kali",
  oracle: "oracle",
};

// Custom colorful SVG icons for cybersecurity tools
const CustomIcons: Record<string, JSX.Element> = {
  "Network Security": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,7.6 15.8,8.7C16.3,9.2 16.1,10.1 15.5,10.1H14.8C14.4,10.1 14.1,9.8 13.9,9.6C13.3,8.9 12.7,8.5 12,8.5C11.3,8.5 10.7,8.9 10.1,9.6C9.9,9.8 9.6,10.1 9.2,10.1H8.5C7.9,10.1 7.7,9.2 8.2,8.7C9.2,7.6 10.6,7 12,7Z" fill="#4CAF50"/>
    </svg>
  ),
  "Wireshark": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V8H13V6H11M11,10V18H13V10H11Z" fill="#1976D2"/>
    </svg>
  ),
  "Nmap": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" fill="#FF5722"/>
    </svg>
  ),
  "Burp Suite": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,7A2,2 0 0,0 7,9A2,2 0 0,0 9,11A2,2 0 0,0 11,9A2,2 0 0,0 9,7M20,16L16,12L20,8V16Z" fill="#FF9800"/>
    </svg>
  ),
  "Metasploit": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" fill="#E91E63"/>
    </svg>
  ),
  "OWASP": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" fill="#2196F3"/>
    </svg>
  ),
  "Ethical Hacking": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M6,2L4,4V16H6V14H10V16H12V4L10,2H6M6,4H10V12H6V4M14,6V8H16V6H14M18,6V8H20V6H18M14,10V12H16V10H14M18,10V12H20V10H18M14,14V16H16V14H14M18,14V16H20V14H18M14,18V20H16V18H14M18,18V20H20V18H18Z" fill="#9C27B0"/>
    </svg>
  ),
  "Dark Web Research": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20V4Z" fill="#424242"/>
    </svg>
  ),
  "TOR": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" fill="#673AB7"/>
    </svg>
  ),
  "Anonymity & Privacy Tools": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" fill="#795548"/>
    </svg>
  ),
  "Oracle": (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6C8.69,6 6,8.69 6,12C6,15.31 8.69,18 12,18C15.31,18 18,15.31 18,12C18,8.69 15.31,6 12,6M12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16Z" fill="#F80000"/>
    </svg>
  ),
};

const SkillBadge = ({ skill }: { skill: string }) => (
  <span
    className="badge flex items-center justify-center gap-1.5 sm:gap-2 min-w-[60px] sm:min-w-[72px] h-7 sm:h-8 px-2 py-1 rounded-lg bg-muted border border-border text-foreground font-medium text-xs sm:text-sm hover:bg-[hsl(var(--hover-bg))] transition-colors duration-200 group"
    style={{ boxSizing: 'border-box' }}
  >
    {CustomIcons[skill] ? (
      React.cloneElement(CustomIcons[skill], { className: "w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-200" })
    ) : SKILL_ICONS[skill] ? (
      ["penetration-testing", "vulnerability-assessment", "network-security", "web-security"].includes(skill) ? (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 4.5 9.75 9 11 4.5-1.25 9-5.75 9-11 0-4.97-4.03-9-9-9zm0 2c3.86 0 7 3.14 7 7 0 4.08-3.41 7.44-7 8.93C8.41 16.44 5 13.08 5 9c0-3.86 3.14-7 7-7zm0 3a4 4 0 0 0-4 4c0 2.21 1.79 4 4 4s4-1.79 4-4a4 4 0 0 0-4-4z" fill="#4CAF50"/>
        </svg>
      ) : (
        <Image
          src={`https://skillicons.dev/icons?i=${SKILL_ICONS[skill]}`}
          alt={`${skill} icon`}
          width={20}
          height={20}
          className="w-5 h-5"
        />
      )
    ) : (
      // Generic fallback SVG for any missing skill icon
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#e0e0e0" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#616161">★</text>
      </svg>
    )}
    <span className="text-base font-medium ml-1">{skill}</span>
  </span>
);

const Skills = () => {
  return (
    <section className="py-5">
      <h2 className="text-xl font-semibold mb-4">technical skills.</h2>
      <div className="space-y-6">
        {Object.entries(SKILLS).map(([key, skills]) => (
          <div key={key} className="space-y-3">
            <h3 className="text-base font-mono font-medium text-muted-foreground">
              {"< " + key + " />"}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
