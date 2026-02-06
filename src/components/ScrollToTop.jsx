import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Function to handle scrolling behavior
    const handleScroll = () => {
      // If there is a hash (anchor link), attempt to scroll to the element
      if (hash) {
        const elementId = hash.replace("#", "");
        const element = document.getElementById(elementId);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Fallback: if element not found immediately, retry briefly
          setTimeout(() => {
            const retryEl = document.getElementById(elementId);
            if (retryEl)
              retryEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      } else {
        // No hash: standard page navigation -> Scroll to Top
        // We use 'instant' behavior to mimic standard browser navigation
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    // Execute scroll logic
    handleScroll();

    // Redundant call with timeout to handle race conditions in production builds
    // where layout might settle slightly after the effect runs
    const timer = setTimeout(handleScroll, 0);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
