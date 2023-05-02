import { Fragment, useState, useEffect } from 'react';
// import Navigation from '../navigation/navigation';
import MobileNav from "../../components/mobileNav/mobileNav";
import DesktopNav from "../../components/desktopNav/desktopNav";
import About1 from '../../components/about-1/about-1';
import About2 from '../../components/about-2/about-2';
import Colorists from '../../components/colorists/colorists';
import Connect from '../../components/connect/connect';
import Contact from '../../components/contact/contact';
import Hero from '../../components/hero/hero';
import '../home/home.scss';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import 'locomotive-scroll/dist/locomotive-scroll.css';

import { ScrollerMotion } from 'scroller-motion'


const Home = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 480);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 480);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (

        <Fragment>
            {/* <Navigation /> */}

            {
                isDesktop ? (
                    <DesktopNav />
                ) : (
                    <MobileNav />
                )
            }    

            <ScrollerMotion>

                <main>
                                
                    <Hero />

                    <Colorists />

                    <About1 />

                    <About2 />

                    <Contact />

                    <Connect />

                </main>
            </ScrollerMotion>
        </Fragment>
    )
}

export default Home;