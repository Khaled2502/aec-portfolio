import { useCallback, useRef } from "react";

/**
 * Hook لـ debounce form validation
 * يقلل عدد تشغيل validation من على كل keystroke إلى مرة واحدة كل X ملي ثانية
 * يحسن الأداء بشكل كبير على الموبايل
 */
export const useFormDebounce = (
  callback: (value: any) => void,
  delay: number = 300,
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(
    (value: any) => {
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay],
  );

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return { debouncedCallback, cleanup };
};
