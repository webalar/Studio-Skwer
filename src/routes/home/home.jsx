import { useRef } from 'react';
import About1 from '../../components/about-1/about-1';
import About2 from '../../components/about-2/about-2';
import Colorists from '../../components/colorists/colorists';
import Connect from '../../components/connect/connect';
import Contact from '../../components/contact/contact';
import Hero from '../../components/hero/hero';
import '../home/home.scss';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Home = () => {

    const containerRef = useRef(null)

    return (

        <LocomotiveScrollProvider
        options={
            {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
            }
        }
        watch={
            [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
        }
        containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef}>
            
                <Hero />

                <Colorists />

                <About1 />

                <About2 />

                <Contact />

                <Connect />

            </main>
        </LocomotiveScrollProvider>
    )
}

export default Home;