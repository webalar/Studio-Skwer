import '../about-2/about-2.scss';

const About2 = () => {
    return (
        <section className="section about-2">
            <div className="container flex">
                <div className="column col-1">
                    <div className="section-header">
                        <h1 className="section-title">About Us</h1>
                    </div>
                    <div className="section-body">
                        <p className="text-block">At Studio Skwer, we understand that color grading is not just about making images look pretty. It's about crafting a visual language that enhances the story being told, evokes emotions, and draws audiences in.</p>
                        <p className="text-block">As a Dolby Vision certified studio, we are equipped with state-of-the-art technology that allows us to achieve an HDR workflow, ensuring that every project we work on is of the highest quality. This, coupled with our team of experienced and talented colorists, ensures that your brand's message is delivered in the most impactful way possible.</p>

                    </div>
                </div>

                <div className="column col-2">
                    <div className="stats">
                        <div className="stat-item">
                            <span className="stat-title">Films color graded</span>
                            <span className="stat-count">300</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-title">Creatives partnered</span>
                            <span className="stat-count">305</span>
                        </div>
                    </div>
                    <a href="/#" className="button button-fill">Bookings</a>
                    <a href="/#" className="button button-outline">Contact Us</a>
                </div>
            </div>
        </section>
    )
}

export default About2;