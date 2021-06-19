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
            <p> - Working as a software engineer</p>
            <p> - Building <a href="https://www.classroomio.com/" target="_blank" rel="noopener noreferrer">ClassroomIO</a> on the side</p>
            <p> - Teaching React.js to new developers</p>
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
