import React from 'react';
import Banner from './Banner';
import img1 from '../../../../img/project/img1.jpeg';
import img2 from '../../../../img/project/img2.jpeg';
import img3 from '../../../../img/project/img3.jpeg';
import img4 from '../../../../img/project/img4.jpeg';


const SKH = ({ id }) => {
    return (
        <>
            <Banner id={id} />
            <div className="row pt-5 pb-5">
                <div className="container">
                    <div className="col">
                        <div className="common_area">
                            <h1 className="heading_title text-uppercase h2" style={{ color: 'rgb(48, 120, 251)' }}>{id}</h1>
                        </div>
                        <p className='text-danger'> No Found</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SKH;