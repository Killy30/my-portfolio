

function CardSkills({skill}){
    const {name, logo} = skill;

    return(
        <div className="skill">
            <div className="cardxx">
                <div className="cardx">
                    <div className="logo_tech">
                        <img src={`../../img/${logo}`} alt="" />
                    </div>
                    <div>
                        <span>{name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSkills