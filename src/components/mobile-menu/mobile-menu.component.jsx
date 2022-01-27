import React from 'react';

import MobileNavMenu from '../mobile-nav-menu/mobile-nav-menu.component';
const MobileMenu = () => {

    const closeMobileMenu = () => {
        const offcanvasMobileMenu = document.querySelect('#offcanvas-mobile-menu')
        offcanvasMobileMenu.classList.remove('active');
    }

    return (
        <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
            <button id="offcanvas-mobile-close" onClick={() => closeMobileMenu()}>
                <i className="fad fa-times"></i>
            </button>

            <div className="offcanvas-wrapper">
                <MobileNavMenu />
            </div>
        </div>
    )
}

export default MobileMenu;