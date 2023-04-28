import { useState, useEffect } from "react";
import logo from '../../assets/images/Studio_Skwer_white.svg';

import'../desktopNav/desktopNav.scss';

const DesktopNav = () => {

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

    const goToColorists = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth',
        });
    };
    const goToContact = () => {
        window.scrollTo({
            top: 4000,
            behavior: 'smooth',
        });
    };
    const goToConnect = () => {
        window.scrollTo({
            top: 5000,
            behavior: 'smooth',
        });
    };


    return (
        <header className={navbar ? "active desktopNav" : "desktopNav"}>
                
            <div className="container nav-container flex">
                <div className="logo-container">
                    <a href="/"><img src={logo} alt="Studio Skwer" /></a>
                </div>

                <div className="menu-container">
                    <ul className="main-menu flex">
                        <li className="menu-item"><a href="javascript:void(0)" onClick={goToColorists}>Colorists</a></li>
                        <li className="menu-item"><a href="javascript:void(0)" onClick={goToContact}>Contact</a></li>
                        <li className="menu-item"><a href="javascript:void(0)" onClick={goToConnect}>Bookings</a></li>
                        
                    </ul>
                </div>

                <div className="nav-cta">
                    <a href="javascript:void(0)" className="" onClick={goToConnect}>Connect</a>
                </div>
            </div>

        </header>
    )
}

export default DesktopNav;