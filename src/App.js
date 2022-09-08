import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./components/header/Head";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Head/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
