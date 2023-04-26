import ContactForm from '../contact-form/contactForm';
import '../contact/contact.scss';
import Socials from '../socials/socials';

const Contact = () => {
    return (
        <section id='contact' className="contact section" >
            <div className="container">
                
                <div className="section-header">
                    <h1 className="section-title">Say Hello</h1>
                </div>

                <ContactForm />

                <div className="title-block">Follow us on</div>

                <Socials />

            </div>
        </section>
    )
}

export default Contact