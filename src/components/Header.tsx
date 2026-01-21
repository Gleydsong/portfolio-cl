import "../styles/components/Header.css";

import logo from "../assets/images/logo.png";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo"></img>Portfólio
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={isMenuOpen ? "nav-open" : "nav"}>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
