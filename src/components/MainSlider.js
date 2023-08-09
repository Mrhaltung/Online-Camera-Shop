import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
import { Pagination } from "swiper";
import { sliderData } from "../data";

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat 
      max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData?.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">
                    {slide.pretitle}
                  </div>
                  <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    {slide.title1} <br /> {slide.title2} <br /> {slide.title3}
                  </div>
                  <button className="btn btn-accent mx-auto lg:mx-0">
                    {slide.btnText}
                  </button>
                </div>
                <div className="flex-1">
                  <img
                    src={slide.img}
                    alt="img"
                    className={
                      index === 1
                        ? "xl:absolute xl:-right-16 xl:bottom-12"
                        : index === 2
                        ? "xl:absolute xl:-right-20 xl:-bottom-32"
                        : "xl:absolute xl:-right-16 xl:-bottom-12"
                    }
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
