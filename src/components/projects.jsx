import { useState } from "react"
import ProjectCard from "./projectCard"



function Projects({projects}) {
    
    return (
        <section id="section-3" className="projects">
            <h2 className="titleSection">Proyectos</h2>
            <div className="box">
                <div className="boxProjects">
                    {
                        projects.map(item =>{
                            return <ProjectCard data={item} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects