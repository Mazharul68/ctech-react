import React from 'react';

const Count = () => {
    return (
        <div className="counter-area fix area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="counter-image">
                            <div className="rotmate-image rotateme">
                                <img src="img/about/circle.png" alt="" />
                            </div>
                            <div className="top-img">
                                <img src="img/background/self.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="fun-text-all">
                            {/* single counter  */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_text wow fadeInUp" data-wow-delay="0.2s">
                                    <span className="counter-icon"><i className="ti-layers" /></span>
                                    <span className="counter">65</span>
                                    <h4>Total projects</h4>
                                </div>
                            </div>
                            {/* single counter  */}
                            {/* <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="fun_text wow fadeInUp" data-wow-delay="0.3s">
                                <span class="counter-icon"><i
                                            class="ti-world"></i></span>
                                <span class="counter">100</span>
                                <h4>Employees</h4>
                            </div>
                        </div> */}
                            {/* single counter  */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_text wow fadeInUp" data-wow-delay="0.4s">
                                    <span className="counter-icon"><i className="ti-cup" /></span>
                                    <span className="counter">15</span>
                                    <h4>Served Districts</h4>
                                </div>
                            </div>
                            {/* single counter  */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_text wow fadeInUp" data-wow-delay="0.5s">
                                    <span className="counter-icon"><i className="ti-user" /></span>
                                    <span className="counter">100 +</span>
                                    <h4>Employees</h4>
                                </div>
                            </div>
                            {/* single counter  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;