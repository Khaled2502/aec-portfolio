import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { SocialLinks } from "./shared";

const Footer = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Column 1: Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-grayMuted text-center md:text-left"
          >
            <p className="text-grayMuted text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()}&nbsp;{t("footer.copyright")}
            </p>
          </motion.div>

          {/* Column 2: Social Links */}
          <SocialLinks variant="footer" />

          {/* Column 3: Theme & Language Controls */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors"
            >
              {language === "en" ? "عربي" : "EN"}
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
