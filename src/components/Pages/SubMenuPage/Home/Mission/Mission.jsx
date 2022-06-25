import React from 'react';
import { Helmet } from 'react-helmet';

const Mission = () => {
  return (
    <>
      <Helmet>
        <title>Mission</title>
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
                    <h3>Mission</h3>
                  </div>
                  <ul>
                    <li className="home-bread">Home</li>
                    <li>Mission</li>
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
                  <h1 className="heading_title text-uppercase">Mission</h1>
                </div>
                <p className="lead">Maximize the coverage of ICT globally by
                  providing</p>
                <ul className="mission-item">
                  <li><i className="fa fa-circle" /> Competitive price</li>
                  <li><i className="fa fa-circle" /> Best quality</li>
                  <li><i className="fa fa-circle" /> Effective performance</li>
                  <li><i className="fa fa-circle" /> High efficiency</li>
                </ul>
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

export default Mission;