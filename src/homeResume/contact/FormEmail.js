import React from 'react';
import swal from "sweetalert";
import emailjs from "@emailjs/browser";

import { FormContact } from 'components/FormContact';
const FormEmail = () => {

    const sendEmail = (e) => { 
      e.preventDefault();
        swal({
          icon: "success",
        });
        emailjs.sendForm(
          "service_3jbo87r",
          "template_dye9n75",
          e.target,
          "ejSIKLyTScwP_inJT"
        );
        e.target.reset();
      };

    return (
        <div className="row">
        <form className="content-form padd-15" onSubmit={sendEmail}>
          <div className="row">
            <FormContact
              text={"text"}
              col={"col-6"}
              title={"Name"}
              nam={"name"}
            />
            <FormContact
              text={"email"}
              col={"col-6"}
              title={"Email"}
              nam={"email"}
            />
          </div>
          <div className="row">
            <FormContact
              text={"text"}
              col={"col-12"}
              title={"Subject"}
              nam={"subject"}
            />
          </div>
          <div className="row">
            <div className="form-item  padd-15" id="col-12">
              <div className="form-group">
                <textarea
                  name="message"
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
        </form>
      </div>
    );
}

export default FormEmail;
