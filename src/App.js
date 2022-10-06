import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./HomeScreen";
import Topbar from "./components/Topbar/Topbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <HomeScreen />
        <Footer />
      </Router>
      
    </div>
  );
 }

export default App;
