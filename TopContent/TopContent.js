import React from 'react'
import {Link} from 'react-scroll'
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import './TopContent.css'

function TopContent() {
  const [text] = useTypewriter({
    words : ['Final year engineering student','Web Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className='topContent'>
     <div className='topContent__container'>
        <h1>Mr.Kartheeswaran </h1>
        <p>{text} <Cursor/> </p>
        <a href='www.google.com'>
            <button className='topContent__downloadButton'>Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
            <button className='topContent__workButton'>My Work</button>
        </Link>
     </div>
    </div>
  )
}

export default TopContent