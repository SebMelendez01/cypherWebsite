import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Marquee from "react-fast-marquee";


import { debounce } from "../utilities/helpers.js"
import cypherNavbarLogo from '../assets/images/logos/cypher-logo-white.png'

// https://react-bootstrap.github.io/components/navbar/ Create a responsive navBar
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

  //Timer: https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    let difference = +new Date(`9/01/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
    timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60)
    };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
    timerComponents.push(
      <span>
          {'Application opens on Sept 1st!'} {" "}
      </span>
    );
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
        return;
    }
        
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
  return (
    <div>
      <div className='marquee-section'>
        <Marquee gradient={false}>
            {timerComponents.length - 1 ? <span className='group'>{timerComponents}</span> : <span className='group'>Time's up!</span>}
            {timerComponents.length - 1 ? <span className='group'>{timerComponents}</span> : <span className='group'>Time's up!</span>}
            {timerComponents.length - 1 ? <span className='group'>{timerComponents}</span> : <span className='group'>Time's up!</span>}
            {timerComponents.length - 1 ? <span className='group'>{timerComponents}</span> : <span className='group'>Time's up!</span>}
            {timerComponents.length - 1 ? <span className='group'>{timerComponents}</span> : <span className='group'>Time's up!</span>}
            {timerComponents.length - 1 ? <span className='group'>{timerComponents}</span> : <span className='group'>Time's up!</span>}
            {timerComponents.length - 1 ? <span className='group'>{timerComponents}</span> : <span className='group'>Time's up!</span>}
            {timerComponents.length - 1 ? <span className='group'>{timerComponents}</span> : <span className='group'>Time's up!</span>}
        </Marquee>
      </div>
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
    </div>
  );
}

export default Navibar;