import React from "react";
import Header from "./components/Header";
import "./App.css";
import RoundPhoto from "./components/RoundPhoto";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import img from "../src/img/selfimg.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Pages/Projects";
import NavLinks from "./components/Pages/NavLinks";
function App() {
  return (
    <Router>
      <Header />
    
      <div className="bg">
        <img src={img} alt="Image" />
      </div>
      <div className="content">
        <RoundPhoto />
        <br />
        <h1>Hi, I'M</h1>
        <h1> VIPUL NIGAM</h1>

        <br />
        <p>I'm a software developer and a software engineer.</p>
        <br />
        <br />

        <h3>Introduction</h3>
        <p>
          Dedicated JavaScript & React Developer with a fervent commitment to
          ongoing learning and staying abreast of emerging technologies. Keen to
          bring passion and meticulous attention to detail to every project.
          Proficient in React, Redux, and other leading JavaScript libraries and
          frameworks. Extensive experience in HTML, CSS, and various web
          development technologies.
        </p>

        <h3>My Skill</h3>
        <p>JavaScript, ReactJS, Redux, HTML, CSS, Git/GitHub</p>

        <Resume />
      </div>
      <Routes>
        <Route path="/projects" Component={Projects} />
      </Routes>
      <NavLinks />

      <Footer />
    </Router>
  );
}

export default App;
