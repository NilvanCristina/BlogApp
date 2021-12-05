import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact";
import Newsletter from "./pages/Newsletter/Newsletter";
import './App.css'

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/contact" element={ <Contact/> } />
                <Route path="/newsletter" element={ <Newsletter/> } />
            </Routes>
        </Router>
  );
}

export default App;
