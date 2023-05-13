import { Link } from "react-scroll";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
// import { Autoplay } from "swiper";
import { colorists } from "../../data";

import '../colorists/colorists.scss';

const Colorists = () => {
    return (
        
       <section id="colorists" className="section" >
        <div className="container">
            <div className="section-header">
                <h5 className="section-subtitle">All</h5>
                <h1 className="section-title">Colorists</h1>
            </div>
        </div>

        <Swiper
            slidesPerView={1}
            spaceBetween={0}

            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            
            // modules={[Autoplay]}
            className="colorist-carousel"
        >

            {
                colorists.map(colorist => {
                    return (
                        <SwiperSlide key={colorist.id}>
                            <img src={colorist.imageUrl} alt={colorist.id} />

                            <div className="slide-head">
                                <h4 className="colorist-name">{colorist.name}</h4>
                            </div>

                            <div className="slide-body">
                                <a href="mailto:bookings@studioskwer.com" className="button button-fill" target="_blank" rel="noreferrer">Bookings</a>
                                <Link to="contact" className="button button-outline" spy={true} smooth={true} duration={200}>Contact Us</Link>
                            </div>

                        </SwiperSlide>
                    )
                })
            }
        
        </Swiper>

       </section>
    )
}

export default Colorists;