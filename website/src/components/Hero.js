import React from 'react';
import {motion, Variants} from "framer-motion"

import whartonHeroLogo from '../assets/images/logos/wharton-logo-white.png'
import stevensHeroLogo from '../assets/images/logos/stevens-logo-white.png'

function Hero() {
    let counter = -1;

    function increment() {
        counter += 1;
        return counter;
    }

    const wordVariants = {
        offscreen: {opacity: 0.25},
        onscreen: (i) => {return {opacity: 1, transition: {
            delay: i * 0.5, duration: 0.5
        }}}
    }

    const wordVariants2 = {
        offscreen: {opacity: 0.25, color: "white"},
        onscreen: (i) => {return {color: "black", opacity: 1, transition: {
            delay: i * 0.5, duration: 0.5, type: "ease-in"
        }}}
    }
    
    return (
        <motion.div className="hero" initial="offscreen" whileInView="onscreen" viewport={{ once:true}}>
            <div className="hero-main-container">
                <div className="section-title-text"><span style={{color: "white"}}><motion.span variants={wordVariants} custom={increment()}>Build. </motion.span><motion.span variants={wordVariants} custom={increment()}>Connect.</motion.span> <motion.span variants={wordVariants} custom={increment()}><br/>Fund.</motion.span></span><motion.span variants={wordVariants2} custom={increment()}> Join<br/>Cypher.</motion.span></div>
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
        </motion.div>
    );
}

export default Hero;