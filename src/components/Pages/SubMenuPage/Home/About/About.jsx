import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
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
                    <h3>About Us</h3>
                  </div>
                  <ul>
                    <li className="home-bread">Home</li>
                    <li>About Us</li>
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
                  <h1 className="heading_title text-uppercase">BACKGROUND OF THE
                    ORGANIZATION</h1>
                </div>
                <p>Crystal Technology Bangladesh Ltd. started its journey on 03 August 2009 and since then we are working on
                  designing, developing and implementing Hospital Information System (HIS) software including training
                  management information systems, learning management systems for trainers, web portals and IT/ITES training
                  for the different projects of GoB. We have provided Advanced computer training to the employee of DG Health,
                  DG Family Planning, and Geological Survey of Bangladesh (GSB) and the ICT Ministry for the government and
                  non-govt. officer and others.
                  Crystal Technology Bangladesh Ltd. (cTech) is now specialized mostly in Government Hospital Automation with
                  open-source programs such as OpenMRS, OpenMRS+, in connection with other software programs. It has been
                  successfully completed several Hospital automation projects of different tertiary levels running under the
                  Ministry of Health and Family Welfare (MoHFW). Our dedicated professional Software Programmers, Support
                  Engineers and Project Managers are working to develop and implement different Hospital Modules such as
                  Registration, OPD, IPD, Billing, Laboratory, Pharmacy, Inventory, Radiology (Imaging), Patient dashboard and
                  PACS round the clock.
                  Currently, we are working on the Shared Health Record (SHR) under the MIS, Directorate General of Health
                  Services (DGHS) in the 40 (forty) Upazila, 10 (ten) District Hospital and 12 (twelve) Tertiary level hospitals in and
                  around Dhaka City. It has also experienced integrating with the National ID (NID), iBAS++, DHIS2 HIE, Facility
                  Registry, Attendance System and HRM of MoHFW.</p>
                <h4 className="text-uppercase" style={{ marginTop: '3rem' }}>OBJECTIVE</h4>
                <ul className="objective-item">
                  <li><i className="fa fa-circle" /> To provide innovative knowledge</li>
                  <li><i className="fa fa-circle" /> To provide software in the Govt. &amp; Private sector</li>
                  <li><i className="fa fa-circle" /> To provide technical assistance for the design, implementation and evaluation of ICT related program
                    activities for the government and non-government organization</li>
                  <li><i className="fa fa-circle" /> To promote better ICT education through training and manufacturing software</li>
                  <li><i className="fa fa-circle" /> To provide web site development</li>
                  <li><i className="fa fa-circle" /> To provide all sorts of IT solutions</li>
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

export default About;