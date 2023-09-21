import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Scroll from "../components/Scroll/Scroll";
import { useState } from "react";

const Main = () => {
  const [color, setColor] = useState(false);
  const location = useLocation();
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", "bumblebee");
    if (
      location.pathname === "/drivers" ||
      location.pathname === "/users" ||
      location.pathname === "/our-story"
    ) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [location]);

  return (
    <div>
      <Outlet></Outlet>
      <div className={`${color ? "bg-slate-900 text-base-100" : "bg-base-100 text-base-content"} `}>
        <Footer color={color}></Footer>
      </div>
      <Scroll></Scroll>
    </div>
  );
};

export default Main;
