import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./HomeScreen";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <HomeScreen />
        <Footer />
      </Router>
      
    </div>
  );
 }

export default App;
