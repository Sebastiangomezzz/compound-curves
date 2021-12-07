import React from "react";
import emailjs from "emailjs-com"
import './Form.styles.css'
import { init } from "emailjs-com";
init("user_CbNDMO2ND12WJSmLhhEy7");
function Form() {

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_osjbagi",
        "template_dkqdsl4",
        e.target,
        "user_CbNDMO2ND12WJSmLhhEy7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="form-div">
      <h2 className="form-title">Contact Us</h2>
      <form className="form-container" onSubmit={sendEmail}>
        <input
          required={true}
          type="text"
          htmlFor="name"
          className="form-control"
          placeholder="Name"
          name="name"
        />
        <input
          type="phone"
          required={true}
          htmlFor="phone"
          className="form-control"
          placeholder="Phone number"
          name="phone"
        />
        <input
          required={true}
          type="email"
          htmlFor="email"
          className="form-control"
          placeholder="Email"
          name="email"
        />
        <textarea
          required={true}
          type="textarea"
          minLength="30"
          htmlFor="message"
          className="form-control"
          placeholder="Please enter your message"
          name="message"
          rows="6"
        />
        <input type="submit" className="form-control" />
      </form>
    </div>
  );
}

export default Form;
