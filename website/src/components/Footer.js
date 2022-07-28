import { React } from 'react';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
        <div className='flex-container'>
            <div className='flex-child footer-left'>
                <p>
                ©2022 Cypher Accelerator <br/>
                The Stevens Center for Innovation in Finance <br/>
                The Wharton School<br/>
                The University of Pennsylvania
                </p>
                    
            </div>
            <div className='flex-child footer-right'>
                <a href=''>Team</a> / <a href=''>News</a> / <a href='https://forms.gle/LuNA86cb6jL7gCbQ9' target="_blank" rel="noopener noreferrer">Get Involved</a> / <a href='https://www.f6s.com/cypher-accelerator-cohort-2022/' target="_blank" rel="noopener noreferrer">Apply</a>
                <a href='https://www.linkedin.com/company/cypher-accelerator' target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a>
                <a href='https://twitter.com/WhartonCypher' target="_blank" rel="noopener noreferrer"><FaTwitterSquare size={30}/></a>
            </div>

        </div>
    </div>
  );
}

export default Footer;