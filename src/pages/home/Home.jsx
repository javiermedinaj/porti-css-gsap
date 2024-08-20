import React, { useEffect, useRef } from "react";
import "./home.css";
import Transition from "../../components/transition/Transition";
import PortraitImg from "../../assets/images/medina/me.jpg";
import { gsap } from "gsap";

const Home = () => {
  const heroCopyReveal = useRef();
  const heroImageReveal = useRef();

  useEffect(() => {
    heroCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    heroImageReveal.current = gsap
    .timeline({ paused: true })
    .from(".hero-img", {
      y: "1000",
      rotate: 0, 
      duration: 1,
      ease: "power3.out",
      delay: 0.75,
    });

    heroCopyReveal.current.play();
    heroImageReveal.current.play();
  }, []);

  return (
    <div>
       <section className="hero-section">
      <div className="hero-img">
        <img src={PortraitImg} alt="Portrait" />
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-copy-wrapper">
            <h1>Javier</h1>
          </div>
          <div className="hero-copy-wrapper">
            <h1>Medina</h1>
          </div>
          <div className="hero-copy-text">
            <p>
              Me fascina crear sitios webs que briden una experiencia de usuario
              unica y satisfactoria. Considero que soy una persona autodidacta,
              responsable y comprometida con mi trabajo. Constantemente estoy
              aprendiendo nuevas tecnologias y herramientas para mejorar mis
              habilidades
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>   
  );
};

export default Transition(Home);
