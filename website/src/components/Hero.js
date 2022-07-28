import React from 'react';

import whartonHeroLogo from '../assets/images/logos/wharton-logo-white.png'
import stevensHeroLogo from '../assets/images/logos/stevens-logo-white.png'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-main-container">
                <div className="section-title-text"><span style={{color: "white"}}>Build. Connect.<br/>Fund.</span> Join<br/>Cypher.</div>
                <div className="engage-buttons">
                    <a href='https://forms.gle/LuNA86cb6jL7gCbQ9' target="_blank" rel="noopener noreferrer"><button className="black-button">Get Involved</button></a>
                    <a href='https://www.f6s.com/cypher-accelerator-cohort-2022/' target="_blank" rel="noopener noreferrer"><button className="gradient-button">Apply</button></a>
                </div>
                <div className="hero-description">Cypher is a 10-week,<br/>virtual accelerator built to launch<br/>the world’s leading web3 startups.</div>
            </div>
            <div className="hero-logos">
                <img className="hero-logo-image" src={whartonHeroLogo}/>
                <img className="hero-logo-image" src={stevensHeroLogo}/>
            </div>
        </div>
    );
}

export default Hero;