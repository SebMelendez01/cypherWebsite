import React from 'react';
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

class Information extends React.Component {
    render () {
        return (
            <div class="information" id="info">
                <div class="information-text">
                    <div class="subtext">WE USE OUR RESOURCES TO SUPPORT YOU.</div>
                    <div class="text">Learn How We</div>
                    <div class="text">Can Help.</div>
                </div>
                <div class="bcf-card-container">
                    <div class="bcf-card">
                        <Card>
                            <Card.Body>
                                <Card.Title>BUILD</Card.Title>
                                <Card.Text>We help you sharpen your value 
                                    proposition, develop your product, refine 
                                    your market strategy, and showcase your 
                                    brand.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="bcf-card">
                        <Card>
                            <Card.Body>
                                <Card.Title>CONNECT</Card.Title>
                                <Card.Text>We put you in touch with leaders of 
                                    the blockchain / web3 industry at every 
                                    level –(exchanges, infrasturucture providers
                                    , protocols, etc.)</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="bcf-card">
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
            </div>
        );
    }
}

export default Information