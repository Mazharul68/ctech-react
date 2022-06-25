import React from 'react';
import Banner from './Banner';
import nitor from './../../../../img/50hospital/nitor.png'
import img1 from '../../../../img/project/img1.jpeg';
import img2 from '../../../../img/project/img2.jpeg';
import img3 from '../../../../img/project/img3.jpeg';
import img4 from '../../../../img/project/img4.jpeg';
import { Helmet } from 'react-helmet';

const ProjectDetails = ({ subMenuDetails }) => {

    const { sub_menu, id } = subMenuDetails;
    return (
        <>
            <Helmet>
                <title>{sub_menu}</title>
            </Helmet>
            <Banner id={sub_menu} />
            <div className="row pt-5 pb-5">
                <div className="container">
                    <div className="col">
                        <div className="common_area">
                            <h1 className="heading_title text-uppercase h2" style={{ color: 'rgb(48, 120, 251)' }}>{sub_menu}</h1>
                        </div>
                        {
                            id === 22 ? <p className='text-danger'>No Found</p> : ''
                        }
                        {
                            id === 23 ? <p className='text-danger'>No Found</p> : ''
                        }
                        {
                            id === 24 ? <p className='text-danger'>No Found</p> : ''
                        }
                        {
                            id === 26 ? <p className='text-danger'>No Found</p> : ''
                        }
                        {
                            id === 27 ? <p className='text-danger'>No Found</p> : ''
                        }
                        {
                            id === 41 ? <p className='text-danger'>No Found</p> : ''
                        }
                        {
                            id === 42 ? <p className='text-danger'>No Found</p> : ''
                        }
                        {
                            id === 21 && <p>National Institute Of Traumatology and Orthopaedic Rehabilitation (NITOR) is a tertiary level hospital with 1000
                                bed facilities. It is specially made for serving all the government employees. All the staffs are highly trained &amp;
                                motivated to serve their patients best service. NITOR has modern Radiology department, Laboratory, OT facilities.
                                Recently NITOR is playing a vital role for providing COVID-19 Vaccine among all the registered patients very
                                effectively.</p>
                        }
                        {
                            id === 25 && <p>National Institute of Cardiovascular Diseases (NICVD) is a tertiary level hospital with 1000 bed facilities. National
                                Institute of Cardiovascular Diseases (NICVD) is a State of the Art Institute for the treatment of cardiovascular
                                diseases in Bangladesh. The institute was established in 1978 with the aim of establishing modern cardiovascular
                                care services in the country and to develop trained manpower in this field for the need of the country. All the staffs
                                are highly trained & motivated to serve their patients best service. NITOR has modern Radiology department,
                                Laboratory, OT facilities. Recently NICVD is playing a vital role for providing COVID-19 Vaccine among all the
                                registered patients very effectively. This institute has experience of conducting training program for the nurses
                                (CCU, ICU, Cath Lab, OT) along with the training of other supporting technologists. They also give training to the
                                non-govt. doctors to provide better service to the community</p>
                        }
                    </div>
                    <div className="row pt-5">
                        {
                            id === 21 && <div className="col-lg-12" style={{ marginBottom: '1rem' }}>
                                <figure className="figure">
                                    <img className="img-fluid" src={nitor} alt="" />
                                </figure>
                            </div>
                        }
                        {
                            id === 25 && <>
                                <div class="col-lg-6 mb-5">
                                    <figure class="figure">
                                        <img class="img-fluid" style={{ width: '100%', height: '350px' }} src={img1} alt="" />
                                    </figure>
                                </div>
                                <div class="col-lg-6" style={{ marginTop: '5px' }}>
                                    <figure class="figure">
                                        <img class="img-fluid" style={{ width: '100%', height: '350px' }} src={img2} alt="" />
                                    </figure>
                                </div>
                                <div class="col-lg-6" style={{ marginTop: '20px' }}>
                                    <figure class="figure">
                                        <img class="img-fluid" style={{ width: '100%', height: '350px' }} src={img3} alt="" />
                                    </figure>
                                </div>
                                <div class="col-lg-6" style={{ marginTop: '20px' }}>
                                    <figure class="figure">
                                        <img class="img-fluid" style={{ width: '100%', height: '350px' }} src={img4} alt="" />
                                    </figure>
                                </div>
                            </>
                        }
                        {
                            id === 21 && <div className="col">
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
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;