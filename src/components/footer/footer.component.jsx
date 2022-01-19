import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return(
        <footer className='footer'>
             <div className="bottom">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-4">
                               <div className="copyright">
                                © 2022 Portfolio , Design By Nammonz 
                               </div>
                           </div>
                           <div className="col-lg-8">
                               <ul className='footer-widget-nav'>
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
                           </div>
                       </div>
                   </div>
               </div>
        </footer>
    )
}

export default Footer;