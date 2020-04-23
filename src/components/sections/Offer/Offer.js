import React from "react"
import styled from "styled-components"
import OfferBox from "./OfferBox"

const OfferWrapper = styled.section`
  text-align: center;
  background: white;
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  padding: 30px 0 40px;
`
const OfferH1 = styled.h2`
  font-size: 24px;
  color: #283651;
  text-transform: uppercase;
  position: relative;
  padding: 0 10px;
  &:before{
    content: "";
    width: 75px;
    height: 2px;
    background-color: #004F92;
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
  }
`

const AboutUsP = styled.p`
  display: inline-block;
  font-size: 16px;
  color: #363636;
  position: relative;
  padding: 0 25px;
  font-family: Lato,serif;
  font-weight: 400;
  line-height: 1.4;
  max-width: 1000px;
  margin: 20px auto 0;
`

const OfferPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`


const Offer = () => {
  return (
    <OfferWrapper>
      <OfferH1>Oferta</OfferH1>
      <AboutUsP>Zapraszamy do zapoznania się ze szczegółową ofertą:</AboutUsP>
      <OfferPanel>
        <OfferBox/>
        <OfferBox/>
        <OfferBox/>
        <OfferBox/>
        <OfferBox/>
        <OfferBox/>
      </OfferPanel>
    </OfferWrapper>

  )
}
export default Offer