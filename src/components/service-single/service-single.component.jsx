import React from "react";
import { Animated } from "react-animated-css";

const ServiceSingle = ({ data }) => {
    console.log(data);
    const {delay , image , title , text , classname} = data;
  return (
    <Animated
      className="col-lg-4 col-12"
      animationIn="fadeInUp"
      animationInDelay={delay}
    >
      <div className={classname}>
        <div className="featured-post mb-5">
          <img src={image} alt="" />
        </div>
        <h3 className="title mb-2">
            {title}
        </h3>
        <p>{text}</p>
      </div>
    </Animated>
  );
};

export default ServiceSingle;
