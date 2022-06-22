import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../../../services/UserService';
import ClientDetails from './ClientDetails';

const Client = () => {
    const { id } = useParams();
    const [subClientDetails, setSubClientDetails] = useState({});
    useEffect(() => {
        userService.getSubSubEdit(id).then(res => res.json())
            .then(data => setSubClientDetails(data))
    }, [id])
    return (
        <div>
            <ClientDetails subClientDetails={subClientDetails} />
        </div>
    );
};

export default Client;