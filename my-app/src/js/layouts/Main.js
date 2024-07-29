import AboutMe from "./homepage/AboutMe";
import Projects from "./homepage/Projects";
import Skills from "./homepage/Skills";
import { useState, useEffect } from "react";

function Main(){
    
    return (
        <>
            <AboutMe />
            <Projects />
            <Skills />
        </>
    );
}

export default Main;