import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/navigation.scss';

export default function Navigation(){
    return(
        <nav className="navigation">
            <div className="nav-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
        </nav>
    )
}
