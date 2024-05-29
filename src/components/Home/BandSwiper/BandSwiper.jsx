
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 3,
  },
  767: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
  1280: {
    slidesPerView: 6,
  },
};

const BrandSwiper = () => {
  return (
    <div className="py-6 md:py-10 mb-6">
      <Swiper
        spaceBetween={13}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={false}
        // scrollbar={{ draggable: false }}
        breakpoints={breakpoints}
        className=""
      >
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <img
              src='/src/assets/bands/band1.png'
              alt="brand1"
              className="mx-auto w-[76px] h-[47px]"
            />
            <p className='mt-3'>
              Maricela Maldonado responds to texts.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <img
              src='/src/assets/bands/band2.png' 
              alt="brand1"
              className="mx-auto w-[76px] h-[47px]"
            />
            <p className='mt-3'>
              The cleanest house I have ever seen.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <img
              src='/src/assets/bands/band3.png'
              alt="brand1"
              className="mx-auto w-[76px] h-[47px]"
            />
            <p className='mt-3'>
              Foodie is Magnificence
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <img
              src='/src/assets/bands/band5.png'
              alt="brand1"
              className="mx-auto w-[66px] h-[37px]"
            />
            <p className='mt-3'>
            Foodie is Magnificence
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className="w-full">
            <img
              src='/src/assets/bands/band6.png'
              className="mx-auto w-[76px] h-[47px]"
            />
            <p className='mt-1'>
              We never used a food service like foodie
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`text-center`}>
          <div className=" w-full">
            <img
              src='/src/assets/bands/brand7.png'
              alt="brand1"
              className="mx-auto w-[75px] h-[40px]"
            />
            <p className='mt-3'>
              What a pleasure it was working with foodie
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`text-center`}>
          <div className="brand w-full">
            <img
              src='/src/assets/bands/brand8.png'
             
              alt="brand1"
              className="mx-auto w-[75px] h-[47px]"
            />
            <p className='mt-3'>
              What a pleasure it was working with foodie
            </p>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
};

export default BrandSwiper;