import { useEffect } from "react"


function ProjectCard({data, listCards}){
    const {title, description, img, link, technologies} = data
    
    useEffect(()=>{
        const card_project = document.querySelectorAll('.cardProject')
        const addListCard = () =>{
            listCards(card_project)
        }
        addListCard()
    },[])

    return(
        <div className="cardProject">
            <div className="cardImg">
                <div className="imgPrjCard">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="card_proj_desc">
                <div>
                    <div><h4>{title}</h4></div>
                    <div><p>{description}</p></div>
                    <div className="tech">
                        {
                            technologies.map((item, i) => {
                                return(
                                    <div className="techItem" key={i}>
                                        <p>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="btnCode">
                    <a href={link} target="_blank">
                        <div className="btngithub">
                            <img src="../../img/github.png" alt=""/>
                        </div>
                        <span>Codigo</span>  
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard