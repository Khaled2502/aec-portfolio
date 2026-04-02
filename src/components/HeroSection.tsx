import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SocialLinks } from "./shared";
import { containerVariants, itemVariants } from "../constants/animations";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-lightBg dark:to-darkBg"></div>

      {/* Content */}
      <div className="relative section-container flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center w-full"
          >
            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {t("hero.title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-grayMuted mb-12"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <a href="#projects" className="neon-button">
                {t("hero.cta.projects")}
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                {t("hero.cta.contact")}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <SocialLinks variant="hero" direction="ltr" />
            </motion.div>
          </motion.div>

          {/* Right Side - Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center h-96 lg:h-full"
          >
            {/* Glow */}
            <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative z-10 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/AEC-portfolio/assets/images/Background.png"
                alt="Khaled Hussein"
                className="w-72 h-72 object-cover object-top rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary p-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mx-auto animate-scroll"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
