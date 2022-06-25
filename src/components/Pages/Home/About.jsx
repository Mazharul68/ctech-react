import React from 'react';

const About = () => {
    return (
        <div className="about-area about-2 fix">
            <div className="container-full">
                <div className="row">
                    <div className="col-md-5 col-sm-4 col-xs-12" style={{ padding: 0 }}>
                        <div className="about-image bg-background-img">
                            <div className="video-content">
                                <a href="https://www.youtube.com/watch?v=ploJYPrV0vk" className="video-play vid-zone">
                                    <i className="fa fa-play" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* column end */}
                    <div className="col-md-7 col-sm-8 col-xs-12" style={{ padding: 0 }}>
                        <div className="support-all about-content">
                            <div className="section-headline right-headline
                                white-headline">
                                <h3>Technology <span className="color">more experts</span> that provides security</h3>
                                <p style={{ marginBottom: '7.1rem' }}>Crystal Technology Bangladesh Ltd. started its journey on 03 August 2009 and since then we are working on designing, developing and implementing new software including training management information system, learning management system for trainer, teacher and administrator, web portal and IT/ITES training for the different projects of GoB. We have provided basic computer training to the employee of DG Health, DG Family Planning, and Geological Survey of Bangladesh (GSB) and to the ICT Ministry for the government and non govt. officer and others.</p>
                            </div>
                            {/* <div className="about-company">
                  <div className="single-about">
                    <span className="about-text">Professional team</span>
                    <span className="about-text">Server secure
                      payments</span>
                    <span className="about-text">Live hat support</span>
                  </div>
                  <div className="single-about">
                    <span className="about-text">Goal achivment</span>
                    <span className="about-text">Worldwide services
                      company</span>
                    <span className="about-text">Marketing expert
                      policy</span>
                  </div>
                </div> */}
                        </div>
                    </div>
                    {/* column end */}
                </div>
            </div>
        </div>
    );
};

export default About;