import React, { useRef, useEffect } from "react";
import "./works.css";
import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import { gsap } from "gsap";
import projects from "../../data/data.json";

const Works = () => {
  const workCopyReveal = useRef();
  const projectPreviewContainer = useRef(null);

  useEffect(() => {
    workCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    workCopyReveal.current.play();
  }, []);

  let lastHoveredIndex = null;

  const handleResetPreivew = () => {
    gsap.to(".project-preview img", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        lastHoveredIndex = -1;
      },
    });
  };

  const handleMouseOver = (index) => {
    if (index !== lastHoveredIndex) {
      console.log(`Hovered ${index}`);

      const img = document.createElement("img");
      img.src = projects[index - 1].imgSrc;
      projectPreviewContainer.current.appendChild(img);

      gsap.to(img, {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          const allPrevImages = projectPreviewContainer.current.querySelectorAll("img");

          if (allPrevImages.length > 1) {
            Array.from(allPrevImages)
              .slice(0, -1)
              .forEach((img) => {
                setTimeout(() => {
                  img.remove();
                }, 1000);
              });
          }
        },
      });

      lastHoveredIndex = index;
    }
  };

  useEffect(() => {
    const projectItems = document.querySelectorAll(".project-item");

    return () => {
      projectItems.forEach((projectItem) => {
        projectItem.removeEventListener("mouseover", () =>
          handleMouseOver(index)
        );
      });
    };
  }, []);

  return (
    <div className="works page">
      <div className="project-preview" ref={projectPreviewContainer}></div>
      <div className="container">
        <section
          className="works-hero"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <div className="work-copy-wrapper">
            <h1>Projects</h1>
          </div>
          <div className="work-copy-wrapper">
            <h1>2023 • 2024</h1>
          </div>
        </section>

        <section className="project-list">
          {projects.map((project, index) => (
            <div className="project-list-row" key={project.id}>
              <div className={`project-list-col ${index % 2 === 0 ? "" : "whitespace-col"}`}>
                <div
                  className="project-item"
                  onMouseOver={() => handleMouseOver(project.id)}
                  onClick={() => handleMouseOver(project.id)} // Add onClick for mobile
                >
                  <div className="project-img">
                    <Link to={project.link}>
                      <img src={project.imgSrc} alt={project.name} />
                    </Link>
                  </div>
              
                </div>
              </div>
            </div>
          ))}
        </section>

        <div
          className="works-marquee"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <Marquee speed={160}>
            <h2>
              Desarrollador Frontend con experiencia en React, GSAP, framer motion y animaciones web
            </h2>
          </Marquee>
        </div>

        <div
          className="magnetic-btn"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <MagneticButton />
        </div>
      </div>
    </div>
  );
};

export default Transition(Works);