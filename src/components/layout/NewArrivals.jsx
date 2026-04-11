import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../common/ProductCard";

const NewArrivals = () => {
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  }, []);
  return (
    <Container>
      <h3 className="text-10 font-bold text-secondary pb-12">New Arrival</h3>
      <Swiper
        navigation={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        className="mySwiper"
      >
        {allData.map(item => (
          <SwiperSlide key={item.id}>
            <ProductCard
              pdtBdg={"New"}
              pdtimgSrc={item.thumbnail}
              pdtPrc={item.price}
              pdtCat={item.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default NewArrivals;
