import React from "react"
import Navigation from "../components/Navigation/Navigation";
import GlobalStyles from "../styles/globalStyles";
import Footer from "../components/sections/Footer/Footer"

const MainLayout = ({children}) => (
    <>
        <GlobalStyles />
        <Navigation />
        {children}
        <Footer/>
    </>
);

export default MainLayout;
