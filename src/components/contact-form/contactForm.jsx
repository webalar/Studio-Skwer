import { useRef } from "react";
import '../contact-form/contactForm.scss';
import arrowRight from '../../assets/icons/arrow-right.svg';

import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-input">
                    <textarea name="message" id="message" rows="12" defaultValue="Hey Studio Skwer,"></textarea>
                </div>
                <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="form-input">
                    <label htmlFor="phone">Phone No.</label>
                    <input type="text" name="phone" placeholder="Your Phone No." />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder="Year Email Address" />
                </div>
                <div className="form-input">
                    <label htmlFor="inquiry">Inquiry</label>
                    <input type="text" name="inquiry" placeholder="Your Inquiry" />
                </div>
                <button type="submit">Submit<img src={arrowRight} alt="submit" /></button>
            </form>
        </div>
    )
}

export default ContactForm;