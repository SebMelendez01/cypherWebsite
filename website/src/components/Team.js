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
        CypherTeamMembers.push(<Member name={key} type="Cypher" data={CypherTeam[key]}></Member>)
    }
    for (var key in Advisors) {
        AdvisorMembers.push(<Member name={key} type="Advisor" data={Advisors[key]}></Member>)
    }
    
    return (
        <div class="team" id="team">
            <div class="team-text">
                <div class="subtext">WE ARE HERE TO HELP.</div>
                <div class="text">Meet Our Team.</div>
            </div>
            <div class="cypher-team">
                <div class="subtitle">Cypher Managers</div>
                <div class="slider-container-left">
                    <div class="scroll-through-left">{CypherTeamMembers}</div>
                </div>
            </div>
            <div class="senior-advisors">
                <div class="subtitle">Senior Advisors</div>
                <div class="slider-container-right">
                    <div class="scroll-through-right">{AdvisorMembers}</div>
                </div>
            </div>
        </div>
    )
    
}

export default Team;