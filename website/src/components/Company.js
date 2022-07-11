import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import cohort from '../assets/cohort.json'

// https://react-bootstrap.github.io/components/modal/
function MyVerticallyCenteredModal(props) {
  const name = props.company
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.company}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={require(`../assets/images/companies/${cohort[name].logo}.png`)} alt='' width="60" />
        <p>
          {cohort[props.company].description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Company(props) {
  const [modalShow, setModalShow] = useState(false);
  const name = props.name;
  const data = cohort;
  const tags = data[name].tags.map((tag) =>
    <Badge pill key={tag} style={{backgroundColor: '#F174B0'}} bg="">
      {tag}
    </Badge>
  );
  const logo = data[name].logo;
  // https://upmostly.com/tutorials/react-onhover-event-handling-with-examples
  
  return (
    <div className="company">
      <Card onClick={() => setModalShow(true)} className='company-card'>
        <Card.Body>
          <div className='flex-container'>
            <div className='flex-child' id='logo'>
              <span className="helper"></span>
              <img src={require(`../assets/images/companies/${logo}.png`)} alt='' width="60" />
            </div>
            <div className='flex-child' id='info'>
              <Card.Title><b>{name}</b></Card.Title>
              <div className='flex-container'>
                <div className='flex-child tags'>
                  <ul>{tags}</ul>            
                </div>
                <div className='flex-child icons'>
                  <a href={data[name].LinkedIn}><FaLinkedin size={30}/></a>
                  <a href={data[name].Twitter}><FaTwitterSquare size={30}/></a> 
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        company = {name}
      />
      
    </div>
  );
}
  
export default Company;

  