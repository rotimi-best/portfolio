import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import WearingNative from '../../assets/NativeWaisteCoatBowTie.png';

export default function AboutDetails() {
  return (
    <div className="AboutDetails">
      <div className="AboutDetailsImage">
        <img src={WearingNative} alt="AboutDetailsImage"/>
      </div>
      <div className="AboutDetailsText">
        <p className="AboutDetailsFirstName">Rotimi</p>
        <p className="AboutDetailsLastName">Best</p>
        <p className="AboutDetailsShortDescription">Fullstack web developer</p>
        <p className="AboutDetailsLongDescription">Fullstack web developer</p>
        <div className="AboutDetailsAction">
          <button className="AboutDetailsActionPortfolio">Portfolio</button>
          <button className="AboutDetailsActionResume">Resume</button>
        </div>
      </div>
      <GiHamburgerMenu />
    </div>
  )
}
