import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

type Props = {
  name: string,
  techStack: string,
  imageSrc: string,
}

export default function Project(props: Props) {
  return (
    <div className="Project">
      <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank" rel="noopener noreferrer">
        <div className="ProjectOverlay"></div>
        <img className="ProjectImage" alt="ProjectImage" src={props.imageSrc} />
        <div className="ProjectDetails FadeInBottom">
          <h4 className="ProjectName">{props.name}</h4>
          <p className="ProjectTechStack">{props.techStack}</p>
          <FaLongArrowAltRight className="ArrowRight"/>
        </div>
      </a>
    </div>
  )
}
