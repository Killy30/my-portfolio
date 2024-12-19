import Links from "./links"

function Presentation() {
    return(
        <section id="section-1" className="presentation">
            <div className="containPr">
                <div className="text-name">
                    <div>
                        <div>    
                            <h1>Hola, Soy Killy</h1>
                            <p>Sor un Desarrollador Full-Stack apasionado por la programación y el desarrollo de aplicaciones con alta calidad, seguro y escalable.</p>
                        </div>
                        <div className="card_links">
                            <div className="card_btn_download">
                                <a href="https://drive.google.com/file/d/1Qvm6pXABGRL2nLFZKVc9V3JKo5giUeSf/view" className="btn_download_cv" target="_blank" download={"RHACK KILLY CV.pdf"} >
                                    <span className="button_lg">
                                        <span className="button_sl"></span>
                                        <span className="button_text">Descargar Cv</span>
                                    </span>
                                </a>
                            </div>
                            <Links/>
                        </div>
                    </div>
                </div>
                <div className="myphoto">
                    <div className="img">
                        <img src="../../img/myphoto.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Presentation