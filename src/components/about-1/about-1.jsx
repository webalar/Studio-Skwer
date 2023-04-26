import '../about-1/about-1.scss';
import Socials from '../socials/socials';

const About1 = () => {
    return (
        <section className="section about-1" data-scroll-section>
            <div className="container flex">
                <div className="section-header-2">
                    <h1 className="section-title">Studio Skwer</h1>
                </div>
                <div className="section-body">
                    <p className="text-block">is a leading color grading studio that's redefining the art of visual storytelling. With a passion for cinematic excellence and an unparalleled eye for detail, Studio Skwer is trusted by the top brands in the industry to deliver stunning visuals that captivate and inspire audiences worldwide.</p>

                    <div className="tagline">Immersive. color. finish.</div>

                    <Socials />
                </div>
            </div>
        </section>
    )
}

export default About1;