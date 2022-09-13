import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/LiveProjects/Projects";
import Social from "./components/Social/Social";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Social/>
      <Projects/>
    </div>
  );
}

export default App;
