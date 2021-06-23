import React from "react";
import Form from "./Form/Form";

import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 className="contactHeader">Contact us</h1>
        <div className="contactAddress">
          <div className="contactAddressDetails">
            <h1>Icon</h1>
            <h1>Location</h1>
            <p>add ress</p>
          </div>
          <div className="contactAddressDetails">
            <h1>Icon</h1>
            <h1>phone</h1>
            <p>000-111-222-333</p>
          </div>
          <div className="contactAddressDetails">
            <h1>Icon</h1>
            <h1>Email</h1>
            <p>snack@gmail.com</p>
          </div>
          <div className="contactAddressDetails">
            <h1>Icon</h1>
            <h1>Chat</h1>
            <p>add ress</p>
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
