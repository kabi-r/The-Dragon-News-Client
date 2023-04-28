import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary py-4 my-4 mb-2 text-center'>
            <h4>Q-Zone</h4>
            <img src={QZone1} alt="" />
            <img src={QZone2} alt="" />
            <img src={QZone3} alt="" />
        </div>
    );
};

export default QZone;