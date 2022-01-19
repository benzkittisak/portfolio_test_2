import React from 'react'
import { Animated } from 'react-animated-css';

const AboutMe =  () => {
    return(
        <div className='col-lg-7'>
            <Animated animationIn='fadeInDown' animationInDelay={500}>
                <div className="flat-title">
                    <h4 className="sub-title">เกี่ยวกับฉัน  ......</h4>
                    <h2 className='title-section'>
                        สวัสดี !!! ทุกคนฉันชื่อน้ำมนต์ <br/>ยินดีที่ได้รู้จักอีกครั้งค่าาาาา
                    </h2>
                    <div className="description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero assumenda esse eos eius est perferendis quam sapiente pariatur voluptates laudantium incidunt reprehenderit dolorem similique veniam exercitationem dolor natus mollitia.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quisquam, accusamus facere enim cum itaque laboriosam! Perferendis eius assumenda deserunt? Amet nostrum ullam libero? Nobis soluta aspernatur sint? Ipsa, iste!
                        </p>
                    </div>

                    <div className="email position-relative">
                        yourmail@email.com
                    </div>
                </div>
            </Animated>
        </div>
    )
}

export default AboutMe;