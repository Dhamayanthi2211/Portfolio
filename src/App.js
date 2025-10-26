// import logo from './logo.svg'; // Default React logo import (currently unused)

// Import global styles
import "./App.css";

// Importing individual components for each section of the portfolio
import About from "./components/About.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

// Main App component
function App() {
  return (
    <div className="App">
      {/* 
        This block was part of the default React template.
        It's currently commented out and not used in your portfolio.
        You can delete it later if you no longer need it.
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      */}

      {/* Portfolio sections rendered as components */}
      <Header />     {/* Navigation bar */}
      <Hero />       {/* Intro section with name and tagline */}
      <About />      {/* About me section */}
      <Projects />   {/* Projects showcase */}
      <Resume />     {/* Resume or skills section */}
      <Contact />    {/* Contact form or details */}
      <Footer />     {/* Footer with links or copyright */}
    </div>
  );
}

export default App;