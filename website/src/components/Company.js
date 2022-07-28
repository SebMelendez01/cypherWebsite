import React, { useState } from 'react';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'

import cohort from '../assets/cohort.json'

// https://react-bootstrap.github.io/components/modal/
export function MyVerticallyCenteredModal(props) {
  const data = cohort;
  const style = {
    border: '2px solid black',
    borderRadius : '4px',
    background: 'white'
  };  
  const stackStyle = {
    backgroundColor: 'transparent'
  };  
  const modalStyle = {
    // color: 'green'
  };  

  const companies = props.companyarray.map((company, index) => {
    const tags = data[company].tags.map((tag) =>
      <Badge pill key={tag} style={{backgroundColor:  data[company].color, color: 'black'}} bg="">
        {tag}
      </Badge>
    );
      return <div className='flex-container' style={style} key={company}>
        <div className='flex-child' id='popup-img'>
          <span className="helper"></span>
          <img src={require(`../assets/images/companies/${cohort[company].logo}.png`)} alt=''/>
        </div>
        <div className='flex-child' id='popup-modal'>
          <Modal.Header closeButton={index === 0}>
            <Modal.Title id="contained-modal-title-vcenter">{company}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{cohort[company].description}</p>
            <p><b>{cohort[company].location}</b></p>
          </Modal.Body>
          <Modal.Footer>
            <div>{tags}</div>
            {data[company].website && <a href={data[company].website}> <TbWorld size={30}/></a>}
            {data[company].LinkedIn && <a href={data[company].LinkedIn}><FaLinkedin size={30}/></a>}
            {data[company].Twitter && <a href={data[company].Twitter}><FaTwitterSquare size={30}/></a>}
          </Modal.Footer>
        </div>
      </div>
})
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={modalStyle}
    >
      <Stack direction="vertical" gap={3} style={stackStyle}>
        {companies}
      </Stack>
    </Modal>
  );
}

export function Company(props) {
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
          <div className='flex-container' id='company-card'>
            <div className='flex-child' id='company-logo'>
              <span className="helper"></span>
              <img src={require(`../assets/images/companies/${logo}.png`)} alt=''/>
            </div>
            <div className='flex-child' id='company-info'>
              <Card.Title><b>{name}</b></Card.Title>
              <div className='flex-container' id='test'>
                <div className='flex-child' id='tags'>
                  {tags}     
                </div>
                <div className='flex-child' id='company-links'>
                  <Stack direction="horizontal" gap={1}>
                    {data[name].website && <a href={data[name].website}> <TbWorld size={30}/></a>}
                    {data[name].Twitter && <a href={data[name].Twitter}><FaTwitterSquare size={30}/></a>}
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        companyarray={[name]}
      />
      
    </div>
  );
}
  
  