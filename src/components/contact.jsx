import { useState } from "react"
import Links from "./links"

function Contact({contacts}) {
   
    const handleClick = (e) =>{
        const text = document.querySelector('.copy-email')
        text.select()
        navigator.clipboard.writeText(text.value)
        e.target.style.color = '#008897'
        e.target.innerText = 'Copied'

        setTimeout(()=>{
            e.target.style.color = '#000'
            e.target.innerText = 'Copy'
        },2000)
    }

    return(
        <section id="section-5" className="contact_section">
            <div className="box_contact">
                {/* <h2 className="titleSection">Contacto</h2> */}
                <div className="card_contact_desc">
                    <h4>Mas sobre mi</h4>
                    <p>{contacts.footer}</p>
                </div>
                <div className="card_contact_info">
                    <div className="input-box">
                        <input disabled className="copy-email" type="text" value={'killycenecharles30@gmail.com'}/>
                        <button type="button" onClick={handleClick}>Copy</button>
                    </div>
                    <Links/>
                </div>
            </div>
        </section>
    )
}

export default Contact