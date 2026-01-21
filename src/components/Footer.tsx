import React from "react";

import "../styles/components/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; 2025 Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/gleydsongibson/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Gleydsong">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
