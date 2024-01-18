import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const queryString = window.location;
  useEffect(() => {
    if (!queryString.hash) {
      window.scrollTo({
        top: 0,
      });
    }
    else{
        document.querySelector(queryString.hash).scrollIntoView();
    }
  }, [pathname]);
}
