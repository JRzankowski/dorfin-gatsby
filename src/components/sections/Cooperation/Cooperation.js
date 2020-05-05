import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import OfferBox from "../Offer/OfferBox"


const CoOpsWrapper = styled.section`
  text-align: center;
  background: white;
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  padding: 120px 0 40px;
  .slider-arrow{
    opacity: .5;
    position: relative;
    transition: .1s;
    z-index: 22;
    &:hover{
      opacity: .9;
    }
    &.right{
      right: 15px;
    }
    &.left{
      left: 15px;
    }
  }
`
const CoOpsH2 = styled.h2`
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
const CoOpsP = styled.p`
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

const CoOpsCarouseleWrapper = styled.div`
  margin-top: 20px;
  @media(min-width: 1127px){
    display: none;
  }
  div{
    img{
    width: 100%;
    }
  }
`
const CoOpsSlideText = styled.div`
    font-family: Lato, serif;
    margin-top: 15px;
    color: #444;
    height: 95px;
    position: relative;
    &:after{
      content: "";
      width: 75px;
      height: 2px;
      background-color: #aaaaaa;
      position: absolute;
      left: 50%;
      bottom: 124px;
      transform: translateX(-50%);
      z-index: 22;
      }
    p{
      padding: 0 5px;
      margin-top: 0;
    }
`

const CoOpsCompaniesWrapper = styled.div`
  display: none;
  @media(min-width: 1127px){
    display: flex;
    max-width: 1200px;
  }
  @media(min-width: 1200px){
    display: flex;
    max-width: 1200px;
  }
  @media(min-width: 1350px){
    max-width: 1350px;
  }
  margin: 50px auto 0;
  .slide-container{
    width: 25%;
    p{
      @media(min-width: 1127px){
        padding: 0 30px;
      }
    }
  }
`

const Cooperation = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx(filter: {frontmatter: {name: {eq: "coop"}}}) {
      nodes {
        frontmatter {
          icon {
            childImageSharp {
              fluid {
                src
                srcSet
              }
            }
          }
        }
        body
      }
    }
  }
    `)
  console.log(data)
  return (
    <CoOpsWrapper name="coop">
      <CoOpsH2>Współpracujemy</CoOpsH2>
      <CoOpsP>Aby zapewnić możliwie pełną realizację potrzeb klientów i jednocześnie zapewnić najwyższą jakość
        świadczonych usług, współpracujemy z podmiotami działającymi w branżach spoza naszej specjalizacji.</CoOpsP>
      <CoOpsCarouseleWrapper>
        <Carousel
          arrowLeft={<FaAngleDoubleLeft className='slider-arrow left'/>}
          arrowLeftDisabled={<FaAngleLeft className='slider-arrow left'/>}
          arrowRight={<FaAngleDoubleRight className='slider-arrow right'/>}
          arrowRightDisabled={<FaAngleRight className='slider-arrow right'/>}
          addArrowClickHandler
          clickToChange
          keepDirectionWhenDragging
          slidesPerPage={4}
          disabled
          arrows
          breakpoints={{
            500: {
              slidesPerPage: 1
            },
            900: {
              slidesPerPage: 2
            },
            1125: {
              slidesPerPage: 3
            }

          }}
        >
          {data.allMdx.nodes.map((value, index) => {
            return (
              <div className='slide-container' key={index}>
                <img alt='company logo' src={value.frontmatter.icon.childImageSharp.fluid.src}/>
                <CoOpsSlideText className="legend"><MDXRenderer>{value.body}</MDXRenderer></CoOpsSlideText>
              </div>
            )

          })}
        </Carousel>
      </CoOpsCarouseleWrapper>
      <CoOpsCompaniesWrapper>
        {data.allMdx.nodes.map((value, index) => {
          return (
            <div className='slide-container' key={index}
                 data-sal="slide-right"
                 data-sal-delay={index + 100}
                 data-sal-duration="1000"
            >
              <img alt='company logo' src={value.frontmatter.icon.childImageSharp.fluid.src}/>
              <CoOpsSlideText className="legend"><MDXRenderer>{value.body}</MDXRenderer></CoOpsSlideText>
            </div>
          )

        })}
      </CoOpsCompaniesWrapper>
    </CoOpsWrapper>
  )
}
export default Cooperation