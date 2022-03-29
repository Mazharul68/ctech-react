import React from 'react';
import SpinnerImg from '../../src/img/Loading_icon.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img src={SpinnerImg} alt="" className='d-block m-auto text-center' style={{ width:'200px' }} />
        </div>
    );
};

export default Spinner;