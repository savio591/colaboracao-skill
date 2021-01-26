import React from 'react';

import './styles/reset.css'
import './styles/App.css'
import Texts from './components/texts.json'
import tartarugas_img from './assets/tartarugasninja.png'

import Header from './components/header'
import Section from './components/section'

function App() {
    return (
        <>
            <Header />
            <Section />
            <article>
                <div className="at1 flex_row_shrink">
                    <p>{Texts.at1_texto}</p>
                    <div className="img_tn">
                        <img src={tartarugas_img}></img>
                        <p>{Texts.at1_legenda}</p>
                    </div>
                </div>

                <div className="at2">
                    <div className="at21">
                        <h2>{Texts.at21_titulo}</h2>
                        <p>{Texts.at21_texto}</p>
                    </div>

                    <div className="at22">
                        <h2>{Texts.at22_titulo}</h2>
                        <p>{Texts.at22_texto}</p>
                    </div>

                    <div className="at23">
                        <h2>{Texts.at23_titulo}</h2>
                        <p>{Texts.at23_texto}</p>
                    </div>
                </div>
            </article>

            <footer>
                <h2>© 2021 Colaboration Skill</h2>
            </footer>
        </>
    )
};

export default App
