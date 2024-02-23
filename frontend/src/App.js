import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';

//Importing Navigation
import Navigation from './components/navigation';

//Pages
import Home from "./pages/home";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

