import React from "react";

import "./form.scss";

const Form = () => {
  return (
    <form className="contactForm">
      <input type="text" placeholder="enter your name" required />
      <input type="email" placeholder="enter your email" required />
      <textarea
        type="text"
        rows="5"
        placeholder="write your message"
        required
      ></textarea>
      <button>Send message</button>
    </form>
  );
};

export default Form;
