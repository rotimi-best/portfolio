import React from 'react'
import SideBar from './SideBar';
import About from './About';
import Projects from './Projects';
// import Contact from './Contact';

export default function Main() {
  return (
    <React.Fragment>
      <SideBar />
      <About />
      <Projects />
      {/* <Contact /> */}
    </React.Fragment>
  );
}
