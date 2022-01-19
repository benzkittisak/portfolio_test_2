import React from 'react'
import { Animated } from 'react-animated-css';
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';


const Banner = () => {
    return(
        <div className='banner-section' id='home'>
            <div className="custom-container d-flex">
                <div className="featured-post-left">
                    <div className="fl-btn btn-general"></div>
                </div>
                <div className="featured-post-right">
                    <div className="content-text">
                        <Animated animationIn='fadeInDown' animationInDuration={600}>
                            <div className="tag text-white">WEB DESIGNER</div>
                            <h1 className='feature-head-line title'>
                                <span>สวัสดี </span>
                                <Typewriter options={{
                                    strings:[`ฉันชื่อน้ำมนต์` , `ฉันชอบสีชมพู`],
                                    autoStart:true,
                                    loop:true,
                                }}/>
                            </h1>
                            <p className='py-5 text-white banner-text'>
                                สวัสดีทุกคน ยินดีต้อนรับเข้าสู่เว็บไซต์ Portfolio ของฉันเองในเว็บไซต์นี้จะเก็บรวบรวมผลงานและข้อมูลส่วนตัวของฉันเอาไว้
                                เพื่อให้คุณได้รู้จักกับฉันมาขึ้นเลื่อนลงไปด้านล่างเลยสิ
                            </p>
                        </Animated>
                        <Animated animationIn='fadeInUp' animationInDelay={300}>
                            <div className="site-list">
                                <Link to="https://github.com/benzkittisak/portfolio_test_2.git">
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </Animated>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;