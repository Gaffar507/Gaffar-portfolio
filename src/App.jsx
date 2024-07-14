import React from 'react'
import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import ContactUs from './components/contact/ContactUs'
import Cursor from './components/cursor/Cursor'
import About from './components/about/About'

const App = () => {
  return (
    <div>
      <Cursor/>
      <section id='Homepage'>
        <Navbar/> 
        <Hero/>
      </section>
      <section id='Services'><Parallax type={'services'}/></section>
      <section><Services/></section>
      <section id='Portfolio'><Parallax type={'portfolio'}/></section>
      <Portfolio/>
      <section id="About"><About/></section>
      <section id='Contact'><ContactUs/></section>
    </div>
  )
}

export default App
