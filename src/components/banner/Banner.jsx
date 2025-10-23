import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Banner = () => {
  return (
    <div className="w-full px-6 mt-10"> {/* Full screen height */}
      <Swiper className="rounded-2xl shadow-2xl "
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide >
          <img
            src="https://i.ibb.co.com/PsVdzbF7/Gemini-Generated-Image-rlb5fmrlb5fmrlb5.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            src="https://i.ibb.co.com/HLsbnyYR/Gemini-Generated-Image-ux5svqux5svqux5s.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            src="https://i.ibb.co.com/7dZfngLj/Gemini-Generated-Image-g2grvpg2grvpg2gr.png"
            alt=""
            
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
