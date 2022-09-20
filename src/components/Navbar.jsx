import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../images/logo.png";
import { links } from "../data";
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'


const Navbar = () => {
 
 const[isNavShowing, setisNavShowing ]=useState(false);
 
 
 
 
 
  return (
    <nav>
           
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={logo} alt="Nav Logo"></img>
        </Link>
      {/* 로고 링크화 */}
      
      
      
      
        <ul className={`nav__links ${isNavShowing? 'show__nav' : 'hide__Nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className={({isActive})  => isActive ? 'active-nav' : ''}> {name}</NavLink>
              </li>
            );
          })}
        </ul>

{/* 홈메뉴 배열화 */}


  <button className="nav__toggle-btn " onClick={()=>{
setisNavShowing(!isNavShowing)
// 토글 클릭 활성화


  }}>
{

  isNavShowing ?  <MdOutlineClose/>: <GoThreeBars/>
}

  </button>
      </div>



    </nav>
// 토글



  );
};

export default Navbar;