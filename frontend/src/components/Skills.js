import React, { useState, useEffect, useRef } from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import resume from "../pdf/resume.pdf"
import useVisible from "../hooks/useVisible"
import SkillSelector from "./SkillSelector"

import Aos from "aos"
import "aos/dist/aos.css"

const Skills = ({ skill, radius }) => {
  const chart = "languages"
  const [screen, setScreen] = useState("")
  const elemRef = useRef()
  const isVisible = useVisible(elemRef)

  useEffect(() => {
    Aos.init({
      duration: 2000
    }) // initialize animate on scroll
  }, [])

  //set screen variable
  useEffect(() => {
    const screenSet = () => {
      if (window.innerWidth > 1000) {
        setScreen("Desktop")
        return
      }

      if (window.innerWidth < 1080 && window.innerWidth > 580) {
        setScreen("Ipad")
        return
      }

      if (window.innerWidth < 580) {
        setScreen("Mobile")
        return
      }
    }

    window.addEventListener("resize", screenSet)

    screenSet()
  }, [])

  return (
    <Row className='justify-content-center no-gutters skills-row'>
      {screen !== "Mobile" ? (
        <Col
          lg={4}
          md={12}
          className='bubble-box'
          style={{
            border: "none 2px yellow"
          }}
          data-aos='fade-right'
          ref={elemRef}
        >
          {isVisible && (
            <SkillSelector
              skillSet={chart}
              screen={screen}
              skill={skill}
              radius={radius}
            />
          )}
        </Col>
      ) : null}
      <Col
        lg={5}
        md={12}
        className='what-im-into'
        data-aos={screen !== "Mobile" ? "fade-left" : null}
      >
        <Row className='into-row'>
          <Col
            md={12}
            className='work-title2 mt-5'
            style={{ background: "transparent", letterSpacing: "3px" }}
          >
            What I'm into
          </Col>{" "}
          <Col
            md={12}
            className='paragraph'
            style={{ background: "transparent" }}
          >
            From <span className='blue-text'>moving businesses online </span>
            to building{" "}
            <span className='blue-text'>full-stack mobile apps</span>, if you
            can dream it I can code it. I try to think of every project I work
            on as a coupling of{" "}
            <span className='blue-text'>art and technology</span>. As Steve Jobs
            said, "it's technology married with liberal arts, married with the
            humanities, that yields us the results that make our hearts sing."
          </Col>
        </Row>
        {screen === "Mobile" ? (
          <Col className='white-i-use-plus-skills'>
            <React.Fragment>
              <Col
                md={12}
                className='work-title3'
                style={{
                  background: "transparent"
                }}
              >
                What I use
              </Col>
              <Col
                md={12}
                style={{
                  marginLeft: "0vw !important",
                  border: "none 2px yellow",
                  paddingLeft: "0vw !important",
                  background: "yellow !important"
                }}
                className='mb-5'
              >
                <SkillSelector
                  skillSet={chart}
                  screen={screen}
                  skill={skill}
                  radius={radius}
                />
              </Col>
            </React.Fragment>
          </Col>
        ) : null}
      </Col>
    </Row>
  )
}

export default Skills
