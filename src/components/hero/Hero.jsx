import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./hero.css";
const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
        tl.fromTo(
          ".hero-copy-wrapper h1",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 }
        )
          .fromTo(
            ".hero-copy-text p",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.8"
          )
          .fromTo(
            ".hero-img img",
            { scale: 1.2, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1 },
            "-=1"
          );
      }, []);
  return (
    <div>
      <section className="hero-section">
        <div className="hero-img">
          <img src="/me.jpg" alt="Portrait" />
        </div>
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-copy-wrapper">
              <h1>Javier Medina</h1>
            </div>
            <div className="hero-copy-text">
              <p>
                Me fascina crear sitios webs que briden una experiencia de
                usuario unica y satisfactoria. Considero que soy una persona
                autodidacta, responsable y comprometida con mi trabajo.
                Constantemente estoy aprendiendo nuevas tecnologias y
                herramientas para mejorar mis habilidades
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
