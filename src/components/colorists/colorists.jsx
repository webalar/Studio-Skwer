// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { colorists } from "../../data";

import '../colorists/colorists.scss';

const Colorists = () => {
    return (
       <section id="colorists" className="section" data-scroll-section>
        <div className="container">
            <div className="section-header">
                <h5 className="section-subtitle">All</h5>
                <h1 className="section-title">Colorists</h1>
            </div>
        </div>

        <Swiper
            // slidesPerView={3}
            spaceBetween={0}
            speed={500}
            freeMode={true}
            // loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            
            breakpoints={{
                480: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1440: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 6,
                },
                }}
            // navigation={true}
            
            modules={[Autoplay, Navigation]}
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
                                <a href="/#" className="button button-fill">Bookings</a>
                                <a href="/#" className="button button-outline">Contact Us</a>
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