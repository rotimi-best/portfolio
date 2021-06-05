import React, { Component } from 'react'
import Project from './Project'
import ProjectType from './Types'

import './Projects.css'

const projects: ProjectType[] = [
  {
    key: 1,
    name: 'Dream interpreter',
    techStacks: [
      'Node.js',
      'MongoDB',
      'Telegram BOT'
    ],
    image: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
    src: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
  },
  {
    key: 2,
    name: 'Fandflovefoundation',
    techStacks: [
      'Node.js',
      'MongoDB',
      'Telegram BOT'
    ],
    image: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
    src: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
  },
  {
    key: 3,
    name: 'Online supermarket for Retailer.com',
    techStacks: [
      'Node.js',
      'MongoDB',
      'Telegram BOT'
    ],
    image: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
    src: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
  },
  {
    key: 4,
    name: 'Linkedin Automation Tool',
    techStacks: [
      'Node.js',
      'MongoDB',
      'Telegram BOT'
    ],
    image: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
    src: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
  },
  {
    key: 5,
    name: 'Upwork data visualizer',
    techStacks: [
      'Node.js',
      'MongoDB',
      'Telegram BOT'
    ],
    image: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
    src: 'https://os-system.com/static/SocialApp-6ea06e6b24e966f56a73c0e77a7ad258.svg',
  },
  // {
  //   key: 6,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
  // {
  //   key: 7,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
  // {
  //   key: 8,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
  // {
  //   key: 9,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
  // {
  //   key: 10,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
  // {
  //   key: 11,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
  // {
  //   key: 12,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
  // {
  //   key: 13,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
  // {
  //   key: 14,
  //   name: 'Upwork data visualizer',
  //   techStack: 'Vue.js, Golang, RethinkDB',
  //   image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  //   src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
  // },
];
export default class Projects extends Component {
  render() {
    return (
      <section className="ProjectsContainer">
        <h1 className="ProjectsTitle">LATEST WORKS</h1>
        <div className="Projects">
          {projects.map(({key, name, techStacks, image, src }) => (
            <Project
              key={key}
              name={name}
              techStacks={techStacks}
              image={image}
              src={src}
            />
          ))}
        </div>
      </section>
    )
  }
}
