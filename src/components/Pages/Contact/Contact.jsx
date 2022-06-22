import React from 'react';
import Iframe from 'react-iframe';

const Contact = () => {
  return (
    <div>
      {/* Start Bottom Header */}
      <div className="page-area">
        <div className="breadcumb-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="breadcrumb text-center">
                <div className="section-headline white-headline text-center">
                  <h3>Contact</h3>
                </div>
                <ul>
                  <li className="home-bread">Home</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END Header */}
      {/* Start contact Area */}
      <div className="contact-area area-padding">
        <div className="container">
          <div className="row">
            <div className="contact-inner">
              {/* Start contact icon column */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <i className="ti-mobile" />
                    <p>
                      Call : +01975200222<br />
                      <span>Sat-Thu (9.15am-17pm)</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Start contact icon column */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <i className="ti-email" />
                    <p>
                      Email : info@ctchbd.com <br />
                      <span>Web: www.ctechbd.com</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Start contact icon column */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <i className="ti-location-pin" />
                    <p>
                      Location : House No: 142<br />
                      <span style={{ fontSize: '14px' }}>Castle Green(2nd Floor), Green Road, Dhaka</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              {/* Start Map */}
              <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8274897616743!2d90.38596211429702!3d23.753530394575122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a48c1f88e5%3A0x1a9a0959c5a76b71!2sCrystal%20Technology%20Bangladesh%20Ltd.!5e0!3m2!1sen!2sbd!4v1655708236667!5m2!1sen!2sbd"
                width="100%"
                height="420px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </div>
            {/* Start Left contact */}
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="contact-form">
                <div className="row">
                  <form id="contactForm" method="POST" action="contact.php" className="contact-form">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <input type="text" id="name" className="form-control" placeholder="Name" required data-error="Please enter your name" />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <input type="email" className="email form-control" id="email" placeholder="Email" required data-error="Please enter your email" />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <input type="text" id="msg_subject" className="form-control" placeholder="Subject" required data-error="Please enter your message subject" />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <textarea id="message" rows={7} placeholder="Massage" className="form-control" required data-error="Write your message" defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                      <button type="submit" id="submit" className="add-btn contact-btn">Send Message</button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End Left contact */}
          </div>
        </div>
      </div>
      {/* End Contact Area */}
    </div>
  );
};

export default Contact;