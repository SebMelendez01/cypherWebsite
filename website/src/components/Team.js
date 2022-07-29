import React from "react";
import Member from './Member'

import CypherTeam from '../assets/cypher-team.json'
import Advisors from '../assets/advisors.json'

import { motion } from "framer-motion";


function Team() {
    const CypherTeamMembers = [];
    const AdvisorMembers = [];
    const titleVariants = {
        offscreen: {
          x: -800
        },
        onscreen: {
          x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
          }
        }
      };

    for (var key in CypherTeam) {
        CypherTeamMembers.push(<Member name={key} key={key} type="Cypher" data={CypherTeam[key]}></Member>)
    }
    for (var key in Advisors) {
        AdvisorMembers.push(<Member name={key} key={key} type="Advisor" data={Advisors[key]}></Member>)
    }
    
    return (
        <div className="team">
            <motion.div 
                className="team-text"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div style={{border: 0}} variants={titleVariants}>
                    <div className="section-subtitle-text">WE ARE HERE TO HELP.</div>
                    <div className="section-title-text">Meet Our Team.</div>
                </motion.div>
            </motion.div>
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