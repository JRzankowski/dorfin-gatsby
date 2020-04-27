import React from "react"
import styled from "styled-components"
import GoogleMap from "./GoogleMap"

const ContactWrapper = styled.section`
  text-align: center;
  background: white;
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  padding: 60px 0 40px;
  display: flex;
  flex-wrap: wrap;
  @media(min-width: 1000px){
    padding-top:250px;
  }
  
  
`
const ContactH2 = styled.h1`
width: 100%;
  font-size: ${props => props.details ? "18px" : "24px"};
  color: ${props => props.details ? "#494949" : "#283651"};
  text-transform: uppercase;
  position: relative;
  padding: 0 10px;
  @media(min-width:750px){
    margin-bottom: ${props => props.details ? null : "100px"};
  }
  &:${props => props.details ? null : "before"}{
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
const ContactP = styled.p`
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
  a{
    text-decoration: none;
    color:#004F92 ;
  }
`
const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 50px 0;
  text-align: left;
  @media(min-width:750px){
    width: 45%;
    margin: 0;
  }
`
const ContactFormLabel = styled.label`
  margin: 0 auto;
  font-family: Lato, serif;
  font-weight: 600;
  color: #444 ;
  
`
const ContactFormContentWrapper = styled.div`
  @media(min-width:750px){
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const ContactFormInput = styled.input`
  width: 250px;
  display: block;
  margin: 6px auto 25px;
  border: none;
  border-bottom: 2px solid #656565;
  padding: 0 10px 1px;
  outline: none;
  &:focus{
    border-color: #004F92;
    color: #393939
  }
  &.valid{
    border-color: green;
  }
  &.invalid{
    border-color: red;
  }
  
`
const ContactFormTextarea = styled.textarea`
  display: block;
  margin: 6px auto 25px;
  outline: none;
  width: 100%;
  height: 100px;
  padding: 5px;
  resize: none;
  border: 2px solid #656565;
  &:focus{
    border-color: #004F92;
    color: #393939
  }
  &.valid{
    border-color: green;
  }
  &.invalid{
    border-color: red;
  }
`
const ContactInfoWrapper = styled.div`
  @media(min-width:750px){
    width: 45%;
    margin: 0;
  }
`
const ContactInfoDetails = styled.div`

  p{
    width: 100%;
  }
 
  
`
const GoogleMapWrapper = styled.div`
  margin-top: 65px;
  width: 100%;
  height: 400px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  @media(min-width:750px){
    //width: 45%;
    //margin: 0 auto;
    //overflow: hidden;
  }

 
`


const Contact = () => {

  const handleInput = e => {
    let regex = null
    const input_regex = {
      name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,}))$/,
      phone: /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/
    }

    if (e.target.id === "name") {
      regex = input_regex.name
      if (regex.test(e.target.value)) {
        e.target.classList.remove("invalid")
        e.target.classList.add("valid")
      } else {
        e.target.classList.remove("valid")
        e.target.classList.add("invalid")
      }
    }
    if (e.target.id === "phone") {
      regex = input_regex.phone
      if (regex.test(e.target.value)) {
        e.target.classList.remove("invalid")
        e.target.classList.add("valid")
      } else {
        e.target.classList.remove("valid")
        e.target.classList.add("invalid")
      }
    }
    if (e.target.id === "email") {
      regex = input_regex.email
      if (regex.test(e.target.value)) {
        e.target.classList.remove("invalid")
        e.target.classList.add("valid")
      } else {
        e.target.classList.remove("valid")
        e.target.classList.add("invalid")
      }
    }
    if (e.target.id === "message") {
      if (e.target.value.length > 1) {
        e.target.classList.add("valid")
      }
    }
    if (e.target.value.length === 0) {
      e.target.classList.remove("valid", "invalid")
    }


  }


  return (
    <ContactWrapper name="contact">
      <ContactH2>Kontakt</ContactH2>
      <ContactFormContentWrapper>
        <ContactFormWrapper>
          <form>
            <ContactFormLabel htmlFor="name">
              Imię i nazwisko
              <ContactFormInput onInput={handleInput} name="name" id="name"/>
            </ContactFormLabel>
            <ContactFormLabel htmlFor="phone">
              Numer telefonu
              <ContactFormInput onInput={handleInput} name="phone" id="phone"/>
            </ContactFormLabel>
            <ContactFormLabel htmlFor="email">
              Adres email
              <ContactFormInput onInput={handleInput} name="email" id="email"/>
            </ContactFormLabel>
            <ContactFormLabel htmlFor="message">
              Wiadomość
              <ContactFormTextarea onInput={handleInput} name="message" id="message"/>
            </ContactFormLabel>
          </form>
        </ContactFormWrapper>
        <ContactInfoWrapper>
          <ContactInfoDetails>
            <ContactH2 details>Kancelaria Doradców Podatkowych
              Dorfin Przybyszewski Sp.k.</ContactH2>
            <ContactP>ul. Floriana 3
              <br/>
              96-100 Skierniewice</ContactP>
            <ContactP>
              NIP: 8361002007
              <br/>
              REGON: 750445030
              <br/>
              KRS: 0000460628
            </ContactP>
            <ContactP>
              Kancelaria czynna od poniedziałku do piątku w godzinach od 8:00 do 16:00.
              <br/>
              Istnieje możliwość spotkania w innych godzinach po uprzednim uzgodnieniu terminu.
              <br/>
              E-mail: <a type="email" href="biuro@dorfin.eu">biuro@dorfin.eu</a>
              <br/>
              Telefon: <a href="tel:+48 570 389 999">+48 570 389 999</a>
            </ContactP>
          </ContactInfoDetails>
        </ContactInfoWrapper>
        <GoogleMapWrapper>
          <GoogleMap/>
        </GoogleMapWrapper>
      </ContactFormContentWrapper>
    </ContactWrapper>

  )
}

export default Contact
