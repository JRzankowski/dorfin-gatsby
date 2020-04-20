import React, {useEffect, useState,useRef} from "react"
import styled from 'styled-components';
import {graphql, useStaticQuery} from "gatsby";
import Image from 'gatsby-image';
import useOutsideClick from "./useOutsideRef";

const HeaderWrapper = styled.header`
  //overflow: hidden;
  display: flex;
  align-items: center;
  justify-self: center;
  position: fixed;
  top: ${props => props.visible ? '0' : '-75px'};
  width: 100vw;
  height: ${props => props.smaller ? '60px' : '75px'};
  box-shadow: ${props => props.smaller ? 'rgba(2, 12, 27, 0.2) 0 10px 30px -10px' : null};
  transition: .6s;
  z-index: 3;
`;
const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100%;
`;

const NavigationMenu = styled.div`
  position: relative;
  width: 30px;
  height: 24px;
  cursor: pointer;
`;

const NavigationMenuBurger = styled.div`
  background-color: #283651;
  position: absolute;
  top: 50%;
  width: 20px;
  height: 2px;
  transition-duration: 0.22s;
  border-radius: 3px;
  opacity: 1;
  transform: ${props => props.menuActive ? 'rotate(45deg)' : "rotate(0)"};
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
      bottom: ${props => props.menuActive ? '0' : '-5px'};
      transform: ${props => props.menuActive ? 'rotate(-90deg)' : 'rotate(0)'};
      transition: bottom .2s ease-out, transform .1s .2s ease-out;
    }
    &::before {
      top: -5px;
      opacity: ${props => props.menuActive ? '0' : '1'};
      transition: top .2s ease-out, opacity ease-out .1s .2s;
    }
`;
const NavigationNumber = styled.span`
  font-size: 12px;
  font-weight: 800;
  color: #283651;
`;

const LogoWrapper = styled.div`
  justify-self: center;
  width: 130px;
  height: 60px;
  overflow: hidden;

`;

const Logo = styled(Image)`
  object-fit: cover;
  position: relative;
  bottom: 8px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 80%;
  transform: ${props => props.menuActive ? 'translate(0)' : 'translate(100%)'};
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(2, 12, 27, 0.2) 0 10px 30px -10px;
  transition: 1s;
  padding-bottom: 165px;

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;



    li{
      border-bottom: 1px solid black;
      padding: 8px;
 
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
      }
      
    }
  }
 
 
`;

const Navigation = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [menuVisible, setMenuVisible] = useState(true);
    const [smallerMenu, setSmallerMenu] = useState(false);
    const toggleMenu = () => setMenuActive(!menuActive);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    });


    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        let visible = null;
        if (!menuActive) {
            visible = prevScrollPos > currentScrollPos;
        } else {
            visible = true;
        }
        setPrevScrollPos(currentScrollPos);
        setMenuVisible(visible);
        if (currentScrollPos > 100) {
            setSmallerMenu(true)
        } else {
            setSmallerMenu(false)
        }
    };
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
    `);

    const ref = useRef();

    useOutsideClick(ref, () => {
        if(menuActive){
            toggleMenu()
        }
    });



    return (
        <HeaderWrapper menuActive={menuActive} smaller={smallerMenu} visible={menuVisible}>
            <NavigationWrapper>
                <NavigationMenu onClick={toggleMenu}>
                    <NavigationMenuBurger menuActive={menuActive}/>
                </NavigationMenu>
                <LogoWrapper>
                    <Logo fluid={data.file.childImageSharp.fluid}/>
                </LogoWrapper>
                <NavigationNumber>509-555-389</NavigationNumber>
            </NavigationWrapper>
            <DropdownMenu menuActive={menuActive} ref={ref}>
                <ul>
                    <li><Logo fluid={data.file.childImageSharp.fluid}/></li>
                    <li><a>Start</a></li>
                    <li><a>O nas</a></li>
                    <li><a>Oferta</a></li>
                    <li><a>Współpracujemy</a></li>
                    <li><a>Kontakt</a></li>
                    <li><NavigationNumber>509-555-389</NavigationNumber></li>
                </ul>
            </DropdownMenu>
        </HeaderWrapper>
    )
};

export default Navigation

