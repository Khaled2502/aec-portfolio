import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBox,
  FiCommand,
  FiGrid,
  FiArrowRight,
  FiArrowLeft,
  FiX,
} from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionHeader, Card } from "./shared";
import { containerVariants, itemVariants } from "../constants/animations";

const ServicesSection = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      key: "bim",
      icon: <FiBox />,
      title: t("services.items.bim.title"),
      description: t("services.items.bim.description"),
      gradient: "from-blue-600 to-cyan-500",
      details:
        "Custom scripts for Revit, Dynamo automation, clash detection, and more.",
      technologies: ["Revit API", "Dynamo", "Python", "C#/.NET"],
    },
    {
      key: "automation",
      icon: <FiCommand />,
      title: t("services.items.automation.title"),
      description: t("services.items.automation.description"),
      gradient: "from-purple-600 to-pink-500",
      details:
        "Automate quantity takeoffs, report generation, and repetitive modeling tasks.",
      technologies: ["Dynamo", "Python", "Power BI"],
    },
    {
      key: "integration",
      icon: <FiGrid />,
      title: t("services.items.integration.title"),
      description: t("services.items.integration.description"),
      gradient: "from-green-600 to-teal-500",
      details:
        "Connect Revit, AutoCAD, and Excel dashboards for real-time project insights.",
      technologies: ["Revit API", "Forge API", "BIM 360", "Power BI"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-lightBg dark:from-gray-900 dark:to-darkBg"
    >
      <div className="section-container">
        <SectionHeader title={t("services.title")} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {services.map((service) => (
            <motion.div key={service.key} variants={itemVariants}>
              <Card
                icon={
                  <div className="text-4xl mb-6 text-primary">
                    {service.icon}
                  </div>
                }
                gradient={service.gradient}
                variant="service"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-grayMuted mb-6 flex-1">
                  {service.description}
                </p>
                <button
                  onClick={() =>
                    setSelectedService(
                      selectedService === service.key ? null : service.key,
                    )
                  }
                  className="flex items-center text-primary hover:text-accent transition-colors group"
                >
                  {t("services.learnMore")}
                  {language === "ar" ? (
                    <FiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            {t("services.technologies")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Revit API",
              "Dynamo",
              "Python",
              "C#/.NET",
              "AutoCAD API",
              "BIM 360",
              "Forge API",
              "Power BI",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-primary font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative p-6">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors"
                    aria-label="Close modal"
                    title="Close"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                  <h3 className="text-2xl font-bold mb-4">
                    {services.find((s) => s.key === selectedService)?.title}
                  </h3>
                  <p className="text-grayMuted mb-6">
                    {services.find((s) => s.key === selectedService)?.details}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {services
                        .find((s) => s.key === selectedService)
                        ?.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
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

export default ServicesSection;
