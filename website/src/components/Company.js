import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'

import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

import cohort from '../assets/cohort.json'

// https://react-bootstrap.github.io/components/modal/
function MyVerticallyCenteredModal(props) {
  const name = props.company;
  const data = cohort;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='flex-container'>
        <div className='flex-child' id='popup-img'>
          <span className="helper"></span>
          <img src={require(`../assets/images/companies/${cohort[name].logo}.png`)} alt=''/>
        </div>
        <div className='flex-child' id='popup-modal'>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{props.company}</Modal.Title>
            <div>{props.tags}</div>
          </Modal.Header>
          <Modal.Body>
            <p>{cohort[props.company].description}</p>
          </Modal.Body>
          <Modal.Footer>
            <a href={data[name].website}> <TbWorld size={30}/></a>
            <a href={data[name].LinkedIn}><FaLinkedin size={30}/></a>
            <a href={data[name].Twitter}><FaTwitterSquare size={30}/></a> 
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
}

export default function Company(props) {
  const [modalShow, setModalShow] = useState(false);
  const name = props.name;
  const data = cohort;
  const color = data[name].color;
  const tags = data[name].tags.map((tag) =>
    <Badge pill key={tag} style={{backgroundColor: color, color: 'black'}} bg="">
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
            <div className='flex-child' id='company-logo'>
              <span className="helper"></span>
              <img src={require(`../assets/images/companies/${logo}.png`)} alt=''/>
            </div>
            <div className='flex-child' id='company-info'>
              <Card.Title><b>{name}</b></Card.Title>
              <div className='flex-container'>
                <div className='flex-child' id='tags'>
                  <div>{tags}</div>            
                </div>
                <div className='flex-child' id='company-links'>
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
        tags={tags}
      />
      
    </div>
  );
}
  
export {Company, MyVerticallyCenteredModal};

  