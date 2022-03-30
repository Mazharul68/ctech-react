import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../img/error.jpg'
import './notFound.css'

const NotFound = () => {

    return (
        <div>
            <section className='not_found'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h3 className='text-danger'>Oops !</h3>
                            <h5>ERROR 404 PAGE NOT FOUND</h5>
                            <p>You might have the wrong address, or the page may have moved.</p>
                            <div>
                                <Link className='btn btn-success' style={{ margin:' 0 1rem' }} to={'/'}>Back to homepage</Link>
                                <Link className='btn btn-danger'  to={'/contact'}>Contact us</Link>     
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 margin">
                            <img className='img-fluid' src={image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;