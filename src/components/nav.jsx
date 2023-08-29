import React from "react"
import { Logo, NavWrapper } from "./nav.styled"
import { Link } from 'gatsby'

export const Navbar = () =>{
 
    return(
        <NavWrapper>
            <div className='trigger_element'></div>
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