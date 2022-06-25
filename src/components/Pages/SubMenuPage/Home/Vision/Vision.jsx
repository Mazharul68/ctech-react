import React from 'react';
import { Helmet } from 'react-helmet';

const Vision = () => {
  return (
    <>
      <Helmet>
        <title>Vision</title>
      </Helmet>
      <div>
        {/* Start Bottom Header */}
        <div className="page-area">
          <div className="breadcumb-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="breadcrumb text-center">
                  <div className="section-headline white-headline text-center">
                    <h3>Vision</h3>
                  </div>
                  <ul>
                    <li className="home-bread">Home</li>
                    <li>Vision</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Header */}
        {/*Start Team Area*/}
        <div className="team-area area-padding-2">
          <div className="container">
            {/* Start counter Area */}
            <div className="row">
              <div className="col-lg-12">
                <div className="common_area">
                  <h1 className="heading_title text-uppercase">Vision</h1>
                </div>
                <p className="lead">We promised to create a dynamic platform for
                  the universal coverage of ICT in locally and
                  internationally through modern technology,
                  capacity building activities &amp; awareness raising
                  programs</p>
              </div>
            </div>
            {/* End row */}
          </div>
        </div>
        {/* End Team Area*/}
      </div>
    </>
  );
};

export default Vision;