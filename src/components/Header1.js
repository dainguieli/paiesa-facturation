import React from 'react';
//import { NavLink } from 'react-router-dom';
const btnMenu = document.querySelector('.logo-menu');
    const menu = document.querySelector('.liste-nav');
    
    btnMenu.addEventListener('click', function(){
        menu.classNameList.toggle('active');
    });
    
    
    const allLinks = document.querySelectorAll('.item-nav');
    
    allLinks.forEach(function(item){
    
        item.addEventListener('click', function(){
            menu.classNameList.toggle('active');
        })
    
    });

const Header1 = () => {
    
    return (
        

        <nav>
            <ul className="liste-nav">
                <li className="item-nav">
                    <a href='#'><img src="assets/css/images/logo.png" alt="logo-kyoto" className="logo-kyoto" />
</a>
                </li>
                <li className="item-nav">
                    <a href="#home">Accueil</a>
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

export default Header1;