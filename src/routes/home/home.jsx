import About1 from '../../components/about-1/about-1';
import About2 from '../../components/about-2/about-2';
import Colorists from '../../components/colorists/colorists';
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

        </main>
    )
}

export default Home;