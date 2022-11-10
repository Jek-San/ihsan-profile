import React from "react"
import "./about.css"
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Still Looking For Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>Still dont have 😥</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 Project Completes</small>
            </article>
          </div>
          <p>
            Hi, I’m Ihsan! I'm a web developer experience in web-developments.
            In a nutshell, I create websites that right now still in
            development. I manage everything from website navigation and layout,
            web hosting and security architecture. Even though it's still using
            free hosting like github and heroku. My expertise lies within
            front-end web apps, and the main languages in my tech stack are
            JavaScript, React, and of course HTML/CSS. I’m a lifelong learner
            and love to read, run, and find new bubble tea shops anywhere.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
