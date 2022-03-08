import { Section } from "../components/Section";

export const Portfolio = () => {
  return (
    <Section id={"Portfolio"} title={"Portfolio"}>
      <div className="row ">
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
    </Section>
  );
};
