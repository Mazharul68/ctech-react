import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { userService } from '../../../services/UserService';
import Spinner from '../../../Spinner/Spinner';
import TitlePage from '../TitlePage/TitlePage';
import TeamMember from './TeamMember';


const Team = () => {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    userService.getTeam().then(res => res.json())
      .then(data => {
        setTeam(data.data)
        setLoading(false)
      })
  }, [])
  return (
    <>
      <Helmet>
        <title>Team - cTech</title>
      </Helmet>
      <div>
        {/* Start Bottom Header */}
        <div className="page-area">
          <div className="breadcumb-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="breadcrumb text-center">
                  <div className="section-headline white-headline text-center">
                    <h3>Our Team</h3>
                  </div>
                  <ul>
                    <li className="home-bread">Home</li>
                    <li>Team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Header */}
        {/*Start Team Area*/}
        <div className="team-area area-padding-2">
          <div className="container">
            {/* Start counter Area */}
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h3>Our Beloved Team Members</h3>
                  <p>We believe in the theory of, “One Team One Dream.” Our experts are always with you at any problems, with the appropriate solutions.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="common_area">
                    <h1 className="heading_title text-uppercase">Management Team</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="team-member">
                  {
                    loading ? <Spinner /> : <>
                      {team.slice(0, 4).map(data => <TeamMember data={data} />)}
                    </>
                  }
                </div>
              </div>
            </div>
            <br />
            <br />
            <div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="common_area">
                    <h1 className="heading_title text-uppercase">Technical Team</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="team-member">
                  {
                    loading ? <Spinner /> : <>
                      {team.slice(4).map(data => <TeamMember data={data} />)}
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Area*/}
      </div>
    </>

  );
};

export default Team;