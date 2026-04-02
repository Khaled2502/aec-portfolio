import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { SOCIAL_LINKS } from "../../constants/links";

interface SocialLinksProps {
  variant?: "footer" | "hero" | "inline";
  direction?: "ltr" | "rtl";
}

/**
 * SocialLinks Component
 * يحل محل 3+ تكرارات من social links
 */
export const SocialLinks = ({
  variant = "inline",
  direction = "ltr",
}: SocialLinksProps) => {
  const getIconByName = (iconName: string) => {
    switch (iconName) {
      case "github":
        return FiGithub;
      case "linkedin":
        return FiLinkedin;
      case "mail":
        return FiMail;
      case "phone":
        return FiPhone;
      default:
        return FiLinkedin;
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "footer":
        return "flex space-x-4 justify-center md:justify-start";
      case "hero":
        return `flex items-center gap-6 direction-${direction}`;
      case "inline":
      default:
        return "flex space-x-4";
    }
  };

  return (
    <div className={getVariantClasses()}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = getIconByName(link.icon);
        return (
          <motion.a
            key={link.id}
            href={link.url}
            target={
              link.id !== "phone" && link.id !== "email" ? "_blank" : undefined
            }
            rel={
              link.id !== "phone" && link.id !== "email"
                ? "noopener noreferrer"
                : undefined
            }
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`
              text-grayMuted hover:text-primary transition-colors
              ${variant === "footer" ? "ml-4" : ""}
            `}
            aria-label={link.label}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        );
      })}
    </div>
  );
};
