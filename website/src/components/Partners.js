import { React } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

function Partners() {

  return (
    <div className="partners">
      <h2> <b>Corportate Partners</b></h2>
      <Container>
        <Row>
          <Col><img className='partner-logo' height="60" src={require('../assets/images/partners/aws.png')} alt=''/></Col>
          <Col><img className='partner-logo' height="60" src={require('../assets/images/partners/quicknode.png')} alt=''/></Col>
          <Col><img className='partner-logo' height="60" src={require('../assets/images/partners/bcg.png')} alt=''/></Col>
          <Col><img className='partner-logo' height="60" src={require('../assets/images/partners/money2020.png')} alt=''/></Col>
        </Row>
        <Row>
          <Col><img className='partner-logo' height="60" src={require('../assets/images/partners/near.png')} alt=''/></Col>
          <Col><img className='partner-logo' height="60" src={require('../assets/images/partners/securitize.png')} alt=''/></Col>
          <Col><img className='partner-logo' height="60" src={require('../assets/images/partners/polygon.png')} alt=''/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partners;