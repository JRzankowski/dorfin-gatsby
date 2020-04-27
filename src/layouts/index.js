import React from "react"
import Navigation from "../components/navigation/Navigation"
import GlobalStyles from "../styles/globalStyles"
import Footer from "../components/sections/Footer/Footer"

const MainLayout = ({ children }) => {

  return (
    <>
      <GlobalStyles/>
      <Navigation/>
      {children}
      <Footer/>
    </>
  )


}

export default MainLayout
