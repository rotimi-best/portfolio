import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import WearingNative from '../../assets/NativeWaisteCoatBowTie.png';

export default function AboutDetails() {
  return (
    <div className="AboutDetails">
      <div className="AboutDetailsLeft">
        <div className="AboutDetailsImage">
          <img src={WearingNative} alt="AboutDetailsImage"/>
        </div>
        <div className="AboutDetailsText">
          <p className="AboutDetailsFirstName">Rotimi</p>
          <p className="AboutDetailsLastName">Best</p>
          <p className="AboutDetailsShortDescription">Fullstack web developer</p>
          <p className="AboutDetailsLongDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eos a voluptas, accusantium esse omnis vitae, voluptate est perspiciatis delectus eaque quaerat quisquam nobis eligendi repellat quam, modi blanditiis laboriosam.</p>
          <div className="AboutDetailsAction">
            <button className="AboutDetailsActionPortfolio">PORTFOLIO</button>
            <button className="AboutDetailsActionResume">RESUME</button>
          </div>
        </div>
      </div>
      <GiHamburgerMenu className="menu" />
    </div>
  )
}
