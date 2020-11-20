import React from "react";
// import bl1_bg from '../assets/maos_juntas.jpg'
import Texts from './texts.json';

import '../styles/section.css'

export default function Section() {

    return (
        <section>
            <div className="bl1">
            <h2>{Texts.bl1_texto}</h2>
{/* <img src={bl1_bg}></img> */}
            </div>
            <div className="bl2">
                <h2>{Texts.bl2_texto}</h2>
            </div>
        </section>

    )
}