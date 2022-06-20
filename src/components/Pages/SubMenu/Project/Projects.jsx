import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nitor from './Nitor';
import SKH from './SKH';
import Nicvd from './Nicvd';
import Ssmc from './Ssmc';
import Bsc from './Bsc';
import Nikdu from './Nikdu';
import GopalGonj from './GopalGonj';
import Sfmeh from './Sfmeh';
import Mfstc from './Mfstc';
import { useState } from 'react';
import { userService } from '../../../../services/UserService';
import { useQuery } from 'react-query';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
    const { id } = useParams();
    const [subMenuDetails, setSubMenuDetails] = useState({});

    // useEffect(() => {
    //     userService.getSubSubEdit(id).then(res => res.json())
    //         .then(data => console.log(data.data))
    // }, [])
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/sub-menu/edit/${id}`)
            .then(res => res.json())
            .then(data => setSubMenuDetails(data))
    }, [])
    // const { data: data, isLoading, refetch } = useQuery('product', () => fetch(`http://127.0.0.1:8000/api/sub-menu/edit/${id}`).then(res => res.json()))
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