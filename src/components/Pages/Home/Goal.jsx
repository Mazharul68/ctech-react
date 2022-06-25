import React from 'react';
import hospital from '../../../img/our_services/hospital.jpg';

const Goal = () => {
    return (
        <div className="project-area area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h3>Our successful goal</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* single-awesome-project start */}
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single-awesome-project">
                            <div className="awesome-img">
                                <a href=" ">
                                    <img src={hospital} alt="" />
                                </a>
                                <div className="add-actions text-center">
                                    <a className="venobox" data-gall="myGallery" href={hospital}>
                                        <i className="port-icon ti-zoom-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="project-dec">
                                <h4>
                                    Hospital Automation</h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        {/* single-awesome-project start */}
                        <div className="single-awesome-project">
                            <div className="awesome-img">
                                <a href=" ">
                                    <img src="img/background/about.jpg" alt="" />
                                </a>
                                <div className="add-actions text-center">
                                    <a className="venobox" data-gall="myGallery" href="img/background/about.jpg">
                                        <i className="port-icon ti-zoom-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="project-dec">
                                <h4>Software Development</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* single-awesome-project end */}
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        {/* single-awesome-project start */}
                        <div className="single-awesome-project">
                            <div className="awesome-img">
                                <a href=" ">
                                    <img src="img/background/about.jpg" alt="" />
                                </a>
                                <div className="add-actions text-center">
                                    <a className="venobox" data-gall="myGallery" href="img/background/about.jpg">
                                        <i className="port-icon ti-zoom-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="project-dec">
                                <h4>Web Development</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* single-awesome-project end */}
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        {/* single-awesome-project start */}
                        <div className="single-awesome-project">
                            <div className="awesome-img">
                                <a href=" ">
                                    <img src="img/background/about.jpg" alt="" />
                                </a>
                                <div className="add-actions text-center">
                                    <a className="venobox" data-gall="myGallery" href="img/background/about.jpg">
                                        <i className="port-icon ti-zoom-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="project-dec">
                                <h4>ICT Training</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* single-awesome-project end */}
                    </div>
                </div>
            </div>
            {/* End main content */}
        </div>
    );
};

export default Goal;