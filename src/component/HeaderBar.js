import React from "react";

import logo from "../assets/Little-Boy-Astronaut.png"

export default function HeaderBar()
{
    return(
    <>
     <header className="header-bar">
        <img src={logo} alt="Little Boy Astronaut" className="headerBar--logo"/>
        <h1 className="headerBar--title">Meme Generator</h1>
        </header>
    </>
);
}