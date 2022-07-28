import React from "react";
import Card from 'react-bootstrap/Card';

import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

function Engage() {
    return (
        <div className="engage">
            <Card className="get-involved">
                <Card.Body>
                    <Card.Title>Get Involved</Card.Title>
                    <Card.Text>Apply to be a part of the growing Stevens Center and Cypher community.</Card.Text>
                    <a href='https://forms.gle/LuNA86cb6jL7gCbQ9' target="_blank" rel="noopener noreferrer"><button className="gradient-button">Get Involved</button></a>
                </Card.Body>
            </Card>
            <div className="apply-background">
                <Card className="apply">
                    <Card.Body>
                        <Card.Title>Apply</Card.Title>
                        <Card.Text>Join our next cohort of web3 and DeFi startups. Gain access to the Wharton network and the Cypher ecosystem.</Card.Text>
                        <a href='https://www.f6s.com/cypher-accelerator-cohort-2022/' target="_blank" rel="noopener noreferrer"><button className="white-button">Apply</button></a>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Engage;