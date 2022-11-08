import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Testimoni from './components/testimoni/Testimoni'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimoni />
      <Contact/>
    </>
  )
}

export default App