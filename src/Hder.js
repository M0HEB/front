import React from "react"
import logo from './logo.png';

export default function Hder(){
    return(
        <header>
            <nav>
                <img src={logo} width="50px" alt="no image" className='nav-logo' />

                <h3 className="nav--logo-text">Fun facts about React</h3>
                <h4 className="nav--title">react course.project 1</h4>
                {/* <ul className='nav-items'>
                    <li>contact</li>
                    <li>about</li>
                    <li>home</li>
                </ul> */}
            </nav>
        </header>
    )
}

