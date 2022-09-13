import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
    </div>
  );
}

export default App;
