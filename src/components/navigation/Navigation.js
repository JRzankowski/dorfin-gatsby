import React, {useEffect, useState} from "react"
import styled from 'styled-components';
import {graphql, useStaticQuery} from "gatsby";
import Image from 'gatsby-image';

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
  overflow: hidden;
  height: 100%;

`;

const Logo = styled(Image)`
  object-fit: cover;
`;

const DropdownMenu = styled.div`
  position: absolute;
  height: 300px;
  background: #8093A8;
  width: 100%;
  top: 100%;
 
 
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
    return (
        <HeaderWrapper smaller={smallerMenu} visible={menuVisible}>
            <NavigationWrapper>
                <NavigationMenu onClick={toggleMenu}>
                    <NavigationMenuBurger menuActive={menuActive}/>
                </NavigationMenu>
                <LogoWrapper>
                    <Logo fluid={data.file.childImageSharp.fluid}/>
                </LogoWrapper>
                <NavigationNumber>509-555-389</NavigationNumber>
            </NavigationWrapper>
            <DropdownMenu>
                <ul>
                    <li><a>Start</a></li>
                    <li><a>O nas</a></li>
                    <li><a>Oferta</a></li>
                    <li><a>Współpracujemy</a></li>
                    <li><a>Kontakt</a></li>
                </ul>

            </DropdownMenu>
        </HeaderWrapper>
    )
};

export default Navigation

