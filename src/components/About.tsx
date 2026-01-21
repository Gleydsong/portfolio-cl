import AOS from "aos";
import React, { useEffect } from "react";

import "aos/dist/aos.css";
import "../styles/components/About.css";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about">
      <h2 data-aos="fade-up">Sobre Mim</h2>
      <p data-aos="fade-up">Olá meu nome é Gleydson Gibson</p>
      <a
        href={`${import.meta.env.BASE_URL}curriculo.pdf`}
        download="curriculo.pdf"
        className="btn"
        data-aos="fade-up"
      >
        Baixar Currículo{" "}
      </a>
      <hr></hr>
    </section>
  );
};

export default About;
