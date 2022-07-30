import React from "react";
import Member from './Member'
import { motion, Variants } from "framer-motion"

import CypherTeam from '../assets/cypher-team.json'
import Advisors from '../assets/advisors.json'

function Team() {
    const CypherTeamMembers = [];
    const AdvisorMembers = [];
    let cypherCounter = -1;
    let advisorCounter = -1;

    const cypherCardVariants = {
        offscreen: {x: 200, opacity: 0},
        onscreen:(i) => {return {
            x: 0, opacity: 1, transition: {
            type: "ease-out", duration: 1, delay: i * 0.2
        }}}
    }

    const advisorCardVariants = {
        offscreen: {x: -200, opacity: 0},
        onscreen:(i) => {return {
            x: 0, opacity: 1, transition: {
            type: "ease-out", duration: 1, delay: i * 0.2
        }}}
    }

    const subsectionTitleText = {
        offscreen: {backgroundPosition: "right"},
        onscreen: {backgroundPosition: "left"}
    }

    function cypherIncrement() {
        cypherCounter += 1;
        return cypherCounter;
    }

    function advisorIncrement() {
        advisorCounter += 1;
        return advisorCounter;
    }

    for (var key in CypherTeam) {
        CypherTeamMembers.push(<motion.div key={key} custom={cypherIncrement()} variants={cypherCardVariants}>
            <Member name={key} key={key} type="Cypher" data={CypherTeam[key]}></Member>
        </motion.div>)
    }
    for (var key in Advisors) {
        AdvisorMembers.push(<motion.div key={key} custom={advisorIncrement()} variants={advisorCardVariants}>
            <Member name={key} key={key} type="Advisor" data={Advisors[key]}></Member>
        </motion.div>)
    }
    
    return (
        <div className="team">
            <div className="team-text">
                <div className="section-subtitle-text">WE ARE HERE TO HELP.</div>
                <div className="section-title-text">Meet Our Team.</div>
            </div>
            <motion.div className="cypher-team" initial="offscreen" whileInView="onscreen" viewport={{ once:true, amount:0.5}}>
                <motion.div className="subsection-title-text" variants={subsectionTitleText}>Cypher Managers</motion.div>
                <div className="scroll-through">{CypherTeamMembers}</div>
            </motion.div>
            <motion.div className="senior-advisors" initial="offscreen" whileInView="onscreen" viewport={{ once:true, amount:0.5}}>
                <motion.div className="subsection-title-text" variants={subsectionTitleText}>Senior Advisors</motion.div>
                <div className="scroll-through">{AdvisorMembers}</div>
            </motion.div>
        </div>
    )
    
}

export default Team;