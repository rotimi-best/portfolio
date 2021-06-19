import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';

import WearingNative from '../../assets/NativeWaisteCoatBowTie.png';
import WearingNative168 from '../../assets/NativeWaistecoatBowTie168.jpg';

export default function AboutDetails() {
  return (
    <div className="AboutDetails">
      <div className="AboutDetailsLeft">
        <div className="AboutDetailsImage">
          <img className="large" src={WearingNative} alt="AboutDetailsImage"/>
          <img className="small" src={WearingNative168} alt="AboutDetailsImage"/>
        </div>
        <span className="HorizontalLine"></span>
        <div className="AboutDetailsText">
          <div className="AboutDetailsTextName">
            <p className="AboutDetailsFirstName">Rotimi</p>
            <p className="AboutDetailsLastName">Best</p>
          </div>
          <p className="AboutDetailsShortDescription">Building the future</p>
          <p className="AboutDetailsLongDescription">
            I have a day job as a software engineer and on the side
            I am working on a software for universities, that gives students easy access
            to all the information they need to succeed and teachers the data and
            tools to take charge of their classrooms.
          </p>
          <div className="AboutDetailsAction">
            {/* <button className="AboutDetailsActionPortfolio">RESUME</button> */}
            <button className="AboutDetailsActionResume">
              <a href="https://github.com/rotimi-best" target="_blank" rel="noopener noreferrer">Github</a>
            </button>
          </div>
        </div>
      </div>
      {/* <GiHamburgerMenu className="menu" /> */}
    </div>
  )
}
