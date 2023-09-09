import React from "react"
import { Logo, NavWrapper, TriggerElement } from "./nav.styled"
import { Link } from 'gatsby'
import { useState } from 'react'

export const Navbar = () =>{
 

    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };  

    return(
        <NavWrapper className={`hover-target ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

            <div className="trigger_element"       
                ></div>

            {/* <TriggerElement></TriggerElement> */}
            <div className='a_tag_shadow_div'><Link textDecoration='none' className="link" to="/"><Logo></Logo></Link></div>
            <div className="nav-spacing"></div>
            <div className='NavConsole'>
                <Link className="nav_btn_a" to="/servicio">Servicio</Link>                
                <Link className="nav_btn_a" to="/nosotros"><div>Nosotros</div><a href=''/></Link>
                <Link className="nav_btn_a" to="/contactanos"><div>Contacto</div><a href=''/></Link>
            </div>
        </NavWrapper>
    )
};