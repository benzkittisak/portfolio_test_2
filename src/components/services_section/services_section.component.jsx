import React from 'react';
import { Animated } from 'react-animated-css';

import ServiceSingle from '../service-single/service-single.component';

import SERVICES_DATA from '../../assets/data/services.data';

const ServicesSection = () => {
    return(
        <section id="service" className='experienced'>
            <div className="container">
                <div className="flat-title">
                    <Animated animationIn='fadeInDown' animationInDelay={500}>
                        <h2 className='title-section text-center'>ฉันเชี่ยวชาญในเรื่อง</h2>
                    </Animated>
                </div>

                <div className="row">
                    {
                        SERVICES_DATA.map(data => (
                            <ServiceSingle key={data.id} data={data}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;