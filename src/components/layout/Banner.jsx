import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
 
const Banner = () => {
  
  return (
       <>
      <Swiper autoplay={true} modules={[Autoplay]} className="mySwiper">
        <SwiperSlide><div className="bg-[url(/src/assets/banner.png)] py-60 bg-no-repeat bg-center bg-cover w-full"></div></SwiperSlide>
        <SwiperSlide><div className="bg-[url(/src/assets/banner.png)] py-60 bg-no-repeat bg-center bg-cover w-full"></div></SwiperSlide>
        <SwiperSlide><div className="bg-[url(/src/assets/banner.png)] py-60 bg-no-repeat bg-center bg-cover w-full"></div></SwiperSlide>
        <SwiperSlide><div className="bg-[url(/src/assets/banner.png)] py-60 bg-no-repeat bg-center bg-cover w-full"></div></SwiperSlide>
        <SwiperSlide><div className="bg-[url(/src/assets/banner.png)] py-60 bg-no-repeat bg-center bg-cover w-full"></div></SwiperSlide>
      
      </Swiper>
    </>
    
  
   
  );
};

export default Banner;
