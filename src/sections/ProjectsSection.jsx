import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import AnimateOnView from "../components/AnimateOnView";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateOnView delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I have worked on using modern web
              technologies.
            </p>
          </div>
        </AnimateOnView>
        

        {/* Projects Grid service_koytqsk*/}
        <AnimateOnView delay={0.4}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </AnimateOnView>
        
      </div>
    </section>
  );
};

export default ProjectsSection;
