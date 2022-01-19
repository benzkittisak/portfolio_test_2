import React from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

import PORTFOLIO_DATA from "../../assets/data/portfolio_data";

SwiperCore.use([Navigation, Autoplay]);

const PortfolioSlider = () => {
  const swiperParams = {
    slidesPerView: 4,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 30,
  };

  return (
    <div className="row">
      <Swiper {...swiperParams}>
        {PORTFOLIO_DATA.map((data) => (
          <SwiperSlide key={data.id}>
            <Animated animationIn="fadeInUp" animationInDelay={data.id + 150}>
              <div className="port-content">
                <Link to={data.github_url}>
                  <div className="port-image">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="port-name">
                    <h4>{data.name}</h4>
                  </div>
                </Link>
              </div>
            </Animated>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
