import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Footer from "./Footer";


const Layout = () => {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
};

export default Layout;
