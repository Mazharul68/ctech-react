import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Project/Banner';

const ClientDetails = ({ subClientDetails }) => {


    const { sub_menu, id } = subClientDetails;
    return (
        <>
            <Helmet>
                <title>{sub_menu}</title>
            </Helmet>
            <Banner id={sub_menu} />
        </>
    );
};

export default ClientDetails;