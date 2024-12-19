import { useState } from "react"
import CardSkills from "./cardSkills"

function Skills({skills}) {

    return(
        <section id="section-4" className="skills_section">
            <div className="box_skills">
                <h2 className="titleSection">Habilidades</h2>
                <div className="skills">
                    {
                        skills.map(skill =>{
                            return <CardSkills skill={skill}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills