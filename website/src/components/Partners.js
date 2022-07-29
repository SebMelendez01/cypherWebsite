import { React } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { motion } from "framer-motion"


function Partners() {
  let counter = 0; 
  const cardVariants = {
    hidden: { path: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.25;
      return {
        opacity: [0, 1, .5],
        transition: {
          opacity: { delay, duration: 0.4 }
        }
      };
    }
  };

  function increment() {
    counter += .4;
    return counter;
  }

  return (
    <motion.div 
      className="partners"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="subsection-title-text">Corporate Partners</div>
      
      <Container>
        <Row>
          <Col><a href='https://aws.amazon.com/'><motion.img whileHover={{ opacity: 1 }} style={{ opacity: .5 }} variants={cardVariants} custom={counter} className='partner-logo' id='aws' src={require('../assets/images/partners/aws.png')} alt=''/></a></Col>
          <Col><a href='https://www.quicknode.com/'><motion.img whileHover={{ opacity: 1 }} style={{ opacity: .5 }} variants={cardVariants} custom={increment()} className='partner-logo' id='quicknode' src={require('../assets/images/partners/quicknode.png')} alt=''/></a></Col>
          <Col><a href='https://www.bcg.com/'><motion.img whileHover={{ opacity: 1 }} style={{ opacity: .5 }} variants={cardVariants} custom={increment()} className='partner-logo' id='bcg' src={require('../assets/images/partners/bcg.png')} alt=''/></a></Col>
          <Col><a href='https://www.money2020.com/'><motion.img whileHover={{ opacity: 1 }} style={{ opacity: .5 }} variants={cardVariants} custom={increment()} className='partner-logo' id='money2020' src={require('../assets/images/partners/money2020.png')} alt=''/></a></Col>
        </Row>
        <Row>
          <Col><a href='https://near.org/'><motion.img whileHover={{ opacity: 1 }} style={{ opacity: .5 }} variants={cardVariants} custom={increment()} className='partner-logo' id='near' src={require('../assets/images/partners/near.png')} alt=''/></a></Col>
          <Col><a href='https://securitize.io/'><motion.img whileHover={{ opacity: 1 }}style={{ opacity: .5 }} variants={cardVariants} custom={increment()} className='partner-logo' id='securitize' src={require('../assets/images/partners/securitize.png')} alt=''/></a></Col>
          <Col><a href='https://polygon.technology/'><motion.img whileHover={{ opacity: 1 }} style={{ opacity: .5 }} variants={cardVariants} custom={increment()} className='partner-logo' id='polygon' src={require('../assets/images/partners/polygon.png')} alt=''/></a></Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Partners;