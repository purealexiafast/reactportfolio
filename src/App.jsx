// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import AboutMe from './pages/aboutme'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Projects from './pages/projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Header header="Home" />
        <Navigation title="Alexia Fast Portfolio" />


        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

      </Router>
    </>)
}

export default App
