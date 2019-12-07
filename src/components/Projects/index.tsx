import React, { Component } from 'react'
import Project from './Project'
import ProjectType from './Types'

import './Projects.css'

const projects: ProjectType[] = [
  {
    key: 1,
    name: 'Dream interpreter',
    techStack: 'Node.js, MongoDB, Telegra BOT',
    image: 'https://os-system.com/vendors/images/main-portfolio/enjoy/Enjoy_2.jpg',
    src: 'https://os-system.com/vendors/images/main-portfolio/enjoy/Enjoy_2.jpg',
  },
  {
    key: 2,
    name: 'Fandflovefoundation',
    techStack: 'Wordpress, PHP, SQL',
    image: 'https://os-system.com/vendors/images/main-portfolio/illich-realty/phone-section.png',
    src: 'https://os-system.com/vendors/images/main-portfolio/illich-realty/phone-section.png',
  },
  {
    key: 3,
    name: 'Online supermarket for Retailer.com',
    techStack: 'React.js, Node.js, MySQL',
    image: 'https://os-system.com/vendors/images/main-portfolio/illich-realty/solution-picture.png',
    src: 'https://os-system.com/vendors/images/main-portfolio/illich-realty/solution-picture.png',
  },
  {
    key: 4,
    name: 'Linkedin Automation Tool',
    techStack: 'Node.js, MongoDB, Puppeteer',
    image: 'https://os-system.com/vendors/images/main-portfolio/gud-job/section_3_1.png',
    src: 'https://os-system.com/vendors/images/main-portfolio/gud-job/section_3_1.png',
  },
  {
    key: 5,
    name: 'Upwork data visualizer',
    techStack: 'Vue.js, Golang, RethinkDB',
    image: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
    src: 'https://os-system.com/vendors/images/main-portfolio/wikigrads/picture2.png?v2',
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
          {projects.map(({key, name, techStack, image, src }) => (
            <Project
              key={key}
              name={name}
              techStack={techStack}
              image={image}
              src={src}
            />
          ))}
        </div>
      </section>
    )
  }
}
