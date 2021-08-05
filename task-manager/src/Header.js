import React from 'react';
import { NavLink } from "react-router-dom"

 function Header () { 
    return (
        <body>
            <nav className="head">
                <label className="title">☞ TaskMaster ☜</label>
                
            </nav>
            <nav className="options">
                <ul class="nav">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/todo">To-Do</NavLink></li>
                    <li><NavLink to="/groceries">Groceries</NavLink></li>
                    <li><NavLink to="/movies">Watchlist</NavLink>
                        <ul>
                            <li class="dropdown"><NavLink to="/movieadd">Add Movie</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/misc">Misc</NavLink></li>
                </ul>
            </nav>
        </body>
        
        
    )
}

export default Header