import React from 'react';

const Banner = ({ id }) => {
    return (
        <div className="page-area">
            <div className="breadcumb-overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcrumb text-center d-block">
                            <div className="section-headline white-headline text-center">
                                <h3>{id}</h3>
                            </div>
                            <ul>
                                <li className="home-bread">Home</li>
                                <li>{id}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;