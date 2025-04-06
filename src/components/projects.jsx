import { useState } from "react"
import ProjectCard from "./projectCard"



function Projects({projects}) {

    const nextMoveRihgt = () =>{
        document.querySelector('.list_slide').scrollBy({left: 357 , behavior: 'smooth'})
    }
    
    const previousMoveLeft = () =>{
        document.querySelector('.list_slide').scrollBy({left: -357 , behavior: 'smooth'})
    }
    
    return (
        <section id="section-3" className="projects">
            <h2 className="titleSection">Proyectos</h2>
            <div className="box">
                <div className="boxProjects">
                    <div className="center_classxx">
                        <div className='btn_carousel_slide btn_carousel_slide_left'>
                            <button type="button" onClick={previousMoveLeft} className=''>
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                        </div>
                        <div className="list_slide">
                            <div className="cards_slide">
                                {
                                    projects.map(item =>{
                                        return <ProjectCard data={item} />
                                    })
                                }
                            </div>
                        </div>
                        <div className='btn_carousel_slide btn_carousel_slide_right'>
                            <button type="button" onClick={nextMoveRihgt} className=''>
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects