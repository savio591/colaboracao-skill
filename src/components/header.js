import React from "react";
import Logo from '../assets/logo.svg'


function Header() {
    return (
        <header>
            <h1>TESTEEE</h1>
            <img src={Logo}></img>
            {children}
        </header>
    );
}

export default Header