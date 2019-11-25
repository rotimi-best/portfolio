import React from 'react';
import SideBar from '../SideBar';
import AboutDetails from './AboutDetails';
import './About.css';

export default function About() {
    return (
        <div className="About">
            <SideBar extendWidth={true} />
            <AboutDetails />
        </div>
    )
}
