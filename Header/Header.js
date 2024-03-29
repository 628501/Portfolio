import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'

function Header() {
  return (
  <div className='header'>
   <div className='header__left'>
        <h1>
            Develop<span>er</span>
        </h1>
   </div>
    <div className='header__right'>
        <Link to='about' smooth={true} duration={500}>
            <h4>
                About Me
            </h4>
        </Link>
        <Link to='skills' smooth={true} duration={500}>
            <h4>
                skills
            </h4>
        </Link>
        <Link to='projects' smooth={true} duration={500}>
            <h4>
                Projects
            </h4>
        </Link>
        <Link to='exp' smooth={true} duration={500}>
            <h4>
                Experience
            </h4>
        </Link>
        <Link to='contact' smooth={true} duration={500}>
            <h4>
                Contact
            </h4>
        </Link>
     </div>
      <h4 className='left'>Join With Me</h4>
    </div>
  )
}

export default Header