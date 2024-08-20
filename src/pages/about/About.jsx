import React from "react";
import "./about.css";
import Transition from "../../components/transition/Transition";
import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import PortraitImg from "../../assets/images/medina/me.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "¿Qué servicios ofreces?",
        content:
          "Me enfoco en crear interfaces de usuario intuitivas utilizando React y he trabajado con técnicas de web scraping en Python. Estoy en constante aprendizaje y busco oportunidades para mejorar mis habilidades en el desarrollo web y backend.",
      },
      {
        title: "¿Cuales son mis objetivos?",
        content:
          "Brindar una experiencia de usuario unica y dinámica a través de la creación de una solución de software de alto rendimiento.",
      },
      {
        title: "¿Cómo puedo contactarte?",
        content:
          "Puedes contactarme a través de mi correo electrónico javier_j_medina@hotmail.com o por la pagina de Contact.",
      },
    ],
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee direction="left" speed={50}>
            <h2>
              Elevando tu presencia digital con soluciones innovadoras en
              desarrollo web.
            </h2>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>
            Soy un desarrollador de software en formación, con conomientos en
            JavaScript, Python y Java. Apasionado por crear experiencias
            digitales intuitivas y eficientes. Busco una oportunidad profesional
            para aplicar mis conocimientos y crecer en el campo de la
            tecnología.
          </h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Est. 1997</span>
              </p>
            </div>
            <div className="about-col">
              <h3>
                Colaboro con equipos de desarrollo en proyectos académicos y
                personales, enfocados en aplicaciones web utilizando tecnologías
                como React.js y Spring Boot. Mi enfoque abarca desde el diseño
                de interfaces hasta la implementación de funcionalidades
                backend, siempre buscando integrar metodologías ágiles para
                maximizar la eficiencia y la calidad del producto final.
              </h3>
              <h3>
                Estoy comprometido con el aprendizaje continuo y la aplicación
                de nuevas tecnologías, lo que me permite adaptarme rápidamente a
                los cambios en el entorno tecnológico.
              </h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contacto</span>
              </p>
              <br />
              <br />
              <p>
                <span>Email: </span> <span>javier_j_medina@hotmail.com</span>
              </p>
              <p>
                <span>Ubicación: </span> <span>Buenos Aires, Argentina</span>
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="Tu retrato" />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>
        <section className="about-contact">
          <div className="about-contact-copy">
            
            <p>
            <Link to="/contact">
              <span>
                Para consultas, colaboraciones o más información, no dudes en
                contactarme 
              </span>
              </Link>
            </p>
            <br />
          </div>
        </section>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
