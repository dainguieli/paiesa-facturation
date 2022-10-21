import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {


    return (
        

<nav className='nav_p' >
    

  <ul className="liste-nav">
                <li className="item-nav">
                    <NavLink className="nav-link active  " to="/"><img src="https://cdn.discordapp.com/attachments/1026418507186966568/1033881865007935538/Screenshot_20221023-231636_1.png" alt="logo-kyoto" className="logo-kyoto" />
                    </NavLink>
                </li>
                <li className="item-nav">
                    <NavLink  className="nav-link active  " to="/">Accueil</NavLink>
                </li>
                <li className="item-nav">
                    <a href="#asym">A propos de nous</a>
                </li>
                <li className="item-nav">
                    <a href="#tarifs">Tarifs</a>
                </li>
                <li className="item-nav">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <img src="assets/css/images/menu.svg" alt="logo menu" className="logo-menu" />


            </nav>
    
    );


}

export default Header;