import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap"
import HeaderLink from "./HeaderLink.js"
import logo3 from "../images/logo3.png"
//#555eff #fa75d2  #21ffe5"
const Header = () => {
  return (
    <Navbar style={{ background: "#0d0d0d" }} expand='lg' variant='dark'>
      <Navbar.Brand href='#home' className='logo'>
        {" "}
        <img
          alt=''
          src={logo3}
          width={
            window.innerWidth > 1100
              ? "250"
              : window.innerWidth > 760
              ? "150"
              : "160"
          }
          className='d-inline-block align-top'
          style={{ marginLeft: "6vw" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto nav'>
          <HeaderLink name='Work' hrf='#work' />
          <HeaderLink name='Skills' hrf='#skills' />
          <HeaderLink name='Resume' hrf='#contact' />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
