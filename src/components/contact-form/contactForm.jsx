import '../contact-form/contactForm.scss'

const ContactForm = () => {
    return (
        <div className="form-container">
            <form action="">
                <div className="form-input">
                    <textarea name="message" id="message" cols="50" rows="20" value="Hey Studio Skwer,"></textarea>
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
            </form>
        </div>
    )
}

export default ContactForm;