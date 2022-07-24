import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';
import whartonHeroLogo from '../assets/images/wharton-logo-white.png'
import stevensHeroLogo from '../assets/images/stevens-logo-white.png'

class Hero extends React.Component {
    render () {
        return (
            <div class="heroContainer" id="news">
                <div class="heroText" id="fier">
                    <div class="text">
                        <div><span class="white-text">Build. Connect.</span></div>
                        <div><span class="white-text">Fund.</span> Join</div>
                        <div>Cypher.</div>
                    </div>
                    <div class="engage-buttons">
                        <button class="black-button">Get Involved</button>
                        <button class="gradient-button">Apply</button>
                    </div>
                    <div class="description">
                        <p>Cypher is a 10-week,</p>
                        <p>virtual accelerator built to launch</p>
                        <p>the world’s leading web3 startups.</p>
                    </div>
                </div>
                <div class="heroLogos" id="branding">
                    <img class="hero-logo-image" src={whartonHeroLogo}/>
                    <img class="hero-logo-image" src={stevensHeroLogo}/>
                </div>
            </div>
        );
    }
}

export default Hero;