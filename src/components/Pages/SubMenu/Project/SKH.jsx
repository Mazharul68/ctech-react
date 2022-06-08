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
                    {/* <div class="row pt-5 mt-5">
                        <div class="col-lg-6 mb-5">
                            <figure class="figure">
                                <img class="img-fluid" style={{ width: '100%', height: '350px' }} src={img1} alt="" />
                            </figure>
                        </div>
                        <div class="col-lg-6" style={{ marginTop: '5px' }}>
                            <figure class="figure">
                                <img class="img-fluid" style={{ width: '100%', height: '350px' }} src={img2} alt="" />
                            </figure>
                        </div>
                        <div class="col-lg-6" style={{ marginTop: '20px' }}>
                            <figure class="figure">
                                <img class="img-fluid" style={{ width: '100%', height: '350px' }} src={img3} alt="" />
                            </figure>
                        </div>
                        <div class="col-lg-6" style={{ marginTop: '20px' }}>
                            <figure class="figure">
                                <img class="img-fluid" style={{ width: '100%', height: '350px' }} src={img4} alt="" />
                            </figure>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default SKH;