import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CurrentOffers = () => {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Current <span className="text-sky-500">Offers</span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full"
      >
      
        <SwiperSlide>
          <img
            src="https://images.https://www.google.com/imgres?q=spare%20parts%20links&imgurl=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F003%2F121%2Fundercarriage-parts-151.jpg&imgrefurl=https%3A%2F%2Fwww.tradeindia.com%2Fproducts%2Fundercarriage-parts-3121151.html&docid=UT-OzqtJcZMEKM&tbnid=VDD9hBlSHE2tqM&vet=12ahUKEwig0rys1tyPAxVsS2cHHd6zAegQM3oFCIEBEAA..i&w=500&h=500&hcb=2&ved=2ahUKEwig0rys1tyPAxVsS2cHHd6zAegQM3oFCIEBEAA.com/photo-1623114140660-85eec08d8a3d?auto=format&fit=crop&w=800&q=80"
           
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1618173745209-05a4b7a2be0a?auto=format&fit=crop&w=800&q=80"
           
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>

     
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1607860108854-3be82636c5a3?auto=format&fit=crop&w=800&q=80"
           
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1607860221990-52a2c85ee5d1?auto=format&fit=crop&w=800&q=80"
          
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>

        {/* Spare Part 5 */}
        <SwiperSlide>
          <img
            src="C:\Users\HP\Desktop\Project\Boodmo\Frontend\boodmo\images\1.jpg"
           
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CurrentOffers;
