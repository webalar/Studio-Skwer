import '../connect/connect.scss';
import Socials from '../socials/socials';

const Connect = () => {
    return (
        <section id='connect' className="connect section" >
            <div className="container">

                <div className="section-header">
                    <h1 className="section-title">Let's Connect</h1>
                </div>

                <div className="contact-info">
                    <div className="info-item">
                        <div className="item-title">Address</div>
                        <div className="item-text">501 & 502, Business Suite 9, near Dynasty Resturant, SV Road, Santa Cruz West, Mumbai - 400054</div>
                    </div>

                    <div className="info-item">
                        <div className="item-title">Studio Skwer</div>
                        <div className="item-text"><a href="mailto:color@studioskwer.com">color@studioskwer.com</a></div>
                    </div>

                    <div className="info-item">
                        <div className="item-title">Bookings</div>
                        <div className="item-text"><a href="mailto:bookings@studioskwer.com">bookings@studioskwer.com</a></div>
                    </div>

                </div>

                <div className="title-block">Follow us on</div>

                <Socials />

            </div>
        </section>
    )
}

export default Connect;