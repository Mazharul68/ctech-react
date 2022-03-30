import React, { useEffect, useState } from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { userService } from '../../../services/UserService';
const BASE_URL = process.env.REACT_APP_API_URL;
const Header = () => {
  const [homeSubMenu, setHomeSubMenu] = useState([]);
  const [projectSubMenu, setProjectSubMenu] = useState([]);
  const [clientSubMenu, setClientSubMenu] = useState([]);
  const [productSubMenu, setProductSubMenu] = useState([]);

  useEffect(() => {
    userService.getSubMenu().then(res => res.json())
      .then(data => {
        const result = data.data;

        const home = result.filter(item => item.main_menu_id === 2)
        setHomeSubMenu(home)

        const project = result.filter(item => item.main_menu_id === 3)
        setProjectSubMenu(project)

        const client = result.filter(item => item.main_menu_id === 4)
        setClientSubMenu(client)

        const product = result.filter(item => item.main_menu_id === 5)
        setProductSubMenu(product)

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
                  {
                    homeSubMenu.map(item =>{
                      return  <li className="menu-item "><a href={item.sub_menu_link}>{item.sub_menu}</a></li>
                    })
                  }
                  </div>
                </ul>
              </li>
              <li className="menu-item"><CustomLink to={'/product'}>Product <i className="fa fa-caret-right" /></CustomLink>
                <ul className="sub-menu ">
                  {
                    projectSubMenu.map(item => {
                    return <li key={item.id} className="menu-item"><a target="blank" href={item.sub_menu_link}>{item.sub_menu}</a></li>
                  })
                  }
                </ul>
              </li>
              <li className="menu-item"><CustomLink to={'/client'}>Client <i className="fa fa-caret-right" /></CustomLink>
                <ul className="sub-menu ">
                {
                  clientSubMenu.map(item => {
                    return <li key={item.id} className="menu-item"><img src={BASE_URL + `/${item.logo_img}`} width="30px" alt="" />
                    <a target="blank" href={item.sub_menu_link}>{item.sub_menu}</a></li>
                  })
                }
                </ul>
              </li>
            <li className="menu-item "><CustomLink to={'/projects'}>Projects <i className="fa fa-caret-right" /></CustomLink>
                <ul className="sub-menu ">
               
                  {
                    productSubMenu.map(item => {
                    return <li key={item.id} className="menu-item">
                    <a target="blank" href={item.sub_menu_link}>{item.sub_menu}</a>
                    </li>
                  })
                }
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