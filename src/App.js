import React from 'react';

import './styles/reset.css'
import './styles/App.css'
import Texts from './components/texts.json'

import Header from './components/header'
import Section from './components/section'

function App() {
    return (
        <>
            <Header />
            <Section />
            <article>
                <div className="at1">
                    <p>{Texts.at1_texto}</p>
                    <div className="img_tn">
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
        </>
    )
};

export default App
