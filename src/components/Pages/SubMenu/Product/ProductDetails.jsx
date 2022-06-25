import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Project/Banner';

const ProductDetails = ({ subProduct }) => {

    const { id, sub_menu } = subProduct;
    return (
        <>
            <Helmet>
                <title>{sub_menu}</title>
            </Helmet>
            <div>
                <Banner id={sub_menu} />
            </div>
        </>
    );
};

export default ProductDetails;