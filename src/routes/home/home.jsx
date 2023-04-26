import About1 from '../../components/about-1/about-1';
import About2 from '../../components/about-2/about-2';
import Colorists from '../../components/colorists/colorists';
import Connect from '../../components/connect/connect';
import Contact from '../../components/contact/contact';
import Hero from '../../components/hero/hero';
import '../home/home.scss';

const Home = () => {
    return (

        <main>
            
            <Hero />

            <Colorists />

            <About1 />

            <About2 />

            <Contact />

            <Connect />

        </main>
    )
}

export default Home;