import Card from 'react-bootstrap/Card';
import React from 'react';
import { FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

function Member(props) {
    const name = props.name;
    const type = props.type;
    const data = props.data;
    const position = data.Position;
    const isTwitter = data.Twitter != "";
    const isLinkedIn = data.LinkedIn != "";

    return (
        <div>
            <Card id={data.Image}>
                <Card.Body>
                    <Card.Img src={type === 'Cypher' ? require(`../assets/images/cypher-team/${data.Image}.png`) : require(`../assets/images/advisors/${data.Image}.png`)}></Card.Img>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{position.toUpperCase()}</Card.Subtitle>
                    <div className="card-icons">
                        {isLinkedIn && <a href={data.LinkedIn} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={25} color={type === "Cypher" ? "black" : "white"}/>
                        </a>}
                        {isTwitter && <a href={data.Twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={25} color={type === "Cypher" ? "black" : "white"}/>
                        </a>}
                    </div>
                </Card.Body>
            </Card>
            <div>
                <div class="scroll-cushion"></div>
            </div>
        </div>
        
    );
}

export default Member;