import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Garante que a animação ocorra apenas uma vez ao rolar
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
