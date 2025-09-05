"use client";

import { useState, useEffect } from "react";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { DetailedProject } from "@/components/constants/detailed-projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectModalProps {
  project: DetailedProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) {
    return null;
  }

  const images = project.images?.gallery || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-background rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground pr-4">
            {project.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-hover-bg rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 space-y-8">
            {/* Hero Image */}
            {project.images?.hero && (
              <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={project.images.hero}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Hide image on error
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}

            {/* Project Links */}
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-link text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-hover-bg transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </Link>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-link rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Details */}
            {project.technicalDetails && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Technical Implementation</h3>
                <div className="space-y-4">
                  {project.technicalDetails.map((detail, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <h4 className="font-medium mb-2">{detail.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {detail.description}
                      </p>
                      {detail.code && (
                        <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                          <code>{detail.code}</code>
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Challenges & Solutions</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="mb-3">
                        <h4 className="font-medium text-red-600 dark:text-red-400 mb-1">
                          Challenge:
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {challenge.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 dark:text-green-400 mb-1">
                          Solution:
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics */}
            {project.metrics && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Project Metrics</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-link">{value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Gallery */}
            {images.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Project Gallery</h3>
                <div className="relative">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                  {images[currentImageIndex].caption && (
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      {images[currentImageIndex].caption}
                    </p>
                  )}
                  {images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? "bg-link" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
