import React, { useState } from "react";

import "./assets/styles/App.css";
import "./assets/styles/color-3.css";
// import "./assets/styles/color-2.css";
import "./assets/styles/color-1.css";
import "./style-switcher.css";
import About from "./about/About";
import Sidebar from "./layouts/Sidebar";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import { Portfolio } from "./portfolio/Protfolio";

const App = () => {
  const [opens, SetOpens] = useState(false);
  const [tame, setTame] = useState(false);
  const setOpen = () => {
    SetOpens(!opens);
  };
  const setDarkMode = () => {
    setTame(!tame);
  };

  return (
    <>
      <div className={tame ? "main-container dark" : "main-container"}>
        <Sidebar />
        <div className="main-content">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </div>
        <div className={opens ? " style-switcher open" : "style-switcher "}>
          <div className="style-switcher-toggler s-icon">
            <i className="fas fa-cog fa-spin " onClick={setOpen}></i>
          </div>
          <div className="day-night s-icon">
            <i className="fas fa-moon" onClick={setDarkMode}></i>
          </div>
          <h4>Theme Colors</h4>
          <div className="colors">
            <span className="color-1"></span>
            <span className="color-2"></span>
            <span className="color-3"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
