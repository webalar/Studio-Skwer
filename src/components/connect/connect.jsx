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
                        <div className="item-title">Studio Address</div>
                        <div className="item-text">501 & 502, Business Suite 9, near Dynasty Resturant, SV Road, Santa Cruz West, Mumbai - 400054</div>
                    </div>

                    <div className="info-item">
                        <div className="item-title">Studio Skwer</div>
                        <div className="item-text"><a href="mailto:color@studioskwer.com">color@studioskwer.com</a></div>
                        <div className="item-text"><a href="tel:918976089780">+91 89760 89780</a></div>
                    </div>

                    <div className="info-item">
                        <div className="item-title">Bookings</div>
                        <div className="item-text"><a href="mailto:bookings@studioskwer.com">bookings@studioskwer.com</a></div>
                        <div className="item-text"><a href="tel:919167865932">+91 91678 65932</a></div>
                    </div>

                </div>
                <div className="contact-info">
                    <div className="info-item">
                        <div className="item-title">Billing Address</div>
                        <div className="item-text">Studio Skwer LLP, E -10, Nensey Complex Society Bldg. , Nr. ST Stand, Borivali East, Mumbai - 400066.</div>
                    </div>

                    <div className="info-item">
                        <div className="item-title">Social</div>
                        <Socials />
                    </div>

                </div>

                {/* <div className="title-block">Social</div>

                <Socials /> */}

            </div>
        </section>
    )
}

export default Connect;