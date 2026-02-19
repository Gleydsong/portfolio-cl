import React from "react";
import "../styles/components/Hero.css";

const Hero: React.FC = () => {
  return (
    <div id="hero">
      <div className="hero-background"></div>
      <div className="hero-content" data-aos="fade-up">
        <h1>Olá, Meu nome é Gleydson</h1>
        <p>Desenvolvedor Full Stack</p>
        <a href="#projects" className="btn">
          Veja meus projetos
        </a>
      </div>
    </div>
  );
};

export default Hero;

