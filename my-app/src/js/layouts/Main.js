import AboutMe from "./homepage/AboutMe";
import Projects from "./homepage/Project";
import Contacts from "./homepage/Contact";
import { useState, useEffect } from "react";

function Main(){
    
    return (
        <>
            <AboutMe />
            <Projects />
        </>
    );
}

export default Main;