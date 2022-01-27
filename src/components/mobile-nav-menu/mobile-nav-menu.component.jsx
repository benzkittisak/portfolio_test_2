import React from 'react';
import {HashLink} from 'react-hash-link';

const MobileNavMenu = () => {
    return(
        <nav className="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li>
                    <HashLink to={'#home'}>Home</HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavMenu;