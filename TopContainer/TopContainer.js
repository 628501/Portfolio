import React from 'react'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import './TopContainer.css'

function TopContainer() {
  return (
    <div className='bl'>
      <Element name='about' className='topContainer'>
         <TopContent />
      </Element>
      <img className='image' src='./Assets/Anime.jpg' alt=''></img>
      <div className='box'></div>
    </div>
  )
}

export default TopContainer
