import React from 'react';
import {
  BrowserRouter as Router,Route, Routes,Link} from "react-router-dom";
import Contact from '../Contact/Contact';

import Home from '../Home/Home';
import Team from '../Team/Team';


const Header = () => {
  return (
    <div>
    <Router>

    <section className="navbar-section">
          <div className="navbar">
            <div className="logo">
              <img width="70px" src="img/logo/01.png" alt="" />
            </div>
            <ul className="menu">
              <li className="menu-item active">
              <Link className="item" to ="/">home <i className="fa fa-caret-right" /></Link>
                <ul className="sub-menu ">
                  <div className="demo">
                    <li className="menu-item "><a href=" ">About Us</a></li>
                    <li className="menu-item "><a href=" ">Mission</a></li>
                    <li className="menu-item "><a href=" ">Vision</a></li>
                  </div>
                </ul>
              </li>
              <li className="menu-item"><a href=" ">Product <i className="fa fa-caret-right" /></a>
                <ul className="sub-menu ">
                  <li className="menu-item "><a href=" ">Sample 1</a></li>
                  <li className="menu-item "><a href=" ">Sample 2</a></li>
                  <li className="menu-item "><a href=" ">Sample 3</a></li>
                </ul>
              </li>
              <li className="menu-item"><a href=" ">Client <i className="fa fa-caret-right" /></a>
                <ul className="sub-menu ">
                  <li className="menu-item "><a href=" ">Sample 1</a></li>
                  <li className="menu-item "><a href=" ">Sample 2</a></li>
                  <li className="menu-item "><a href=" ">Sample 3</a></li>
                  <li className="menu-item "><a href=" ">Sample 4</a></li>
                </ul>
              </li>
              <li className="menu-item "><a href=" ">Projects</a>
                <ul className="sub-menu ">
                  <li className="menu-item "><a href=" ">Sample 1</a></li>
                  <li className="menu-item "><a href=" ">Sample 2</a></li>
                  <li className="menu-item "><a href=" ">Sample 3</a></li>
                </ul>
              </li>
              
              <li className="menu-item"><Link className="item" to ="/team">Team </Link></li>
              <li className="menu-item"><Link className="item" to ="/contact">Contact </Link></li>
              <li className="menu-item "><Link className="item" to ="/team">Webmail </Link></li>
            </ul>
            <div className="menu-btn">
              <i className="fa fa-bars" />
            </div>
            {/*menu-btn*/}
          </div>
          {/*Navbar*/}
          {/*Navbar-area*/}
        </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" caseSensitive={false} element={<Team />} />
        <Route path="/contact" caseSensitive={false} element={<Contact />} />     
      </Routes>
    </Router>

    </div>
        );
}

export default Header;