import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card'
import Map from './Map'
import {Company} from './Company'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'


import { useMediaQuery } from 'react-responsive'
import { motion } from "framer-motion";

import quotes from '../assets/quotes.json'

function Cohort() {
  const [counter, setCounter] = useState(0);
  const cardRef = useRef();

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1400px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 1400px)' });
  const isPhone = useMediaQuery({ query: '(min-width: 1400px)' });

  let companyQuotes = quotes.map((quote) =>
    <Card.Body id='quote-body'>
      <div className='flex-container'>
        <div className='flex-child' id='card-left'>
          <Image src={quote.image} roundedCircle/>
        </div>
        <div className='flex-child' id='card-right'>
          <Card.Title><b>{quote.name}</b></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{quote.title}</Card.Subtitle>
        </div>
      </div>
      <Card.Text id='quote-text'>{quote.quote}</Card.Text>
    </Card.Body>
  );

  const [cardData, setCardData] = useState(companyQuotes[0]);

  const cardVariants = {
    offscreen: {
      x: -600
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

  const titleVariants = {
    offscreen: {
      x: 800
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
  const cohortVariants = {
    offscreen: {
      opacity: 0, 
      scale: 2
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  // console.log("asdf");
  
  useEffect(() => {
    const interval = setInterval(() => {
      
      const next = () => {
        cardRef.current.style.opacity = 0;
        setTimeout(() => {
          setCardData(companyQuotes[counter]);
          cardRef.current.style.opacity = 1;
        }, 1000);
      };
      if(counter >= quotes.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter => counter + 1);
      }
      next();
      // console.log($(window).width());
    }, 4000);
    return () => clearInterval(interval);
  }, [companyQuotes, counter]);

  

  return (
    <div className="cohort" >
      <div className='flex-container' id="cohort" >
        <div className='flex-child' id='quote-card'>
          <motion.div
            className="animation-div"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="animation-helper" variants={cardVariants}>
              <div className='background-box'></div>
              <Card id='quote' 
              >
                <div
                  ref={cardRef}
                  style={{
                    transition: "opacity 1s linear"
                  }}
                >
                  {cardData}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
        <div className='flex-child' id='intro-right'>
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="card" style={{border: 0}} variants={titleVariants}>
              <div className="title">
                <div className="section-subtitle-text">WE ACCEPT COMPANIES FROM ALL OVER THE WORLD.</div>
                <div className="section-title-text">Meet Our Genesis<br/>Cohort.</div>
              </div>
            </motion.div>
          </motion.div>
          <div className='map'>
            <Map/>
            <h5><b>2022 COHORT</b></h5>
          </div>
        </div>
      </div>
      {/* https://react-bootstrap.github.io/layout/grid/ */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="card" style={{border: 0}} variants={cohortVariants}>
          {isDesktopOrLaptop && <Container>
            <div className='cohort-grid'>
              <Row style={{width: "51%"}} >
                <Col>
                  <Company name='Cowboy Labs'/>
                </Col>
                <Col>
                  <Company name='Protego'/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Company name='Roofstock'/>
                  <Company name='Carv'/>
                </Col>
                <Col>
                  <Company name='VO2'/>
                  <Company name='Ensuro'/>
                </Col>
                <Col>
                  <Company name='VIA'/>
                  <Company name='TYDEi'/>
                </Col>
                <Col>
                  <Company name='Portabl'/>
                  <Company name='Metaverse AI'/>
                </Col>
              </Row>
            </div>
          </Container>}
          {!isDesktopOrLaptop && <div className="scroll-through" id="company-cards">
            <Stack gap={2}>
              <Company name='Cowboy Labs'/>
              <Company name='Protego'/>
            </Stack>
            <Stack gap={2}>
              <Company name='Roofstock'/>
              <Company name='Carv'/>
            </Stack>
            <Stack gap={2}>
              <Company name='VO2'/>
              <Company name='Ensuro'/>
            </Stack>
            <Stack gap={2}>
              <Company name='VIA'/>
              <Company name='TYDEi'/>
            </Stack>
            <Stack gap={2}>
              <Company name='Portabl'/>
              <Company name='Metaverse AI'/>
            </Stack>
          </div>}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cohort;