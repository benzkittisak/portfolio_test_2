import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

import Icon from "../Icon/Icon.component";
import AboutMe from "../about-me/about-me.componnet";
import NumberCount from "../number-count/number-count.component";

const About = () => {
  return (
    <div className="about-me position-relative" id="about">
      <Icon />
      <div className="container">
        <div className="row position-relative">
          <AboutMe />
          <div className="flat-spacer"></div>
          <div className="fact">
            <NumberCount />
            <div className="btn-contact bg-s1 text-center">
              <h4 className="title text-color">
                ติดต่อขอดูผลงานเพิ่มเติมได้ที่
              </h4>
              <Link to="#" className="email">
                youremail@email.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-post">
        <Animated animationIn="fadeInRight" animationInDelay={500}>
          <img
            src="https://i3.fpic.cc/file/img-b1/2022/01/19/09.png"
            alt="images"
          />
        </Animated>
      </div>
    </div>
  );
};

export default About;
