import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FiBox,
  FiCommand,
  FiGrid,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const services = [
    {
      icon: <FiBox />,
      title: t("services.items.bim.title"),
      description: t("services.items.bim.description"),
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: <FiCommand />,
      title: t("services.items.automation.title"),
      description: t("services.items.automation.description"),
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: <FiGrid />,
      title: t("services.items.integration.title"),
      description: t("services.items.integration.description"),
      gradient: "from-green-600 to-teal-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-lightBg dark:from-gray-900 dark:to-darkBg"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services.title")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <div className="relative">
                  {/* Icon */}
                  <div className="text-4xl mb-6 text-primary">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-grayMuted mb-6">{service.description}</p>

                  {/* Learn More Button */}
                  <button className="flex items-center text-primary hover:text-accent transition-colors group">
                    {t("services.learnMore")}
                    {language === "ar" ? (
                      <FiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>
              </div>
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
      </div>
    </section>
  );
};

export default ServicesSection;
