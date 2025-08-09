import { useEffect, type FC } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashHandler: FC = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);

    const element = document.getElementById(location.hash.substring(1));
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: "smooth" });
      else
        window.scrollTo({
          behavior: "auto",
          top: 0,
        });
    }, 100);
  }, [location]);
  return null;
};
export default ScrollToHashHandler;
