import React from 'react';
import Banner from '../Project/Banner';

const ClientDetails = ({ subClientDetails }) => {


    const { sub_menu, id } = subClientDetails;
    return (
        <>
            <Banner id={sub_menu} />
        </>
    );
};

export default ClientDetails;