import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/skills";
import Contactpage from "./pages/Contact";
import Footer from "./components/footer";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div >

      <Navbar />    

      <section id="home">
      <Home />
      </section>

      <section id="about">
      <About />
      </section>

      <section id="project">
      <Work />
      </section>

      <section id="skills">
      <Skills />
      </section>

      <section id="contact">
      <Contactpage />
      </section>

      <Footer />

    </div>
  );
}

export default App;
