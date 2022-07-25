import React from "react";
import Member from './Member'

import CypherTeam from '../assets/cypher-team.json'
import Advisors from '../assets/advisors.json'
import "bootstrap/dist/css/bootstrap.min.css";
import './Component.css';

function Team() {
    const CypherTeamMembers = [];
    const AdvisorMembers = [];

    for (var key in CypherTeam) {
        CypherTeamMembers.push(<Member name={key} type="Cypher" data={CypherTeam[key]}></Member>)
    }
    for (var key in Advisors) {
        AdvisorMembers.push(<Member name={key} type="Advisor" data={Advisors[key]}></Member>)
    }
    
    return (
        <div className="team">
            <div className="team-text">
                <div className="section-subtitle-text">WE ARE HERE TO HELP.</div>
                <div className="section-title-text">Meet Our Team.</div>
            </div>
            <div className="cypher-team">
                <div className="subsection-title-text">Cypher Managers</div>
                <div className="scroll-through">{CypherTeamMembers}</div>
            </div>
            <div className="senior-advisors">
                <div className="subsection-title-text">Senior Advisors</div>
                <div className="scroll-through">{AdvisorMembers}</div>
            </div>
        </div>
    )
    
}

export default Team;