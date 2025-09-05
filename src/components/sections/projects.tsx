"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from "next/link";
import { PROJECTS } from "@/components/constants/data";
import { DETAILED_PROJECTS, DetailedProject } from "@/components/constants/detailed-projects";
import ProjectModal from "@/components/ui/project-modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (projectName: string) => {
    const detailedProject = DETAILED_PROJECTS.find(
      (dp) => dp.name === projectName
    );
    if (detailedProject) {
      setSelectedProject(detailedProject);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <section className="py-5">
      <h2 className="text-xl font-semibold mb-4">featured projects.</h2>

      <div className="space-y-6 sm:space-y-8">
        {PROJECTS.map((project) => (
          <div key={project.name} className="relative">
            <div className="space-y-3 border-l-2 border-muted pl-4 sm:pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="font-medium text-base sm:text-lg text-left">
                    <button
                      onClick={() => handleProjectClick(project.name)}
                      className="link text-left hover:text-link transition-colors"
                    >
                      {project.name}
                      <FaArrowTrendUp className="inline-block w-4 h-4 sm:w-5 sm:h-5 ml-2 align-text-bottom" />
                    </button>
                  </h3>
                  <p className="text-xs text-muted-foreground">Click to know more...</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 btn hover:scale-95 transition-transform"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 btn hover:scale-95 transition-transform"
                    aria-label="View source code"
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs badge text-foreground whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
