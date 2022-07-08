import Card from 'react-bootstrap/Card'
import Map from './Map'

// import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';



function Cohort() {
  return (
    <div className="cohort">
      <div className="title" id="cohort">
        <p><b>WE ACCEPT COMPANIES FROM ALL OVER THE WORLD.</b></p>
        <h1  className='subtitle'><b>Meet Our Genesis <br/> Cohort.</b></h1>
      </div>
      <div className='flex-container'>
        <div className='flex-child quotes'>
          <Card>
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
        <div className='flex-child map'>
          <Map/>
          <h5><b>2022 COHORT</b></h5>
        </div>
        
      </div>
      
    </div>
  );
}

export default Cohort;