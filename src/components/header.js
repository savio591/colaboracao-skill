import React from "react";
import Logo from '../assets/logo.svg'
import '../styles/header.css'

function Header({ children }) {
    return (
        <header>
            <img src={Logo}></img>
            {children}
        </header>
    );
}

export default Header