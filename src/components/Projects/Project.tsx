import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ProjectType from './Types'

export default function Project(props: ProjectType) {
  return (
    <div className="Project">
      <div className="ProjectHeader">
        <img className="ProjectImage" alt="ProjectImage" src={props.image} />
      </div>
      <div className="ProjectBody">
        <div className="ProjectName">
          <p>{props.name}</p>
          <a href={props.src} target="_blank" rel="noopener noreferrer">
            Visit <FaExternalLinkAlt className="ArrowRight" />
          </a>
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, temporibus cumque repellendus facilis quia harum optio consectetur vero enim dicta eius.
        </span>
      </div>
      <div className="ProjectFooter">
        {props.techStacks.map(techStack => (
          <span>{techStack}</span>
        ))}
      </div>
    </div>
  )
}
