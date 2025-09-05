// import GridPattern from "@/components/ui/grid-pattern";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Navbar from "@/components/sections/navbar";
import Header from "@/components/sections/header";
import AboutMe from "@/components/sections/about-me";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Github from "@/components/sections/github";
// import LeetCode from "@/components/sections/leetcode";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative">
      {/* Sticky top border - fixed to viewport */}
      <div className="fixed top-24 left-0 right-0 w-full border-t border-border z-0"></div>
      
      {/* Sticky bottom border - fixed to viewport */}
      <div className="fixed bottom-24 left-0 right-0 w-full border-b border-border z-0"></div>
      
      <main className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 grid grid-cols-12">
        <div className="col-span-12 md:col-span-10 md:col-start-2 relative">
          <div className="bg-background border-l border-r border-t border-border shadow-lg p-8 mb-8 mt-24">
            <Navbar />
            <ScrollToTop />
            <section id="header"><Header /></section>
            <section id="about"><AboutMe /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="experience"><Experience /></section>
            <section id="education"><Education /></section>
            <section id="github"><Github /></section>
            {/* <section id="leetcode"><LeetCode /></section> */}
            {/* <section id="blog"><Blog /></section> */}
            <section id="contact"><Contact /></section>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}