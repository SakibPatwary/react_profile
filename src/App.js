import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
import Works from "./components/MyWorks/Works";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Quotes from "./components/Quotes/Quotes";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Skills/>
      <Experience/>
      <Works />
      <Social />
      <Quotes/>
      <Contact />
      <Footer />
    </div>
  );
 }

export default App;
