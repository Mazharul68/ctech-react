import React, { useEffect, useState } from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { userService } from '../../../services/UserService';
const BASE_URL = process.env.REACT_APP_API_URL;
const Header = () => {
  
  // const [menu, setMenu] = useState([]);
  // fetch('http://127.0.0.1:8000/api/main-menu')
  // .then(res =>res.json())
  // .then(data => setMenu(data))
  // console.log(menu);
  // const [subMenu, setSubMenu] = useState([]);
  const [productSubMenu, setProductSubMenu] = useState([]);
  const [clientSubMenu, setClientSubMenu] = useState([]);
  useEffect(() => {
    userService.getSubMenu().then(res => res.json())
      .then(data => {
        const result = data.data;
        const product = result.filter(item => item.main_menu_id === 5)
        setProductSubMenu(product)
        const client = result.filter(item => item.main_menu_id === 4)
        setClientSubMenu(client)
        // setSubMenu(data.data)
        console.log(result)
      })
  }, [])
  // console.log(productSubMenu)

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
                  {
                  productSubMenu.map(item => {
                    return <li key={item.id} className="menu-item"><a target="blank" href={item.sub_menu_link}>{item.sub_menu}</a></li>
                  })
                  }
                </ul>
              </li>
              <li className="menu-item"><CustomLink to={'/client'}>Client <i className="fa fa-caret-right" /></CustomLink>
                <ul className="sub-menu ">
                {
                  clientSubMenu.map(item => {
                    return <li key={item.id} className="menu-item"><img src={BASE_URL + `${item.logo_img}`} width="30px" alt="" />
                    <a target="blank" href={item.sub_menu_link}>{item.sub_menu}</a></li>
                  })
                }
                </ul>
              </li>
            <li className="menu-item "><CustomLink to={'/projects'}>Projects <i className="fa fa-caret-right" /></CustomLink>
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