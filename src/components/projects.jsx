import { useEffect, useState } from "react"
import ProjectCard from "./projectCard"


// const card_project = document.querySelectorAll('.cardProject')

function Projects({projects}) {
    
    const [cards, setCards] = useState([])
    const [scrollCardPrev, setScrollCardPrev] = useState(-450)
    const [scrollCardNext, setScrollCardNext] = useState(450)
    let [positionx, setPositionx] = useState(0)

    const setListCard = (listCard) => {
        setCards(listCard)
    }

    const previousMoveLeft = (e) =>{
        e.preventDefault()
        let boxWidth = document.querySelector('.center_classxx').offsetWidth;

        if(positionx <= 1){
            setScrollCardNext(160)
        }else{
            setScrollCardPrev(-450)
        }
        
        if(positionx != 0){
            document.querySelector('.list_slide').scrollBy({left: scrollCardPrev , behavior: 'smooth'})
            setPositionx(positionx--)
            cardSelected()
            setPositionx(positionx--)
        }
    }

    const nextMoveRihgt = (e) =>{
        e.preventDefault()

        if(positionx >= cards.length - 2){
            setScrollCardPrev(-160)
        }else{
            setScrollCardNext(450)
        }

        if(positionx < cards.length - 1){
            document.querySelector('.list_slide').scrollBy({left: scrollCardNext , behavior: 'smooth'})
            setPositionx(positionx++)
            cardSelected()
            setPositionx(positionx++)
        }
    }

    const cardSelected = () =>{
        cards.forEach((item, i) => {
            item.classList.remove('scaleCardProject')
        })

        const selected = cards[positionx]
        selected?.classList.add('scaleCardProject')
    }
    
    useEffect(()=>{
        setPositionx(1)
        document.querySelector('.list_slide').scrollBy({left: 160 , behavior: 'smooth'})
        cards[positionx]?.classList.add('scaleCardProject')
    },[cards])

    
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
                                    projects.map((item, i) =>{
                                        return <ProjectCard data={item} listCards={setListCard} key={i}/>
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