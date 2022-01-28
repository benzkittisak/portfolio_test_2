import React from 'react';
import {HashLink} from 'react-router-hash-link';

const MobileNavMenu = () => {
    return(
        <nav className="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li>
                    <HashLink to={'#home'}>Home</HashLink>
                </li>
                <li>
                    <HashLink to={'#about'}>About</HashLink>
                </li>
                <li>
                    <HashLink to={'#service'}>Service</HashLink>
                </li>
                <li>
                    <HashLink to={'#resume'}>Resume</HashLink>
                </li>
                <li>
                    <HashLink to={'#portfolio'}>Portfolio</HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavMenu;