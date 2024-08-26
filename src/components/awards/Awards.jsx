import React from "react";
import "./awards.css";
import projects from "../../data/data.json";
import { Link } from "react-router-dom";
const Awards = () => {
  return (
    <>
      <section className="awards-header">
        <div className="container">
          <div className="awards-header-row">
            <h1>I Create</h1>
          </div>
        </div>
      </section>
      <section className="awards">
        <div className="container">
          <div className="award">
            <p>Proyecto</p>
            <p>Stack</p>
            <p></p>
            <p style={{ marginRight: "5px" }}>Ver</p>
          </div>
          {projects.map((project) => (
            <div className="award" key={project.id}>
              <p>{project.name}</p>
              <p>{project.stack}</p>
              <p>
                <ion-icon name="arrow-forward-sharp"></ion-icon>
              </p>
              <p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                >
                  Link
                </a>
              </p>
            </div>
          ))}
        </div>

        <div className="award-btn">
          <div className="magnetic-area">
            <Link to="/works" className="magnet-btn btn">
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
