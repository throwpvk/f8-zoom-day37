import { useEffect, useState } from "react";
import style from "./GoToTop.module.scss";

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`${style.goToTop} ${!isVisible ? style.hidden : ""}`}
    >
      ↑
    </div>
  );
}

export default GoToTop;
