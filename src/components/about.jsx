

function About({about}) {
    
    return(
        <section id="section-2" className="about">
            <div className="borderCard">
                <div>
                    <h2>Sobre mi</h2>
                    <p>{about}</p>
                </div>
            </div>
        </section>
    )
}

export default About