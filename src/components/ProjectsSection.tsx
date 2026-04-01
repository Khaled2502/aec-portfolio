import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiCode,
  FiLayers,
  FiCpu,
} from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "bim" | "automation" | "integration";
  links: {
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "BIM Automation Suite",
    description:
      "A comprehensive suite of Revit tools for automating repetitive tasks in BIM workflows.",
    image: "/projects/bim-suite.jpg",
    technologies: ["C#", "Revit API", ".NET", "WPF"],
    category: "bim",
    links: {
      github: "https://github.com/yourusername/bim-suite",
    },
  },
  {
    id: 2,
    title: "AEC Data Dashboard",
    description:
      "Real-time dashboard for visualizing and analyzing construction project data.",
    image: "/projects/aec-dashboard.jpg",
    technologies: ["Python", "React", "Power BI", "Azure"],
    category: "integration",
    links: {
      github: "https://github.com/yourusername/aec-dashboard",
      live: "https://aec-dashboard.example.com",
    },
  },
  {
    id: 3,
    title: "Dynamo Scripts Collection",
    description:
      "A collection of Dynamo scripts for automating various BIM processes.",
    image: "/projects/dynamo-scripts.jpg",
    technologies: ["Dynamo", "Python", "Revit API"],
    category: "automation",
    links: {
      github: "https://github.com/yourusername/dynamo-scripts",
    },
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    { id: "all", icon: FiLayers, label: "All" },
    { id: "bim", icon: FiCode, label: "BIM Tools" },
    { id: "automation", icon: FiCpu, label: "Automation" },
    { id: "integration", icon: FiExternalLink, label: "Integration" },
  ];

  return (
    <section id="projects" className="py-20 bg-lightBg dark:bg-darkBg">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("projects.title")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(id)}
              className={`flex items-center px-4 py-2 rounded-full ${
                filter === id
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors`}
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-grayMuted mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    {t("projects.viewDetails")}
                  </button>
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grayMuted hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                        title="GitHub"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grayMuted hover:text-primary transition-colors"
                        aria-label="View live project"
                        title="Live Project"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors"
                    aria-label="Close modal"
                    title="Close"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-grayMuted mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      {selectedProject.links.github && (
                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                        >
                          <FiGithub className="w-5 h-5" />
                          View Source
                        </a>
                      )}
                      {selectedProject.links.live && (
                        <a
                          href={selectedProject.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                        >
                          <FiExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
