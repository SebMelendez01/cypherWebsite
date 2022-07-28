import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Map from './Map'
import {Company} from './Company'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import quotes from '../assets/quotes.json'

function Cohort() {
  const [counter, setCounter] = useState(0);
  function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // calculate the current animation state
      let progress = timing(timeFraction);
  
      draw(progress); // draw it
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }
  function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  let bounceEaseOut = makeEaseOut(bounce);
  

  useEffect(() => {
    const interval = setInterval(() => {
      if(counter >= quotes.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter => counter + 1);
      }
      let card = document.getElementById('quote');
      card.style.zIndex = "100";
      animate({
        duration: 3000,
        timing: bounceEaseOut,
        draw: function(progress) {
          card.style.top = progress * (50) - 50+ 'px';
        }
      });
      
    }, 5000);
    return () => clearInterval(interval);
  }, [bounceEaseOut, counter]);

  const companyQuotes = quotes.map((quote, index) =>
    <Card id='quote'>
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
    </Card>
  );
  return (
    <div className="cohort" id="cohort">
      <div className='flex-container'>
        <div className='flex-child' id='quote-card'>
          <div className='background-box'></div>
          {companyQuotes[counter]}
          {companyQuotes[counter]}
          
        </div>
        <div className='flex-child' id='intro-right'>
          <div className="title">
            <div className="section-subtitle-text">WE ACCEPT COMPANIES FROM ALL OVER THE WORLD.</div>
            <div className="section-title-text">Meet Our Genesis <br/> Cohort.</div>
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