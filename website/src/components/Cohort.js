import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Map from './Map'
import {Company} from './Company'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

import quotes from '../assets/quotes.json'

function Cohort() {
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
    <div className="cohort" id="cohort">
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
            <div className="subtext">WE ACCEPT COMPANIES FROM ALL OVER THE WORLD.</div>
            <div className="text">Meet Our Genesis <br/> Cohort.</div>
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
      </Container>
    </div>
  );
}

export default Cohort;