import React from 'react';

const Nitor = () => {
    return (
        <>
            {/* Start Bottom Header */}
            <div className="page-area">
                <div className="breadcumb-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb text-center d-block">
                                <div className="section-headline white-headline text-center">
                                    <h3>NITOR</h3>
                                </div>
                                <ul>
                                    <li className="home-bread">Home</li>
                                    <li>NITOR</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END Header */}
            {/*Start 50 Hospital Section Area*/}
            <div className="row pt-5 pb-5">
                <div className="container">
                    <div className="col">
                        <div className="common_area">
                            <h1 className="heading_title text-uppercase h2" style={{ color: 'rgb(48, 120, 251)' }}>NITOR</h1>
                        </div>
                        <p>National Institute Of Traumatology and Orthopaedic Rehabilitation (NITOR) is a tertiary level hospital with 1000
                            bed facilities. It is specially made for serving all the government employees. All the staffs are highly trained &amp;
                            motivated to serve their patients best service. NITOR has modern Radiology department, Laboratory, OT facilities.
                            Recently NITOR is playing a vital role for providing COVID-19 Vaccine among all the registered patients very
                            effectively.</p>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-12">
                            <figure className="figure">
                                <img className="img-fluid" src="{{ asset('public/frontend') }}/img/50hospital/nitor.png" alt="" />
                            </figure>
                        </div>
                        <div className="col">
                            <h4>Assignments performed :</h4>
                            <ol>
                                <li> Baseline Survery</li>
                                <li> Hardware supply and setup</li>
                                <li> Networking(LAN, WAN) setup</li>
                                <li> SRS, SDD development &amp; implementation of hospital software.</li>
                                <li> Basic Computer Training</li>
                                <li> Software training (with providing manual)</li>
                                <li> Support services &amp; maintenance.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* End 50 Hospital Section Area*/}
        </>
    );
};

export default Nitor;