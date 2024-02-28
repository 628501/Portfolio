import React from 'react'
import './ExperienceBox.css'

function ExperienceBox({number,title,style}) {
  return (
    <div style={{...style}} className='experience__box'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ExperienceBox