import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import './Art.css';

export default function Art() {

    return (
        <div className="Art">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={true}
                slidesPerView={3}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src="/assets/art/hatterene.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/assets/art/danny-beard.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/assets/art/rita-repulsa.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/assets/art/white-ranger.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/assets/art/power-rangers.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/assets/art/maleficent.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/assets/art/rosalina.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/assets/art/sminty-drop.jpeg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}