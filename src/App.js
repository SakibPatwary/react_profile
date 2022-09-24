import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
import Works from "./components/MyWorks/Works";
import Contact from "./components/Contact/Contact";
import Tools from "./components/Tools/Tools";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Tools />
      <Works />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
 }

export default App;
