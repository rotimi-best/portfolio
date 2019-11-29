import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ProjectType from './Types'

export default function Project(props: ProjectType) {
  return (
    <div className="Project">
      <a href={props.src} target="_blank" rel="noopener noreferrer">
        <div className="ProjectOverlay"></div>
        <img className="ProjectImage" alt="ProjectImage" src={props.image} />
        <div className="ProjectDetails FadeInBottom">
          <FaExternalLinkAlt className="ArrowRight"/>
          <h4 className="ProjectName">{props.name}</h4>
          <p className="ProjectTechStack">{props.techStack}</p>
        </div>
      </a>
    </div>
  )
}
