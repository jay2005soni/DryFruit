import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { API_URL, SERVER_URL } from "../config";

function ImageSlider() {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliders = async () => {
      const { data } = await axios.get(`${API_URL}slider/all`);
      setSliders(data);
    };
    fetchSliders();
  }, []);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-96"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider._id}>
            <img
              src={`${SERVER_URL}${slider.image}`}
              alt="slider"
              className="w-full h-96 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
