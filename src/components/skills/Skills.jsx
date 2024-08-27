import React from 'react';
import {  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaDocker, FaJava } from 'react-icons/fa';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="skills-row">
          <p>Skills</p>
        </div>
        <div className="skills-row">
       
          <div className="skill">
            <FaReact size={32} />
            <p>React</p>
            <p>Building dynamic and responsive web applications.</p>
            <p>&mdash;</p>
          </div>
          <div className="skill">
            <FaNodeJs size={32} />
            <p>Node.js</p>
            <p>Creating scalable and efficient server-side solutions.</p>
            <p>&mdash;</p>
          </div>
          <div className="skill">
            <FaJava size={32} />
            <p>Java</p>
            <p>Writing robust and maintainable codebases.</p>
            <p>&mdash;</p>
          </div>
      
        </div>
        <div className="skills-row">
          <div className="skill">
            <FaHtml5 size={32} />
            <p>HTML5</p>
            <p>Crafting modern and semantic web pages.</p>
            <p>&mdash;</p>
          </div>
          <div className="skill">
            <FaCss3Alt size={32} />
            <p>CSS3</p>
            <p>Styling with precision and creativity.</p>
            <p>&mdash;</p>
          </div>
          <div className="skill">
            <FaJs size={32} />
            <p>JavaScript</p>
            <p>Enhancing web functionality with interactive elements.</p>
            <p>&mdash;</p>
          </div>
      
        </div>
        <div className="skills-row">
          <div className="skill">
            <FaGitAlt size={32} />
            <p>Git</p>
            <p>Version control for collaborative development.</p>
            <p>&mdash;</p>
          </div>
          <div className="skill">
            <FaPython size={32} />
            <p>Python</p>
            <p>Building versatile and powerful applications.</p>
            <p>&mdash;</p>
          </div>
          <div className="skill">
            <FaDocker size={32} />
            <p>Docker</p>
            <p>Containerizing applications for consistency and scaling.</p>
            <p>&mdash;</p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Skills;