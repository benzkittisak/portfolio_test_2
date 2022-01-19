import React from 'react';

import SHAPE from '../../assets/data/shape.data';

const Icon = () => {
    return(
        <div className='section-icons'>
            {
                SHAPE.map(({classname , id , images ,  alt}) => (
                    <div className={classname} key={id}>
                        <img src={images} alt={alt} />
                    </div>
                ))
            }
        </div>
    )
}

export default Icon;