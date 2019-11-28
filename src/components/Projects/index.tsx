import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

import './Projects.css'

type Project = {
  key: number,
  name: string,
  techStack: string,
}

const projects: Project[] = [
  {
    key: 1,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB'
  },
  {
    key: 2,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB'
  },
  {
    key: 3,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB'
  },
  {
    key: 4,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB'
  },
  {
    key: 5,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB'
  },
]

export default class Projects extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="ProjectsRoot">
        <h1 className="ProjectsTitle">LATEST WORKS</h1>
        <div className="Projects">
          {projects.map(({key, name, techStack}) => (
            <Project
              key={key}
              name={name}
              techStack={techStack}
            />
          ))}
        </div>
      </div>
    )
  }
}
