import React from "react";
import Transition from "../../components/transition/Transition";
import "./contact.css";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

const Contact = () => {
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
              <form action="">
                <div className="input">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                  <textarea type="text" placeholder="Message" rows={6} />
                </div>
                <div className="input">
                  <input type="text" placeholder="Email" />
                  <button>Submit</button>
                </div>
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
