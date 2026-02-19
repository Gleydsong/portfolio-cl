import React from "react";
import "../styles/components/About.css";

const About: React.FC = () => {
  const handleDownload = async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}curriculo.pdf`);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <section id="about">
      <h2 data-aos="fade-up">Sobre Mim</h2>
      <p data-aos="fade-up">
        Desenvolvedor Full Stack, Estudante em Analise e Desenvolvimento de
        Sistemas pela Faculdade Estacio. Apaixonado por tecnologia e sempre em
        busca de novos conhecimentos para aprimorar minhas habilidades. Tenho
        experiência em diversas tecnologias, incluindo IA e desenvolvimento web.
        Estou sempre aberto a novos desafios e oportunidades para crescer
        profissionalmente.
      </p>
      <a
        href={`${import.meta.env.BASE_URL}curriculo.pdf`}
        download="curriculo.pdf"
        className="btn"
        data-aos="fade-up"
        onClick={(event) => {
          event.preventDefault();
          void handleDownload();
        }}
      >
        Baixar Currículo{" "}
      </a>
      <hr></hr>
    </section>
  );
};

export default About;
