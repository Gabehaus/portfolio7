import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import FBlogo from "../images/FBlogo.svg"
import TwitterLogo from "../images/TwitterLogo.svg"
import resume from "../pdf/resume.pdf"

const Footer = () => {
  return (
    <Row style={{ color: "#ae9eff" }} className='my-5'>
      <Col xl={10} className='mx-auto my-5'>
        <Row className='my-5'>
          <Col xl={4} className='footer-col'>
            <h3>STAY CONNECTED</h3>
            <p className='footer-p'>Sign up for our monthly newsletter</p>
            <form className='footerForm'>
              <input
                type='text'
                id='email2'
                name='email2'
                className='formInput'
              />
              <button type='submit' value='Submit' className='subButton'>
                Submit Email{" "}
              </button>
            </form>
            <Image src={FBlogo} className='logo1' />
            <Image src={TwitterLogo} className='logo1 logo1b' />
          </Col>
          <Col xl={4} className='footer-col'>
            <h3>SITE DESIGN</h3>
            <p className='footer-p'>
              All Lucid Media Group software and web applications designed and
              coded (front-to-back) by{" "}
              <span style={{ color: "#ae9eff" }}>Gabriel Hauschildt</span>
            </p>
            <Link
              to={resume}
              target='_blank'
              download
              style={{
                textDecoration: "underline",
                color: "#ae9eff",
                fontFamily: "Arial"
              }}
            >
              Download My Resume
            </Link>
          </Col>
          <Col xl={4} className='footer-col'>
            {" "}
            <h3> NAVIGATE</h3>
            <ul className='navLnx'>
              <li>
                <a href='/#work' className='a'>
                  Work
                </a>
              </li>
              <li>
                <a href='/#skills' className='a'>
                  Skills
                </a>
              </li>
              <li>
                <a href='/#contact' className='a'>
                  Contact
                </a>
              </li>
            </ul>
            <h3> EXTERNAL LINKS</h3>
            <ul className='exLnx'>
              <li>
                <a
                  href='https://ghcodingdiary.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='a'
                >
                  Coding Diary
                </a>
              </li>
              <li>
                <a
                  href='https://fathackertest.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='a'
                >
                  Fat Hacker App
                </a>
              </li>
              <li>
                <a
                  href='http://calteksolutions.com/shop'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='a'
                >
                  Calteksolutions.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer
