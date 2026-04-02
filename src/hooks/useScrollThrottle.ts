import { useState, useEffect, useCallback } from "react";

/**
 * Hook لـ throttle scroll events
 * يقلل عدد مرات تشغيل scroll handlers
 * يحسن الأداء بشكل كبير على الموبايل
 */
export const useScrollThrottle = (
  threshold: number = 50,
  delay: number = 100,
) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setIsScrolled(currentScroll > threshold);
  }, [threshold]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastScrollTime = 0;

    const throttledScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime >= delay) {
        handleScroll();
        lastScrollTime = now;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(
          () => {
            handleScroll();
            lastScrollTime = Date.now();
          },
          delay - (now - lastScrollTime),
        );
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll, delay]);

  return isScrolled;
};
