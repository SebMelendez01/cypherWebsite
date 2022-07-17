import { React } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import './SEBComponent.css';

function Partners() {

  return (
    <div className="partners">
      <h2> <b>Corportate Partners</b></h2>
      <Container>
        <Row>
          <Col><a href='https://aws.amazon.com/'><img className='partner-logo' height="60" src={require('../assets/images/partners/aws.png')} alt=''/></a></Col>
          <Col><a href='https://www.quicknode.com/'><img className='partner-logo' height="60" src={require('../assets/images/partners/quicknode.png')} alt=''/></a></Col>
          <Col><a href='https://www.bcg.com/'><img className='partner-logo' height="60" src={require('../assets/images/partners/bcg.png')} alt=''/></a></Col>
          <Col><a href='https://www.money2020.com/'><img className='partner-logo' height="60" src={require('../assets/images/partners/money2020.png')} alt=''/></a></Col>
        </Row>
        <Row>
          <Col><a href='https://near.org/'><img className='partner-logo' height="60" src={require('../assets/images/partners/near.png')} alt=''/></a></Col>
          <Col><a href='https://securitize.io/'><img className='partner-logo' height="60" src={require('../assets/images/partners/securitize.png')} alt=''/></a></Col>
          <Col><a href='https://polygon.technology/'><img className='partner-logo' height="60" src={require('../assets/images/partners/polygon.png')} alt=''/></a></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partners;