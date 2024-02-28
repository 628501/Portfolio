import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@material-ui/core'
import {Instagram,LinkedIn,Facebook} from '@material-ui/icons'
import './Contact.css'

function Contact() {
  return (
    <div>
        <Element className='contact' id='contact'>
            <h1>contact</h1>
            <div className='contact__container'>
              <p>
                Email : <span>karthis15cse@gmail.com</span>
              </p>
              <p>
                Github Username : <span>@Kartheeswaran_16</span>
              </p>
              <div className='contact__icons'>
                <a href='www.google.com'>
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>
                <a href='www.google.com'>
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href='www.google.com'>
                    <IconButton>
                        <Facebook/>
                    </IconButton>
                </a>
              </div>
            </div>
        </Element>
    </div>
  )
}

export default Contact