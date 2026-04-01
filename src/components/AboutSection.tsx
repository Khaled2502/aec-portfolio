import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiCpu, FiLayers } from "react-icons/fi";

const AboutSection = () => {
  const { t } = useTranslation();

  const skills = [
    {
      icon: <FiLayers />,
      name: t("about.skills.bim"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiCpu />,
      name: t("about.skills.automation"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FiCode />,
      name: t("about.skills.programming"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FiDatabase />,
      name: t("about.skills.engineering"),
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-lightBg to-gray-50 dark:from-darkBg dark:to-gray-900"
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
            {t("about.title")}
          </h2>
          <p className="text-xl text-grayMuted max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <div className="relative">
                  <div className="text-3xl mb-4 text-primary">{skill.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Experience Timeline */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                  <FiCode className="w-6 h-6" />
                </div>
                <div className="ms-4">
                  <h4 className="font-semibold">
                    {t("about.experience.bimDev.title")}
                  </h4>
                  <p className="text-sm text-grayMuted">
                    {t("about.experience.bimDev.years")}
                  </p>
                </div>
              </div>
              <p className="text-grayMuted">
                {t("about.experience.bimDev.description")}.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white">
                  <FiCpu className="w-6 h-6" />
                </div>
                <div className="ms-4">
                  <h4 className="font-semibold">
                    {t("about.experience.software.title")}
                  </h4>
                  <p className="text-sm text-grayMuted">
                    {t("about.experience.software.stack")}
                  </p>
                </div>
              </div>
              <p className="text-grayMuted">
                {t("about.experience.software.description")}
              </p>
            </div>
          </div>

          {/* Skills Graph */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold mb-6">{t("about.technical.title")}</h4>
            {["C#", "Python", "Revit API", "JavaScript"].map((skill, index) => (
              <div key={skill} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span>{skill}</span>
                  <span className="text-primary">{90 - index * 5}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${90 - index * 5}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
