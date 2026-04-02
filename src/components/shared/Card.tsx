import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  icon?: ReactNode;
  gradient?: string;
  hoverable?: boolean;
  variant?: "default" | "skill" | "service" | "project";
  delay?: number;
}

/**
 * Card Component
 * يحل محل 3+ تكرارات من Card components
 */
export const Card = ({
  children,
  icon,
  gradient,
  hoverable = true,
  variant = "default",
  delay = 0,
}: CardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "skill":
      case "service":
        return "p-6 md:p-8";
      case "project":
        return "p-4 md:p-6";
      default:
        return "p-6";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      whileHover={hoverable ? { scale: 1.05 } : {}}
      className="relative group"
    >
      <div
        className={`
          bg-white dark:bg-gray-800 rounded-xl shadow-lg 
          hover:shadow-xl transition-all duration-300 h-full 
          flex flex-col ${getVariantClasses()}
        `}
      >
        {/* Background Gradient Overlay */}
        {gradient && (
          <div
            className={`
              absolute inset-0 bg-gradient-to-br ${gradient} 
              opacity-0 group-hover:opacity-5 rounded-xl 
              transition-opacity duration-300
            `}
          />
        )}

        {/* Icon */}
        {icon && (
          <div className="relative text-3xl mb-4 text-primary">{icon}</div>
        )}

        {/* Content */}
        <div className="relative flex-1">{children}</div>
      </div>
    </motion.div>
  );
};
