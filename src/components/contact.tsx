import React from "react";
import contact from "../../public/assets/img/contact.svg";
import useEmailForm from "../UseEmailForm";

const Contact: React.FC = () => {
  const { formRef, handleSubmit } = useEmailForm();

  return (
    <section id="contact" className="section">
      <h1 id="contact-title">Contact</h1>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          id="form-name"
          name="user_name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="form-email"
          name="user_email"
          placeholder="Your E-mail"
          required
        />
        <textarea
          id="form-message"
          name="message"
          placeholder="Your message"
          required
        />
        <div id="button-wrapper">
          <input type="submit" id="form-submit" value="Send" />
        </div>
      </form>
      <img id="img-contact" src={contact} alt="contact illustration" />
    </section>
  );
};

export default Contact;