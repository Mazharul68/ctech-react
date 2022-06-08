import React from 'react';
import { useParams } from 'react-router-dom';

const Client = () => {
    const { clientId } = useParams();
    return (
        <div>
            <h3>{clientId}</h3>
        </div>
    );
};

export default Client;