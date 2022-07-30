import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { motion, Variants} from "framer-motion";

function Information() {
    const MotionCard = motion(Card);
    let counter = 0;
    let animationInView = 0.4;
    useEffect(() => {
        document.querySelectorAll(".bcf-flip-card-positioner").forEach(item => {
            item.addEventListener('mouseout', () => {
                item.classList.add("was-hovered-container")
            });
        })
    
        document.querySelectorAll(".bcf-flip-card-front").forEach(item => {
            item.addEventListener('mouseout', () => {
                item.classList.add("was-hovered-card-front")
            });
        })
    })

    const bcfContainerVariants = {
        offscreen: {translateX: "5px", translateY: "5px", rotateY: "180deg"},
        onscreen: (i) => {
            return {
                translateX: ["0px", "0px"],
                translateY: ["0px", "0px"],
                rotateY: ["0deg", "0deg"],
                transition: {type: "ease", duration: 0.33, times: [0, 1], delay: i}
            }
        }
    }

    const bcfFrontCardVariants = {
        offscreen: {translateX: "5px", translateY: "5px", boxShadow: "0px 0px black"},
        onscreen: (i) => {
            return {
                translateX: ["5px", "0px"],
                translateY: ["5px", "0px"],
                boxShadow: ["0px 0px black", "5px 5px black"],
                transition: {type: "ease", duration: 0.33, times: [0, 1], delay: i}
            }
        }
    }
    const titleVariants = {
        offscreen: {
          x: -800
        },
        onscreen: {
          x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
          }
        }
      };
    function increment() {
        counter += 0.5;
        return counter;
    }
    
    return (
        <div className="information">
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div style={{border: 0}} variants={titleVariants}>
                    <div className="section-subtitle-text">WE USE OUR RESOURCES TO SUPPORT YOU.</div>
                    <div className="section-title-text">Learn How We<br/>Can Help.</div>
                </motion.div>
            </motion.div>
            <div className="bcf-cards-container">
                <motion.div className="bcf-flip-card-container" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:animationInView}}>
                    <motion.div className="bcf-flip-card-positioner" variants={bcfContainerVariants} custom={increment()}>
                        <MotionCard className="bcf-flip-card-front" variants={bcfFrontCardVariants} custom={counter}>
                            <Card.Body>
                                <Card.Title>BUILD</Card.Title>
                                <Card.Text>We help you sharpen your value 
                                    proposition, develop your product, refine 
                                    your market strategy, and showcase your 
                                    brand.</Card.Text>
                            </Card.Body>
                        </MotionCard>
                        <Card className="bcf-flip-card-back">
                            <Card.Body>
                                <Card.Title>BUILD</Card.Title>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>80+ workshops led by firms such as Pantera, TaxBit, Sardine.ai, Securitize, etc.</ListGroup.Item>
                                    <ListGroup.Item>Extensive BizDev support from Cypher Team and Mentor Pool.</ListGroup.Item>
                                    <ListGroup.Item>AWS Cloud and QuickNode Credits.</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </motion.div>
                <motion.div className="bcf-flip-card-container" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:animationInView}}>
                    <motion.div className="bcf-flip-card-positioner" variants={bcfContainerVariants} custom={increment()}>
                        <MotionCard className="bcf-flip-card-front" variants={bcfFrontCardVariants} custom={counter}>
                            <Card.Body>
                                <Card.Title>CONNECT</Card.Title>
                                <Card.Text>We put you in touch with leaders of 
                                    the blockchain / web3 industry at every 
                                    level – (exchanges, infrasturucture providers, 
                                    protocols, etc.)</Card.Text>
                            </Card.Body>
                        </MotionCard>
                        <Card className="bcf-flip-card-back">
                            <Card.Body>
                                <Card.Title>CONNECT</Card.Title>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>30+ Mentors and Advisors to help you build your business and make key connections.</ListGroup.Item>
                                    <ListGroup.Item>Connections with legal advisors from top firms.</ListGroup.Item>
                                    <ListGroup.Item>Networking opportunities with previous cohorts and Wharton community.</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </motion.div>
                <motion.div className="bcf-flip-card-container" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:animationInView}}>
                    <motion.div className="bcf-flip-card-positioner" variants={bcfContainerVariants} custom={increment()}>
                        <MotionCard className="bcf-flip-card-front" variants={bcfFrontCardVariants} custom={counter}>
                            <Card.Body>
                                <Card.Title>FUND</Card.Title>
                                <Card.Text>We provide $5000 in grant funding, 
                                    educate about best fundraising practices, 
                                    and prepare you to present to leading 
                                    investors at our Demo Day.</Card.Text>
                            </Card.Body>
                        </MotionCard>
                        <Card className="bcf-flip-card-back">
                            <Card.Body>
                                <Card.Title>FUND</Card.Title>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>$5,000 non-dilutive grants, no strings attached.</ListGroup.Item>
                                    <ListGroup.Item>Fundraising Preparation for Cypher Demo Day, with firms such as a16z, Bain Capital, Bessemer, Draper Ventures, Outlier Ventures, and Pantera Capital.</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Information
