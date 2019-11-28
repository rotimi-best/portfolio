import React from 'react'
import SideBar from './SideBar';
import Projects from './Projects';
import About from './About';

export default function Main() {
  return (
    <>
      <SideBar />
      <About />
      <Projects />
      {/* <About />
      <About /> */}
    </>
  )
}
