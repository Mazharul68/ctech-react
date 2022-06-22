import React from 'react';
import { Link } from 'react-router-dom';
import './team.css'
const BASE_URL = process.env.REACT_APP_API_URL;

const TeamView = ({ teamView }) => {
    const { id, team_name, team_img, team_designation, team_phone, team_email, team_description, icon1, icon2, icon3, url1, url2, url3 } = teamView;
    return (
        <div>
            <div className="team_area">
                <div className="row" style={{ justifyContent: 'space-around' }}>
                    <div className="col-lg-3">
                        <div className="team_img">
                            <img width="200px" src={BASE_URL + `/${team_img}`} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="team">
                            <h2>{team_name}</h2>
                            <h4>{team_designation}</h4>
                            <span> <i className="fa fa-phone" aria-hidden="true"></i> {team_phone}</span>
                            <span> <i className="fa fa-envelope" aria-hidden="true"></i> {team_email}</span>
                            <ul className="team-social">
                                <li><a href={url1} target="_blank"><i className={icon1} aria-hidden="true"></i></a></li>
                                <li><a href={url2} target="_blank"><i className={icon2} aria-hidden="true"></i></a></li>
                                <li><a href={url3} target="_blank"><i className={icon3} aria-hidden="true"></i></a></li>
                            </ul>
                            <hr />
                            <p className="lead">{team_description}</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TeamView;