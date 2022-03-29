import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Routes,Link} from "react-router-dom";
import CustomLink from '../../CustomLink/CustomLink';


const Header = () => {
  
  // const [menu, setMenu] = useState([]);
  // fetch('http://127.0.0.1:8000/api/main-menu')
  // .then(res =>res.json())
  // .then(data => setMenu(data))
  // console.log(menu);

  return (
    <div>
    <section className="navbar-section">
          <div className="navbar">
            <div className="logo">
              <img width="70px" src="img/logo/01.png" alt="" />
            </div>
            <ul className="menu">
              <li className="menu-item">
              <CustomLink className="item" to ="/">home <i className="fa fa-caret-right" /></CustomLink>
                <ul className="sub-menu ">
                  <div className="demo">
                    <li className="menu-item "><a href=" ">About Us</a></li>
                    <li className="menu-item "><a href=" ">Mission</a></li>
                    <li className="menu-item "><a href=" ">Vision</a></li>
                  </div>
                </ul>
              </li>
              <li className="menu-item"><CustomLink to={'/product'}>Product <i className="fa fa-caret-right" /></CustomLink>
                <ul className="sub-menu ">
                  <li className="menu-item "><a href=" ">Sample 1</a></li>
                  <li className="menu-item "><a href=" ">Sample 2</a></li>
                  <li className="menu-item "><a href=" ">Sample 3</a></li>
                </ul>
              </li>
              <li className="menu-item"><CustomLink to={'/client'}>Client <i className="fa fa-caret-right" /></CustomLink>
                <ul className="sub-menu ">
                  <li className="menu-item "><a href=" ">Sample 1</a></li>
                  <li className="menu-item "><a href=" ">Sample 2</a></li>
                  <li className="menu-item "><a href=" ">Sample 3</a></li>
                  <li className="menu-item "><a href=" ">Sample 4</a></li>
                </ul>
              </li>
              <li className="menu-item "><CustomLink to={'/projects'}>Projects</CustomLink>
                <ul className="sub-menu ">
                  <li className="menu-item "><a href=" ">Sample 1</a></li>
                  <li className="menu-item "><a href=" ">Sample 2</a></li>
                  <li className="menu-item "><a href=" ">Sample 3</a></li>
                </ul>
              </li>
              
              <li className="menu-item"><CustomLink className="item" to ="/team">Team </CustomLink></li>
              <li className="menu-item"><CustomLink className="item" to ="/contact">Contact </CustomLink></li>
              <li className="menu-item "><CustomLink className="item" to ="/webmail">Webmail </CustomLink></li>
            </ul>
            <div className="menu-btn">
              <i className="fa fa-bars" />
            </div>
            {/*menu-btn*/}
          </div>
          {/*Navbar*/}
          {/*Navbar-area*/}
        </section>
  
    </div>
        );
}

export default Header;