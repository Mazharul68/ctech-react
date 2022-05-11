import React, { useEffect, useState } from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { userService } from '../../../services/UserService';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.jpg';
const BASE_URL = process.env.REACT_APP_API_URL;
const Header = () => {
  const [homeSubMenu, setHomeSubMenu] = useState([]);
  const [projectSubMenu, setProjectSubMenu] = useState([]);
  const [clientSubMenu, setClientSubMenu] = useState([]);
  const [productSubMenu, setProductSubMenu] = useState([]);
  const [subSubMenu, setSubSubMenu] = useState([]);

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
  useEffect(() => {
    userService.getSubSubMenu().then(res => res.json())
      .then(data => setSubSubMenu(data.data))
  }, [])
  console.log(subSubMenu);
  // console.log(productSubMenu)

  return (
    <header>
      <nav className="menu_section">
        <div className="header_logo">
          <img className="img-fluid" width="60px" src="img/logo/01.png" alt="" />
          {/* <img class="img-fluid" width="60px" src="img/logo/01.png" alt="" /> */}
        </div>
        <ul className="main_menu">
          <li className="active"><Link to={'/'}>home <i className="fa fa-caret-right" /> </Link>
            <ul className="dropdown_menu">
              {
                homeSubMenu.map(item => {
                  return <li><Link to={item.sub_menu_link}>{item.sub_menu}</Link></li>
                })
              }
            </ul>
          </li>
          <li><a href="#">Projects <i className="fa fa-caret-right" /></a>
            <ul className="dropdown_menu" style={{ width: '400px' }}>
              <li>
                {
                  projectSubMenu.map(item => {
                    return <a href="#">{item.sub_menu}</a>
                  })
                }
                <ul className="dropdown_sub_menu scollingSubmenu" >
                  {
                    subSubMenu.map(item => {
                      return <li><a style={{ display: 'block' }} href="#"> <img style={{ marginRight: '10px' }} src={logo} width="30px" alt="" />{item.sub_sub_menu}</a></li>
                    })
                  }
                  <li><a href="#">Demo 2</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href>Client <i className="fa fa-caret-right" /> </a>
            <ul className="dropdown_menu" style={{ width: '250px' }}>
              {
                clientSubMenu.map(item => {
                  return <li><Link style={{ justifyContent: 'start' }} to={item.sub_menu_link}><img style={{ marginRight: '10px' }} src={BASE_URL + `/${item.logo_img}`} alt="" width="30px" /> {item.sub_menu}</Link></li>
                })
              }
            </ul>
          </li>
          <li><a href>Product <i className="fa fa-caret-right" /> </a>
            <ul className="dropdown_menu" style={{ width: '400px' }}>
              {
                productSubMenu.map(item => {
                  return <li><Link to={item.sub_menu_link}>{item.sub_menu}</Link></li>
                })
              }
            </ul>
          </li>
          <li><Link to="team">team</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><a target="blank" href="https://login.bluehost.com/hosting/webmail">webmail</a></li>
        </ul>
        <div className="menu-btn">
          <i className="abc fa fa-bars" />
        </div>
      </nav>
    </header>
  )
}

export default Header;


// drop_menus