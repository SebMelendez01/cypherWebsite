import { React } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

function Partners() {
  const highlight = new Set();
  function chooseRandom() {
    const partnerArray = ['aws', 'quicknode', 'bcg', 'money2020', 'near', 'securitize', 'polygon'];
    for(let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random()*partnerArray.length);
      if (highlight.has(partnerArray[randomIndex])) {
        i--;
        continue;
      }
      highlight.add(partnerArray[randomIndex]);
    }
    highlight.forEach(id => {
      const logo = document.getElementById(id);
      logo.style.boxShadow = '0px 0px 100px #fff';
      console.log(id, highlight.size); 
    });
  }

  return (
    <div className="partners">
      <div className="subsection-title-text">Corporate Partners</div>
      
      <Container>
        <Row>
          <Col><a href='https://aws.amazon.com/'><img className='partner-logo' id='aws' src={require('../assets/images/partners/aws.png')} alt=''/></a></Col>
          <Col><a href='https://www.quicknode.com/'><img className='partner-logo' id='quicknode' src={require('../assets/images/partners/quicknode.png')} alt=''/></a></Col>
          <Col><a href='https://www.bcg.com/'><img className='partner-logo' id='bcg' src={require('../assets/images/partners/bcg.png')} alt=''/></a></Col>
          <Col><a href='https://www.money2020.com/'><img className='partner-logo' id='money2020' src={require('../assets/images/partners/money2020.png')} alt=''/></a></Col>
        </Row>
        <Row>
          <Col><a href='https://near.org/'><img className='partner-logo' id='near' src={require('../assets/images/partners/near.png')} alt=''/></a></Col>
          <Col><a href='https://securitize.io/'><img className='partner-logo' id='securitize' src={require('../assets/images/partners/securitize.png')} alt=''/></a></Col>
          <Col><a href='https://polygon.technology/'><img className='partner-logo' id='polygon' src={require('../assets/images/partners/polygon.png')} alt=''/></a></Col>
        </Row>
      </Container>
      {chooseRandom()}
    </div>
  );
}

export default Partners;