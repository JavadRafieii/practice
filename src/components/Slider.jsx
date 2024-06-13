import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function Slider() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
                640: {
                    slidesPerView: 1.2,
                    spaceBetween: 30,
                },
            }}
        >
            <SwiperSlide>
                <img src="/images/slider.png" alt="..." className=' w-full'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider.png" alt="..." className=' w-full'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider.png" alt="..." className=' w-full'/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;