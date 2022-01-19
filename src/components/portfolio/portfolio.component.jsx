import React from "react";

import PortfolioSlider from "../portfolio-slider/portfolio-slider.component";
import SectionTop from "../section-top/section-top.component";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <SectionTop
          title={"นี่คือผลงานที่ฉันเคยทำ"}
          subtitle={"แฟ้มมสะสมผลงาน ........"}
          delay={500}
        />
        <PortfolioSlider />
      </div>
    </section>
  );
};

export default PortfolioSection;
