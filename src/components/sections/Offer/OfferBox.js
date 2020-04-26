import React, { useRef, useState } from "react"
import styled from "styled-components"
import useOutsideClick from "../../navigation/useOutsideRef"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MdClose } from "react-icons/md"

const OfferPanelBox = styled.div`
  width: ${props => props.isOpen ? "90vw" : "290px"} ;
  height: ${props => props.isOpen ? "300px" : "206px"};
  margin-top: ${props => props.isOpen ? "0" : "35px"};
  position: relative;
  transform:${props => props.isOpen ? "translateY(5%)" : null};
  overflow: hidden;
  background-color: #004F92;
  cursor: ${props => props.isOpen ? "unset" : "pointer"};
  z-index: ${props => props.isOpen ? "3" : "2"};
  
  overflow-y: ${props => props.isOpen ? "scroll" : null};
  box-shadow: rgba(2,12,27,0.2) 0 10px 30px -10px;
  border-radius: ${props => props.isOpen ? "5px" : null};
  // opacity: ${props => props.isOpen ? "0" : "1"};
  // animation: ${props => props.isOpen ? "fade-in .1s linear both" : null};
  // @keyframes fade-in{
  //  100%{
  //    opacity:1;
  //  }
  // }
  //
  @media(min-width: 580px){
    position:${props => props.isOpen ? "absolute" : "relative"} ;
    transform:${props => props.isOpen ? "translate(0%,0%)" : null};
    height: ${props => props.isOpen ? "620px" : "206px"};
    overflow: hidden;
 
  }
  @media(min-width: 870px){
    height: ${props => props.isOpen ? "500px" : "206px"};
    transform:${props => props.isOpen ? "translate(0%,-12%)" : null};
  }
   @media(min-width: 970px){
    max-width: 900px;
  }
  &:nth-of-type(2n){
    background-color: #000427;
  }
  @media(min-width: 580px){
    margin: 0;
    background-color: #000427;
    &:nth-of-type(1),
    &:nth-of-type(4),
    &:nth-of-type(5){
      background-color: #004F92;
    }
  }
  @media(min-width: 870px){
    background-color: #004F92;
      &:nth-of-type(2n){
        background-color: #000427;
      }   
    }
  
  &:after{
    content: "";
    position: absolute;
    top: -130% ;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    filter: ${props => props.isOpen ? "blur(10px)" : null};
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

  &:${props => props.isOpen ? null : "hover:after"}{
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
  width: 100%;
  position: absolute;
  top: ${props => props.isOpen ? null : "50%"};
  left: ${props => props.isOpen ? null : "50%"};
  transform: ${props => props.isOpen ? null : "translate(-50%,-50%)"};
  opacity: ${props => props.isOpen ? "0" : "1"};
  animation: ${props => props.isOpen ? "fade-in 1s  linear both" : null};
  padding: 0 20px 20px;
   svg{
   color: white;
    position: absolute;
    font-size: 20px;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
  
  
  @keyframes fade-in{
   100%{
     opacity:1;
   }
  }
  
  p{
    color: white;
    font-size: ${props => props.isOpen ? "24px" : "16px"};
    font-family: Lato,serif;
    text-transform: uppercase;
    font-weight: 600;
  }
`
const IconWrapper = styled.img`
  width: 64px;
  height: 64px;
  display: ${props => props.isOpen ? "none" : "auto"};
`
const OfferModalText = styled.div`

  p{
    text-transform: none;
    font-size: 16px;
    font-family: 'Lato',serif;
    font-weight: 400;
    line-height: 1.25;
  }
 
  ul{
    text-align: left;
    height: auto;
    overflow-y: scroll;
    list-style: square;
    padding-left: 30px;
    @media(min-width: 580px){
    overflow-y: unset;
  }
  
    li{
      list-style: square;
      font-size: 15px;
      font-family: 'Lato',serif;
      margin-bottom: 5px;
      color: #e1e1e1;
      
    }
  }
  

  `
const OfferBox = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = (e) => {
    if (!modalOpen) {
      setModalOpen(true)

    }
    console.log(e.target)
  }
  const closeModal = () => {
    setModalOpen(false)
    for (const el of document.querySelectorAll(".modal")) {
      el.scrollTop = 0
    }

  }
  const ref = useRef()

  useOutsideClick(ref, () => {
    if (modalOpen) {
      closeModal()
    }
  })
  return (
    <>
      <OfferPanelBox className='modal' ref={ref} isOpen={modalOpen} onClick={openModal}>
        <OfferPanelBoxContent isOpen={modalOpen}>
          <IconWrapper isOpen={modalOpen} src={props.icon}/>
          <p>{props.title}</p>
          {
            modalOpen ? (
              <>
                <OfferModalText><MDXRenderer>{props.text}</MDXRenderer></OfferModalText>
                <MdClose onClick={closeModal}/>
              </>
            ) : null
          }

        </OfferPanelBoxContent>
      </OfferPanelBox>

    </>

  )
}

export default OfferBox