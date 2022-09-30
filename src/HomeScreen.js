import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Works from "./components/MyWorks/Works";
import Social from "./components/Social/Social";
import Quotes from "./components/Quotes/Quotes";
import Contact from "./components/Contact/Contact";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Skills />
      <Experience />
      <Works />
      <Social />
      <Quotes />
      <Contact />
    </div>
  );
}

export default HomeScreen