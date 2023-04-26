import { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import logo from '../../assets/images/Studio_Skwer_white.svg'

import '../navigation/navigation.scss';

const Navigation = () => {

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

    return (
        <Fragment>
            <header className={navbar ? "active" : ""}>
                
                <div className="container nav-container flex">
                    <div className="logo-container">
                        <a href="/"><img src={logo} alt="Studio Skwer" /></a>
                    </div>

                    <div className="menu-container">
                        <ul className="main-menu flex">
                            <li className="menu-item"><a href="/#colorists" data-scroll-to>Colorists</a></li>
                            <li className="menu-item"><a href="/#contact" data-scroll-to>Contact</a></li>
                            <li className="menu-item"><a href="/#connect" data-scroll-to>Bookings</a></li>
                        </ul>
                    </div>

                    <div className="nav-cta">
                        <a href="/#connect" className="button">Connect</a>
                    </div>
                </div>

            </header>

            <Outlet />
        </Fragment>
    )
}

export default Navigation;