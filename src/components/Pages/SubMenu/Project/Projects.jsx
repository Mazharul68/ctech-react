import React from 'react';
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

const Projects = () => {
    const { id } = useParams();
    return (
        <div>
            {
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
            }



        </div>
    );
};

export default Projects;