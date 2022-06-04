import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
function App() {
  return (
    <div className="app"    >
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
