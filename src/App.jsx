import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/about/About.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";

const App = () => {
  return <div>

    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>

    <section id="about"><Parallax type="about" /></section>
    <section><About/></section>
    
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <section><Portfolio/></section>
    
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
