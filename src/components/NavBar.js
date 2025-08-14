import React from 'react';

export default function Navbar(){
    return(
        <nav className='navbar'>
            <div className='navbar-title'>Todo List Maker</div>
            <div className='navbar-links'>
                <a href ="#tasks">Tasks</a>
                <a href = "#add">Add a task</a>
            </div>
        </nav>
    )
}