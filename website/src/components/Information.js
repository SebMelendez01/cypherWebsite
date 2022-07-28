import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function Information() {
    document.querySelectorAll(".bcf-flip-card-positioner").forEach(item => {
        item.addEventListener('mouseout', () => {
            item.classList.add("was-hovered-container")
        });
    })

    document.querySelectorAll(".bcf-flip-card-front").forEach(item => {
        item.addEventListener('mouseout', () => {
            item.classList.add("was-hovered-card-front")
        });
    })
    
    return (
        <div className="information">
            <div className="section-subtitle-text">WE USE OUR RESOURCES TO SUPPORT YOU.</div>
            <div className="section-title-text">Learn How We<br/>Can Help.</div>
            <div className="bcf-cards-container">
                <div className="bcf-flip-card-container">
                    <div className="bcf-flip-card-positioner">
                        <Card className="bcf-flip-card-front">
                            <Card.Body>
                                <Card.Title>BUILD</Card.Title>
                                <Card.Text>We help you sharpen your value 
                                    proposition, develop your product, refine 
                                    your market strategy, and showcase your 
                                    brand.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bcf-flip-card-back">
                            <Card.Body>
                                <Card.Title>BUILD</Card.Title>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>80+ workshops led by firms such as Pantera, TaxBit, Sardine.ai, Securitize, etc.</ListGroup.Item>
                                    <ListGroup.Item>Extensive BizDev support from Cypher Team and Mentor Pool.</ListGroup.Item>
                                    <ListGroup.Item>AWS Cloud and QuickNode Credits.</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="bcf-flip-card-container">
                    <div className="bcf-flip-card-positioner">
                        <Card className="bcf-flip-card-front">
                            <Card.Body>
                                <Card.Title>CONNECT</Card.Title>
                                <Card.Text>We put you in touch with leaders of 
                                    the blockchain / web3 industry at every 
                                    level – (exchanges, infrasturucture providers, 
                                    protocols, etc.)</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bcf-flip-card-back">
                            <Card.Body>
                                <Card.Title>CONNECT</Card.Title>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>30+ Mentors and Advisors to help build out your business and make key connections.</ListGroup.Item>
                                    <ListGroup.Item>Connections with Legal Advisors.</ListGroup.Item>
                                    <ListGroup.Item>Networking opportunities with previous cohorts and Wharton network.</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="bcf-flip-card-container">
                    <div className="bcf-flip-card-positioner">
                        <Card className="bcf-flip-card-front">
                            <Card.Body>
                                <Card.Title>FUND</Card.Title>
                                <Card.Text>We provide $5000 in grant funding, 
                                    educate about best fundraising practices, 
                                    and prepare you to present to leading 
                                    investors at our Demo Day.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bcf-flip-card-back">
                            <Card.Body>
                                <Card.Title>FUND</Card.Title>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>$5,000 non-dilutive grants, no strings attached.</ListGroup.Item>
                                    <ListGroup.Item>Fundraising Preparation for Cypher Demo Day, with firms such as a16z, Bain Capital, Bessemer, Draper Ventures, Outlier Ventures.</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information
