import React, { useState, useEffect } from "react";
import About from "homeResume/about/About";
import Contact from "homeResume/contact/Contact";
import Home from "homeResume/home/Home";
import Sidebar from "homeResume/sidebar/Sidebar";
import { Portfolio } from "homeResume/portfolio/Portfolio";

import "assets/styles/App.css";
// import { Color } from "statics/data";

import "assets/styles/style-switcher.css";
import 'assets/styles/color-1.css'
const Resume = () => {
  // const [color, setColor] = useState(Color);
  const [opens, setOpens] = useState(false);
  const [tame, setTame] = useState(false);
  // console.log(Color);
  // const handelColor = (id) => {
    
  //   setColor([Color.filter((q) => q.id === id)]);
  // };
   // const altrnate = document.querySelectorAll(".altrnate")
  // const setActive = (id) => {
  //   altrnate.forEach((style) => {
  //     if(id=== style.getAttribute("title")) {
  //       console.log("title")
  //         remove("aria-disabled")
  //     }else {
  //       remove("aria-disabled",true)
  //     }
  //   })
  // }
  const [themeState, setThemeState] = useState(false);
  useEffect(() => {
      const getTheme = localStorage.getItem('Theme');
      if (getTheme === 'dark') {
          setThemeState(true);
      }
  }, []);

  useEffect(() => {
      if (themeState) {
          localStorage.setItem('Theme', 'dark');
      } else {
          localStorage.setItem('Theme', '');
      }
  }, [themeState]);

  window.addEventListener("scroll" ,() => {
    if(opens){
      setOpens(!opens)
    }
  })
 
  return (
    <div className={themeState ? "main-container dark" : "main-container"} >
      <Sidebar />
      <div className="main-content">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <div className={opens ? " style-switcher open" : "style-switcher "}>
        <div className="style-switcher-toggler s-icon">
          <i
            className="fas fa-cog fa-spin "
            onClick={() => setOpens(!opens)}
          ></i>
        </div>
        <div className="day-night s-icon">
          <i className="fas fa-moon" onClick={() => setThemeState(!themeState)}></i>
        </div>
        <h4>Theme Colors</h4>
        <div className="colors">
          <small
            id="color-1"
            
            // onClick={(id) => setActive(id)}
          ></small>
          <small
            id="color-2"
           
            // onClick={(id) => setActive(id)}
          ></small>
          <small
            id="color-3"
            
            // onClick={(id) => setActive(id)}
          ></small>
        </div>
      </div>
    </div>
  );
};

export default Resume;
