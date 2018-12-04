import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {

    return (
        <nav class="menu">
            <span class="comp">component 'Menu'</span>
            <span>
                <NavLink exact to="/" >Page 1</NavLink>
            </span>
            <span>
                <NavLink to="/page2" >Page 2</NavLink>
            </span>
        </nav>
    )
}

export default Menu;