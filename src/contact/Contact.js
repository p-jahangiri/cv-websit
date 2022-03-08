import React from "react";
import { ContactList } from "../components/ContactList";
import { FormContact } from "../components/FormContact";
import { Section } from "../components/Section";
import "./contact.css";

const Contact = () => {
  return (
    <div >
      <Section  id={"Contact"}  title={"Contact"} className="content">
        <h3 className="content-title  padd-15">Have You Any Questions ?</h3>
        <h4 className="content-sub-title  padd-15">I 'M AT YOUR SERVICES</h4>
        <div className="row">
          <ContactList
            icon={"fa fa-comments"}
            title={"Call Us On "}
            href={"tel:+989353532564"}
            aid={"+935 353 2564"}
          />
          <ContactList
            icon={"fa fa-envelope"}
            title={"Email"}
            href={"mailto:parviz.21.j@gmail.com"}
            aid={"parviz.21.j@gmail.com"}
          />
          <ContactList
            icon={"fa-brands fa-linkedin"}
            title={"linkedin"}
            href={"https://www.linkedin.com/in/p-jahangiri1995"}
            aid={"p-jahangiri1995"}
          />
          <ContactList
            icon={"fa-brands fa-github"}
            title={"Github"}
            href={"https://github.com/p-jahangiri"}
            aid={"p-jahangiri"}
          />
          <ContactList
            icon={"fa-brands fa-twitter"}
            title={"Telegram"}
            href={"https://telegram.me/joinchat/@discreet22"}
            aid={"p-jahangiri"}
          />
          <ContactList
            icon={"fa-brands fa-telegram"}
            title={"Telegram"}
            href={"http://t.co/@discreet22"}
            aid={"@discreet22"}
          />
        </div>
        <h3 className="content-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="content-sub-title  padd-15">
          I 'M VERY RESPOSIVE TO MESSAGES
        </h4>
        <div className="row">
          <div className="content-form padd-15">
            <div className="row">
              <FormContact text={"text"} col={"col-6"} title={"Name"} />
              <FormContact text={"email"} col={"col-6"} title={"Email"} />
            </div>
            <div className="row">
              <FormContact text={"text"} col={"col-12"} title={"Subject"} />
            </div>
            <div className="row">
              <div className="form-item  padd-15" id="col-12">
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
      </Section>
    </div>
  );
};

export default Contact;
