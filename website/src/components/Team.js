import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './Component.css';
import Card from 'react-bootstrap/Card';
import profile from '../assets/images/sarah-hammer.jpeg'

class Team extends React.Component {
    render () {
        return (
            <div class="team">
                <div class="team-text">
                    <div class="subtext">WE ARE HERE TO HELP.</div>
                    <div class="text">Meet Our Team.</div>
                </div>
                <div class="cypher-team">
                    <div class="subtitle">Cypher Managers</div>
                    <div class="scroll-through">
                        <Card>
                            <Card.Body>
                                <Card.Img src={profile}></Card.Img>
                                <Card.Text>MANAGING DIRECTOR</Card.Text>
                                <Card.Title>Sarah Hammer</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div class="senior-advisors">
                    <div class="subtitle">Senior Advisors</div>
                    <div class="scroll-though">

                    </div>
                </div>
            </div>
        )
    }
}

export default Team;