import { useState, useEffect } from "react";
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

    const goToColorists = () => {
        window.scrollTo({
            top: 650,
            behavior: 'smooth',
        });
        setIsMenuOpen(!isMenuOpen)
    };
    const goToContact = () => {
        window.scrollTo({
            top: 3250,
            behavior: 'smooth',
        });
        setIsMenuOpen(!isMenuOpen)
    };
    const goToConnect = () => {
        window.scrollTo({
            top: 4250,
            behavior: 'smooth',
        });
        setIsMenuOpen(!isMenuOpen)
    };


    return (
        <header className={navbar ? "active mobileNav" : "mobileNav"}>
                
            <div className="container nav-container flex">
                <div className="logo-container">
                    <a href="/"><img src={logo} alt="Studio Skwer" /></a>
                </div>

                <div className="menu-icon" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                    <img src={iconMenu} alt="" className={(isMenuOpen ? 'op-0' : 'op-1')}/>
                </div>

                <div className={(isMenuOpen ? 'menu-container isOpen' : 'menu-container isClosed')}>

                    <div className="close-icon" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                        <img src={iconClose} alt="" />
                    </div>

                    <ul className="main-menu">
                        <li className="menu-item"><a href="#colorists" onClick={goToColorists}>Colorists</a></li>
                        <li className="menu-item"><a href="#contact" onClick={goToContact}>Contact</a></li>
                        <li className="menu-item"><a href="#bookings" onClick={goToConnect}>Bookings</a></li>
                        <li className="menu-item"><a href="#connect" onClick={goToConnect}>Connect</a></li>
                        
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default MobileNav;