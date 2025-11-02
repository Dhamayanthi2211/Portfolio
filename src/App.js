// Import global styles
import "./App.css";

// Importing individual components for each section of the portfolio
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Certificate from "./components/Certificate"; // ✅ Added Certificate import

// Main App component
function App() {
  return (
    <div className="App">
      {/* Portfolio sections rendered as components */}
      <Header />       {/* Navigation bar */}
      <Hero />         {/* Intro section */}
      <About />        {/* About me section */}
      <Projects />     {/* Projects showcase */}
      <Resume />       {/* Resume or skills section */}
      <Certificate />  {/* ✅ Certificates section */}
      <Contact />      {/* Contact form or details */}
      <Footer />       {/* Footer */}
    </div>
  );
}

export default App;
