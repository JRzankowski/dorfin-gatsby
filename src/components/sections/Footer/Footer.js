import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background-color: white;
  height: 25px;
  text-align: center;
  p{
    margin: 0;
    font-size: 12px;
    color: #363636;
    line-height: 25px;
  }
  
`

const Footer = ()=>{
  return(
    <FooterWrapper><p>Copyright © 2020 All rights reserved</p></FooterWrapper>
  )
}

export default Footer