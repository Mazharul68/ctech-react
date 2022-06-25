import React from 'react';

const Service = () => {
    return (
        <div className="welcome-area fix area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="all-wel-services">
                            {/* single-well end*/}
                            <div className="well-services wow fadeInUp" data-wow-delay="0.3s">
                                <div className="services-img">
                                    <a className="big-icon" href=" "><i className="flaticon-052-project-plan" /></a>
                                </div>
                                <div className="main-wel">
                                    <div className="wel-content">
                                        <h4>Innovation idea</h4>
                                        <p></p>
                                        {/* <a href=" ">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                            {/* single-well end*/}
                            <div className="well-services wow fadeInUp" data-wow-delay="0.7s">
                                <div className="services-img">
                                    <a className="big-icon" href=" "><i className="flaticon-002-analysis" /></a>
                                </div>
                                <div className="main-wel">
                                    <div className="wel-content">
                                        <h4>Market research</h4>
                                        <p></p>
                                        {/* <a href=" ">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                            {/* single-well end*/}
                            <div className="well-services wow fadeInUp" data-wow-delay="0.5s">
                                <div className="services-img">
                                    <a className="big-icon" href=" "><i className="flaticon-060-team-work" /></a>
                                </div>
                                <div className="main-wel">
                                    <div className="wel-content">
                                        <h4>Creative team</h4>
                                        <p></p>
                                        {/* <a href=" ">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                            {/* single-well end*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;