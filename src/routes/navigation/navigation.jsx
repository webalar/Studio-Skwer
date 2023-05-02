import { Fragment, useState, useEffect } from "react";
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
                    <DesktopNav />
                ) : (
                    <MobileNav />
                )
            }    

        </Fragment>
    )
}

export default Navigation;