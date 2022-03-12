import React from "react";
import "./home.css";
const Home = () => {
  return (
    <section id="Home" className=" section home">
      <div className="container">
        <div className="row home-row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <small className="name">Parviz Jahangiri</small>
            </h3>
            <h3 className="my-profession">
              I' m a <small className="typing">Developer</small>
            </h3>
            <p>
              Front End Developer focused on React & React Native with 5 years
              of experience in building and maintaining web applications.
              Proficient in JavaScript, TypeScript, React; plus few other
              related libraries.
            </p>
            <a href="MyResume.pdf" className="btn hire-me" download="parviz MyResume.pdf">
              Download CV
            </a>
          </div>
          <div className="home-img padd-15">
            <img src="./photos.jpg" alt="parviz" />
          </div>
          <div className="menu">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
