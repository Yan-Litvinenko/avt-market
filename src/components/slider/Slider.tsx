import React from 'react';
import SlideImage1 from '../../assets/images/slider-1.webp';
import SlideImage1_x2 from '../../assets/images/slider-1@2x.webp';
import SlideImage2 from '../../assets/images/slider-2.webp';
import SlideImage2_x2 from '../../assets/images/slider-2@2x.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderElement } from '../sliderElement/SliderElement';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const Slider = (): React.JSX.Element => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            // autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: false,
            // }}
            pagination={{
                clickable: true,
                type: 'progressbar',
            }}
            rewind={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            loop={true}
        >
            <SwiperSlide>
                <SliderElement
                    title="Автокредит от 4.9&nbsp;%"
                    descriptionStroke={['со скидкой до 300.000р.', 'В подарок второй комплект резины и КАСКО']}
                    linkPath="/"
                    imgPath={SlideImage1}
                    imgPath2x={SlideImage1_x2}
                />
            </SwiperSlide>

            <SwiperSlide>
                <SliderElement
                    title="TRADE-IN"
                    descriptionStroke={['с выгодой до 150.000р.']}
                    linkPath="/"
                    imgPath={SlideImage2}
                    imgPath2x={SlideImage2_x2}
                />
            </SwiperSlide>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    );
};
