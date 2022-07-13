import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card'
import Map from './Map'
import Company from './Company'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

import quotes from '../assets/quotes.json'




function Cohort() {
  // let counter = useRef(0); 
  // const [intervalId, setIntervalId] = useState(quotes[counter.current]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if(counter >= quotes.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter => counter + 1);
      }
      
    }, 5000);
    return () => clearInterval(interval);
  }, [counter]);


  return (
    <div className="cohort">
      <div className='flex-container'>
        <div className='flex-child' id='quote-card'>
          <div className='background-box'></div>
          <Card>
            <Card.Body id='quote-body'>
              <div className='flex-container'>
                <div className='flex-child' id='card-left'>
                  <Image src={quotes[counter].image} roundedCircle/>
                </div>
                <div className='flex-child' id='card-right'>
                  <Card.Title><b>{quotes[counter].name}</b></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{quotes[counter].title}</Card.Subtitle>
                </div>
              </div>
              <Card.Text id='quote-text'>{quotes[counter].quote}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='flex-child' id='intro-right'>
          <div className="title">
            <p id='subtitle-top'><b>WE ACCEPT COMPANIES FROM ALL OVER THE WORLD.</b></p>
            <h1 id='subtitle-bottom'><b>Meet Our Genesis <br/> Cohort.</b></h1>
          </div>
          <div className='map'>
            <Map/>
            <h5><b>2022 COHORT</b></h5>
          </div>
        </div>
      </div>
      {/* https://react-bootstrap.github.io/layout/grid/ */}
      <Container>
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
        {/* <Row md={4}>
          <Col>
            <Company name='Cowboy Labs'/>
            <Company name='Protego'/>
            <Company name='Roofstock'/>
          </Col>
          <Col>
            <Company name='Carv'/>
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
        </Row> */}
      </Container>
    </div>
  );
}

export default Cohort;