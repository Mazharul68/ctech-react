import React from 'react';

const TabPanal = () => {
    return (
        <div className="tab-area fix area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="tab-menu">
                            {/* Start Nav tabs */}
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="active">
                                    <a href="#p-view-1" role="tab" data-toggle="tab">
                                        <span className="cha-title">It maintenance</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#p-view-2" role="tab" data-toggle="tab">
                                        <span className="cha-title">It Consultancy</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#p-view-3" role="tab" data-toggle="tab">
                                        <span className="cha-title">Network support</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#p-view-4" role="tab" data-toggle="tab">
                                        <span className="cha-title">It procurement</span>
                                    </a>
                                </li>
                            </ul>
                            {/* End Nav tabs */}
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="tab-content">
                            {/*Start Tab Content */}
                            <div className="tab-pane active" id="p-view-1">
                                <div className="tab-inner">
                                    <div className="single-machine row">
                                        <div className="col-md-6 col-sm-6
                                            col-xs-12">
                                            <div className="tabe-img">
                                                <img src="img/background/about1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6
                                            col-xs-12">
                                            <div className="machine-text">
                                                <h3>Enterprise AI and data platform solutions</h3>
                                                <p></p>
                                                {/* <ul>
                            <li><a href=" ">Innovation
                              idea latest business
                              tecnology</a></li>
                            <li><a href=" ">Digital
                              content marketing
                              online clients
                              plateform</a></li>
                            <li><a href=" ">Safe secure
                              services for you
                              online email account</a></li>
                            <li><a href=" ">Innovation
                              idea latest business
                              tecnology</a></li>
                          </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Start Tab Content */}
                            <div className="tab-pane" id="p-view-2">
                                <div className="tab-inner">
                                    <div className="single-machine row">
                                        <div className="col-md-6 col-sm-6
                                            col-xs-12">
                                            <div className="tabe-img">
                                                <img src="img/background/about2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6
                                            col-xs-12">
                                            <div className="machine-text">
                                                <h3>Design and development use latest technology</h3>
                                                <p></p>
                                                {/* <ul>
                            <li><a href=" ">Innovation
                              idea latest business
                              tecnology</a></li>
                            <li><a href=" ">Digital
                              content marketing
                              online clients
                              plateform</a></li>
                            <li><a href=" ">Safe secure
                              services for you
                              online email account</a></li>
                            <li><a href=" ">Innovation
                              idea latest business
                              tecnology</a></li>
                          </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Start Tab Content */}
                            <div className="tab-pane" id="p-view-3">
                                <div className="tab-inner">
                                    <div className="single-machine row">
                                        <div className="col-md-6 col-sm-6
                                            col-xs-12">
                                            <div className="tabe-img">
                                                <img src="img/background/about3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6
                                            col-xs-12">
                                            <div className="machine-text">
                                                <h3>Innovation idea latest business tecnology</h3>
                                                <p></p>
                                                {/* <ul>
                            <li><a href=" ">Innovation
                              idea latest business
                              tecnology</a></li>
                            <li><a href=" ">Digital
                              content marketing
                              online clients
                              plateform</a></li>
                            <li><a href=" ">Safe secure
                              services for you
                              online email account</a></li>
                            <li><a href=" ">Innovation
                              idea latest business
                              tecnology</a></li>
                          </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Start Tab Content */}
                            <div className="tab-pane" id="p-view-4">
                                <div className="tab-inner">
                                    <div className="single-machine row">
                                        <div className="col-md-6 col-sm-6
                                            col-xs-12">
                                            <div className="tabe-img">
                                                <img src="img/background/about1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6
                                            col-xs-12">
                                            <div className="machine-text">
                                                <h3>Digital content marketing online clients plateform</h3>
                                                <p></p>
                                                {/* <ul>
                            <li><a href=" ">Innovation
                              idea latest business
                              tecnology</a></li>
                            <li><a href=" ">Digital
                              content marketing
                              online clients
                              plateform</a></li>
                            <li><a href=" ">Safe secure
                              services for you
                              online email account</a></li>
                            <li><a href=" ">Innovation
                              idea latest business
                              tecnology</a></li>
                          </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Start Tab Content */}
                        </div>
                    </div>
                </div>
                {/* end Row */}
            </div>
        </div>
    );
};

export default TabPanal;