import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Transition from "../../components/transition/Transition";
import "./contact.css";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

const FORM_ID = import.meta.env.VITE_FORM_ID;

const Contact = () => {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return <p className="thanks-message">Gracias por tu mensaje</p>;
  }

  return (
    <div className="contact page">
      <div className="container">
        <section className="contact-hero">
          <div className="contact-row">
            <div className="contact-col"></div>
            <div className="contact-col">
              <h1>Comentame tu idea</h1>
            </div>
          </div>
        </section>
        <section className="section contact-form">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Contact</span>
              </p>
            </div>
            <div className="contact-col">
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="input">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={6}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="input">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <button type="submit" className="btn-submit" disabled={state.submitting}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(Contact);