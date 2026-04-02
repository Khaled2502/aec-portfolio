import { ReactNode } from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../../constants/animations";

interface SectionHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  centered?: boolean;
}

/**
 * SectionHeader Component
 * يحل محل 3+ تكرارات من Section headers
 */
export const SectionHeader = ({
  title,
  description,
  children,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>

      {description && (
        <p className="text-xl text-grayMuted max-w-5xl mx-auto mb-6">
          {description}
        </p>
      )}

      <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto" />

      {children}
    </motion.div>
  );
};
