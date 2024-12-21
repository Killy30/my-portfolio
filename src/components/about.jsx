
function About({about}) {
    
    return(
        <section id="section-2" className="about">
            <div className="borderCard">
                <div className="aboutContain">
                    <div className="cardAboutText">
                        <h2>Sobre mi</h2>
                        <p>{about}</p>
                    </div>
                    <div className="cardImgSvg">
                        <img src="/img/undraw__developer.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About