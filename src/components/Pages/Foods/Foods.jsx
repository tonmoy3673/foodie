import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlider.css";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
 
};
const Foods = ({ data }) => {
  console.log(data);
  return (
    <div className="pt-6 md:pt-10">
      <Swiper
        spaceBetween={21}
        // slidesPerView={3}
        modules={[Autoplay, Navigation]}
        breakpoints={breakpoints}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={false}
      >
        {data?.map(({ title, image_url, price, id }) => (
          <SwiperSlide key={id} className={`text-center py-4 lg:py-10 `}>
            <div className="card card-compact w-60 lg:w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-base md:text-xl text-center text-[#880769] font-semibold">{title}</h2>
                <p className="font-semibold text-red-600 text-base lg:text-lg">Price : {price}$</p>
                <div className="card-actions justify-center mt-2">
                  <button className="btn hover:bg-warning bg-[#880769] text-white">Buy Now</button>
                </div>
              </div>
            </div>

            
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default Foods;
