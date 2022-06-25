import React from 'react';

const Banner = () => {
    return (
        <div className="intro-area">
            <div className="bg-wrapper">
                <img src="img/background/bg1.jpg" alt="" />
            </div>
            <div className="intro-content">
                <div className="slider-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* layer 1 */}
                                <div className="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                                    <span className="title1">It
                                        Solutions
                                        . Medical
                                        Automation</span>
                                    <h2 className="title2" style={{ color: '#eee' }}>Delivering market
                                        <span className="color" style={{ color: '#eee' }}>leading
                                            Software
                                        </span>Solutions since 2009</h2>
                                </div>
                                {/* layer 2 */}
                                {/* <div class="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                                <p>We develop effective plans to move your customers behaviour.</p>
                            </div> */}
                                {/* layer 3 */}
                                <div className="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                                    <a href=" " className="ready-btn left-btn">Our
                                        Services</a>
                                    <a href=" " className="ready-btn right-btn">Contact
                                        us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;