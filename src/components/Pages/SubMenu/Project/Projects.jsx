import React from 'react';
import { useParams } from 'react-router-dom';
import Nitor from './Nitor';
import SKH from './SKH';

const Projects = () => {
    const { id } = useParams();
    return (
        <div>
            {
                id === 'NITOR' && <Nitor id={id} />
            }
            {
                id === 'SKH' && <SKH id={id} />
            }


        </div>
    );
};

export default Projects;