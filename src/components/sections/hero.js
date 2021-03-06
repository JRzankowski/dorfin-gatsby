import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "react-scroll"
import Reveal from "react-reveal/Reveal"


const HeroWrapper = styled.section`
  text-align: left;
  background: linear-gradient(to right, #000428 0%, #004e92 100%);
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  &:hover{
    
  }

`

const HeroContent = styled.div`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  @media(min-width: 360px){
   padding: 0 25px;
  }
  @media(min-width: 500px){
   padding: 0 30% 0 25px;
  }
  @media(min-width: 600px){
   padding: 0 35% 0 25px;
  }
  @media(min-width: 700px){
   padding: 0 40% 0 50px;
  }
   @media(min-width: 1200px){
   padding: 0 40% 0 0;
  }
  @media(orientation: landscape) and (max-height: 450px){
     padding: 0 35% 0 25px;
  }
`

const HeroH1 = styled.h2`
  font-size: 28px;
  position: relative;
  font-weight: 600;
  color: #e1e1e1;
  z-index: 1;
  letter-spacing: .4px;
  font-family: 'Montserrat',serif;
  @media(min-width: 500px){
   font-size: 32px;
  }
  @media(min-width: 620px){
   font-size: 36px;
  }
  @media(min-width: 700px){
   font-size: 42px;
  }
   @media(orientation: landscape) and (max-height: 450px){
    font-size: 24px;
  }

  span{
  text-transform: uppercase;
    font-size: 32px;
    color: white;
   
  }
`

const ImageWrapper = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  object-fit: cover;
  opacity: .5;
`

const HeroBtn = styled.button`
    font-family: 'Lato',serif;
    font-weight: 700;
    border-radius: 50px;
    font-size: 16px;
    padding: 8px 14px;
    color: #283651;
    background-color: white;
    line-height: 1.7;
    border: 1px solid transparent;
    transition: .2s;
    &:hover{
      color: white;
      background-color: transparent;
      border: 1px solid white;
    }

`

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
        file(name: { eq: "hero1" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth:2000, duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 50 }){
                   ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
  return (

    <HeroWrapper name="start">
      <ImageWrapper backgroundColor fluid={data.file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%"/>
      <HeroContent>
        <HeroH1 data-sal="fade"
                data-sal-delay="100"
                data-sal-duration="1000"
                >
          Profesjonalne i skuteczne wsparcie doradcze dla biznesu i osób prywatnych.
        </HeroH1>
        <HeroBtn><Link to="aboutUs">Dowiedz się więcej</Link></HeroBtn>
      </HeroContent>

    </HeroWrapper>


  )
}

export default Hero