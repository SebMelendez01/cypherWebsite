import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useState } from 'react'
import cypherNavbarLogo from '../assets/images/cypher-logo-white.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import "bootstrap/dist/css/bootstrap.min.css"
import './Component.css';

function Navibar() {
    const [colorState, setColorState] = useState(false);
    const [scrollState, setScrollState] = useState(0);
    const changeNavibarColor = () => {
        if(window.scrollY >= 1) {
            setColorState(true);
        } else {
            setColorState(false);
        }
    }
    
    const changeScrollState = () => {
        var currentScrollPos = window.pageYOffset;
        if(scrollState > currentScrollPos) { // going up
            document.getElementById("nav").style.top = "0";
        } else if (currentScrollPos > 600) { // going down
            document.getElementById("nav").style.top = "-15vh";
        }
        setScrollState(window.pageYOffset);
    }

    window.addEventListener('scroll', () => {
        changeNavibarColor();
        changeScrollState();
    });
    return (
        <div className={colorState ? 'nav-bar-scroll' : 'nav-bar'} id="nav">
            <Navbar>
                <Navbar.Brand>
                    <img src={cypherNavbarLogo} width="175px"/>
                </Navbar.Brand>
                <Nav className="nav-guides">
                    <Nav className="links">
                        <Nav.Link>Team</Nav.Link>
                        <Nav.Link>News</Nav.Link>
                        <Nav.Link>Get Involved</Nav.Link>
                    </Nav>
                    <button className="gradient-button">Apply</button>
                </Nav>     
            </Navbar>
        </div>
    );
}

export default Navibar;