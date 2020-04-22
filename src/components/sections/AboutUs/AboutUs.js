import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"


const AboutUsWrapper = styled.section`
  text-align: center;
  background: white;
  position: relative;
 margin: 0 auto;
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
  position: relative;
  padding: 0 25px;
  font-family: Lato,serif;
  font-weight: 400;
  line-height: 1.4;
  max-width: 1000px;
  margin: 20px auto 0;
`
const AboutUsPMore = styled.div`
  // display: ${props=>props.active ? 'inline-block' : 'none'};
  overflow: hidden;
  max-height: ${props=>props.active ? '1500px' : '0px'};
  transition: max-height 2s ease-out;
  p{
    height: 100%;
    font-size: 16px;
    color: #363636;
    position: relative;
    padding: 0 25px;
    font-family: Lato,serif;
    font-weight: 400;
    line-height: 1.4;
    max-width: 1000px;
    margin: 20px auto 0;
  }
`;
const FactorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
  max-width: 800px;
  margin: 40px auto 0;
`
const Factor = styled.div`
  font-family: 'Lato',serif;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-bottom: 30px;
  @media(min-width: 450px){
    width: 50%;
  }
  @media(min-width: 790px){
    padding: 0 100px;  
  }
  @media(min-width: 900px){
    padding: 0 115px;  
  }
  @media(min-width: 900px){
    padding: 0 50px;  
  }
  @media(orientation: landscape) and (max-height: 450px){
    width: 50%;
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

const AboutUsBtn = styled.button`
    margin: 30px auto;
    font-family: 'Lato',serif;
    font-weight: 600;
    border-radius: 50px;
    font-size: 16px;
    padding: 8px 25px;
    color: white;
    background-color: #015092;
    line-height: 1.7;
    border: 1px solid transparent;
    transition: .2s;
    letter-spacing: .2px;
    display: block;
    outline: none;
    &:hover{
      color: #015092;
      background-color: transparent;
      border: 1px solid #015092;
    }
`


const AboutUs = () => {
  const [moreText, setMoreText] = useState(false)
  const toggleMoreText = () => setMoreText(!moreText);
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
      <AboutUsP>
        Świadczmy usługi doradztwa podatkowego oraz zapewniamy kompleksową obsługę księgową i kadrowo-płacową.
          Naszą misją jest zagwarantowanie bezpieczeństwa podatkowego klientów przy zastosowaniu optymalnych i zgodnych z
          prawem rozwiązań. Z osobami, które skorzystały z naszych usług budujemy długofalowe i elastyczne formy
          współpracy w celu uzyskania ich maksymalnej satysfakcji. Naszą Kancelarię tworzymy w oparciu o cztery
          czynniki:
      </AboutUsP>
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
      <AboutUsPMore active={moreText}>
        <p>
          Kancelaria Doradców Podatkowych Dorfin Przybyszewski Sp.k. istnieje nieprzerwanie od 1991 r. Od
          początku
          działalności skupiamy się na świadczeniu usług doradztwa podatkowego oraz zapewnieniu kompleksowej obsługi
          księgowej i kadrowo-płacowej dla sektora małych i średnich przedsiębiorców oraz osób prywatnych.
          <br/>
          <br/>
          Od 2004 r. nasza siedziba mieści się w ścisłym centrum miasta, pomiędzy zabytkowym Kościołem Św. Jakuba, a Izbą
          Pamięci Historii Skierniewic.
          <br/>
          <br/>
          Do zachowania najwyższych standardów obsługi klienta i nieustannego podnoszenia kwalifikacji obliguje nas
          przynależność do Krajowej Izby Doradców Podatkowych. Wspólnicy Kancelarii są licencjonowanymi doradcami
          podatkowymi, posiadają ubezpieczenie OC i wykonują zawód na podstawie ustawy o doradztwie podatkowym i w zgodzie
          z zasadami etyki sformułowanymi przez samorząd doradców podatkowych.
          <br/>
          <br/>
          Koncentrujemy się na zapewnieniu najwyższej jakości świadczonych usług poprzez realizację procedur w zakresie
          kontroli wewnętrznej, bezpieczeństwa i higieny pracy oraz zarządzania bezpieczeństwem informacji. Wierzymy w
          koncepcję społecznej odpowiedzialności biznesu polegającą na podejmowaniu aktywnych działań na rzecz ochrony
          środowiska naturalnego.
          <br/>
          <br/>
          Zaufanie, którym w ciągu ponad 25 lat działalności obdarzyły nas setki klientów jest dla nas największym powodem
          do dumy i stanowi motywację do dalszego rozwoju i samodoskonalenia.
        </p>
        </AboutUsPMore>
      <AboutUsBtn onClick={toggleMoreText}>{moreText ? 'Zobacz mniej...' : 'Zobacz więcej...'}</AboutUsBtn>
    </AboutUsWrapper>

  )
}

export default AboutUs