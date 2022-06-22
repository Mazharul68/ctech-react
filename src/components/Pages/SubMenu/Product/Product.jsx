import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../../../services/UserService';
import ProductDetails from './ProductDetails';

const Product = () => {
    const { id } = useParams();
    const [subProduct, setSubProduct] = useState({});
    useEffect(() => {
        userService.getSubSubEdit(id).then(res => res.json())
            .then(data => setSubProduct(data))
    }, [id])
    return (
        <>
            <ProductDetails subProduct={subProduct} />
        </>
    );
};

export default Product;