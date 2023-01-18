import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png"
import {Nav, Navbar, Offcanvas} from "react-bootstrap";
import Link from "next/link";
import {useLocation} from "react-router";
import {useRouter} from "next/router";

enum NAV {
  GAME = '/games',
  CAREERS = '/careers',
  ABOUT = '/about',
  CONTACT = '/contact',
  PORTFOLIO = '/portfolio',
  HOME_PAGE = '/'
}

const HeaderPage: React.FunctionComponent = () => {
  const location = useRouter()
  console.log(location)
  const getActiveKey = () =>{
    let path_name = location.pathname;
    let active_key = '/';
    if (path_name.includes(NAV.ABOUT)) {
      active_key = NAV.ABOUT;
    } else if (path_name.includes(NAV.CAREERS)) {
      active_key = NAV.CAREERS;
    } else if (path_name.includes(NAV.GAME)) {
      active_key = NAV.GAME;
    } else if (path_name.includes(NAV.CONTACT)) {
      active_key = NAV.CONTACT;
    } else if (path_name.includes(NAV.PORTFOLIO)) {
      active_key = NAV.PORTFOLIO;
    }
    return active_key;
  }

  return (
    <div>
      <div className="header">
        <div className="d-flex justify-content-between align-items-center">
          <Link href={"/"}>
            <Image className={"logo"} height={40} src={logo} alt={"Logo"}/>
          </Link>
          <div style={{position: "relative"}}>
            <input className="input_search" type="text" placeholder="Search Bar"/>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <Link href={"/sign-in"}>
            <i style={{color: "#fe954f", fontSize: "18px"}} className="fa-solid fa-user-large"></i>
            <span className="sign-in-text">Sign in</span>
          </Link>
        </div>
      </div>
      <Navbar expand={'md'}>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <Link href={"/"}>
                <Image className={"logo"} height={40} src={logo} alt={"Logo"}/>
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1">
              <Link className={`nav-link ${getActiveKey() === NAV.HOME_PAGE && "active"}`} href={"/"}>Home</Link>
              <Link className={`nav-link ${getActiveKey() === NAV.GAME && "active"}`} href={"/games"}>Games</Link>
              <Link className={`nav-link ${getActiveKey() === NAV.CAREERS && "active"}`} href={"/careers"}>Careers</Link>
              <Link className={`nav-link ${getActiveKey() === NAV.ABOUT && "active"}`} href={"/about"}>About</Link>
              <Link className={`nav-link ${getActiveKey() === NAV.CONTACT && "active"}`} href={"/contact"}>Contact</Link>
              <Link className={`nav-link ${getActiveKey() === NAV.PORTFOLIO && "active"}`} href={"/portfolio"}>Portfolio</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  )
}
export default HeaderPage