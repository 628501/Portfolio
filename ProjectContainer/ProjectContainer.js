import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import './projectContainer.css'

function ProjectContainer() {
    const projects = [
        {
            img:"https://wallpapercave.com/wp/wp2465939.jpg",
            title:'Register Page',
            desc:`A user-friendly registration page crafted with HTML , CSS , Javascript. It's a place where individuals come together to connect `,
            link:'file:///C:/Users/GOD/Desktop/JavaScript%20DOM/studentform/studentform.html'
        },
        {
            img:"https://wallpapercave.com/wp/wp2465939.jpg",
            title:'Digital Clock',
            desc:`The Digital Clock project is a web-based clock that displays the current time. It's created using HTML, CSS, JavaScript and is a handy tool for keeping track of time`,
            link:'file:///C:/Users/GOD/Desktop/Javascript/Digitalclock/Digital.html'
        },
        {
            img:"https://wallpapercave.com/wp/wp2465939.jpg",
            title:'Booksky',
            desc:`Booksky is a web application for managing a personal book collection. It provides features for adding, editing, and deleting books, complete with title, author, descriptions `,
            link:'file:///C:/Users/GOD/Desktop/JavaScript%20DOM/Booksky/index.html'
        },
        {
            img:"https://wallpapercave.com/wp/wp2465939.jpg",
            title:'Todo List',
            desc:`The Todo List project is a task management tool that lets you add, edit, remove tasks. It's built using HTML, CSS, JavaScript and it ca help you stay organized`,
            link:'file:///C:/Users/GOD/Desktop/Javascript/ToDoList/todo.html'
        },
        {
            img:"https://wallpapercave.com/wp/wp2465939.jpg",
            title:'Color Flipper',
            desc:`A Color Flipper is a mind game to guess what colour it will generate. It will generate random color with its color code`,
            link:'file:///C:/Users/GOD/Desktop/Javascript/Colour%20Flipper/color.html'
        },
        {
            img:"https://wallpapercave.com/wp/wp2465939.jpg",
            title:'Coming Soon',
            desc:`....... `,
            link:''
        },
            
    ]
  return (
    <Element className='projectContainer' id='projects'>
        <h1>Projects</h1>
        <p>Here are some projects which I done in my learning phase</p>
        <div className='projectContainer__projects'>
             {projects.map((project,index)=>{
                return(
                    <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/> 
                )
             })}
        </div>
    </Element>
  )
}

export default ProjectContainer