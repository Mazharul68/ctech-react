import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const HeaderMenu = ({menu}) => {

    return (
        <div>
           <CustomLink className="item" to ={menu.url_link}>{menu.main_menu} <i className="fa fa-caret-right" /></CustomLink>
                <ul className="sub-menu ">
                  <div className="demo">
                    <li className="menu-item "><a href=" ">About Us</a></li>
                    <li className="menu-item "><a href=" ">Mission</a></li>
                    <li className="menu-item "><a href=" ">Vision</a></li>
                  </div>
                </ul>
        </div>
    );
};

export default HeaderMenu;