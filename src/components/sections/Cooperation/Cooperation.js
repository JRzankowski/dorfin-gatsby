import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const CoOpsWrapper = styled.section`
  text-align: center;
  background: white;
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  padding: 30px 0 40px;
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

const Cooperation = ()=>{
  const data = useStaticQuery(graphql`
  {
    allMdx(filter: {frontmatter: {name: {eq: "factor"}}}) {
      nodes {
        frontmatter {
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
  console.log(data)
  return(
    <CoOpsWrapper>
      <CoOpsH2>Współpracujemy</CoOpsH2>
      <CoOpsP>Aby zapewnić możliwie pełną realizację potrzeb klientów i jednocześnie zapewnić najwyższą jakość świadczonych usług, współpracujemy z podmiotami działającymi w branżach spoza naszej specjalizacji.</CoOpsP>
    </CoOpsWrapper>
  )
}
export default Cooperation