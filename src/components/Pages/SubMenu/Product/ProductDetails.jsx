import React from 'react';
import Banner from '../Project/Banner';

const ProductDetails = ({ subProduct }) => {

    const { id, sub_menu } = subProduct;
    return (
        <div>
            <Banner id={sub_menu} />
        </div>
    );
};

export default ProductDetails;