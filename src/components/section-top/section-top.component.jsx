import React from 'react'
import { Animated } from 'react-animated-css';

const SectionTop = ({subtitle , title ,delay}) => {
    return(
        <div className='row align-items-center'>
            <div className="col-lg-8">
                <Animated className='flat-title' animationIn='fadeInLeft' animationInDelay={delay}>
                    <h4 className="sub-title mb-4 theme-color">{subtitle}</h4>
                    <h2 className='title-section text-color'>
                        {title}
                    </h2>
                </Animated>
            </div>
        </div>
    )
}

export default SectionTop;