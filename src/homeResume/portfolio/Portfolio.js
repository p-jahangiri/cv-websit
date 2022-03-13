import { Link } from "react-router-dom";
import { Section } from "components/Section";
import calculator from "assets/images/calculator.png";
import wead from "assets/images/wead.png";
import "./portfolio.css";
export const Portfolio = () => {
  return (
    <Section id={"Portfolio"} title={"Portfolio"}>
      <div className="row padd-15">
        <div className="portfolio-heading ">
          <h2>My last Project : </h2>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <Link to="calculator">
                {" "}
                <img src={calculator} alt="p" />
              </Link>
            </div>
          </div>
        </div>
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <Link to="weather">
                {" "}
                <img src={wead} alt="p" />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="./photos.jpg" alt="p" />
            </div>
          </div>
        </div> */}
        {/* <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="./photos.jpg" alt="p" />
            </div>
          </div>
        </div> */}
      </div>
    </Section>
  );
};
