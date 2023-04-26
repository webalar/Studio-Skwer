import { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../../components/mobileNav/mobileNav";
import DesktopNav from "../../components/desktopNav/desktopNav";

import '../navigation/navigation.scss';

const Navigation = () => {

    
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
            

            {
                isDesktop ? (
                    <div><DesktopNav /></div>
                ) : (
                    <div><MobileNav /></div>
                )
            }    

            <Outlet />
        </Fragment>
    )
}

export default Navigation;