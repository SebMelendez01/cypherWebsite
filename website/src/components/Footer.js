import { React } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FaTwitterSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';



function Footer() {
  return (
    <div className="footer">
        <Container>
            <Row>
                <Col> 
                    ©2022 Cypher Accelerator <br/>
                    The Stevens Center for Innovation in Finance <br/>
                    The Wharton School<br/>
                    The University of Pennsylvania
                </Col>
                <Col>
                    <a href=''>About</a> / <a href=''>Cohort</a> / <a href=''>Team</a> / <a href=''>News</a> / <a href=''>Apply</a>
                    <FaLinkedin size={30}/>
                    <FaTwitterSquare size={30}/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;