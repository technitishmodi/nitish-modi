import Header from "@/components/sections/header";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Github from "@/components/sections/github";
// import LeetCode from "@/components/sections/leetcode";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import SectionTabs from "@/components/ui/section-tabs";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative">
      <main className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="header"><Header /></section>

        <SectionTabs
          tabs={[
            { id: "projects", label: "Projects", content: <Projects /> },
            { id: "skills", label: "Skills", content: <Skills /> },
            { id: "experience", label: "Experience", content: <Experience /> },
            { id: "github", label: "GitHub", content: <Github /> },
            { id: "contact", label: "Contact", content: <Contact /> },
          ]}
        />

        <Footer />
      </main>

    </div>
  );
}
