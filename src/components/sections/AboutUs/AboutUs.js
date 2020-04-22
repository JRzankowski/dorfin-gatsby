import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import {MDXRenderer} from "gatsby-plugin-mdx";


const AboutUsWrapper = styled.section`
  text-align: center;
  background: white;
  position: relative;

  width: 100%;
  overflow: hidden;
  padding: 30px 0 40px;
`
const AboutUsH1 = styled.h1`
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
  margin-top: 20px;
  position: relative;
  padding: 0 25px;
  font-family: Lato,serif;
  font-weight: 400;
  line-height: 1.4;
`
const FactorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
  margin-top: 30px;
`
const Factor = styled.div`
  font-family: 'Lato',serif;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-bottom: 20px;
  img{
    
  }
  span{
    font-size: 18px;
    color:#015092 ;
    text-transform: uppercase;
    font-weight: 600;
   }
   p{
    font-size: 16px;
    color: #444;
    line-height: 1.6;
   }
`


const AboutUs = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          icon {
            childImageSharp {
              fluid(maxWidth: 64, maxHeight: 64) {
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

  return (
    <AboutUsWrapper>
      <AboutUsH1>kancelaria doradców podatkowych dorfin</AboutUsH1>
      <AboutUsP>Świadczmy usługi doradztwa podatkowego oraz zapewniamy kompleksową obsługę księgową i kadrowo-płacową.
        Naszą misją jest zagwarantowanie bezpieczeństwa podatkowego klientów przy zastosowaniu optymalnych i zgodnych z
        prawem rozwiązań. Z osobami, które skorzystały z naszych usług budujemy długofalowe i elastyczne formy
        współpracy w celu uzyskania ich maksymalnej satysfakcji. Naszą Kancelarię tworzymy w oparciu o cztery
        czynniki:</AboutUsP>
      <FactorsWrapper>
        {data.allMdx.nodes.map((value, index) => {
          return (
            <Factor key={index}>
              <div>
                <img alt={value.title} src={value.frontmatter.icon.childImageSharp.fluid.src} key={index}/>
              </div>
              <span>{value.frontmatter.title}</span>
              <MDXRenderer>{value.body}</MDXRenderer>
            </Factor>
          )

        })}
      </FactorsWrapper>
    </AboutUsWrapper>

  )
}

export default AboutUs