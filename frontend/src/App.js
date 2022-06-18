import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
    <Router>
      
        <Navbar />
        <Intro />
        <About />
        <Experience />
        <Skills/>
        <Portfolio />
        <Contact />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
