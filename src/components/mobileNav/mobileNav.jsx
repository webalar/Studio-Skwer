import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from '../../assets/images/Studio_Skwer_white.svg';
import iconMenu from '../../assets/icons/iconMenu.svg';
import iconClose from '../../assets/icons/iconClose.svg';
import '../mobileNav/mobileNav.scss';

const MobileNav = () => {

    //navbar scroll when active state
    const [navbar, setNavbar] = useState(false)

    //navbar scroll changeBackground function
    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 66) {
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isMenuOpen]);

    const handleMenu = () => {setIsMenuOpen(!isMenuOpen)};

    return (
        <header className={navbar ? "active mobileNav" : "mobileNav"}>
                
            <div className="container nav-container flex">
                <div className="logo-container">
                    <a href="/"><img src={logo} alt="Studio Skwer" /></a>
                </div>

                <div className="menu-icon" onClick={handleMenu}>
                    <img src={iconMenu} alt="" className={(isMenuOpen ? 'op-0' : 'op-1')}/>
                </div>

                <div className={(isMenuOpen ? 'menu-container isOpen' : 'menu-container isClosed')}>

                    <div className="close-icon" onClick={handleMenu}>
                        <img src={iconClose} alt="" />
                    </div>

                    <ul className="main-menu">
                        <li className="menu-item"><Link to="colorists" spy={true} smooth={true} duration={200} onClick={handleMenu}>Colorists</Link></li>
                        <li className="menu-item"><Link to="about" spy={true} smooth={true} duration={200} onClick={handleMenu}>About</Link></li>
                        <li className="menu-item"><Link to="connect" spy={true} smooth={true} duration={200} onClick={handleMenu}>Contact</Link></li>
                        {/* <li className="menu-item"><Link to="connect" spy={true} smooth={true} duration={200} onClick={handleMenu}>Connect</Link></li> */}
                        
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default MobileNav;