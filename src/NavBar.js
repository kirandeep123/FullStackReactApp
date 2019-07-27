
import React from 'react';
import {Link} from 'react-router-dom';
export const NavBar =() =>(
    <nav>
        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/about">About</Link>
            </li>
            <li>
                <Link to ="/article">Article</Link>
            </li>
            <li>
                <Link to ="/article-list">Article List</Link>
            </li>
        </ul>
    </nav>
)