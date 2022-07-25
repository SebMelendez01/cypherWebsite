import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Member from './Member'
import CypherTeam from '../assets/cypher-team.json'
import Advisors from '../assets/advisors.json'
import './Component.css';

function Team() {
    const CypherTeamMembers = [];
    const AdvisorMembers = [];

    for (var key in CypherTeam) {
        CypherTeamMembers.push(<Member key={key} name={key} type="Cypher" data={CypherTeam[key]}></Member>)
    }
    for (var key in Advisors) {
        AdvisorMembers.push(<Member key={key} name={key} type="Advisor" data={Advisors[key]}></Member>)
    }
    
    return (
        <div className="team" id="team">
            <div className="team-text">
                <div className="subtext">WE ARE HERE TO HELP.</div>
                <div className="text">Meet Our Team.</div>
            </div>
            <div className="cypher-team">
                <div className="subtitle">Cypher Managers</div>
                <div className="slider-container-left">
                    <div className="scroll-through-left">{CypherTeamMembers}</div>
                </div>
            </div>
            <div className="senior-advisors">
                <div className="subtitle">Senior Advisors</div>
                <div className="slider-container-right">
                    <div className="scroll-through-right">{AdvisorMembers}</div>
                </div>
            </div>
        </div>
    )
    
}

export default Team;