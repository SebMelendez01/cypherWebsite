import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';
import whartonHeroLogo from '../assets/images/wharton-logo-white.png'
import stevensHeroLogo from '../assets/images/stevens-logo-white.png'

class Hero extends React.Component {
    render () {
        return (
            <div className="heroContainer" id="news">
                <div className="heroText" id="fier">
                    <div className="text">
                        <div><span className="white-text">Build. Connect.</span></div>
                        <div><span className="white-text">Fund.</span> Join</div>
                        <div>Cypher.</div>
                    </div>
                    <div className="engage-buttons">
                        <button className="black-button">Get Involved</button>
                        <button className="gradient-button">Apply</button>
                    </div>
                    <div className="description">
                        <p>Cypher is a 10-week,</p>
                        <p>virtual accelerator built to launch</p>
                        <p>the world’s leading web3 startups.</p>
                    </div>
                </div>
                <div className="heroLogos" id="branding">
                    <img className="hero-logo-image" src={whartonHeroLogo}/>
                    <img className="hero-logo-image" src={stevensHeroLogo}/>
                </div>
            </div>
        );
    }
}

export default Hero;