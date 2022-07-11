import { React } from 'react';
import Card from 'react-bootstrap/Card'
import Map from './Map'
import Company from './Company'
import cohort from '../assets/cohort.json'
// import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'



function Cohort() {
  return (
    <div className="cohort">
      <div className='flex-container'>
        <div className='flex-child quotes' id='cohort'>
          <Card >
            <Card.Body>
              <Card.Title><b>Lorenzo Melendez</b></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CEO, Cowboy Labs</Card.Subtitle>
              <Card.Text>
              ‘It was great to see that others love the things we love to create.’ 
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='flex-child' id="cohort">
          <div className="title">
            <p><b>WE ACCEPT COMPANIES FROM ALL OVER THE WORLD.</b></p>
            <h1  className='subtitle'><b>Meet Our Genesis <br/> Cohort.</b></h1>
          </div>
          <div className='map'>
            <Map/>
            <h5><b>2022 COHORT</b></h5>
          </div>
        </div>
      </div>
      {/* https://react-bootstrap.github.io/layout/grid/ */}
      <Container>
        <Row md={4}>
          <Col>
            <Company name='Cowboy Labs'/>
            <Company name='Protego'/>
            <Company name='Roofstock'/>
          </Col>
          <Col xs={6}>
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
        </Row>
      </Container>
    </div>
  );
}

export default Cohort;