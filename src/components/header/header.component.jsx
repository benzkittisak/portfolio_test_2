import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {

  const [scroll , setScroll] = useState(0);
  const [headerTop , setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.getElementById('header');
    setHeaderTop(header.offsetTop);
    window.addEventListener('scroll' , handleScroll);

    return () => {
      window.removeEventListener('scroll' , handleScroll);
    }
  } , [])

  const handleScroll = () => {
    setScroll(window.scrollY);
  }

  return(
        <header id="header" className={`header header-style ${scroll > headerTop ? 'stick' : ''}`}>
        <div className="container">
          <div className="flex-header d-flex justify-content-between align-items-center">
            <div className="socials-list ">
              <Link to={'#'}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to={'#'}>
                <i className="fab fa-line"></i>
              </Link>
              <Link to={'#'}>
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
            <div className="content-menu d-lg-flex">
              <div className="nav-wrap">
                <nav className="mainnav">
                  <ul className="menu">
                    <li>
                      <HashLink smooth to={'#home'} className="active">Home</HashLink>
                      <HashLink smooth to={'#about'}>About</HashLink>
                      <HashLink smooth to={'#service'} >Service</HashLink>
                      <HashLink smooth to={'#resume'} >Resume</HashLink>
                      <HashLink smooth to={'#portfolio'} >Portfolio</HashLink>

                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;