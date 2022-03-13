import React, { useState, useEffect } from "react";
import About from "homeResume/about/About";
import Contact from "homeResume/contact/Contact";
import Home from "homeResume/home/Home";
import Sidebar from "homeResume/sidebar/Sidebar";
import { Portfolio } from "homeResume/portfolio/Portfolio";

import "assets/styles/App.css";

import "assets/styles/style-switcher.css";
import 'assets/styles/color-1.css'


const htmlEl = document.getElementsByTagName('html')[0];
const Resume = () => {

  const [opens, setOpens] = useState(false);
  
  useEffect(() => {
    htmlEl.dataset.theme = localStorage.getItem ('theme');
    htmlEl.dataset.theme = ('theme', 'orange');
  }, []);

  const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
   
  }

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
            className="color-1"
            onClick={() => toggleTheme('orange')}
          ></small>
          <small
            className="color-2"
          //  id="green"
            
            onClick={() => toggleTheme('blue')}
          ></small>
          <small
            className="color-3"
            // id="orange"
            onClick={() => toggleTheme('green')}
          ></small>
        </div>
      </div>
    </div>
  );
};

export default Resume;
