import React, { useState } from "react"
import styled from "styled-components"
import OfferBox from "./OfferBox"
import { graphql, useStaticQuery } from "gatsby"

const OfferWrapper = styled.section`
  text-align: center;
  background: white;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
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
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 597px){
    margin-top: 35px;
  }  
`


const Offer = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx(filter: {frontmatter: {name: {eq: "offer"}}}) {
      nodes {
        frontmatter {
          title
          icon {
            childImageSharp {
              fluid(maxWidth: 64, maxHeight: 64) {
                src
              }
            }
          }
        }
        body
      }
    }
  }
    `)


  return (
    <>
      <OfferWrapper>
        <OfferH1>Oferta</OfferH1>
        <AboutUsP>Zapraszamy do zapoznania się ze szczegółową ofertą:</AboutUsP>
        <OfferPanel>

          {data.allMdx.nodes.map((value, index) => {
            return (
              <>
                <OfferBox key={index} title={value.frontmatter.title}
                          icon={value.frontmatter.icon.childImageSharp.fluid.src}
                          text={value.body}
                />

              </>
            )
          })}
        </OfferPanel>
      </OfferWrapper>
    </>

  )
}
export default Offer