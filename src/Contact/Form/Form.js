import React from "react";
import emailjs from "emailjs-com";

import "./form.scss";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c2ks5vl",
        "template_hcl5x6j",
        e.target,
        "user_L18B3q07iVbwaxhsaOq9R"
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
  };

  return (
    <form className="contactForm" onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="enter your name" required />
      <input
        type="email"
        name="email"
        placeholder="enter your email"
        required
      />
      <textarea
        type="text"
        name="message"
        rows="5"
        placeholder="write your message"
        required
      ></textarea>
      <button type="submit">Send message</button>
    </form>
  );
};

export default Form;
