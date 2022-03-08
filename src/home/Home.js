import React from "react";

const Home = () => {
  return (
    <section id="Home" className="home section ">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Parviz Jahangiri</span>
            </h3>
            <h3 className="my-profession">
              I' m a <span className="typing">Developer</span>
            </h3>
            <p>
              Front End Developer focused on React & React Native with 5 years
              of experience in building and maintaining web applications.
              Proficient in JavaScript, TypeScript, React; plus few other
              related libraries.
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
  );
};

export default Home;
