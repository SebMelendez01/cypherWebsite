import React from "react";
import Card from 'react-bootstrap/Card';
import { motion, Variants } from "framer-motion";




function Engage() {
    const applyBackgroundVariants = {
        offscreen: {backgroundPosition: "right"},
        onscreen: {backgroundPosition: "left"}
    }

    const getInvolvedCardVariants = {
        offscreen: {backgroundPosition: "top right", color: "white"},
        onscreen: {backgroundPosition: "bottom left", color: "rgba(0, 0, 0, 0.68)"}
    }

    const applyButtonVariants = {
        offscreen: {backgroundPosition: "right"},
        onscreen: {backgroundPosition: "left"}
    }

    const getInvolvedButtonVariants = {
        offscreen: {backgroundPosition: "right", color: "black"},
        onscreen: {backgroundPosition: "left", color: "white"}
    }
    
    return (
        <motion.div className="engage" initial="offscreen" whileInView="onscreen" viewport={{ once:true, amount:0.5}}>
            <motion.div className="get-involved card" variants={getInvolvedCardVariants}>
                <Card.Body>
                    <Card.Title>Get Involved</Card.Title>
                    <Card.Text>Apply to be a part of the growing Stevens Center and Cypher community.</Card.Text>
                    <a href='https://forms.gle/LuNA86cb6jL7gCbQ9' target="_blank" rel="noopener noreferrer"><motion.button className="gradient-button" variants={getInvolvedButtonVariants}>Get Involved</motion.button></a>
                </Card.Body>
            </motion.div>
            <motion.div className="apply-background" variants={applyBackgroundVariants}>
                <Card className="apply">
                    <Card.Body>
                        <Card.Title>Apply</Card.Title>
                        <Card.Text>Join our next cohort of web3 and DeFi startups. Gain access to the Wharton network and the Cypher ecosystem.</Card.Text>
                        <div className="apply-button-container">
                            <a href='https://www.f6s.com/cypher-accelerator-cohort-2022/' target="_blank" rel="noopener noreferrer"><motion.button className="white-button">Apply</motion.button></a>
                            <motion.div className="apply-button-background" variants={applyButtonVariants}></motion.div>
                        </div>
                    </Card.Body>
                </Card>
            </motion.div>
        </motion.div>
    )
}

export default Engage;