import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { userService } from '../../../../services/UserService';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
    const { id } = useParams();
    const [subMenuDetails, setSubMenuDetails] = useState({});

    useEffect(() => {
        userService.getSubSubEdit(id).then(res => res.json())
            .then(data => setSubMenuDetails(data))
    }, [id])
    return (
        <div>
            <ProjectDetails subMenuDetails={subMenuDetails} />
            {/* {
                id === 'NITOR' && <Nitor id={id} />
            }
            {
                id === 'sarkari karmachari hospital (SKH)' && <SKH id={id} />
            }
            {
                id === 'NICVD' && <Nicvd id={id} />
            }
            {
                id === 'Sir Salimullah Medical College (SSMC)' && <Ssmc id={id} />
            }
            {
                id === 'Bangladesh Secretariat Clinic' && <Bsc id={id} />
            }
            {
                id === 'NIKDU' && <Nikdu id={id} />
            }
            {
                id === 'Gopalganj Sadar' && <GopalGonj id={id} />
            }
            {
                id === 'Sheikh Fazilatunesa Mujib Eye Hospital' && <Sfmeh id={id} />
            }
            {
                id === 'MFSTC' && <Mfstc id={id} />
            } */}
        </div>
    );
};

export default Projects;