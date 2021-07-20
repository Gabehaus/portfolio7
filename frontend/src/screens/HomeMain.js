import React, { useEffect, useState, useRef } from "react"

import { Row, Col, Container } from "react-bootstrap"
import { gsap } from "gsap"
import Aos from "aos"
import useMousePosition from "../hooks/useMousePosition"
import useScrollPosition from "@react-hook/window-scroll"
import ThreeD1 from "../components/ThreeD1"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Work from "../components/Work"

const HomeMain = () => {
  const [screen, setScreen] = useState("")
  const { x, y } = useMousePosition()
  const scrollY = useScrollPosition(60 /*fps*/)
  const [radius, setRadius] = useState(350)

  const buttonOneRef = useRef(null)
  const buttonOneTween = useRef(null)
  const buttonOneTween2 = useRef(null)

  useEffect(() => {
    buttonOneTween.current = gsap.to(buttonOneRef.current, {
      scaleY: "1.05",
      letterSpacing: "0",
      ease: "power1.out",
      // color: "#084aff",
      border: "solid 5px #3108ff",

      duration: 0.6,
      paused: true
    })

    buttonOneTween2.current = gsap.to(buttonOneRef.current, {
      color: "#2181ff",

      duration: 1,
      paused: true
    })
  }, [])

  const onMouseEnterHandler = () => {
    buttonOneTween.current.play()
    buttonOneTween2.current.play()
  }
  const onMouseLeaveHandler = () => {
    buttonOneTween.current.reverse()
    buttonOneTween2.current.reverse()
  }

  useEffect(() => {
    Aos.init({
      duration: 2000
    }) // initialize animate on scroll
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".hi-text", {
      clipPath: "inset(0% 0% 0%)",
      webkitClipPath: "inset(0% 0% 0%)",
      delay: 1,
      duration: 1
    })
      .to(
        ".i-build-text",
        {
          clipPath: "inset(0% 0% 0%)",
          webkitClipPath: "inset(0% 0% 0%)",

          duration: 1
        },
        "+=.6"
      )

      .to(
        ".small-text-animation-wrapper",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",

          duration: 1
        },
        "+=1"
      )
      .to(
        ".lin",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",

          duration: 1
        },
        "-=1.3"
      )
      .to(
        ".logo",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",

          duration: 1
        },
        "-=1.3"
      )
      .to(
        ".contact-button",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",

          duration: 0.3
        },
        "-=.9"
      )
      .to(
        " .selfie-wrapper-mobile",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
          // duration: 0.8
        },
        "-=1.3"
      )
      .to(
        ".selfie-wrapper",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
          // duration: 0.8
        },
        "-=1"
      )
      .to(
        ".contact-me",
        {
          text: "Contact Me!"
          // duration: 0.8
        },
        "-=.6"
      )
  })

  //set screen variable
  useEffect(() => {
    const screenSet = () => {
      const radiusAdjusted = Number(window.innerWidth) * 0.23 - 91
      setRadius(radiusAdjusted)
      if (window.innerWidth < 1400 && window.innerWidth > 800) {
        setScreen("Laptop")

        return
      }

      if (window.innerWidth < 1200 && window.innerWidth > 580) {
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

    return _ => {
      window.removeEventListener("resize", screenSet)
    }
  }, [])

  return (
    <Container
      fluid
      style={{ background: "#0d0d0d", overflowX: "hidden !important" }}
    >
      {/* row 1*/}
      <Row>
        <Col
          className='column1'
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
        >
          {/* row 1 a */}
          <Row>
            <Col className='column1b'>
              {" "}
              {/* row 1 a a */}
              <Row
                className='h1'
                onClick={() => {
                  alert(window.innerWidth)
                }}
              >
                Hi, I'm Gabe
              </Row>
              <Row className='h1 h1b'>I build websites</Row>
              <Row className='h2'>
                {" "}
                <p className='small-text-animation-wrapper'>
                  {" "}
                  Node.js - React{screen === "Ipad" ? <br /> : null}
                  {screen !== "Ipad" ? " -" : null} Javascript - Typescript
                </p>
              </Row>
              <Row>
                <Col className='small-text px-3'>
                  <input
                    type='button'
                    onClick={e => {
                      e.preventDefault()
                      window.location.href = "#contact"
                    }}
                    value='Contact Me!'
                    className='contact-button'
                    ref={buttonOneRef}
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* end of row 1a */}
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
          className='column2'
        >
          <Row>
            <Col className='column2b'>
              <ThreeD1 x={x} y={y} scrollY={scrollY} />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* end of row 1 */}
      <Skills radius={radius} />

      <Contact />
      <Work />

      <div style={{ minHeight: "100vh" }}>hi</div>
    </Container>
  )
}

export default HomeMain
