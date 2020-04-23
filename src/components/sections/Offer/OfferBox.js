import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"



const OfferPanelBox = styled.div`
  width: 290px;
  height: 206px;
  margin-top: 35px;
  position: relative;
  overflow: hidden;
  background-color: #004F92;
  cursor: pointer;
  &:nth-of-type(2n){
    background-color: #000427;
  }
  &:after{
    content: "";
    position: absolute;
    top: -130%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right, 
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0.0) 100%
    );
  }
  &:hover:after{
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  &:active:after {
  opacity: 0;
}
  
`
const OfferPanelBoxContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  p{
    color: white;
    font-size: 16px;
    font-family: Lato,serif;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
const IconWrapper = styled.img`
  width: 64px;
  height: 64px;
`;
const OfferBox = (props)=>{
  return(
    <OfferPanelBox>
      <OfferPanelBoxContent>
        <IconWrapper src={props.icon}/>
        <p>{props.title}</p>
      </OfferPanelBoxContent>
    </OfferPanelBox>

  )
}

export default OfferBox