import React from 'react'
import Header from './Header/Header'
import TopContainer from './TopContainer/TopContainer'
import SkillContainer from './SkillContainer/SkillContainer'
import ProjectContainer from './ProjectContainer/ProjectContainer'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'

function Portfolio() {
  return (
    <div>
       <Header />
       <TopContainer />
       <SkillContainer />
       <ProjectContainer/>
       <Experience />
       <Contact />
    </div>
  )
}

export default Portfolio