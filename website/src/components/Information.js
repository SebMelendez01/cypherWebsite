import React from 'react';
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

function Information() {
    return (
        <div className="information">
            <div className="section-subtitle-text">WE USE OUR RESOURCES TO SUPPORT YOU.</div>
            <div className="section-title-text">Learn How We<br/>Can Help</div>
            <div className="bcf-card-container">
                <Card>
                    <Card.Body>
                        <Card.Title>BUILD</Card.Title>
                        <Card.Text>We help you sharpen your value 
                            proposition, develop your product, refine 
                            your market strategy, and showcase your 
                            brand.</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>CONNECT</Card.Title>
                        <Card.Text>We put you in touch with leaders of 
                            the blockchain / web3 industry at every 
                            level –(exchanges, infrasturucture providers
                            , protocols, etc.)</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>FUND</Card.Title>
                        <Card.Text>We provide $5000 in grant funding, 
                            educate about best fundraising practices, 
                            and prepare you to present to leading 
                            investors at our Demo Day.</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Information