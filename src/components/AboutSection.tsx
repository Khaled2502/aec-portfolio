import { useTranslation } from "react-i18next";
import {
  FiCode,
  FiDatabase,
  FiCpu,
  FiLayers,
  FiTrendingUp,
  FiGrid,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { SectionHeader, Card } from "./shared";
import { containerVariants, itemVariants } from "../constants/animations";

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
        <SectionHeader
          title={t("about.title")}
          description={t("about.description")}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                icon={skill.icon}
                gradient={skill.color}
                variant="skill"
                delay={index}
              >
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

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

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white">
                  <FiTrendingUp className="w-6 h-6" />
                </div>
                <div className="ms-4">
                  <h4 className="font-semibold">
                    {t("about.experience.digitalTransformation.title")}
                  </h4>
                </div>
              </div>
              <p className="text-grayMuted">
                {t("about.experience.digitalTransformation.description")}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white">
                  <FiGrid className="w-6 h-6" />
                </div>
                <div className="ms-4">
                  <h4 className="font-semibold">
                    {t("about.experience.dynamo.title")}
                  </h4>
                  <p className="text-sm text-grayMuted">
                    {t("about.experience.dynamo.years")}
                  </p>
                </div>
              </div>
              <p className="text-grayMuted">
                {t("about.experience.dynamo.description")}
              </p>
            </div>
          </div>

          {/* Skills Graph */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold mb-6">{t("about.technical.title")}</h4>
            {["Revit API", "C#", "Python", "JavaScript"].map((skill, index) => (
              <div key={skill} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span>{skill}</span>
                  <span className="text-primary">{90 - index * 4}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${90 - index * 4}%` }}
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
