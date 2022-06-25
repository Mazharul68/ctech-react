import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../img/logo/01.png'

const Footer = () => {
  return (
    <div>
      {/* Start Footer Area */}
      <footer className="footer1">
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-5 col-xs-12">
                <div className="footer-content logo-footer">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <a href=" "><img style={{ width: '60px', height: '60px' }} src={img} alt="" /></a>
                    </div>
                    <p>
                      Crystal Technology Bangladesh Ltd.is a Leading ICT organization with strategic Capability of Enterprise software Development, Apps Development, Hospital Digitization (Automation), IT Training Consultancy and Software Implementation Services for serveral years in Bangladesh
                    </p>
                    <div className="subs-feilds">
                      <div className="suscribe-input">
                        <input type="email" className="email
                                                form-control width-80" id="sus_email" placeholder="Type
                                                Email" />
                        <button type="submit" id="sus_submit" className="add-btn">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end single footer */}
              <div className="col-md-4 col-sm-3 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Quick Link</h4>
                    <ul className="footer-list">
                      <li><Link to={`/projects/${21}`}>NITOR</Link></li>
                      <li><Link to={`/projects/${22}`}>SKH </Link></li>
                      <li><Link to={`/projects/${25}`}>NICVD</Link></li>
                      <li><Link to="team">Team</Link></li>
                      <li><Link to="contact">Contact </Link></li>
                      <li><a target="_blank" href="https://login.bluehost.com/hosting/webmail">Webmail </a></li>
                    </ul>
                    <ul className="footer-list hidden-sm">
                      <li><Link to={`/product/${29}`}>Hospital Automation</Link></li>
                      <li><Link to={`/product/${30}`}>Software Development</Link></li>
                      <li><Link to={`/product/${31}`}>Web Development</Link></li>
                      <li><Link to={`/product/${32}`}>ICT Training</Link></li>
                      <li><Link to={`/product/${33}`}>Hardware sales and Services</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end single footer */}
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="footer-content last-content">
                  <div className="footer-head">
                    <h4>Information</h4>
                    <div className="footer-contacts">
                      <p><span>Location :</span> House No: 142, Castle Green (2nd Floor), Green Road, Dhaka Bangladesh</p>
                      <p><span>Cell :</span> +01975200222</p>
                      <p><span>Email :</span> info@ctchbd.com
                      </p>
                    </div>
                    {/* <div className="footer-icons">
                      <ul>
                        <li>
                          <a href=" ">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                            <i className="fa fa-google" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Bottom Area */}
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="copyright">
                  <p>
                    Copyright © 2022
                    <a href="https://www.ctechbd.com/">cTech</a> All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom Area */}
      </footer>
      {/* End Footer Area */}

      {/* Footer Section End */}
      <div className="scrolling_top">
        <div className="top height">
          <a href=" "><i className="fas fa-angle-double-up" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;