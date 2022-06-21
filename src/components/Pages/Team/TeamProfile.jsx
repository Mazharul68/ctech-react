import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../../services/UserService';
import TeamView from './TeamView';

const TeamProfile = () => {
    const { id } = useParams();
    const [teamView, setTeamView] = useState({})

    useEffect(() => {
        userService.getTeamView(id).then(res => res.json())
            .then(data => setTeamView(data))
    }, [id])
    console.log(teamView);
    return (
        <>
            <div className="page-area">
                <div className="breadcumb-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb text-center d-block">
                                <div className="section-headline white-headline text-center">
                                    <h3>Team Profile</h3>
                                </div>
                                <ul>
                                    <li className="home-bread">Home</li>
                                    <li>Team Profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="team_details">
                <TeamView teamView={teamView} />
            </section>
        </>
    );
};

export default TeamProfile;