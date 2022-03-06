import React,{useState} from "react";
import "./assets/styles/App.css";
import A from "./assets/styles/color-3.css";
import  B from "./assets/styles/color-2.css";
import  C from"./assets/styles/color-1.css";
import "./style-switcher.css";
import About from "./about/About";

const App = () => {
  const[opens,SetOpens]= useState(false);
  const [tame,setTame]= useState(false)
  const setOpen = () => {
SetOpens(!opens)
  }
 const setDarkMode = () => {
setTame (!tame)
 }

  return (
    <>
      <div className={tame ? "main-container dark" : "main-container"}>
        <div className="aside">
          <div className="logo">
            <a href="#">
              <span>parviz</span>
            </a>
          </div>
          <div className="nav-toggler">
            <span></span>
          </div>
          <ul className="nav">
            <li>
              <a href="#" className="active">
                <i className="fa fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-user"></i>About
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-list"></i>Services
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-briefcase"></i>Portfolio
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-comments"></i>Contact
              </a>
            </li>
            {/* <UseTimer/> */}
          </ul>
        </div>
        <div className="main-content">
          {/* home start */}
          <section className="home section ">
            <div className="container">
              <div className="row">
                <div className="home-info padd-15">
                  <h3 className="hello">
                    Hello, my name is{" "}
                    <span className="name">Parviz Jahangiri</span>
                  </h3>
                  <h3 className="my-profession">
                    I' m a <span className="typing">Developer</span>
                  </h3>
                  <p>
                    Front End Developer focused on React & React Native with 5
                    years of experience in building and maintaining web
                    applications. Proficient in JavaScript, TypeScript, React;
                    plus few other related libraries.
                  </p>
                  <a href="#contact" className="btn hire-me">
                    {" "}
                    Hire Me
                  </a>
                </div>
                <div className="home-img padd-15">
                  <img src="./photos.jpg" alt="parviz" />
                </div>
              </div>
            </div>
          </section>
          {/* home end */}
          {/* about start */}
          <About />
          {/* about end */}
          {/* start Services */}
          <section className="service section ">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Service</h2>
                </div>
              </div>
              {/* Star item */}
              <div className="row">
                <div className="service-item padd-15">
                  <div className="service-item-inner">
                    <div className="icon">
                      <i className="fa fa-mobile-alt"></i>
                    </div>
                    <h4>Web Design</h4>
                    <p>
                      applications. Proficient in JavaScript, TypeScript, React;
                      plus few other related libraries.
                    </p>
                  </div>
                </div>
                <div className="service-item padd-15">
                  <div className="service-item-inner ">
                    <div className="icon">
                      <i className="fa fa-laptop-code"></i>
                    </div>
                    <h4>Web Design</h4>
                    <p>
                      applications. Proficient in JavaScript, TypeScript, React;
                      plus few other related libraries.
                    </p>
                  </div>
                </div>
                <div className="service-item padd-15">
                  <div className="service-item-inner ">
                    <div className="icon">
                      <i className="fa fa-palette"></i>
                    </div>
                    <h4>Web Design</h4>
                    <p>
                      applications. Proficient in JavaScript, TypeScript, React;
                      plus few other related libraries.
                    </p>
                  </div>
                </div>
                <div className="service-item padd-15">
                  <div className="service-item-inner">
                    <div className="icon">
                      <i className="fa fa-code"></i>
                    </div>
                    <h4>Web Design</h4>
                    <p>
                      applications. Proficient in JavaScript, TypeScript, React;
                      plus few other related libraries.
                    </p>
                  </div>
                </div>
                <div className="service-item padd-15">
                  <div className="service-item-inner ">
                    <div className="icon">
                      <i className="fa fa-search"></i>
                    </div>
                    <h4>Web Design</h4>
                    <p>
                      applications. Proficient in JavaScript, TypeScript, React;
                      plus few other related libraries.
                    </p>
                  </div>
                </div>
                <div className="service-item padd-15">
                  <div className="service-item-inner ">
                    <div className="icon">
                      <i className="fa fa-bullhorn"></i>
                    </div>
                    <h4>Web Design</h4>
                    <p>
                      applications. Proficient in JavaScript, TypeScript, React;
                      plus few other related libraries.
                    </p>
                  </div>
                </div>
              </div>
              {/* end item */}
            </div>
          </section>
          {/* end  Services */}
          {/* portfoli start */}
          <section className="portfolio section ">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Portfolio</h2>
                </div>
              </div>
              <div className="row">
                <div className="portfolio-heading padd-15">
                  <h2>My last Project : </h2>
                </div>
              </div>
              <div className="row">
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="./photos.jpg" alt="p" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="./photos.jpg" alt="p" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="./photos.jpg" alt="p" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="./photos.jpg" alt="p" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* portfoli end */}
          {/* contact start */}
          <section className="content section">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Content</h2>
                </div>
              </div>
              <h3 className="content-title  padd-15">
                Have You Any Questions ?
              </h3>
              <h4 className="content-sub-title  padd-15">
                I 'M AT YOUR SERVICES
              </h4>
              <div className="row">
                <div className="content-info-item padd-15">
                  <div className="icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h4>Call Us On </h4>
                  <p>+935 353 2564</p>
                </div>
                <div className="content-info-item padd-15">
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <h4>Email </h4>
                  <p>parviz.21.j@gmail.com</p>
                </div>
                <div className="content-info-item padd-15">
                  <div className="icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <h4>linkedin </h4>
                  <p>p-jahangiri1995</p>
                </div>
                <div className="content-info-item padd-15">
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <h4>Telegram </h4>
                  <p>@discreet22</p>
                </div>
                <div className="content-info-item padd-15">
                  <div className="icon">
                    <i className="fa fa-envelope "></i>
                  </div>
                  <h4>Twitter </h4>
                  <p>@discreet22</p>
                </div>
              </div>
              <h3 className="content-title padd-15">SEND ME AN EMAIL</h3>
              <h4 className="content-sub-title  padd-15">
                I 'M VERY RESPOSIVE TO MESSAGES
              </h4>
              <div className="row">
                <div className="content-form padd-15">
                  <div className="row">
                    <div className="form-item col-6 padd-15">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="form-item col-6 padd-15">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-item col-12 padd-15">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-item col-12 padd-15">
                      <div className="form-group">
                        <textarea
                          name=""
                          className="form-control"
                          id=""
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-item col-12 padd-15">
                      <div className="form-group">
                        <button className="btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact end */}
        </div>
        {/* style color */}
        <div className={opens ? " style-switcher open" : "style-switcher "} >
          <div className="style-switcher-toggler s-icon"  >
            <i className="fas fa-cog fa-spin " onClick={setOpen}></i>
          </div>
          <div className="day-night s-icon">
            <i className="fas fa-moon" onClick={setDarkMode}></i>
          </div>
          <h4>Theme Colors</h4>
          <div className="colors">
            <span className="color-1" ></span>
              <span className="color-2" ></span>
              <span className="color-3" ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
