import React from 'react'
import { Element } from 'react-scroll'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import './Experience.css'

function Experience() {
  return (
    <div>
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <ExperienceBox number='+10' title='Projects' />
            <ExperienceBox number='+10' title='Projects' style={{backgroundColor:"green"}} />
            <ExperienceBox number='+10' title='Projects' />
            <ExperienceBox number='+10' title='Projects' />
        </div>
    </Element>
    </div>
  )
}

export default Experience