import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { debounce } from "../utilities/helpers.js"
import cypherNavbarLogo from '../assets/images/logos/cypher-logo-white.png'

function Navibar() {
    const [colorState, setColorState] = useState(false);
    const [scrollState, setScrollState] = useState(0);

    var relevantHeight;
    var currentScrollPos;

    const changeNavbarColor = () => {
        if (window.scrollY > 0) {
            setColorState(true);
        } else {
            setColorState(false);
        }
    }
    
    const changeViewableStatus = debounce(() => {
        relevantHeight = window.innerHeight * 0.9;
        currentScrollPos = window.pageYOffset;

        if (scrollState > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else if (currentScrollPos > relevantHeight) {
            document.getElementById("navbar").style.top = "-10vh";
        }

        setScrollState(window.pageYOffset);
    }, 100);

    window.addEventListener('scroll', () => {
        changeNavbarColor();
        changeViewableStatus();
    });

    return (
        <Navbar className={colorState ? "navbar moving" : "navbar clear"} id="navbar">
            <Navbar.Brand>
                <img src={cypherNavbarLogo} height="50vh"/>
            </Navbar.Brand>
            <Nav className="navbar-links-and-buttons">
                <Nav.Link>Team</Nav.Link>
                <Nav.Link>News</Nav.Link>
                <Nav.Link href="https://forms.gle/LuNA86cb6jL7gCbQ9" target="_blank" rel="noopener noreferrer">Get Involved</Nav.Link>
                <a href='https://www.f6s.com/cypher-accelerator-cohort-2022/' target="_blank" rel="noopener noreferrer"><button className="gradient-button">Apply</button></a>
            </Nav>     
        </Navbar>
    );
}

export default Navibar;