import React from 'react';
import '../css/App.css';

import { Link } from 'react-router-dom'


const Header = (props) => {
    return (
        <header>
            <Link to={'/'}>
                 <img className="img1" src="/img/store.png"/>
            </Link>
        </header>
    );
};

export default Header;