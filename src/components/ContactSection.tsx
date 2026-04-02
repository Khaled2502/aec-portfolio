import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiSend, FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { useFormDebounce } from "../hooks";
import { SOCIAL_LINKS, EMAILJS_CONFIG } from "../constants/links";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Debounced form validation
  const validateForm = (data: typeof formData) => {
    // Basic validation
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      return false;
    }
    return true;
  };

  const { debouncedCallback: debouncedValidate } = useFormDebounce(
    validateForm,
    500,
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      debouncedValidate(updated); // Debounced validation
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Dynamically import emailjs only when needed (reduces initial bundle)
      const emailjs = await import("emailjs-com").then(
        (module) => module.default,
      );

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          ...formData,
          date: new Date().toLocaleString(),
        },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
        projectType: "",
        timeline: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case "github":
        return <FiGithub className={iconClass} />;
      case "linkedin":
        return <FiLinkedin className={iconClass} />;
      case "mail":
        return <FiMail className={iconClass} />;
      case "phone":
        return <FiPhone className={iconClass} />;
      default:
        return <FiMail className={iconClass} />;
    }
  };

  const faqs = t("contact.faq.items", { returnObjects: true });

  return (
    <>
      <section
        id="contact"
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
              {t("contact.title")}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.projectType.label")}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">
                      {t("contact.form.projectType.placeholder")}
                    </option>
                    <option value="BIM Implementation">
                      {t("contact.form.projectType.bim")}
                    </option>
                    <option value="Digital Transformation Consulting">
                      {t("contact.form.projectType.consulting")}
                    </option>
                    <option value="Training & Education">
                      {t("contact.form.projectType.training")}
                    </option>
                    <option value="Process Automation">
                      {t("contact.form.projectType.automation")}
                    </option>
                    <option value="Other">
                      {t("contact.form.projectType.other")}
                    </option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("contact.form.timeline.label")}
                  </label>
                  <div className="flex flex-col space-y-2">
                    <label>
                      <input
                        type="radio"
                        name="timeline"
                        value="Urgent (Within 1 month)"
                        onChange={handleChange}
                        checked={
                          formData.timeline === "Urgent (Within 1 month)"
                        }
                      />{" "}
                      {t("contact.form.timeline.urgent")}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="timeline"
                        value="Soon (1-3 months)"
                        onChange={handleChange}
                        checked={formData.timeline === "Soon (1-3 months)"}
                      />{" "}
                      {t("contact.form.timeline.soon")}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="timeline"
                        value="Planning (3+ months)"
                        onChange={handleChange}
                        checked={formData.timeline === "Planning (3+ months)"}
                      />{" "}
                      {t("contact.form.timeline.planning")}
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full neon-button flex items-center justify-center ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-spin mr-2">⌛</span>
                  ) : (
                    <FiSend className="mr-2" />
                  )}
                  {t("contact.form.send")}
                </button>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500 text-center"
                  >
                    {t("contact.form.success")}
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-center"
                  >
                    {t("contact.form.error")}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">
                {t("contact.info.title")}
              </h3>
              <p className="text-grayMuted mb-8">
                {t("contact.info.description")}
              </p>

              <div className="space-y-6 mb-8 ">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target={
                      link.id !== "phone" && link.id !== "email"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      link.id !== "phone" && link.id !== "email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-fit flex items-center space-x-4 text-grayMuted hover:text-primary transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 ml-2">
                      {getIconComponent(link.icon)}
                    </div>
                    <span className="ml-4">{link.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">
                  {t("contact.availability.title")}
                </h4>
                <p className="text-grayMuted">
                  {t("contact.availability.description")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("contact.faq.title")}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {Array.isArray(faqs) ? (
              faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow"
                >
                  {/* Question */}
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="w-full text-left p-4 font-semibold flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 px-4 ${
                      activeIndex === index ? "max-h-40 py-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-grayMuted">{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-grayMuted text-center">{t("common.noData")}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
