import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

type Props = {
  name: string,
  techStack: string,
}

export default function Project(props: Props) {
  return (
    <div className="Project">
      <h4 className="ProjectName">{props.name}</h4>
      <p className="ProjectTechStack">{props.techStack}</p>
      <FaLongArrowAltRight className="ArrowRight"/>
    </div>
  )
}
