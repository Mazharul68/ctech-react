import React, { useEffect, useState } from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { userService } from '../../../services/UserService';
import { Link } from 'react-router-dom';
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
       
      })
  }, [])
  // console.log(productSubMenu)

  return (
    <header>
    <nav class="menu_section">
        <div class="header_logo">
            <img class="img-fluid" width="60px" src="img/logo/01.png" alt="" />
        </div>
          <ul class="main_menu">
            <li class="active">
                <CustomLink className ="item" to={'/'}><i class="fa fa-caret-right"></i>home</CustomLink>
                <ul class="dropdown_menu">
                    <li>
                    {
                    homeSubMenu.map(item =>{
                      return <Link to={item.sub_menu_link}>{item.sub_menu}</Link>
                    })
                  }
                    </li>
                </ul>
            </li>
            <li>
            <CustomLink className ="item"  to="{{ $main->url_link }}"><i class="fa fa-caret-right"></i>Projects</CustomLink>
            <ul class="dropdown_menu">
                <li>
                    {
                      projectSubMenu.map(item =>{
                      return <Link to={item.sub_menu_link}>{item.sub_menu}</Link>
                    })
                  }
                </li>
              </ul>
            </li>
            <li>
            <CustomLink className ="item"  to="{{ $main->url_link }}"><i class="fa fa-caret-right"></i>Clients</CustomLink>

            <ul class="dropdown_menu">
                <li>
                    {
                      clientSubMenu.map(item =>{
                      return <Link className='d-inline-block sub-menu-item' to={item.sub_menu_link}><img src={BASE_URL + `/${item.logo_img}`}  width="30px" alt="" /> {item.sub_menu}</Link>
                        

                        
                    })
                  }
                </li>
              </ul>
            </li>
            <li>
            <CustomLink className ="item"  to="{{ $main->url_link }}"><i class="fa fa-caret-right"></i>Product</CustomLink>
            <ul class="dropdown_menu">
                <li>
                    {
                      productSubMenu.map(item =>{
                      return <Link to={item.sub_menu_link}>{item.sub_menu}</Link>
                    })
                  }
                </li>
              </ul>
            </li>
            <li><CustomLink className ="item" to={'/team'}>Team</CustomLink></li>
            <li><CustomLink className ="item" to={'/contact'}>Contact</CustomLink></li>
            <li><a className="item" target="blank" href="https://login.bluehost.com/hosting/webmail">Webmail </a></li>
         
          </ul>
        </nav>
        <div class="menu-btn">
         <i class="abc fa fa-bars"></i>
     </div>
  </header>
        );
}

export default Header;