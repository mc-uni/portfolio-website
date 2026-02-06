import React from "react";
import { motion } from "framer-motion";


const ProjectCard = ({ project }) => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
>
    {/*<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow hover:-translate-y-1 transition-all duration-300">*/}
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.live}
            className="text-primary font-semibold hover:underline"
          >
            Live
          </a>
          <a
            href={project.github}
            className="text-gray-700 font-semibold hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
