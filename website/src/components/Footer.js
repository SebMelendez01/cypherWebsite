import { React } from 'react';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap.min.css";
import './SEBComponent.css';


function Footer() {
  return (
    <div className="footer">
        <div className='flex-container'>
            <div className='flex-child' id='footer-left'>
                <p>
                ©2022 Cypher Accelerator <br/>
                The Stevens Center for Innovation in Finance <br/>
                The Wharton School<br/>
                The University of Pennsylvania
                </p>
                    
            </div>
            <div className='flex-child' id='footer-right'>
                <span className="helper"></span>
                <a href=''>About</a> / <a href=''>Cohort</a> / <a href=''>Team</a> / <a href=''>News</a> / <a href=''>Apply</a>
                <FaLinkedin size={30}/>
                <FaTwitterSquare size={30}/>
            </div>

        </div>
        {/* <Container>
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
        </Container> */}
    </div>
  );
}

export default Footer;