import AOS from "aos";
import React, { useEffect } from "react";


import "../styles/components/Skills.css";
import "aos/dist/aos.css";

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" data-aos="fade-up">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        <div className="skill-item">HTML</div>
        <div className="skill-item">CSS</div>
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">TypeScript</div>
        <div className="skill-item">React</div>
        <div className="skill-item">Angular</div>
        <div className="skill-item">C#</div>
        <div className="skill-item">SQL</div>
        <div className="skill-item">SCRUM</div>
        <div className="skill-item">Git</div>
      </div>
    </section>
  );
};

export default Skills;
