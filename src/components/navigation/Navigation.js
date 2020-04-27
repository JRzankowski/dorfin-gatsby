import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import useOutsideClick from "./useOutsideRef"
import { Link } from "react-scroll"

const HeaderWrapper = styled.header`
  //overflow: hidden;
  display: flex;
  align-items: center;
  justify-self: center;
  position: fixed;
  top: ${props => props.visible ? "0" : "-75px"};
  width: 100vw;
  height: ${props => props.smaller ? "60px" : "65px"};
  box-shadow: ${props => props.smaller ? "rgba(2, 12, 27, 0.2) 0 10px 30px -10px" : null};
  opacity: ${props => props.smaller ? ".95" : null};
  transition: .6s;
  z-index: 4;
  background: white;
 
`
const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
  @media(min-width: 750px){
     //justify-content: space-between;
  }
`

const NavigationMenuMobile = styled.div`
  position: relative;
  width: 30px;
  height: 24px;
  cursor: pointer;
  @media(min-width: 790px){
     display: none;
  }
`

const NavigationMenuBurger = styled.div`
  background-color: #283651;
  position: absolute;
  top: 50%;
  width: 20px;
  height: 2px;
  transition-duration: 0.22s;
  border-radius: 3px;
  opacity: 1;
  transform: ${props => props.menuActive ? "rotate(45deg)" : "rotate(0)"};
  transition: transform .1s .2s;
    &::after,
    &::before {
      content: "";
      display: block;
      background-color: #283651;
      position: absolute;
      left: auto;
      right: 0;
      width: 100%;
      height: 2px;
      transform: rotate(0deg);
      border-radius: 4px;
      transition: .3s;
    }
    &::after {
      bottom: ${props => props.menuActive ? "0" : "-5px"};
      transform: ${props => props.menuActive ? "rotate(-90deg)" : "rotate(0)"};
      transition: bottom .2s ease-out, transform .1s .2s ease-out;
    }
    &::before {
      top: -5px;
      opacity: ${props => props.menuActive ? "0" : "1"};
      transition: top .2s ease-out, opacity ease-out .1s .2s;
    }
`
const NavigationNumber = styled.a`
  font-size: ${props => props.mobileMenu ? "17px" : "12px"}!important;
  position: ${props => props.mobileMenu ? "relative" : "unset"};
  top: ${props => props.mobileMenu ? "10px" : null};
  font-weight: 800;
  color: #283651;
  text-decoration: none;
  @media(min-width: 790px){
     padding: 10px 10px;
     border: 2px solid #283651 ;
     transition: .1s;
     justify-self: end;
     font-size: 15px;
     margin-right: 20px;
     &:hover{
      background-color: #283651;
      color: white;
     }
  }
`

const LogoWrapper = styled.div`
  justify-self: center;
  width: 130px;
  height: 60px;
  overflow: hidden;

`

const Logo = styled(Image)`
  object-fit: cover;
  position: relative;
  bottom: 8px;
`

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 80%;
  transform: ${props => props.menuActive ? "translate(0)" : "translate(100%)"};
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(2, 12, 27, 0.2) 0 10px 30px -10px;
  transition: 1s;
  padding-bottom: 165px;
  @media(min-width: 790px){
     display: none;
  }
  @media(orientation: landscape) and (max-height: 450px){
      width: 50%;
      height: auto;
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    li{
      border-bottom: 1px solid black;
      padding: 8px;
      cursor: pointer;
      &:first-child{
        border: none;
      }
      &:last-child{
        text-align: center;
        border-bottom: none;
      }
      a{
        font-size: 17px;
        font-weight: 400;
        letter-spacing: 1px;
        @media(min-width: 36px){
          font-size: 20px;
          }
        @media(orientation: landscape) and (max-height: 450px){
          font-size: 17px;
         }
         @media(orientation: landscape) and (max-height: 320px){
          font-size: 14px;
          }
      }
    }
  }
`
const NavigationMenuDesktop = styled.nav`
  display: none;
  @media(min-width: 790px){
     display: block;
  }
  position: relative;
  ul{
    display: flex;
    justify-content: center;
    li{
      list-style: none;
      margin-right: 35px;
      transition: .1s;
      cursor: pointer;
      font-size: 14px;
      &:hover{
        color: #283651
      }
    }
  }
`


const Navigation = () => {

  const [menuActive, setMenuActive] = useState(false)

  // const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)

  const [menuVisible, setMenuVisible] = useState(true)
  const [smallerMenu, setSmallerMenu] = useState(false)
  const toggleMenu = () => setMenuActive(!menuActive)

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  //   return function cleanup() {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // })


  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset
  //   let visible = null
  //   if (!menuActive) {
  //     visible = prevScrollPos > currentScrollPos
  //   } else {
  //     visible = true
  //   }
  //   setPrevScrollPos(currentScrollPos)
  //   setMenuVisible(visible)
  //   if (currentScrollPos > 100) {
  //     setSmallerMenu(true)
  //   } else {
  //     setSmallerMenu(false)
  //   }
  // }
  const data = useStaticQuery(graphql`
    {
        file(name: { eq: "dorfin" }) {
            childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)

  const ref = useRef()

  useOutsideClick(ref, () => {
    if (menuActive) {
      toggleMenu()
    }
  })


  return (
    <HeaderWrapper menuActive={menuActive} smaller={smallerMenu} visible={menuVisible}>
      <NavigationWrapper>
        <NavigationMenuMobile onClick={toggleMenu}>
          <NavigationMenuBurger menuActive={menuActive}/>
        </NavigationMenuMobile>
        <LogoWrapper>
          <Logo fluid={data.file.childImageSharp.fluid}/>
        </LogoWrapper>
        <NavigationMenuDesktop>
          <ul>
            <li><Link smooth={true} spy={true} to="start">Start</Link></li>
            <li><Link smooth={true} to="aboutUs">O nas</Link></li>
            <li><Link smooth={true} to="offer">Oferta</Link></li>
            <li><Link smooth={true} to="coop">Współpracujemy</Link></li>
            <li><Link smooth={true} to="contact">Kontakt</Link></li>
          </ul>
        </NavigationMenuDesktop>
        <NavigationNumber href="tel:+1123-456-7890">+48 570 389 999</NavigationNumber>
      </NavigationWrapper>
      <DropdownMenu menuActive={menuActive} ref={ref}>
        <ul>
          <li><Logo fluid={data.file.childImageSharp.fluid}/></li>
          <li><Link onClick={toggleMenu} smooth={true} to="start">Start</Link></li>
          <li><Link onClick={toggleMenu} smooth={true} to="aboutUs">O nas</Link></li>
          <li><Link onClick={toggleMenu} smooth={true} to="offer">Oferta</Link></li>
          <li><Link onClick={toggleMenu} smooth={true} to="coop">Współpracujemy</Link></li>
          <li><Link onClick={toggleMenu} smooth={true} to="contact">Kontakt</Link></li>
          <li><NavigationNumber mobileMenu menuItem href="tel:+1123-456-7890">+48 570 389 999</NavigationNumber></li>
        </ul>
      </DropdownMenu>
    </HeaderWrapper>
  )
}

export default Navigation

