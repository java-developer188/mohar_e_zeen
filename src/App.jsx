import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Craft from './components/Craft'
import UpcomingEvents from './components/UpcomingEvents'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Craft />
      <UpcomingEvents />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
