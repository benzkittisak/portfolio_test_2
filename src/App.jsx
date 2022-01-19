import React from "react";

import Header from "./components/header/header.component";
import Banner from "./components/banner/banner.component";
import About from "./components/about/about.component";
import ServicesSection from "./components/services_section/services_section.component";
import Education from "./components/education/education.component";
import PortfolioSection from "./components/portfolio/portfolio.component";
import Footer from "./components/footer/footer.component";

import 'animate.css';
import './App.scss';

const App = () => {
  return (
    <>
     <Header/>
     <div className="content">
       <div className="homepage-personal">
        <Banner/>
        <About/>
        <ServicesSection/>
        <Education/>
        <PortfolioSection/>

       </div>
     </div>

     <Footer/>
    </>
  );
}

export default App;
