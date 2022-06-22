import React from 'react';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_API_URL;
const TeamMember = (props) => {
  console.log(props);

  const { id, team_name, team_designation, icon1, icon2, icon3, team_img, url1, url2, url3 } = props.data;

  return (
    <div>
      <div className="col-md-3 col-sm-4 col-xs-12">
        <div className="single-member">
          <div className="team-img">
            <a href="fdsfs">
              {/* <img src="img/team/system.png" alt="" /> */}
              <img src={BASE_URL + `/${team_img}`} alt="" />
            </a>
          </div>
          <div className="team-content text-center">
            <h4><Link to={`/teamProfile/${id}`}>{team_name}</Link></h4>
            <p>{team_designation}</p>
            <ul className="social-icon">
              <li><a target="_blank" className="facebook" href={url1} ><i className={icon1} /></a></li>
              <li><a target="_blank" className="twitter" href={url2} ><i className={icon2} /></a></li>
              <li><a target="_blank" className="instagram" href={url3}><i className={icon3} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;