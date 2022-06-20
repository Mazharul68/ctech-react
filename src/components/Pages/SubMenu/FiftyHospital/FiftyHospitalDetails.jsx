import React from 'react';
const BASE_URL = process.env.REACT_APP_API_URL;

const FiftyHospitalDetails = ({ item, subSubMenu }) => {

    const { id, description, image1, image2, image3, image4 } = item;
    const { sub_sub_menu } = subSubMenu;
    return (
        <div class="col">
            <div class="common_area">
                <h1 class="heading_title text-uppercase h2" style={{ color: 'blue' }}>{sub_sub_menu}</h1>
            </div>
            <p>{description}</p>
            <div class="row pt-5">
                <div class="col-lg-6">
                    <figure class="figure">
                        <img class="img-fluid" src={BASE_URL + `/${image1}`} alt="" />
                    </figure>
                </div>
                <div class="col-lg-6">
                    <figure class="figure">
                        <img class="img-fluid" src={BASE_URL + `/${image2}`} alt="" />
                    </figure>
                </div>
                <div class="col-lg-6 mt-4" style={{ marginTop: '3rem', display: 'block' }}>
                    <figure class="figure">
                        <img class="img-fluid" src={BASE_URL + `/${image3}`} alt="" />
                    </figure>
                </div>
                <div class="col-lg-6" style={{ marginTop: '3rem', display: 'block' }}>
                    <figure class="figure">
                        <img class="img-fluid" src={BASE_URL + `/${image4}`} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default FiftyHospitalDetails;