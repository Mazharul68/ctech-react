import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../../../services/UserService';
import Banner from '../Project/Banner';
import FiftyHospitalDetails from './FiftyHospitalDetails';

const FiftyHospital = () => {
    const { id } = useParams();
    const [fiftyHospital, setFiftyHospital] = useState([]);
    const [subSubMenu, setSubSubMenu] = useState({});




    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/sub-sub-menu/edit/${id}`)
            .then(res => res.json())
            .then(data => {
                setSubSubMenu(data)
            })
    }, [id])


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/fifty-hospital/manage')
            .then(res => res.json())
            .then(data => {
                const result = data.data;
                const fiftyHospitalDetails = result.filter(item => item.subsub_menu_id === parseInt(id))
                setFiftyHospital(fiftyHospitalDetails)
            })
    }, [id])
    console.log(fiftyHospital);
    return (
        <>
            <div className="page-area">
                <div className="breadcumb-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb text-center d-block">
                                <div className="section-headline white-headline text-center">
                                    <h3>{subSubMenu.sub_sub_menu}</h3>
                                </div>
                                <ul>
                                    <li className="home-bread">Home</li>
                                    <li>{subSubMenu.sub_sub_menu}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-5 pb-5">
                <div class="container">
                    {
                        fiftyHospital.map(item => <FiftyHospitalDetails
                            item={item}
                            subSubMenu={subSubMenu}
                            key={item.id}

                        />)
                    }
                </div>
            </div>
        </>

    );
};

export default FiftyHospital;