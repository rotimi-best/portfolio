import React, { Component } from 'react'
import Project from './Project'

import './Projects.css'

type Project = {
  key: number,
  name: string,
  techStack: string,
  imageSrc: string,
}

const projects: Project[] = [
  {
    key: 1,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB',
    imageSrc: 'https://os-system.com/vendors/images/main-portfolio/enjoy/Enjoy_2.jpg',
  },
  {
    key: 2,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB',
    imageSrc: 'https://os-system.com/vendors/images/main-portfolio/illich-realty/phone-section.png',
  },
  {
    key: 3,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB',
    imageSrc: 'https://os-system.com/vendors/images/main-portfolio/illich-realty/solution-picture.png',
  },
  {
    key: 4,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB',
    imageSrc: 'https://os-system.com/vendors/images/main-portfolio/gud-job/section_3_1.png',
  },
  {
    key: 5,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB',
    imageSrc: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  },
]

export default class Projects extends Component {

  render() {
    return (
      <div className="ProjectsRoot">
        <h1 className="ProjectsTitle">LATEST WORKS</h1>
        <div className="Projects">
          {projects.map(({key, name, techStack, imageSrc}) => (
            <Project
              key={key}
              name={name}
              techStack={techStack}
              imageSrc={imageSrc}
            />
          ))}
        </div>
      </div>
    )
  }
}
