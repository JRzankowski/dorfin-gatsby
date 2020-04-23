import React from "react"
import styled from "styled-components"



const OfferPanelBox = styled.div`
  width: 290px;
  height: 206px;
  margin-top: 35px;
  position: relative;
  
`
const OfferPanelBoxContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  img{
    width: 64px;
    height: 64px;
  }
  p{
    color: white;
    font-size: 16px;
  }
`;
const ImageWrapper= styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  opacity: .5;

  
`;
const OfferBox = ()=>{
  return(
    <OfferPanelBox>
      <ImageWrapper src='https://picsum.photos/200/300'/>
      <OfferPanelBoxContent>
        <img alt='icon' src='https://via.placeholder.com/150'/>
        <p>Usługa</p>
      </OfferPanelBoxContent>
    </OfferPanelBox>

  )
}

export default OfferBox