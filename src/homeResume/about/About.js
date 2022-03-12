import { Fragment } from "react";
import { HobData } from "statics/data";
import { SkillData } from "statics/data";
import { HobItem } from "components/HobItem";
import { AboutItem } from "components/AboutItem";
import { Education } from "components/Education";
import "./about.css";
import { Section } from "components/Section";

const About = () => {
  return (
    <>
      <Section id={"AboutMe"} title={"About Me"} className="about">
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I' m Parviz Jahangiri and <span>developer</span>
                </h3>
                <p>
                  ontrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered
                </p>
              </div>
            </div>
           
              <AboutItem title={"Skill"} icon={"fa fa-calendar"}>
                <div className="row skills">
                  {SkillData.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <HobItem {...item} />
                      </Fragment>
                    );
                  })}
                </div>
              </AboutItem>
              <AboutItem title={"Hobbies"} icon={"fa fa-calendar"}>
                <div className="row skills">
                  {HobData.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <HobItem {...item} />
                      </Fragment>
                    );
                  })}
                </div>
              </AboutItem>
            
            {/* <div className="hr">
                <hr />
                <hr />
                <hr />
              </div> */}
            <div className="row">
              <Education
                title={"Education"}
                icon={"fa fa-calendar"}
                subTitle={"Payam Noor UNIVERSITY"}
                data={"2014 - 2018"}
              >
                <p className="timeline-text">
                  ' Bachelor'
                  <br />
                  <br /> Agricultural Engineering <br />
                </p>
              </Education>
              <Education
                title={"Special Skills"}
                icon={"fa-solid fa-earth-africa"}
                subTitle={"Languages"}
              >
                <p className="timeline-text">
                  Persian ,<br /> English,
                  <br /> Turkish -
                </p>
              </Education>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
