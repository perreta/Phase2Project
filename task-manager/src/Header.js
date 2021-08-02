import React from 'react';
import Routing from './Routing'

export default function Header () { 
    return (
        <body>
            <nav>
                <label className="title">☞ TaskMaster ☜</label>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">To-Do</a></li>
                    <li><a href="#">Groceries</a></li>
                </ul>
            </nav>
            {/* <Routing /> */}
        </body>
    )
}