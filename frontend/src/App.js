import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';

//Global Styling
import GlobalStyles from './globalstyles.js';

//Importing Navigation
import Navigation from './components/navigation/navigation.js';

//Pages
import Home from "./pages/home.js";
import About from "./pages/about.js"
import Resume from "./pages/resume.js"
import Contact from "./pages/contact.js"

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

