import React from "react"
import { useState } from "react"

import { Nav } from "./components/Nav"
import { MobileNav } from "./components/MobileNav/MobileNav"
import { Header } from "./components/Header"
import { Educationals } from "./components/Educationals"
import { EducationalsMobile } from "./components/EducationalsMobile"
import { PersonalInfo } from "./components/PersonalInfo"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { BackToTopButton } from "./components/BackToTopButton"



import reactLogo from "./img/reactLogo.png"
import htmlLogo from "./img/htmlLogo2.png"
import cssLogo from "./img/cssLogo2.png"
import javascriptLogo from "./img/javascriptLogo.png"
import gitLogo from "./img/gitLogo.png"
import githubLogo from "./img/gitLogo.png"



function App() {
  const profile = {
    name: "Manuel Rojas",
    age: "27",
    phone: "+54 9 11 5488 1218",
    email: "duranalejandro661@gmail.com",
    address: "Sarandi, Provincia de Buenos Aires. Argentina",
    freelance: "Available",
    github: "https://github.com/ManuelARD13/",  
}

  const techArray = []

  const createTechInfoObj = (techId, techName, techDescription, techUrl, techImg, techAlt) => ({
    id: techId,
    name: techName,
    description: techDescription,
    url: techUrl,
    img: techImg,
    alt: techAlt
})

const git = createTechInfoObj("git" ,"Git", " The most used Distributed Version Control System. An essential to collaborative source code developtment.", "", gitLogo, "Git Logo")
techArray.push(git)

const react = createTechInfoObj("react", "React.js", "A essential. The most populars and powerfull Javascript Front-end Developtment library.", "", reactLogo, "React.js Logo")
techArray.push(react)

const javascript = createTechInfoObj("javascript", "Javascript", "Core technology of the client-side webpages behavior. The most extendly used all around the web.", "", javascriptLogo, "javascript Logo")
techArray.push(javascript)

const html5 = createTechInfoObj("html5", "HTML5", "The fifth version of this must-know Markup Language to structure and present content on the web.", "", htmlLogo, "HTML5 Logo")
techArray.push(html5)

const css3 = createTechInfoObj("css3", "CSS3", "Style Sheet Lenguage cornerstone of web design. Allows the separation of content and presentation.", "", cssLogo, "CSS3 Logo")
techArray.push(css3)

const github = createTechInfoObj("github" ,"Github", "Git-based hosting service. A must-know to co-work and share knowledge between programmers.", "", githubLogo, "Github Logo")
techArray.push(github)


 const [displayedSlidesStart, setDisplayStart] = useState(0)
 const [displayedSlidesEnd, setDisplayEnd] = useState(3)


  return ([
    <Nav />,
    <MobileNav />,
    <Header />,
    <PersonalInfo profile={profile}/>,
    <Educationals 
      techArray={techArray} 
      displayedSlidesStart={displayedSlidesStart} 
      displayedSlidesEnd={displayedSlidesEnd} 
      setDisplayStart={setDisplayStart} 
      setDisplayEnd={setDisplayEnd}
      className="educationals" />,
    <EducationalsMobile techArray={techArray} />,
    <Projects />,
    <Contact />,
    <Footer />,
    <BackToTopButton />
    ])
}

export { App }
