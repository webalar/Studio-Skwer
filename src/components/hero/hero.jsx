import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

import '../hero/hero.scss';
import { slides } from "../../data";


const Hero = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <section className="hero">
            <div className="hero-container">

            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={0}
                speed={1000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    }}
                navigation={false}
                slideToClickedSlide={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="swiperFeatured"
            >

                {
                    slides.map(slide => {
                        return (
                            <SwiperSlide key={slide.id}>
                                <img src={slide.imageUrl} alt={slide.title} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

            <div className="hero-title">Featured Work</div>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={0}
                slidesPerView={5}
                freeMode={true}
                speed={1000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                // watchSlidesProgress={true}
                slideToClickedSlide={true}
                centeredSlides={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="thumbs"
            >

                {
                    slides.map(slide => {
                        return (
                            <SwiperSlide key={slide.id}>
                                <img src={slide.imageUrl} alt={slide.title} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

            </div>
        </section>
    )
}

export default Hero;