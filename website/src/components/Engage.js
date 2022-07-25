import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from 'react-bootstrap/Card';
 import './Component.css';


class Engage extends React.Component {
    render () {
        return (
            <div className="engage-container" id="engage">
                <div className="get-involved">
                    <Card>
                        <Card.Body>
                            <Card.Title>Get Involved</Card.Title>
                            <Card.Text>Apply to be a part of the growing Stevens Center community.</Card.Text>
                            <button className="gradient-button-2">Get Involved</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className ="apply">
                    <Card>
                        <Card.Body>
                            <Card.Title>Apply</Card.Title>
                            <Card.Text>Join our next cohort of web3 and DeFi startups. Gain access to the Wharton network and the Cypher ecosystem.</Card.Text>
                            <button className="white-button"> Apply</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Engage;