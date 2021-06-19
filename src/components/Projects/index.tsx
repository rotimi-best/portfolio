import React, { Component } from 'react'
import Project from './Project'
import { projects } from './constants'

import './Projects.css'
export default class Projects extends Component {
  render() {
    return (
      <section className="ProjectsContainer">
        <h1 className="ProjectsTitle">LATEST WORKS</h1>
        <div className="Projects">
          {projects.map(({key, ...rest }) => (
            <Project
              key={key}
              {...rest}
            />
          ))}
        </div>
      </section>
    )
  }
}
