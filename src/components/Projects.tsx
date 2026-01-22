import "aos/dist/aos.css";
import "../styles/components/Projects.css";
import AOS from "aos";
import petshop from "../assets/images/petshop.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import calculadora from "../assets/images/calculadora.png";
import galery from "../assets/images/galery.png";

import React, { useEffect, useState } from "react";

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const openImage = (imgSrc: string) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section id="projects" data-aos="fade-up">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src={project1}
              alt="Projeto 1"
              loading="lazy"
              onClick={() => openImage(project1)}
              style={{ cursor: "pointer" }}
            />
            <h3>App de HelpDesk</h3>
            <p>
              Um sistema de Help-Desk é uma aplicação para registrar, organizar
              e acompanhar chamados de suporte, conectando clientes a técnicos,
              com serviços e agendamento de horários — do “pedido” até o
              “encerramento”.
            </p>
          </div>
          <div className="project-card">
            <img
              src={project2}
              alt="Projeto Refund"
              loading="lazy"
              onClick={() => openImage(project2)}
              style={{ cursor: "pointer" }}
            />
            <h3>Projeto Refund </h3>
            <p>
              {" "}
              Aplicativo web para gerenciamento de reembolsos de despesas
              corporativas.
            </p>
          </div>
          <div className="project-card">
            <img
              src={project3}
              alt="Projeto 2"
              loading="lazy"
              onClick={() => openImage(project3)}
              style={{ cursor: "pointer" }}
            />
            <h3>Api de Reembolso </h3>
            <p>
              API para gerenciamento de reembolsos de despesas corporativas.
            </p>
          </div>
          <div className="project-card">
            <img
              src={petshop}
              alt="Projeto 2"
              loading="lazy"
              onClick={() => openImage(petshop)}
              style={{ cursor: "pointer" }}
            />
            <h3>Pet Shop</h3>
            <p>
              Aplicativo web para gerenciamento de um Pet Shop, incluindo
              cadastro de clientes, pets, serviços e agendamentos.
            </p>
          </div>
          <div className="project-card">
            <img
              src={calculadora}
              alt="To-Do List"
              loading="lazy"
              onClick={() => openImage(calculadora)}
              style={{ cursor: "pointer" }}
            />
            <h3>Calculadora</h3>
            <p>Uma calculadora simples desenvolvida em React Via CDN.</p>
            <a href="https://gleydsong.github.io/calculadora/" className="btn">
              Ver Projeto
            </a>
          </div>
          <div className="project-card">
            <img
              src={galery}
              alt="Novo Projeto"
              loading="lazy"
              onClick={() => openImage(galery)}
              style={{ cursor: "pointer" }}
            />
            <h3>Galeria-Plus</h3>
            <p>
              Um projeto feito em React para exibir uma galeria de imagens com
              funcionalidades avançadas.
            </p>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage!} alt="Imagem ampliada" />
            <button onClick={closeModal} className="close-button">
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
