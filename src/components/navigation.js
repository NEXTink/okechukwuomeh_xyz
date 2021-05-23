import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../img/logo.png';
function Navigation() {
    return (
        <nav className="top-nav">
            <Link to='/' className="logo-link">
                <figure>
                    <img className="top-logo" src={Logo} alt="okechukwu's logo"/>
                </figure>
            </Link>
            <input type="checkbox" id="menu"/>
            <label htmlFor="menu" className="menu-box">
                <span className="menu">&nbsp;</span>
            </label>
            <ul className="top-nav-list">
                <li className="top-nav-list--item"><Link to='/projects' className="top-nav-list--item--link">Projects</Link></li>
                <li className="top-nav-list--item"><Link  to='/journey' className="top-nav-list--item--link">My
                    Journey</Link></li>
                <li className="top-nav-list--item"><Link to="/contact"
                                                      className="top-nav-list--item--link">Contact</Link></li>
                <li className="top-nav-list--item"><Link to='/omehokechukwucv.pdf' target='_blank' className="top-nav-list--item--link">Download CV</Link></li>
            </ul>
        </nav>

    );
}

export default Navigation;